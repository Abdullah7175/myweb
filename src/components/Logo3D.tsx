"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { siteConfig } from "@/data/portfolio";

function LogoCore() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.35;
      outerRef.current.rotation.y = t * 0.55;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.45;
      innerRef.current.rotation.z = t * 0.3;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2;
      ringRef.current.rotation.z = t * 0.9;
    }
  });

  return (
    <>
      <ambientLight intensity={0.45} />
      <pointLight position={[2, 2, 3]} intensity={1.4} color="#22d3ee" />
      <pointLight position={[-2, -1, 2]} intensity={0.7} color="#a855f7" />
      <mesh ref={outerRef}>
        <octahedronGeometry args={[0.72, 0]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.85} />
      </mesh>
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.38, 0]} />
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.65} />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[0.88, 0.018, 8, 48]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.75} />
      </mesh>
    </>
  );
}

interface Logo3DProps {
  size?: number;
}

export default function Logo3D({ size = 44 }: Logo3DProps) {
  return (
    <div
      className="logo-3d relative shrink-0 rounded-lg"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div className="absolute inset-0 rounded-lg bg-cyan-500/10 shadow-[0_0_20px_rgba(34,211,238,0.35),inset_0_0_12px_rgba(34,211,238,0.08)]" />
      <div className="absolute inset-0 rounded-lg border border-cyan-400/40" />
      <Canvas
        camera={{ position: [0, 0, 2.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <LogoCore />
      </Canvas>
      <span
        className="pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-[11px] font-bold tracking-tighter text-cyan-100"
        style={{ textShadow: "0 0 10px #22d3ee, 0 0 20px rgba(34,211,238,0.5)" }}
      >
        {siteConfig.initials}
      </span>
    </div>
  );
}
