import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import portfolio from "../data/portfolio";

function CaseStudy() {
  const { slug } = useParams();

  const project = portfolio.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <main className="min-h-screen bg-black px-6 py-40 text-white">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            404
          </p>

          <h1 className="mt-5 text-4xl font-bold">
            Case Study Not Found
          </h1>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black"
          >
            <ArrowLeft size={16} />
            Back Home
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* =========================================
          HERO
      ========================================== */}

      <section className="relative overflow-hidden px-6 pb-24 pt-36 lg:px-10">

        <div className="premium-grid pointer-events-none absolute inset-0 opacity-20" />

        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#D4AF37]/7 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">

          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/35 transition hover:text-[#D4AF37]"
          >

            <ArrowLeft size={15} />

            Back to Portfolio

          </Link>


          <div className="mt-16 grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Content */}

            <div>

              <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2">

                <Sparkles
                  size={13}
                  className="text-[#D4AF37]"
                />

                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                  {project.category}
                </span>

              </div>


              <h1 className="mt-7 text-5xl font-bold leading-[1] tracking-[-0.04em] sm:text-6xl lg:text-7xl">

                {project.title}

              </h1>


              <p className="mt-7 max-w-xl text-lg leading-8 text-white/45">
                {project.description}
              </p>


              <div className="mt-9 flex flex-wrap gap-3">

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/40">
                  {project.client}
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/40">
                  {project.industry}
                </span>

              </div>

            </div>


            {/* Interactive visual */}

            <div className="relative h-[500px] overflow-hidden rounded-[32px] border border-white/10 bg-[#050505]">

              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

              <div className="absolute left-1/2 top-1/2 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 rotate-12 items-center justify-center rounded-[40px] border border-[#D4AF37]/25 bg-[#D4AF37]/5 transition duration-700 hover:rotate-45">

                <div className="h-32 w-32 rounded-full border border-[#D4AF37]/30" />

                <div className="absolute h-4 w-4 rounded-full bg-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,1)]" />

              </div>


              <div className="absolute bottom-7 left-7">

                <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                  Digital Case Study
                </p>

                <p className="mt-2 text-sm text-white/50">
                  Interactive Experience
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CHALLENGE / SOLUTION
      ========================================== */}

      <section className="border-t border-white/10 px-6 py-28 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-[32px] border border-white/10 bg-white/10 lg:grid-cols-2">

          <div className="bg-[#050505] p-9 sm:p-12">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
              The Challenge
            </p>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Understanding The Problem
            </h2>

            <p className="mt-6 text-base leading-8 text-white/40">
              {project.challenge}
            </p>

          </div>


          <div className="bg-[#080808] p-9 sm:p-12">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
              The Solution
            </p>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Building The Right Experience
            </h2>

            <p className="mt-6 text-base leading-8 text-white/40">
              {project.solution}
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          TECHNOLOGIES
      ========================================== */}

      <section className="border-t border-white/10 px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            Technology Stack
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Technology Behind The Experience
          </h2>


          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {project.technologies.map((technology, index) => (

              <div
                key={technology}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.03]"
              >

                <span className="text-[10px] tracking-[0.25em] text-white/20">
                  0{index + 1}
                </span>

                <h3 className="mt-8 text-lg font-medium transition group-hover:text-[#D4AF37]">
                  {technology}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          RESULTS
      ========================================== */}

      <section className="border-t border-white/10 px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            Outcomes
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Designed For Meaningful Results
          </h2>


          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

            {project.results.map((result, index) => (

              <div
                key={result}
                className="bg-[#050505] p-7"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/20 text-[#D4AF37]">

                  <Check size={17} />

                </div>

                <p className="mt-6 text-sm leading-6 text-white/50">
                  {result}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================== */}

      <section className="border-t border-white/10 px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-5xl rounded-[32px] border border-[#D4AF37]/15 bg-[#D4AF37]/[0.025] px-7 py-16 text-center sm:px-12">

          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            Start Your Project
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
            Let's build your next digital experience.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/40">
            Have a business challenge? Let's turn it into a meaningful
            technology solution.
          </p>

          <Link
            to="/#contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-semibold text-black transition hover:scale-105"
          >
            Start a Conversation
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default CaseStudy;