
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Sparkles,
  OrbitControls,
  MeshDistortMaterial,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const GOLD = "#D4AF37";
const LIGHT_GOLD = "#F8E6A0";

function Core() {
  const groupRef = useRef(null);
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const shellRef = useRef(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const pointer = state.pointer;

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        pointer.x * 0.3,
        2,
        delta
      );

      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -pointer.y * 0.25,
        2,
        delta
      );
    }

    if (outerRef.current) {
      outerRef.current.rotation.x += delta * 0.12;
      outerRef.current.rotation.y += delta * 0.2;
    }

    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.3;
      innerRef.current.rotation.z += delta * 0.12;
    }

    if (shellRef.current) {
      const pulse = 1 + Math.sin(t * 1.5) * 0.025;
      shellRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer metallic wireframe */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.25, 2]} />
        <meshStandardMaterial
          color={GOLD}
          emissive={GOLD}
          emissiveIntensity={0.45}
          metalness={0.9}
          roughness={0.22}
          wireframe
        />
      </mesh>

      {/* Inner luminous shell */}
      <mesh ref={shellRef}>
        <icosahedronGeometry args={[0.86, 2]} />
        <meshPhysicalMaterial
          color="#17130A"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.8}
          clearcoat={1}
          clearcoatRoughness={0.15}
        />
      </mesh>

      {/* Inner geometric structure */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.62, 2]} />
        <meshStandardMaterial
          color={LIGHT_GOLD}
          emissive={GOLD}
          emissiveIntensity={0.8}
          metalness={0.75}
          roughness={0.2}
          wireframe
        />
      </mesh>

      {/* Central energy point */}
      <mesh>
        <sphereGeometry args={[0.19, 32, 32]} />
        <MeshDistortMaterial
          color={LIGHT_GOLD}
          emissive={GOLD}
          emissiveIntensity={1.4}
          metalness={0.5}
          roughness={0.15}
          distort={0.25}
          speed={2}
        />
      </mesh>

      {/* Small geometric details */}
      {Array.from({ length: 8 }, (_, index) => {
        const angle = (index / 8) * Math.PI * 2;
        const radius = 1.48;

        return (
          <mesh
            key={index}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * radius,
              Math.sin(angle * 2) * 0.15,
            ]}
          >
            <sphereGeometry args={[0.035, 12, 12]} />
            <meshBasicMaterial color={LIGHT_GOLD} />
          </mesh>
        );
      })}
    </group>
  );
}

function OrbitalRings() {
  const groupRef = useRef(null);
  const ringOneRef = useRef(null);
  const ringTwoRef = useRef(null);
  const ringThreeRef = useRef(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }

    if (ringOneRef.current) {
      ringOneRef.current.rotation.z = Math.sin(t * 0.35) * 0.12;
    }

    if (ringTwoRef.current) {
      ringTwoRef.current.rotation.x = Math.cos(t * 0.3) * 0.12;
    }

    if (ringThreeRef.current) {
      ringThreeRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={ringOneRef} rotation={[Math.PI / 2.2, 0.15, 0]}>
        <torusGeometry args={[1.7, 0.012, 12, 160]} />
        <meshBasicMaterial
          color={GOLD}
          transparent
          opacity={0.85}
        />
      </mesh>

      <mesh ref={ringTwoRef} rotation={[0.5, Math.PI / 3, 0.3]}>
        <torusGeometry args={[1.95, 0.009, 10, 160]} />
        <meshBasicMaterial
          color="#FFFFFF"
          transparent
          opacity={0.45}
        />
      </mesh>

      <mesh ref={ringThreeRef} rotation={[1.1, 0.2, Math.PI / 4]}>
        <torusGeometry args={[2.2, 0.008, 10, 160]} />
        <meshBasicMaterial
          color={LIGHT_GOLD}
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Orbiting metallic nodes */}
      <OrbitingNode radius={1.7} speed={0.7} phase={0} />
      <OrbitingNode radius={1.95} speed={-0.48} phase={1.7} />
      <OrbitingNode radius={2.2} speed={0.35} phase={3.2} />
    </group>
  );
}

function OrbitingNode({ radius, speed, phase }) {
  const nodeRef = useRef(null);

  useFrame((state) => {
    if (!nodeRef.current) return;

    const t = state.clock.elapsedTime * speed + phase;

    nodeRef.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t) * radius * 0.48,
      Math.sin(t) * radius * 0.72
    );
  });

  return (
    <mesh ref={nodeRef}>
      <sphereGeometry args={[0.055, 16, 16]} />
      <meshStandardMaterial
        color={LIGHT_GOLD}
        emissive={GOLD}
        emissiveIntensity={1.6}
        metalness={0.6}
        roughness={0.2}
      />
    </mesh>
  );
}

function Scene() {
  const sceneRef = useRef(null);

  useFrame((state, delta) => {
    if (!sceneRef.current) return;

    const pointer = state.pointer;

    sceneRef.current.rotation.y = THREE.MathUtils.damp(
      sceneRef.current.rotation.y,
      pointer.x * 0.08,
      2,
      delta
    );

    sceneRef.current.position.y = Math.sin(
      state.clock.elapsedTime * 0.55
    ) * 0.04;
  });

  return (
    <>
      <ambientLight intensity={0.65} />

      <pointLight
        position={[3, 3, 4]}
        intensity={30}
        color={GOLD}
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={18}
        color="#FFFFFF"
      />

      <pointLight
        position={[0, 0, -3]}
        intensity={12}
        color={LIGHT_GOLD}
      />

      <group ref={sceneRef}>
        <Float
          speed={1.25}
          rotationIntensity={0.12}
          floatIntensity={0.22}
        >
          <OrbitalRings />
          <Core />
        </Float>
      </group>

      <Sparkles
        count={100}
        scale={[6, 6, 6]}
        size={1.5}
        speed={0.3}
        color={GOLD}
        opacity={0.75}
      />

      <Sparkles
        count={35}
        scale={[4.5, 4.5, 4.5]}
        size={2.5}
        speed={0.18}
        color="#FFFFFF"
        opacity={0.4}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.25}
      />
    </>
  );
}

function HeroScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 6.4],
          fov: 42,
        }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default HeroScene;
