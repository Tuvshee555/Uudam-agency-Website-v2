"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Airplane } from "./Airplane";
import { Clouds } from "./Clouds";
import { Route } from "./Route";

type Props = {
  /** 0 → 1 across the entire hero scroll range */
  progress: number;
};

export function HeroScene({ progress }: Props) {
  const assembly = clamp01(progress / 0.55);
  const routeProgress = clamp01((progress - 0.55) / 0.4);
  const drift = clamp01((progress - 0.5) / 0.5);

  return (
    <Canvas
      shadows={false}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0.6, 8.5], fov: 42 }}
    >
      <color attach="background" args={["#06090f"]} />
      <fog attach="fog" args={["#06090f", 12, 26]} />

      <ambientLight intensity={0.45} />
      <directionalLight
        position={[5, 6, 4]}
        intensity={1.6}
        color="#fff3dd"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-6, 2, -4]} intensity={0.5} color="#7aa6ff" />
      <pointLight position={[0, -3, 3]} intensity={0.6} color="#c8a363" />

      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <Clouds drift={drift} />
        <Route progress={routeProgress} />
        <Airplane assembly={assembly} drift={drift} />
      </Suspense>
    </Canvas>
  );
}

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}
