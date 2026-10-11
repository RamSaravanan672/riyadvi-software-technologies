import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

import services from "../data/services";

function ServiceDetails() {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <main className="min-h-screen bg-black px-6 py-40 text-white">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            404
          </p>

          <h1 className="mt-5 text-4xl font-bold">
            Service Not Found
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

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================================
          HERO
      ================================= */}

      <section className="relative overflow-hidden px-6 pb-24 pt-36 lg:px-10">

        <div className="premium-grid pointer-events-none absolute inset-0 opacity-20" />

        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/40 transition hover:text-[#D4AF37]"
          >
            <ArrowLeft size={15} />
            Back to Riyadvi
          </Link>


          <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2">

                <Sparkles
                  size={14}
                  className="text-[#D4AF37]"
                />

                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                  {service.accent}
                </span>

              </div>


              <h1 className="mt-7 text-5xl font-bold leading-[1] tracking-tight sm:text-6xl lg:text-7xl">

                {service.title}

                <br />

                <span className="gold-text">
                  Built For Growth.
                </span>

              </h1>


              <p className="mt-8 max-w-xl text-lg leading-8 text-white/50">
                {service.description}
              </p>


              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-semibold text-black transition hover:scale-105"
                >
                  Start a Project
                  <ArrowRight size={17} />
                </Link>


                <a
                  href="#features"
                  className="inline-flex items-center rounded-full border border-white/15 px-7 py-4 text-sm text-white/70 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  Explore Service
                </a>

              </div>

            </div>


            {/* RIGHT VISUAL */}

            <div className="relative flex h-[450px] items-center justify-center">

              <div className="absolute h-[300px] w-[300px] rounded-full border border-[#D4AF37]/15" />

              <div className="absolute h-[400px] w-[400px] rounded-full border border-white/5" />

              <div className="absolute h-[500px] w-[500px] rounded-full border border-[#D4AF37]/5" />

              <div className="absolute h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-[90px]" />


              <div className="relative flex h-36 w-36 items-center justify-center rounded-[30px] border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] shadow-[0_0_70px_rgba(212,175,55,0.12)]">

                <Icon
                  size={58}
                  strokeWidth={1}
                />

              </div>


              <div className="absolute right-[5%] top-[15%] rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl">

                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Service
                </p>

                <p className="mt-1 text-xl font-semibold text-[#D4AF37]">
                  {String(service.id).padStart(2, "0")}
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================
          FEATURES
      ================================= */}

      <section
        id="features"
        className="border-t border-white/10 px-6 py-28 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            What We Deliver
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
            Solutions Designed Around Your Business
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/40">
            Every solution is designed around your business objectives,
            users, technology requirements and long-term growth.
          </p>


          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">

            {service.features.map((feature, index) => (

              <div
                key={feature}
                className="bg-[#050505] p-8 transition hover:bg-[#0a0a0a]"
              >

                <span className="text-xs tracking-[0.2em] text-white/20">
                  0{index + 1}
                </span>

                <div className="mt-7 flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/20 text-[#D4AF37]">

                  <Check size={17} />

                </div>

                <h3 className="mt-6 text-xl font-medium">
                  {feature}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/35">
                  A focused solution designed to support your digital
                  product and business objectives.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================================
          PROCESS
      ================================= */}

      <section className="border-t border-white/10 px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            Our Process
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            From Idea To Digital Experience
          </h2>


          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">

            <div className="bg-[#050505] p-8">
              <span className="text-xs tracking-[0.25em] text-[#D4AF37]">
                01
              </span>

              <h3 className="mt-10 text-2xl font-semibold">
                Discover
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Understand the business, users, goals and requirements.
              </p>
            </div>


            <div className="bg-[#050505] p-8">
              <span className="text-xs tracking-[0.25em] text-[#D4AF37]">
                02
              </span>

              <h3 className="mt-10 text-2xl font-semibold">
                Build
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Design and develop the right technology solution.
              </p>
            </div>


            <div className="bg-[#050505] p-8">
              <span className="text-xs tracking-[0.25em] text-[#D4AF37]">
                03
              </span>

              <h3 className="mt-10 text-2xl font-semibold">
                Grow
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Launch, optimize and continuously improve the product.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================================
          CTA
      ================================= */}

      <section className="border-t border-white/10 px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-5xl rounded-[30px] border border-[#D4AF37]/15 bg-[#D4AF37]/[0.025] px-7 py-16 text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            Let's Build Something Great
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-5xl">

            Ready to transform your business with{" "}

            <span className="gold-text">
              {service.title}?
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/40">
            Tell us about your requirements and let's create a digital
            solution designed around your goals.
          </p>


          <Link
            to="/#contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-semibold text-black transition hover:scale-105"
          >
            Start a Conversation

            <ArrowUpRight size={17} />

          </Link>

        </div>

      </section>

    </main>
  );
}

export default ServiceDetails;