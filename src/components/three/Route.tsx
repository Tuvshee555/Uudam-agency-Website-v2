"use client";

import { useMemo } from "react";
import * as THREE from "three";

type Props = { progress: number };

export function Route({ progress }: Props) {
  const { points, pinPositions } = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-7, -1.6, -2),
      new THREE.Vector3(-3.5, -0.8, 0),
      new THREE.Vector3(0, -0.3, 1),
      new THREE.Vector3(3.5, -0.8, 0),
      new THREE.Vector3(7, -1.6, -2),
    ]);
    const pts = curve.getPoints(120);
    const pins = [
      curve.getPointAt(0.05),
      curve.getPointAt(0.35),
      curve.getPointAt(0.65),
      curve.getPointAt(0.95),
    ];
    return { points: pts, pinPositions: pins };
  }, []);

  const visiblePoints = useMemo(() => {
    const total = points.length;
    const cut = Math.floor(total * THREE.MathUtils.clamp(progress, 0, 1));
    return points.slice(0, Math.max(2, cut));
  }, [points, progress]);

  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints(visiblePoints);
    return g;
  }, [visiblePoints]);

  return (
    <group>
      <line>
        <primitive object={geom} attach="geometry" />
        <lineBasicMaterial
          color="#c8a363"
          transparent
          opacity={0.55 * progress}
        />
      </line>

      {pinPositions.map((p, i) => {
        const visible = progress > i * 0.22 + 0.08;
        return (
          <group key={i} position={p}>
            <mesh>
              <sphereGeometry args={[0.08, 18, 18]} />
              <meshStandardMaterial
                color="#c8a363"
                emissive="#c8a363"
                emissiveIntensity={visible ? 1.4 : 0}
                transparent
                opacity={visible ? 1 : 0.05}
              />
            </mesh>
            <mesh>
              <ringGeometry args={[0.18, 0.22, 32]} />
              <meshBasicMaterial
                color="#c8a363"
                transparent
                opacity={visible ? 0.5 : 0}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
