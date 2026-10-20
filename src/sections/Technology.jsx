
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Text,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import { ArrowUpRight, Network, MousePointer2 } from "lucide-react";

const technologies = [
  { name: "React", position: [-2.5, 1.35, 0], category: "Frontend" },
  { name: "Next.js", position: [2.5, 1.35, 0], category: "Frontend" },
  { name: "Node.js", position: [-2.8, -0.4, 0], category: "Backend" },
  { name: "MongoDB", position: [2.8, -0.4, 0], category: "Database" },
  { name: "MySQL", position: [-1.8, -1.8, 0], category: "Database" },
  { name: "JavaScript", position: [1.8, -1.8, 0], category: "Language" },
  { name: "Three.js", position: [-0.65, 2.25, 0], category: "3D Graphics" },
  { name: "R3F", position: [0.65, -2.35, 0], category: "3D Graphics" },
  { name: "WordPress", position: [0, 0, 0.9], category: "CMS" },
];

const GOLD = "#D4AF37";

function TechnologyNode({ technology, index, selected, onSelect }) {
  const groupRef = useRef(null);
  const dotRef = useRef(null);
  const isSelected = selected === technology.name;

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const t = state.clock.elapsedTime;
    const pointer = state.pointer;

    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      technology.position[1] + Math.sin(t * 0.7 + index) * 0.09,
      3,
      delta
    );

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      pointer.x * 0.1,
      2,
      delta
    );

    if (dotRef.current) {
      const targetScale = isSelected ? 1.8 : 1;
      dotRef.current.scale.setScalar(
        THREE.MathUtils.damp(
          dotRef.current.scale.x,
          targetScale,
          7,
          delta
        )
      );
    }
  });

  return (
    <group
      ref={groupRef}
      position={technology.position}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(isSelected ? null : technology.name);
      }}
      onPointerOver={(event) => {
        event.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "auto";
      }}
    >
      <mesh ref={dotRef}>
        <sphereGeometry args={[isSelected ? 0.105 : 0.075, 20, 20]} />
        <meshStandardMaterial
          color={isSelected ? "#F8E6A0" : GOLD}
          emissive={GOLD}
          emissiveIntensity={isSelected ? 3 : 1.5}
          metalness={0.75}
          roughness={0.2}
        />
      </mesh>

      <mesh position={[0, 0, -0.025]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial
          color={GOLD}
          transparent
          opacity={isSelected ? 0.16 : 0.06}
        />
      </mesh>

      <Text
        position={[0, 0.25, 0.02]}
        fontSize={0.17}
        color={isSelected ? "#F8E6A0" : "#FFFFFF"}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.006}
        outlineColor="#050505"
        maxWidth={1.8}
      >
        {technology.name}
      </Text>

      {isSelected && (
        <Text
          position={[0, -0.22, 0.03]}
          fontSize={0.085}
          color={GOLD}
          anchorX="center"
          anchorY="middle"
        >
          {technology.category}
        </Text>
      )}
    </group>
  );
}

function ConnectionLines({ selected }) {
  const linePositions = useRef(null);

  const lines = technologies.flatMap((technology, index) => {
    if (index === technologies.length - 1) return [];

    const next = technologies[index + 1];

    return [
      technology.position[0],
      technology.position[1],
      technology.position[2],
      next.position[0],
      next.position[1],
      next.position[2],
    ];
  });

  return (
    <lineSegments ref={linePositions}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={lines.length / 3}
          array={new Float32Array(lines)}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color={selected ? "#D4AF37" : "#8C7025"}
        transparent
        opacity={0.38}
      />
    </lineSegments>
  );
}

