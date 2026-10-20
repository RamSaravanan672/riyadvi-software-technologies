import { useLayoutEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Sparkles,
  MeshDistortMaterial,
} from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Sparkles as SparklesIcon,
  Layers3,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import portfolio from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const GOLD = "#D4AF37";

const projectImages = [
  "/images/portfolio/riyadhvi-image-1.jpg",
  "/images/portfolio/riyadhvi-image-2.jpg",
  "/images/portfolio/riyadhvi-image-3.avif",
  "/images/portfolio/riyadhvi-image-4.avif",
];
function PortfolioCore() {
  const coreRef = useRef(null);
  const innerRef = useRef(null);
  const ringsRef = useRef(null);
  const orbitRef = useRef(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const pointer = state.pointer;

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.22;
      coreRef.current.rotation.x = THREE.MathUtils.damp(
        coreRef.current.rotation.x,
        pointer.y * 0.18,
        2,
        delta
      );
      coreRef.current.rotation.z = Math.sin(t * 0.4) * 0.08;
    }

    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.18;
      innerRef.current.rotation.y += delta * 0.3;
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.y += delta * 0.12;
      ringsRef.current.rotation.x = Math.sin(t * 0.3) * 0.15;
    }

    if (orbitRef.current) {
      orbitRef.current.rotation.z -= delta * 0.16;
    }
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.05, 2]} />
        <meshStandardMaterial
          color={GOLD}
          emissive={GOLD}
          emissiveIntensity={0.55}
          metalness={0.9}
          roughness={0.2}
          wireframe
        />
      </mesh>

      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.65, 2]} />
        <meshStandardMaterial
          color="#F8E6A0"
          emissive={GOLD}
          emissiveIntensity={0.65}
          metalness={0.85}
          roughness={0.2}
          wireframe
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.38, 40, 40]} />
        <MeshDistortMaterial
          color="#B58B28"
          emissive={GOLD}
          emissiveIntensity={0.4}
          metalness={0.65}
          roughness={0.17}
          distort={0.22}
          speed={1.5}
        />
      </mesh>

      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 2, 0.3, 0]}>
          <torusGeometry args={[1.45, 0.012, 12, 120]} />
          <meshBasicMaterial color={GOLD} />
        </mesh>

        <mesh rotation={[0.6, Math.PI / 3, 0.5]}>
          <torusGeometry args={[1.7, 0.009, 12, 120]} />
          <meshBasicMaterial
            color="#FFFFFF"
            transparent
            opacity={0.65}
          />
        </mesh>
      </group>

      <group ref={orbitRef}>
        <mesh rotation={[1.2, 0.4, 0]}>
          <torusGeometry args={[1.95, 0.007, 8, 120]} />
          <meshBasicMaterial
            color={GOLD}
            transparent
            opacity={0.7}
          />
        </mesh>

        {Array.from({ length: 6 }, (_, index) => {
          const angle = (index / 6) * Math.PI * 2;

          return (
            <mesh
              key={index}
              position={[
                Math.cos(angle) * 1.95,
                Math.sin(angle) * 0.8,
                Math.sin(angle) * 1.1,
              ]}
            >
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshBasicMaterial color="#F8E6A0" />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

function PortfolioScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.8], fov: 43 }}
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
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 3, 4]} intensity={25} color={GOLD} />
      <pointLight position={[-3, -2, 2]} intensity={12} color="#FFFFFF" />
      <pointLight position={[0, 0, -3]} intensity={8} color="#F8E6A0" />

      <Float speed={1.2} rotationIntensity={0.16} floatIntensity={0.22}>
        <PortfolioCore />
      </Float>

      <Sparkles
        count={85}
        scale={[5.5, 4.5, 4.5]}
        size={1.5}
        speed={0.3}
        color={GOLD}
        opacity={0.75}
      />
    </Canvas>
  );
}

