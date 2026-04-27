"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = { count?: number; drift: number };

export function Clouds({ count = 18, drift }: Props) {
  const group = useRef<THREE.Group>(null);

  const cloudData = useMemo(() => {
    const arr: { pos: THREE.Vector3; scale: number; speed: number }[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + Math.random();
      const radius = 7 + Math.random() * 6;
      arr.push({
        pos: new THREE.Vector3(
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 4,
          Math.sin(angle) * radius - 4
        ),
        scale: 1.5 + Math.random() * 2.4,
        speed: 0.04 + Math.random() * 0.06,
      });
    }
    return arr;
  }, [count]);

  useFrame((_, dt) => {
    if (!group.current) return;
    group.current.children.forEach((c, i) => {
      const d = cloudData[i];
      c.position.x -= d.speed * dt * (1 + drift * 1.5);
      if (c.position.x < -16) c.position.x = 16;
      c.rotation.z += dt * 0.02;
    });
  });

  return (
    <group ref={group}>
      {cloudData.map((d, i) => (
        <mesh key={i} position={d.pos} scale={d.scale}>
          <sphereGeometry args={[1, 14, 14]} />
          <meshStandardMaterial
            color="#f5f1ea"
            transparent
            opacity={0.18}
            roughness={1}
            metalness={0}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
