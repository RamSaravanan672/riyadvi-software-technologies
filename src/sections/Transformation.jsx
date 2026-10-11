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
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Business Challenge",
    description:
      "We understand your business challenges, goals, customers and current digital ecosystem before defining the right solution.",
    icon: Target,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We create a clear technology and digital strategy designed around your business objectives and growth opportunities.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Design",
    description:
      "We transform the strategy into intuitive experiences through modern UI/UX, visual design and user-focused thinking.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Technology",
    description:
      "We build scalable digital products using modern technologies, robust architecture and intelligent development practices.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We test, optimize and deploy the solution so your digital product is ready for real users and real business.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Growth",
    description:
      "We continuously improve the digital experience through optimization, analytics, technology and long-term innovation.",
    icon: TrendingUp,
  },
];

function Transformation() {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         PROGRESS LINE
      ========================================== */

      gsap.fromTo(
        progressRef.current,
        {
          scaleY: 0,
          transformOrigin: "top center",
        },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      /* =========================================
         CARDS REVEAL
      ========================================== */

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transformation"
      className="relative overflow-hidden bg-black px-6 py-32 lg:px-10"
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="premium-grid pointer-events-none absolute inset-0 opacity-20" />

      <div className="pointer-events-none absolute left-[-250px] top-[30%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-250px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />


      <div className="relative mx-auto max-w-7xl">

        {/* =====================================
            SECTION HEADER
        ====================================== */}

        <div className="mb-24 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">

          <div>

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2">

              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.8)]" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                Our Approach
              </span>

            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">

              Turning Business Challenges Into{" "}

              <span className="gold-text">
                Digital Growth
              </span>

            </h2>

          </div>


          <p className="max-w-xl text-base leading-8 text-white/45 lg:ml-auto">

            From understanding the challenge to building technology and
            creating sustainable growth, Riyadvi connects every stage of the
            digital transformation journey.

          </p>

        </div>


        {/* =====================================
            TRANSFORMATION JOURNEY
        ====================================== */}

        <div className="relative">

          {/* Background line */}

          <div className="absolute left-[18px] top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          {/* Animated gold line */}

          <div
            ref={progressRef}
            className="absolute left-[17px] top-0 h-full w-[2px] origin-top bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/70 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.35)] md:left-1/2 md:-translate-x-1/2"
          />


          {/* ===================================
              STEPS
          ==================================== */}

          <div className="space-y-16 md:space-y-24">

            {steps.map((step, index) => {

              const Icon = step.icon;

              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  ref={(element) => {
                    cardsRef.current[index] = element;
                  }}
                  className="relative md:grid md:grid-cols-2 md:gap-20"
                >

                  {/* =================================
                      MOBILE / LEFT CARD
                  ================================== */}

                  <div
                    className={`pl-12 md:pl-0 ${
                      isLeft
                        ? "md:col-start-1 md:text-right"
                        : "md:col-start-2"
                    }`}
                  >

                    <div
                      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl transition duration-500 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.025] md:p-8 ${
                        isLeft ? "md:ml-auto" : ""
                      }`}
                    >

                      {/* Hover glow */}

                      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#D4AF37]/5 blur-[60px] transition duration-500 group-hover:bg-[#D4AF37]/15" />


                      {/* Top row */}

                      <div
                        className={`relative flex items-center justify-between ${
                          isLeft ? "md:flex-row-reverse" : ""
                        }`}
                      >

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] transition duration-500 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10">

                          <Icon
                            size={21}
                            strokeWidth={1.5}
                          />

                        </div>


                        <span className="text-xs font-medium tracking-[0.25em] text-white/20 transition group-hover:text-[#D4AF37]/60">
                          {step.number}
                        </span>

                      </div>


                      {/* Content */}

                      <div className="relative mt-8">

                        <h3 className="text-2xl font-semibold text-white transition duration-300 group-hover:text-[#D4AF37] sm:text-3xl">
                          {step.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
                          {step.description}
                        </p>

                      </div>


                      {/* Bottom accent */}

                      <div
                        className={`relative mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/20 transition group-hover:text-[#D4AF37]/70 ${
                          isLeft
                            ? "md:justify-end"
                            : ""
                        }`}
                      >

                        <span>
                          Digital Transformation
                        </span>

                        <ArrowRight
                          size={13}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />

                      </div>

                    </div>

                  </div>


                  {/* =================================
                      CENTER NODE
                  ================================== */}

                  <div className="absolute left-[18px] top-8 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-black md:left-1/2">

                    <div className="h-2.5 w-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.9)]" />

                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* =====================================
            BOTTOM STATEMENT
        ====================================== */}

        <div className="mt-28 border-t border-white/10 pt-10">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <p className="max-w-2xl text-lg leading-8 text-white/40">

              One connected journey — from{" "}

              <span className="text-white">
                business challenge
              </span>{" "}

              to{" "}

              <span className="text-[#D4AF37]">
                measurable growth.
              </span>

            </p>


            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/20">

              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

              Strategy → Technology → Growth

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Transformation;