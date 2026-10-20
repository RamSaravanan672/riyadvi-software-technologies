
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
  Target,
  Sparkles,
  Workflow,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Business Challenge",
    description:
      "We understand your business challenges, goals, customers and current digital ecosystem before defining the right solution.",
    icon: Target,
    tag: "DISCOVER",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We create a clear technology and digital strategy designed around your business objectives and growth opportunities.",
    icon: Lightbulb,
    tag: "STRATEGIZE",
  },
  {
    number: "03",
    title: "Experience Design",
    description:
      "We transform strategy into intuitive experiences through modern UI/UX, visual storytelling and user-focused design.",
    icon: Palette,
    tag: "DESIGN",
  },
  {
    number: "04",
    title: "Intelligent Engineering",
    description:
      "We develop scalable digital products with modern frameworks, robust architecture, APIs and intelligent development practices.",
    icon: Code2,
    tag: "ENGINEER",
  },
  {
    number: "05",
    title: "Launch & Optimize",
    description:
      "We test, refine and deploy the solution, focusing on performance, reliability and a seamless experience for real users.",
    icon: Rocket,
    tag: "DELIVER",
  },
  {
    number: "06",
    title: "Continuous Growth",
    description:
      "We use feedback, analytics and ongoing innovation to improve digital experiences as business needs evolve.",
    icon: TrendingUp,
    tag: "EVOLVE",
  },
];

function Transformation() {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const closingRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            headingRef.current,
            introRef.current,
            ...cardsRef.current,
            closingRef.current,
            progressRef.current,
          ],
          { clearProps: "all" }
        );
        return;
      }

      gsap.fromTo(
        headingRef.current,
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        introRef.current,
        { autoAlpha: 0, y: 25 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          delay: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        progressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            end: "bottom 65%",
            scrub: 0.7,
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const direction = index % 2 === 0 ? -32 : 32;

        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            y: 48,
            rotateY: direction * 0.12,
          },
          {
            autoAlpha: 1,
            y: 0,
            rotateY: 0,
            duration: 0.85,
            delay: (index % 2) * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        closingRef.current,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: closingRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transformation"
      className="relative isolate overflow-hidden bg-[#050505] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36"
    >
      {/* Background atmosphere */}
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-20" />

      <div className="pointer-events-none absolute -left-48 top-[20%] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/[0.07] blur-[130px]" />

      <div className="pointer-events-none absolute -right-48 bottom-[10%] h-[450px] w-[450px] rounded-full bg-[#D4AF37]/[0.06] blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-[35%] h-[600px] w-[600px] -translate-x-1/2 rounded-full border border-[#D4AF37]/[0.035]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 grid gap-10 lg:mb-28 lg:grid-cols-[1.15fr_0.75fr] lg:items-end">
          <div ref={headingRef}>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.06] px-4 py-2">
              <Sparkles size={13} className="text-[#D4AF37]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#D4AF37]">
                Our Approach
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
              Turning business challenges into{" "}
              <span className="gold-text">digital growth.</span>
            </h2>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-12 bg-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                A connected transformation journey
              </span>
            </div>
          </div>

          <div ref={introRef} className="lg:pb-2">
            <p className="max-w-xl text-sm leading-8 text-white/55 sm:text-base">
              Great digital products are built through a sequence of
              thoughtful decisions. We connect business strategy, design,
              engineering and continuous improvement into one coherent
              experience.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[10px] tracking-wide text-white/60">
                Strategy-led
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[10px] tracking-wide text-white/60">
                Technology-driven
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[10px] tracking-wide text-white/60">
                Growth-focused
              </span>
            </div>
          </div>
        </div>

        {/* Journey heading */}
        <div className="mb-10 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <Workflow size={17} className="text-[#D4AF37]" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/75">
              The transformation process
            </span>
          </div>

          <span className="text-[10px] tracking-[0.15em] text-white/35">
            06 PHASES
          </span>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          <div
            ref={progressRef}
            className="absolute left-[14px] top-0 h-full w-[3px] origin-top bg-gradient-to-b from-[#F8E6A0] via-[#D4AF37] to-[#D4AF37]/10 shadow-[0_0_18px_rgba(212,175,55,0.35)] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <article
                  key={step.number}
                  ref={(element) => {
                    cardsRef.current[index] = element;
                  }}
                  className="relative grid grid-cols-1 md:grid-cols-2 md:gap-20"
                >
                  <div
                    className={`pl-11 md:pl-0 ${
                      isLeft
                        ? "md:col-start-1 md:row-start-1"
                        : "md:col-start-2 md:row-start-1"
                    }`}
                  >
                    <div
                      className={`group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-6 shadow-[0_12px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-[border-color,background,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_24px_70px_rgba(212,175,55,0.08)] sm:p-8 md:[transform-style:preserve-3d] md:hover:[transform:perspective(1000px)_rotateX(1deg)_rotateY(2deg)_translateY(-5px)] ${
                        isLeft ? "md:text-right" : ""
                      }`}
                    >
                      {/* Card lighting */}
                      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#D4AF37]/[0.04] blur-[65px] transition-colors duration-500 group-hover:bg-[#D4AF37]/[0.13]" />

                      <div
                        className={`relative flex items-start justify-between gap-4 ${
                          isLeft ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.07] text-[#D4AF37] transition duration-500 group-hover:scale-110 group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/[0.13]">
                          <Icon size={21} strokeWidth={1.5} />
                        </div>

                        <div className={isLeft ? "md:text-left" : "text-right"}>
                          <p className="text-[10px] font-medium tracking-[0.25em] text-[#D4AF37]/70">
                            PHASE {step.number}
                          </p>
                          <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-white/30">
                            {step.tag}
                          </p>
                        </div>
                      </div>

                      <div className="relative mt-7">
                        <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#F0D982] sm:text-2xl">
                          {step.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                          {step.description}
                        </p>
                      </div>

                      <div
                        className={`relative mt-7 flex items-center gap-3 border-t border-white/[0.07] pt-5 text-[9px] uppercase tracking-[0.19em] text-white/35 transition-colors duration-300 group-hover:text-[#D4AF37]/80 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <span>Digital transformation</span>
                        <ArrowRight
                          size={13}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>

                      <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-700 group-hover:w-full" />
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="absolute left-[15px] top-7 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#080808] shadow-[0_0_25px_rgba(212,175,55,0.13)] md:left-1/2">
                    <div className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.9)] transition-transform duration-300 hover:scale-150" />
                  </div>

                  {/* Alternating empty column */}
                  <div
                    aria-hidden="true"
                    className={`hidden md:block ${
                      isLeft ? "md:col-start-2 md:row-start-1" : "md:col-start-1 md:row-start-1"
                    }`}
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div
          ref={closingRef}
          className="relative mt-24 overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/[0.07] via-white/[0.025] to-transparent p-7 sm:p-10 lg:mt-32 lg:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full border border-[#D4AF37]/10" />
          <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full border border-[#D4AF37]/10" />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-[#D4AF37]">
                <Sparkles size={15} />
                <span className="text-[10px] uppercase tracking-[0.25em]">
                  Built for what comes next
                </span>
              </div>

              <p className="text-xl leading-relaxed text-white/65 sm:text-2xl">
                One connected journey — from{" "}
                <span className="text-white">business challenge</span> to{" "}
                <span className="gold-text">measurable growth.</span>
              </p>
            </div>

            <a
              href="/#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/[0.08] px-6 py-4 text-xs font-medium tracking-wide text-[#F0D982] transition duration-300 hover:bg-[#D4AF37] hover:text-black md:self-center"
            >
              Start a conversation
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transformation;
