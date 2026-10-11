import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import portfolio from "../data/portfolio";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-black px-6 py-32 lg:px-10"
    >
      {/* Background */}

      <div className="premium-grid pointer-events-none absolute inset-0 opacity-15" />

      <div className="pointer-events-none absolute left-[-250px] top-[20%] h-[550px] w-[550px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-250px] bottom-[10%] h-[550px] w-[550px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />


      <div className="relative mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-20 grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">

          <div>

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2">

              <Sparkles
                size={13}
                className="text-[#D4AF37]"
              />

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                Selected Work
              </span>

            </div>


            <h2 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">

              Digital Experiences Built To{" "}

              <span className="gold-text">
                Create Impact
              </span>

            </h2>

          </div>


          <p className="max-w-xl text-base leading-8 text-white/45 lg:ml-auto">

            Explore selected digital experiences across technology,
            healthcare, real estate, beauty, AI and other business domains.

          </p>

        </div>


        {/* Portfolio Grid */}

        <div className="grid gap-5 md:grid-cols-2">

          {portfolio.map((project, index) => (

            <Link
              key={project.id}
              to={`/portfolio/${project.slug}`}
              className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#050505] transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/25 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >

              {/* Visual */}

              <div
                className={`relative overflow-hidden ${
                  index === 0
                    ? "h-[400px] sm:h-[500px]"
                    : "h-[320px]"
                }`}
              >

                {/* Grid */}

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:45px_45px]" />


                {/* Glow */}

                <div
                  className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] transition duration-700 group-hover:h-72 group-hover:w-72"
                  style={{
                    backgroundColor: `${project.color}18`,
                  }}
                />


                {/* Abstract visual */}

                <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] border border-[#D4AF37]/20 bg-[#D4AF37]/5 transition duration-700 group-hover:rotate-6 group-hover:scale-110">

                  <div className="h-28 w-28 rotate-45 rounded-[25px] border border-[#D4AF37]/30 bg-[#D4AF37]/5" />

                  <div className="absolute h-16 w-16 rounded-full border border-[#D4AF37]/40 bg-black/60" />

                  <div className="absolute h-3 w-3 rounded-full bg-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.9)]" />

                </div>


                {/* Project number */}

                <div className="absolute left-7 top-7">

                  <span className="text-xs tracking-[0.25em] text-white/25">
                    {String(project.id).padStart(2, "0")}
                  </span>

                </div>


                {/* Category */}

                <div className="absolute right-7 top-7 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md">

                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                    {project.category}
                  </span>

                </div>


                {/* Hover text */}

                <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">

                  <div>

                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]/70">
                      {project.industry}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                      {project.title}
                    </h3>

                  </div>


                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition duration-500 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black">

                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />

                  </div>

                </div>


                {/* Bottom gold line */}

                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.7)] transition-all duration-700 group-hover:w-full" />

              </div>


              {/* Information */}

              <div className="border-t border-white/10 p-7">

                <p className="text-sm leading-7 text-white/40">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {project.technologies.slice(0, 4).map((technology) => (

                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-white/30"
                    >
                      {technology}
                    </span>

                  ))}

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Portfolio;