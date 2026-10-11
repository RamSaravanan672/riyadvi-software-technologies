import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const HeroScene = lazy(() => import("../three/HeroScene"));

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background effects */}
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#D4AF37]/[0.06] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/[0.05] blur-[120px]" />

      {/* Hero content */}
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 md:grid-cols-2 md:gap-6 lg:px-12">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.06] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4AF37] sm:text-xs">
              Riyadvi Software Technologies
            </span>
          </div>

          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Transforming
            <br />
            Ideas Into
            <br />
            <span className="gold-text">Digital Reality.</span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            We help businesses move forward through modern software
            development, thoughtful digital experiences, and technology
            solutions built around real business needs.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/consultation"
              className="group inline-flex w-fit items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-6 py-4 text-sm font-semibold text-black transition duration-300 hover:bg-[#f0d477]"
            >
              Book a Free Consultation
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href="#services"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-medium text-white/80 transition duration-300 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
            >
              Explore Our Solutions
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <p className="text-xl font-semibold text-white sm:text-2xl">
                Digital
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/45 sm:text-xs">
                Experiences
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-white sm:text-2xl">
                Modern
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/45 sm:text-xs">
                Technologies
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-white sm:text-2xl">
                Scalable
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/45 sm:text-xs">
                Solutions
              </p>
            </div>
          </div>
        </div>

        {/* Lazy-loaded 3D visual */}
        <div className="relative mx-auto flex h-[340px] w-full max-w-[520px] items-center justify-center sm:h-[430px] md:h-[500px] lg:h-[580px]">
          <div className="pointer-events-none absolute inset-8 rounded-full border border-[#D4AF37]/10" />
          <div className="pointer-events-none absolute inset-16 rounded-full border border-white/[0.06]" />

          <Suspense
            fallback={
              <div
                className="flex h-full w-full items-center justify-center"
                aria-label="Loading 3D visual"
              >
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-[#D4AF37]" />
              </div>
            }
          >
            <div className="h-full w-full">
              <HeroScene />
            </div>
          </Suspense>
        </div>
      </div>

      {/* Bottom indicator */}
      <a
        href="#services"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-[#D4AF37] md:flex"
        aria-label="Scroll to services"
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">
          Discover More
        </span>
        <span className="h-8 w-px bg-gradient-to-b from-[#D4AF37]/60 to-transparent" />
      </a>
    </section>
  );
}

export default Hero;