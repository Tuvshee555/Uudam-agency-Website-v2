"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import * as THREE from "three";

type Props = {
  /** 0 = fully exploded / scattered, 1 = fully assembled */
  assembly: number;
  /** scroll progress used for subtle drift after assembly (0..1) */
  drift: number;
};

type PartState = {
  mesh: THREE.Mesh;
  rest: THREE.Vector3;
  scatter: THREE.Vector3;
  restRot: THREE.Euler;
  scatterRot: THREE.Euler;
  spin: number;
};

const TEXTURE_BASE = "/models";

export function Airplane({ assembly, drift }: Props) {
  const fbx = useLoader(FBXLoader, "/models/airplane.fbx");
  // Compressed JPEGs — 189 KB total vs 11 MB original PNGs
  const albedo = useLoader(THREE.TextureLoader, `${TEXTURE_BASE}/albedo.jpg`);
  const normalMap = useLoader(THREE.TextureLoader, `${TEXTURE_BASE}/normal.jpg`);
  const roughnessMap = useLoader(THREE.TextureLoader, `${TEXTURE_BASE}/roughness.jpg`);
  const metallicMap = useLoader(THREE.TextureLoader, `${TEXTURE_BASE}/metallic.jpg`);

  const groupRef = useRef<THREE.Group>(null);
  const stateRef = useRef<PartState[]>([]);

  const cloned = useMemo(() => {
    const g = fbx.clone(true);

    g.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) {
        const m = o as THREE.Mesh;
        m.castShadow = true;
        m.receiveShadow = true;
        albedo.colorSpace = THREE.SRGBColorSpace;
        const mat = new THREE.MeshStandardMaterial({
          map: albedo,
          normalMap,
          roughnessMap,
          metalnessMap: metallicMap,
          metalness: 1,
          roughness: 1,
          envMapIntensity: 1.0,
        });
        m.material = mat;
      }
    });

    const box = new THREE.Box3().setFromObject(g);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());
    const target = 4.5;
    const scale = target / size;
    g.scale.setScalar(scale);
    g.position.sub(center.multiplyScalar(scale));

    return g;
  }, [fbx, albedo, normalMap, roughnessMap, metallicMap]);

  useEffect(() => {
    const parts: PartState[] = [];
    cloned.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) {
        const mesh = o as THREE.Mesh;
        mesh.updateMatrixWorld(true);

        const rest = mesh.position.clone();
        const restRot = mesh.rotation.clone();

        const dirSeed = (mesh.id * 9301 + 49297) % 233280;
        const r1 = (dirSeed / 233280) * 2 - 1;
        const r2 = (((dirSeed * 7) % 233280) / 233280) * 2 - 1;
        const r3 = (((dirSeed * 13) % 233280) / 233280) * 2 - 1;

        const radius = 6 + Math.abs(r1) * 4;
        const scatter = new THREE.Vector3(
          r1 * radius,
          r2 * (radius * 0.55),
          r3 * radius * 0.7
        );

        const scatterRot = new THREE.Euler(
          r1 * Math.PI,
          r2 * Math.PI * 0.7,
          r3 * Math.PI
        );

        parts.push({
          mesh,
          rest,
          scatter,
          restRot,
          scatterRot,
          spin: r1 * 0.6,
        });
      }
    });
    stateRef.current = parts;
  }, [cloned]);

  useFrame((_, dt) => {
    const a = THREE.MathUtils.clamp(assembly, 0, 1);
    const eased = easeInOutCubic(a);

    for (const p of stateRef.current) {
      p.mesh.position.lerpVectors(p.scatter, p.rest, eased);
      p.mesh.rotation.x = THREE.MathUtils.lerp(p.scatterRot.x, p.restRot.x, eased);
      p.mesh.rotation.y = THREE.MathUtils.lerp(p.scatterRot.y, p.restRot.y, eased);
      p.mesh.rotation.z = THREE.MathUtils.lerp(p.scatterRot.z, p.restRot.z, eased);

      if (a < 1) {
        p.mesh.rotation.y += p.spin * dt * (1 - eased);
      }
    }

    if (groupRef.current) {
      const t = performance.now() * 0.0005;
      const yaw = drift * 0.6 - 0.05;
      const pitch = Math.sin(t) * 0.05 + drift * 0.15;
      const roll = Math.cos(t * 0.8) * 0.04 + drift * 0.2;
      groupRef.current.rotation.set(pitch - 0.05, yaw, roll);
      groupRef.current.position.y = Math.sin(t * 1.2) * 0.08 + drift * 0.4;
      groupRef.current.position.x = drift * 1.2;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={cloned} />
    </group>
  );
}

function easeInOutCubic(x: number) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}