function ProjectVisual({ project, index }) {
  const image = projectImages[index % projectImages.length];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={image}
        alt={`${project.title} project visual`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

      <div className="absolute inset-0 bg-[#D4AF37]/[0.04] mix-blend-screen" />

      <div className="absolute left-6 top-6">
        <span className="text-[10px] tracking-[0.25em] text-white/60">
          PROJECT / {String(project.id).padStart(2, "0")}
        </span>
      </div>

      <div className="absolute right-6 top-6 rounded-full border border-white/20 bg-black/50 px-3 py-2 backdrop-blur-md">
        <span className="text-[9px] uppercase tracking-[0.17em] text-white/80">
          {project.category}
        </span>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
            {project.industry}
          </p>

          <h3 className="mt-2 text-xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#F8E6A0] sm:text-2xl lg:text-3xl">
            {project.title}
          </h3>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-700 group-hover:w-full" />
    </div>
  );
}

function Portfolio() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      gsap.fromTo(
        headingRef.current,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 45 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            delay: (index % 2) * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative isolate overflow-hidden bg-[#050505] px-5 py-24 sm:px-8 lg:px-10 lg:py-36"
    >
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-15" />

      <div className="pointer-events-none absolute -left-64 top-[15%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.055] blur-[150px]" />

      <div className="pointer-events-none absolute -right-64 bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.055] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div
          ref={headingRef}
          className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1.15fr_0.65fr] lg:items-end"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] px-4 py-2">
              <SparklesIcon size={13} className="text-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                Selected work
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              Digital experiences built to{" "}
              <span className="gold-text">create impact.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-sm leading-8 text-white/50 sm:text-base">
              Explore selected digital experiences across technology,
              healthcare, real estate, beauty, AI and other business domains.
              Each project represents a different digital challenge and
              opportunity.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/35">
              <span className="h-px w-8 bg-[#D4AF37]/70" />
              Design · Engineering · Innovation
            </div>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <Layers3 size={16} className="text-[#D4AF37]" />
            <span className="text-xs text-white/70">Featured projects</span>
          </div>

          <span className="text-[10px] tracking-[0.2em] text-white/35">
            {String(portfolio.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {portfolio.map((project, index) => (
            <Link
              key={project.id}
              ref={(element) => {
                cardsRef.current[index] = element;
              }}
              to={`/portfolio/${project.slug}`}
              aria-label={`Explore ${project.title} case study`}
              className={`group relative block overflow-hidden rounded-[26px] border border-white/10 bg-[#080808] transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:shadow-[0_25px_80px_rgba(212,175,55,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0
                    ? "h-[340px] sm:h-[460px] lg:h-[520px]"
                    : "h-[300px] sm:h-[340px]"
                }`}
              >
                {index === 0 ? (
                  <>
                    <img
                      src={projectImages[0]}
                      alt={`${project.title} featured project`}
                      className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/35" />

                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:38px_38px]" />

                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.10),transparent_65%)]" />

                    <div className="absolute inset-0">
                      <PortfolioScene />
                    </div>

                    <div className="absolute left-7 top-7 z-10">
                      <span className="text-[10px] tracking-[0.25em] text-white/60">
                        PROJECT / {String(project.id).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="absolute right-6 top-6 z-10 rounded-full border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-md">
                      <span className="text-[9px] uppercase tracking-[0.17em] text-white/75">
                        {project.category}
                      </span>
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-52 bg-gradient-to-t from-black via-black/60 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
                          {project.industry}
                        </p>

                        <h3 className="mt-2 text-xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#F8E6A0] sm:text-2xl lg:text-3xl">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 z-20 h-[2px] w-0 bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-700 group-hover:w-full" />
                  </>
                ) : (
                  <ProjectVisual project={project} index={index} />
                )}
              </div>

              <div className="border-t border-white/[0.08] p-6 sm:p-7">
                <p className="text-sm leading-7 text-white/50">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-white/45 transition-colors duration-300 group-hover:border-[#D4AF37]/20 group-hover:text-white/65"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    View case study
                  </span>

                  <MoveUpRight
                    size={15}
                    className="text-[#D4AF37] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-base font-medium text-white">
              Have a project in mind?
            </p>
            <p className="mt-2 text-sm leading-6 text-white/45">
              Let's explore the right digital solution for your business.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 self-start rounded-full border border-[#D4AF37]/35 px-5 py-3 text-xs font-medium text-[#F0D982] transition-colors duration-300 hover:bg-[#D4AF37] hover:text-black sm:self-center"
          >
            Discuss your project
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;