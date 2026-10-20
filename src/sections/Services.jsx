
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import services from "../data/services";

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black px-6 py-32 lg:px-10"
    >
      {/* BACKGROUND */}
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-15" />

      <div className="pointer-events-none absolute right-[-250px] top-[10%] h-[600px] w-[600px] rounded-full bg-[#D4AF37]/5 blur-[160px]" />

      <div className="pointer-events-none absolute bottom-[-250px] left-[-200px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-20 grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.9)]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#D4AF37]">
                What We Do
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Technology That{" "}
              <span className="gold-text">
                Moves Business Forward
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/45 lg:ml-auto">
            From strategy and design to development and digital growth,
            Riyadvi brings technology, creativity and business thinking
            together to create meaningful digital experiences.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <a
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative min-h-[430px] overflow-hidden bg-[#050505] p-8 transition-all duration-500 hover:bg-[#0a0a0a] sm:p-9"
              >
                {/* BACKGROUND NUMBER */}
                <span className="pointer-events-none absolute -right-3 -top-8 select-none text-[150px] font-bold leading-none tracking-[-0.08em] text-white/[0.025] transition duration-700 group-hover:text-[#D4AF37]/[0.07]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* HOVER LIGHT */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#D4AF37]/5 blur-[70px] transition-all duration-700 group-hover:bg-[#D4AF37]/15" />

                <div className="pointer-events-none absolute bottom-[-100px] left-[-100px] h-56 w-56 rounded-full bg-[#D4AF37]/5 blur-[80px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

                {/* TOP ROW */}
                <div className="relative flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                    <Icon size={25} strokeWidth={1.4} />
                  </div>

                  <span className="text-xs font-medium tracking-[0.25em] text-white/20 transition duration-500 group-hover:text-[#D4AF37]/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="relative mt-12">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-[#D4AF37]/70">
                    {service.accent}
                  </p>

                  <h3 className="text-2xl font-semibold tracking-tight text-white transition duration-500 group-hover:text-[#D4AF37] sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-white/40 transition duration-500 group-hover:text-white/55">
                    {service.description}
                  </p>
                </div>

                {/* FEATURE TAGS */}
                <div className="relative mt-7 flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/8 bg-white/[0.025] px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-white/30 transition duration-500 group-hover:border-[#D4AF37]/15 group-hover:text-white/45"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* BOTTOM ACTION */}
                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between sm:left-9 sm:right-9">
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/20 transition duration-500 group-hover:text-white/60">
                    Explore Service
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-500 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]">
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>

                {/* BOTTOM GOLD LINE */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)] transition-all duration-700 group-hover:w-full" />
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="relative mt-12 overflow-hidden rounded-[28px] border border-[#D4AF37]/15 bg-[#D4AF37]/[0.025] p-8 sm:p-10">
          <div className="pointer-events-none absolute right-[-100px] top-[-150px] h-[350px] w-[350px] rounded-full bg-[#D4AF37]/8 blur-[100px]" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                Have a digital challenge?
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/40">
                Let's turn your idea into a technology-driven solution
                designed for real business growth.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-[#D4AF37]/40 px-6 py-3.5 text-sm font-medium text-[#D4AF37] transition duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
            >
              Let's Talk

              <MoveUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
