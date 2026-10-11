
import {
    ArrowRight,
    Target,
    Eye,
    ShieldCheck,
    Lightbulb,
    Users,
    Rocket,
    Code2,
    Layers3,
    TrendingUp,
    CheckCircle2,
    Sparkles,
  } from "lucide-react";
  import { Link } from "react-router-dom";
  
  const values = [
    {
      icon: Lightbulb,
      number: "01",
      title: "Innovation",
      description:
        "We explore thoughtful technologies and creative ideas to solve meaningful business problems.",
    },
    {
      icon: ShieldCheck,
      number: "02",
      title: "Trust & Quality",
      description:
        "We focus on reliable solutions, clear communication, and quality at every stage of delivery.",
    },
    {
      icon: Users,
      number: "03",
      title: "Client Partnership",
      description:
        "We work to understand your goals and build solutions around your customers and business.",
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Continuous Growth",
      description:
        "We believe successful digital products evolve through feedback, learning, and improvement.",
    },
  ];
  
  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "Understand your business, users, challenges, and desired outcomes.",
      icon: Target,
    },
    {
      number: "02",
      title: "Design",
      description:
        "Plan intuitive experiences, clear workflows, and the right solution architecture.",
      icon: Layers3,
    },
    {
      number: "03",
      title: "Develop",
      description:
        "Build, integrate, and validate reliable digital products using suitable technologies.",
      icon: Code2,
    },
    {
      number: "04",
      title: "Deliver & Grow",
      description:
        "Launch the solution, learn from feedback, and identify opportunities to improve.",
      icon: Rocket,
    },
  ];
  
  function About() {
    return (
      <main className="min-h-screen overflow-hidden bg-black text-white">
        {/* HERO */}
        <section className="premium-grid relative flex min-h-[75vh] items-center px-6 pb-20 pt-36 lg:px-12">
          <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#D4AF37]/5 blur-[100px]" />
  
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                <Sparkles size={14} />
                About Riyadvi
              </div>
  
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Technology with
                <span className="gold-text block">Purpose & Vision.</span>
              </h1>
  
              <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                We help businesses turn ideas into meaningful digital
                experiences through custom software, thoughtful design,
                and technology aligned with real business goals.
              </p>
  
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#f0d878]"
                >
                  Let's Work Together
                  <ArrowRight size={17} />
                </Link>
  
                <Link
                  to="/services"
                  className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  Explore Services
                </Link>
              </div>
            </div>
  
            {/* Abstract visual made with CSS */}
            <div className="relative mx-auto flex aspect-square w-full max-w-lg items-center justify-center">
              <div className="absolute inset-[8%] rounded-full border border-[#D4AF37]/15" />
              <div className="absolute inset-[18%] rounded-full border border-[#D4AF37]/25" />
              <div className="absolute inset-[29%] rounded-full border border-white/10" />
              <div className="absolute inset-[14%] animate-[spin_35s_linear_infinite] rounded-full border border-dashed border-[#D4AF37]/40" />
  
              <div className="absolute h-52 w-52 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  
              <div className="relative flex h-40 w-40 items-center justify-center rounded-[2rem] border border-[#D4AF37]/60 bg-gradient-to-br from-[#D4AF37]/20 via-black to-[#D4AF37]/5 shadow-[0_0_80px_rgba(212,175,55,0.12)] sm:h-48 sm:w-48">
                <div className="text-center">
                  <div className="text-3xl font-bold tracking-[0.2em] text-[#D4AF37] sm:text-4xl">
                    R
                  </div>
                  <div className="mt-2 text-[9px] uppercase tracking-[0.3em] text-white/60">
                    Build the Future
                  </div>
                </div>
              </div>
  
              <div className="absolute right-[10%] top-[20%] rounded-2xl border border-[#D4AF37]/30 bg-black/80 p-4 shadow-xl backdrop-blur-xl">
                <Code2 className="text-[#D4AF37]" size={24} />
              </div>
  
              <div className="absolute bottom-[17%] left-[8%] rounded-2xl border border-white/10 bg-black/80 p-4 shadow-xl backdrop-blur-xl">
                <Layers3 className="text-white/80" size={24} />
              </div>
  
              <div className="absolute bottom-[20%] right-[7%] rounded-2xl border border-[#D4AF37]/30 bg-black/80 p-4 shadow-xl backdrop-blur-xl">
                <Rocket className="text-[#D4AF37]" size={24} />
              </div>
            </div>
          </div>
        </section>
  
        <div className="section-divider" />
  
        {/* COMPANY STORY */}
        <section className="px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                Our Story
              </p>
  
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Turning business challenges into
                <span className="gold-text"> digital opportunities.</span>
              </h2>
            </div>
  
            <div className="space-y-5 text-sm leading-8 text-white/60 sm:text-base">
              <p>
                Riyadvi Software Technologies focuses on helping businesses
                make better use of technology. We believe a digital solution
                should do more than look impressive: it should solve a problem,
                support users, and contribute to a clear business objective.
              </p>
  
              <p>
                Our approach brings together software development, user
                experience, digital strategy, and modern technology. From an
                initial idea to a growing digital product, we aim to make
                complex challenges easier to understand and act upon.
              </p>
  
              <p>
                We approach every project with curiosity, collaboration,
                and a focus on building solutions that can evolve with the
                needs of the business.
              </p>
            </div>
          </div>
        </section>
  
        {/* MISSION AND VISION */}
        <section className="px-6 pb-24 lg:px-12 lg:pb-32">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            <article className="glass-panel gold-glow group rounded-3xl p-8 transition duration-300 hover:-translate-y-1 sm:p-10">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                <Target className="text-[#D4AF37]" size={27} />
              </div>
  
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                Our Mission
              </p>
  
              <h3 className="mb-5 text-2xl font-semibold">
                Make technology work for business.
              </h3>
  
              <p className="text-sm leading-7 text-white/60">
                To deliver purposeful digital solutions that address business
                challenges, improve user experiences, and help organizations
                work more effectively.
              </p>
            </article>
  
            <article className="glass-panel rounded-3xl p-8 transition duration-300 hover:-translate-y-1 sm:p-10">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                <Eye className="text-[#D4AF37]" size={27} />
              </div>
  
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                Our Vision
              </p>
  
              <h3 className="mb-5 text-2xl font-semibold">
                Create lasting digital value.
              </h3>
  
              <p className="text-sm leading-7 text-white/60">
                To contribute to a future where businesses can use thoughtful
                design and dependable technology to innovate, adapt, and grow.
              </p>
            </article>
          </div>
        </section>
  
        {/* VALUES */}
        <section className="premium-grid border-y border-white/5 px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                What Guides Us
              </p>
  
              <h2 className="text-3xl font-semibold sm:text-5xl">
                Principles behind
                <span className="gold-text"> every solution.</span>
              </h2>
  
              <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
                The way we approach a project matters as much as the technology
                we use to deliver it.
              </p>
            </div>
  
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
  
                return (
                  <article
                    key={value.number}
                    className="glass-panel group rounded-2xl p-7 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40"
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <Icon
                        size={27}
                        className="text-[#D4AF37] transition group-hover:scale-110"
                      />
                      <span className="text-xs tracking-widest text-white/25">
                        {value.number}
                      </span>
                    </div>
  
                    <h3 className="mb-3 text-lg font-semibold">
                      {value.title}
                    </h3>
  
                    <p className="text-sm leading-7 text-white/50">
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
  
        {/* OUR APPROACH */}
        <section className="px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                How We Work
              </p>
  
              <h2 className="text-3xl font-semibold sm:text-5xl">
                From first idea to
                <span className="gold-text"> real-world impact.</span>
              </h2>
  
              <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
                A structured, collaborative process helps turn an idea into
                a solution that is useful, maintainable, and ready to evolve.
              </p>
            </div>
  
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => {
                const Icon = step.icon;
  
                return (
                  <article
                    key={step.number}
                    className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/[0.03]"
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-sm font-medium text-[#D4AF37]">
                        STEP {step.number}
                      </span>
  
                      <Icon size={24} className="text-white/70" />
                    </div>
  
                    <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
  
                    <p className="text-sm leading-7 text-white/50">
                      {step.description}
                    </p>
  
                    {index !== process.length - 1 && (
                      <div className="absolute -right-3 top-12 z-10 hidden text-[#D4AF37]/50 lg:block">
                        <ArrowRight size={20} />
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
  
        {/* CLOSING CTA */}
        <section className="px-6 pb-24 lg:px-12 lg:pb-32">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/10 via-[#080808] to-black px-7 py-16 text-center sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[100px]" />
  
            <div className="relative">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-black/50">
                <CheckCircle2 className="text-[#D4AF37]" size={28} />
              </div>
  
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                Your Next Chapter
              </p>
  
              <h2 className="mx-auto max-w-3xl text-3xl font-semibold sm:text-5xl">
                Have an idea worth
                <span className="gold-text"> building?</span>
              </h2>
  
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                Let's discuss your business goals and explore a digital
                solution designed around your needs.
              </p>
  
              <Link
                to="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#f0d878]"
              >
                Start a Conversation
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  export default About;
  