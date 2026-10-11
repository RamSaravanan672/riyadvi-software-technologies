import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Core() {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.25, 2]} />

      <meshStandardMaterial
        color="#D4AF37"
        metalness={0.8}
        roughness={0.25}
        wireframe
      />
    </mesh>
  );
}

function InnerCore() {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y = -state.clock.elapsedTime * 0.35;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[0.75, 1]} />

      <meshStandardMaterial
        color="#ffffff"
        metalness={0.7}
        roughness={0.2}
        wireframe
      />
    </mesh>
  );
}

function Rings() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.3;

    groupRef.current.rotation.y =
      state.clock.elapsedTime * 0.2;
  });

  return (
    <group ref={groupRef}>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.7, 0.015, 16, 100]} />

        <meshBasicMaterial color="#D4AF37" />
      </mesh>

      <mesh rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[2, 0.01, 16, 100]} />

        <meshBasicMaterial color="#ffffff" />
      </mesh>

      <mesh rotation={[Math.PI / 3, 0, Math.PI / 4]}>
        <torusGeometry args={[2.25, 0.008, 16, 100]} />

        <meshBasicMaterial color="#D4AF37" />
      </mesh>

    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.2} />

      <pointLight
        position={[3, 3, 3]}
        intensity={25}
        color="#D4AF37"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={15}
        color="#ffffff"
      />

      <Float
        speed={2}
        rotationIntensity={0.4}
        floatIntensity={0.5}
      >
        <Core />
        <InnerCore />
        <Rings />
      </Float>

      <Sparkles
        count={80}
        scale={[6, 6, 6]}
        size={1.5}
        speed={0.4}
        color="#D4AF37"
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6],
        fov: 45,
      }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={["transparent"]} />

      <Scene />
    </Canvas>
  );
}

export default HeroScene;