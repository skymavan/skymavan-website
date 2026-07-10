"use client";

import { Line } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

import type { HeroSceneProps } from "@/content/site";

const nodePositions: [number, number, number][] = [
  [-2.4, 1.55, 0.05],
  [-2.55, -1.25, -0.15],
  [2.2, 1.65, -0.1],
  [2.65, -0.75, 0.2],
  [0.6, -2.15, -0.2],
];

export default function LivingAgentNetwork(props: HeroSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7.4], fov: 42 }}
      frameloop={props.visibility && !props.reducedMotion ? "always" : "demand"}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      <AgentNetwork {...props} />
    </Canvas>
  );
}

function AgentNetwork({ theme, reducedMotion }: HeroSceneProps) {
  const group = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const dark = theme === "dark";
  const moss = dark ? "#65a15b" : "#315c35";
  const sky = dark ? "#52afd2" : "#2c6c88";
  const line = dark ? "#709b7a" : "#71907a";
  const core = dark ? "#a2cc8f" : "#739c65";

  useFrame(({ clock }) => {
    if (!group.current || reducedMotion) return;
    const elapsed = clock.getElapsedTime();
    group.current.rotation.y +=
      (pointer.current.x * 0.13 - group.current.rotation.y) * 0.035;
    group.current.rotation.x +=
      (-pointer.current.y * 0.08 - group.current.rotation.x) * 0.035;
    group.current.rotation.z = Math.sin(elapsed * 0.22) * 0.018;
  });

  return (
    <>
      <ambientLight intensity={dark ? 0.7 : 1.6} />
      <directionalLight position={[4, 5, 6]} intensity={dark ? 2.4 : 2.8} />
      <pointLight position={[-4, -2, 4]} color={sky} intensity={3.2} />
      <group
        ref={group}
        position={[0.25, 0, 0]}
        onPointerMove={(event) => {
          pointer.current.x = event.pointer.x;
          pointer.current.y = event.pointer.y;
        }}
        onPointerLeave={() => {
          pointer.current.x = 0;
          pointer.current.y = 0;
        }}
      >
        {nodePositions.map((position, index) => (
          <Line
            key={`line-${index}`}
            points={[[0, 0, 0], position]}
            color={line}
            transparent
            opacity={dark ? 0.55 : 0.38}
            lineWidth={0.8}
          />
        ))}

        <mesh>
          <icosahedronGeometry args={[1.18, 2]} />
          <meshPhysicalMaterial
            color={core}
            roughness={0.34}
            metalness={0.08}
            clearcoat={0.35}
            emissive={moss}
            emissiveIntensity={dark ? 0.24 : 0.04}
          />
        </mesh>
        <mesh rotation={[1.18, 0.25, 0.18]}>
          <torusGeometry args={[1.62, 0.018, 8, 80]} />
          <meshBasicMaterial color={sky} transparent opacity={0.78} />
        </mesh>
        <mesh rotation={[0.28, 1.05, -0.4]}>
          <torusGeometry args={[1.88, 0.012, 8, 80]} />
          <meshBasicMaterial color={moss} transparent opacity={0.5} />
        </mesh>

        {nodePositions.map((position, index) => (
          <group key={`node-${index}`} position={position}>
            <mesh>
              <sphereGeometry args={[index === 3 ? 0.36 : 0.25, 18, 18]} />
              <meshPhysicalMaterial
                color={index === 3 ? sky : moss}
                roughness={0.25}
                metalness={0.06}
                emissive={index === 3 ? sky : moss}
                emissiveIntensity={dark ? 0.38 : 0.08}
              />
            </mesh>
            <mesh>
              <torusGeometry args={[index === 3 ? 0.5 : 0.36, 0.013, 8, 36]} />
              <meshBasicMaterial color={index === 3 ? sky : line} transparent opacity={0.62} />
            </mesh>
          </group>
        ))}
      </group>
    </>
  );
}
