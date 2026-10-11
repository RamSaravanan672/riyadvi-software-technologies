import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, OrbitControls } from "@react-three/drei";

const technologies = [
  { name: "React", position: [-2.5, 1.5, 0] },
  { name: "Next.js", position: [2.5, 1.5, 0] },
  { name: "Node.js", position: [-3, -0.5, 0] },
  { name: "MongoDB", position: [3, -0.5, 0] },
  { name: "MySQL", position: [-2, -2, 0] },
  { name: "JavaScript", position: [2, -2, 0] },
  { name: "Three.js", position: [-0.5, 2.7, 0] },
  { name: "R3F", position: [0.5, -2.8, 0] },
  { name: "WordPress", position: [0, 0, 1] },
];

function TechnologyNode({ name, position, index }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.elapsedTime;

    groupRef.current.position.y =
      position[1] + Math.sin(time * 0.8 + index) * 0.12;

    groupRef.current.rotation.y =
      Math.sin(time * 0.5 + index) * 0.15;
  });

  return (
    <group ref={groupRef} position={position}>

      {/* Node */}
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />

        <meshStandardMaterial
          color="#D4AF37"
          emissive="#D4AF37"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Technology label */}
      <Text
        position={[0, 0.2, 0]}
        fontSize={0.18}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>

    </group>
  );
}

function EcosystemScene() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      state.clock.elapsedTime * 0.08;

    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });

  return (
    <group ref={groupRef}>

      {/* Center Core */}
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <mesh>

          <icosahedronGeometry args={[0.7, 2]} />

          <meshStandardMaterial
            color="#D4AF37"
            metalness={0.8}
            roughness={0.2}
            wireframe
          />

        </mesh>

        <Text
          position={[0, 0, 0.75]}
          fontSize={0.22}
          color="#D4AF37"
          anchorX="center"
          anchorY="middle"
        >
          RIYADVI
        </Text>

      </Float>


      {/* Orbit Ring 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>

        <torusGeometry args={[2.2, 0.008, 16, 100]} />

        <meshBasicMaterial color="#D4AF37" />

      </mesh>


      {/* Orbit Ring 2 */}
      <mesh rotation={[Math.PI / 3, 0, Math.PI / 5]}>

        <torusGeometry args={[3, 0.006, 16, 100]} />

        <meshBasicMaterial color="#ffffff" />

      </mesh>


      {/* Technology Nodes */}
      {technologies.map((technology, index) => (
        <TechnologyNode
          key={technology.name}
          name={technology.name}
          position={technology.position}
          index={index}
        />
      ))}

    </group>
  );
}

function TechnologyScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 45,
      }}
      dpr={[1, 1.5]}
    >

      <ambientLight intensity={1.2} />

      <pointLight
        position={[3, 3, 4]}
        intensity={20}
        color="#D4AF37"
      />

      <pointLight
        position={[-3, -2, 3]}
        intensity={10}
        color="#ffffff"
      />

      <EcosystemScene />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
      />

    </Canvas>
  );
}


function Technology() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-black px-6 py-32 lg:px-10"
    >

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[160px]" />


      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-[#D4AF37]">
            Technology Ecosystem
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">

            Powered By{" "}

            <span className="text-[#D4AF37]">
              Modern Technology
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45">
            We combine modern technologies, scalable architecture and
            innovative digital experiences to build solutions that help
            businesses move forward.
          </p>

        </div>


        {/* 3D Ecosystem */}
        <div className="relative mx-auto h-[600px] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.015]">

          <TechnologyScene />

          {/* Center label */}
          <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-center">

            <p className="text-[10px] uppercase tracking-[0.4em] text-white/25">
              Interactive Technology Network
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Technology;