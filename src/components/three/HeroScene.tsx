"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import { Airplane } from "./Airplane";
import { Clouds } from "./Clouds";
import { Route } from "./Route";

type Props = {
  progress: number;
};

export function HeroScene({ progress }: Props) {
  const [mounted, setMounted] = useState(false);

  // Defer Canvas mount until after first paint so the page text shows instantly
  useEffect(() => {
    const hasIdle = typeof requestIdleCallback !== "undefined";
    let id: number;
    if (hasIdle) {
      id = requestIdleCallback(() => setMounted(true), { timeout: 800 });
    } else {
      id = window.setTimeout(() => setMounted(true), 100);
    }
    return () => {
      if (hasIdle) cancelIdleCallback(id);
      else clearTimeout(id);
    };
  }, []);

  const assembly = clamp01(progress / 0.55);
  const routeProgress = clamp01((progress - 0.55) / 0.4);
  const drift = clamp01((progress - 0.5) / 0.5);

  return (
    <>
      {!mounted && <CanvasSkeleton />}
      {mounted && (
        <Canvas
          shadows={false}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            // Reduce memory usage on mobile
            precision: "mediump",
          }}
          camera={{ position: [0, 0.6, 8.5], fov: 42 }}
        >
          <color attach="background" args={["#06090f"]} />
          <fog attach="fog" args={["#06090f", 12, 26]} />

          <ambientLight intensity={0.45} />
          <directionalLight
            position={[5, 6, 4]}
            intensity={1.6}
            color="#fff3dd"
          />
          <directionalLight position={[-6, 2, -4]} intensity={0.5} color="#7aa6ff" />
          <pointLight position={[0, -3, 3]} intensity={0.6} color="#c8a363" />

          <Suspense fallback={<PlaceholderPlane />}>
            <Environment preset="sunset" />
            <Clouds drift={drift} />
            <Route progress={routeProgress} />
            <Airplane assembly={assembly} drift={drift} />
            <Preload all />
          </Suspense>
        </Canvas>
      )}
    </>
  );
}

// Simple spinning ring shown while 3D model is downloading
function PlaceholderPlane() {
  return (
    <mesh>
      <torusGeometry args={[1.2, 0.04, 16, 60]} />
      <meshBasicMaterial color="#c8a363" transparent opacity={0.5} />
    </mesh>
  );
}

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

// CSS skeleton shown before Canvas mounts
function CanvasSkeleton() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: "#06090f" }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          border: "2px solid rgba(200,163,99,0.2)",
          borderTopColor: "#c8a363",
          animation: "spin 1s linear infinite",
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