function EcosystemScene({ selected, onSelect }) {
  const groupRef = useRef(null);
  const coreRef = useRef(null);
  const ringRef = useRef(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        state.pointer.x * 0.07,
        2,
        delta
      );

      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -state.pointer.y * 0.05,
        2,
        delta
      );
    }

    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.12;
      coreRef.current.rotation.y += delta * 0.2;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 3, 4]} intensity={20} color={GOLD} />
      <pointLight position={[-3, -2, 3]} intensity={12} color="#FFFFFF" />

      <group ref={groupRef}>
        <ConnectionLines selected={selected} />

        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.2}>
          <group>
            <mesh ref={coreRef}>
              <icosahedronGeometry args={[0.62, 2]} />
              <meshStandardMaterial
                color={GOLD}
                emissive={GOLD}
                emissiveIntensity={0.5}
                metalness={0.85}
                roughness={0.22}
                wireframe
              />
            </mesh>

            <mesh>
              <sphereGeometry args={[0.16, 24, 24]} />
              <meshBasicMaterial color="#F8E6A0" />
            </mesh>

            <Text
              position={[0, -0.95, 0]}
              fontSize={0.16}
              color={GOLD}
              anchorX="center"
              anchorY="middle"
            >
              RIYADVI
            </Text>
          </group>
        </Float>

        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.25, 0.008, 10, 120]} />
          <meshBasicMaterial color={GOLD} transparent opacity={0.55} />
        </mesh>

        {technologies.map((technology, index) => (
          <TechnologyNode
            key={technology.name}
            technology={technology}
            index={index}
            selected={selected}
            onSelect={onSelect}
          />
        ))}
      </group>

      <Sparkles
        count={70}
        scale={[7, 6, 5]}
        size={1.3}
        speed={0.25}
        color={GOLD}
        opacity={0.65}
      />
    </>
  );
}

function Technology() {
  const [selected, setSelected] = useState(null);

  const selectedTechnology = technologies.find(
    (technology) => technology.name === selected
  );

  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-15" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-7 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.05] px-4 py-2">
              <Network size={13} className="text-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
                Technology ecosystem
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Connected by technology.{" "}
              <span className="gold-text">Built for possibility.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-8 text-white/50 lg:ml-auto sm:text-base">
            Explore the technologies in our digital ecosystem. Select a node
            to discover its role in the network, and move your cursor to
            interact with the 3D environment.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.035] to-transparent">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] px-5 py-4 sm:px-7">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.07] text-[#D4AF37]">
                <Network size={15} />
              </span>
              <div>
                <p className="text-xs font-medium text-white/80">
                  Interactive technology network
                </p>
                <p className="mt-1 text-[10px] text-white/35">
                  {technologies.length} technology nodes
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-white/40">
              <MousePointer2 size={13} className="text-[#D4AF37]" />
              Select a node to explore
            </div>
          </div>

          <div className="relative h-[420px] w-full sm:h-[540px] lg:h-[620px]">
            <Canvas
              camera={{ position: [0, 0, 8], fov: 45 }}
              dpr={[1, 1.5]}
              gl={{ alpha: true, antialias: true }}
              onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
            >
              <EcosystemScene
                selected={selected}
                onSelect={setSelected}
              />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
              />
            </Canvas>

            <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
              <div className="max-w-[70%]">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  {selectedTechnology ? "Selected technology" : "The ecosystem"}
                </p>
                <p className="mt-2 text-lg font-medium text-white sm:text-xl">
                  {selectedTechnology?.name || "One connected network"}
                </p>
                <p className="mt-1 text-xs text-white/45">
                  {selectedTechnology
                    ? selectedTechnology.category
                    : "Frontend · Backend · Data · Experience"}
                </p>
              </div>

              {selectedTechnology && (
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-3 py-2 text-[10px] text-[#F0D982] transition hover:bg-[#D4AF37]/10"
                >
                  Clear selection
                  <ArrowUpRight size={12} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[10px] text-white/30">
          <span>React Three Fiber · Three.js · Interactive 3D</span>
          <span>Move your pointer over the scene</span>
        </div>
      </div>
    </section>
  );
}

export default Technology;
