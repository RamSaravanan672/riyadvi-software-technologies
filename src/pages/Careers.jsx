
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  Search,
  Sparkles,
  Clock3,
  Users,
} from "lucide-react";
import { jobs } from "../data/jobs";

function Careers() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [jobType, setJobType] = useState("All");

  const departments = [
    "All",
    ...new Set(jobs.map((job) => job.department)),
  ];

  const jobTypes = [
    "All",
    ...new Set(jobs.map((job) => job.type)),
  ];

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(query)
        );

      const matchesDepartment =
        department === "All" || job.department === department;

      const matchesType =
        jobType === "All" || job.type === jobType;

      return matchesSearch && matchesDepartment && matchesType;
    });
  }, [search, department, jobType]);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Hero */}
      <section className="premium-grid relative px-6 pb-16 pt-36 lg:px-12 lg:pb-24">
        <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            <Sparkles size={14} />
            Careers at Riyadvi
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Build what's
            <span className="gold-text block">next with us.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Explore opportunities to solve meaningful problems, learn
            continuously, and create digital experiences with a
            collaborative team.
          </p>

          <div className="mt-9 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              {
                icon: BriefcaseBusiness,
                label: "Explore roles",
                value: `${jobs.length} sample roles`,
              },
              {
                icon: Users,
                label: "Work together",
                value: "Collaborative teams",
              },
              {
                icon: Sparkles,
                label: "Keep growing",
                value: "Learning mindset",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="glass-panel rounded-2xl p-5"
                >
                  <Icon size={21} className="text-[#D4AF37]" />
                  <p className="mt-4 text-xs text-white/45">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="px-6 py-14 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              Find your opportunity
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl">
              Explore open roles
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
              These are sample listings for website demonstration and
              testing, not confirmed vacancies. Replace them with
              verified openings before publishing the site.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 grid gap-3 md:grid-cols-[minmax(0,1fr)_220px_190px]">
            <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 focus-within:border-[#D4AF37]/60">
              <Search
                size={18}
                className="shrink-0 text-[#D4AF37]"
              />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search job title or skill"
                aria-label="Search jobs"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
              />
            </label>

            <select
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
              aria-label="Filter by department"
              className="rounded-xl border border-white/10 bg-[#101010] px-4 py-3 text-sm text-white/75 outline-none focus:border-[#D4AF37]/60"
            >
              {departments.map((item) => (
                <option key={item} value={item}>
                  {item === "All" ? "All departments" : item}
                </option>
              ))}
            </select>

            <select
              value={jobType}
              onChange={(event) => setJobType(event.target.value)}
              aria-label="Filter by job type"
              className="rounded-xl border border-white/10 bg-[#101010] px-4 py-3 text-sm text-white/75 outline-none focus:border-[#D4AF37]/60"
            >
              {jobTypes.map((item) => (
                <option key={item} value={item}>
                  {item === "All" ? "All job types" : item}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5 flex items-center justify-between text-xs text-white/40">
            <span>
              {filteredJobs.length}{" "}
              {filteredJobs.length === 1 ? "role" : "roles"} found
            </span>

            {(search ||
              department !== "All" ||
              jobType !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setDepartment("All");
                  setJobType("All");
                }}
                className="text-[#D4AF37] hover:text-white"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Job Cards */}
          <div className="grid gap-5 lg:grid-cols-2">
            {filteredJobs.map((job) => (
              <article
                key={job.id}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/10">
                    <BriefcaseBusiness
                      size={23}
                      className="text-[#D4AF37]"
                    />
                  </div>

                  {job.featured && (
                    <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-3 py-1.5 text-[10px] uppercase tracking-wider text-[#D4AF37]">
                      Featured sample role
                    </span>
                  )}
                </div>

                <p className="mt-6 text-xs text-[#D4AF37]">
                  {job.department}
                </p>

                <h3 className="mt-2 text-xl font-semibold transition group-hover:text-[#D4AF37] sm:text-2xl">
                  {job.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {job.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/45">
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={14} />
                    {job.location}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Clock3 size={14} />
                    {job.type}
                  </span>
                </div>

                <p className="mt-3 text-xs text-white/45">
                  Experience: {job.experience}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/55"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <Link
                    to={`/careers/${job.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37]"
                  >
                    View job details
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="rounded-2xl border border-white/10 px-6 py-16 text-center">
              <Search
                size={32}
                className="mx-auto text-[#D4AF37]"
              />

              <h3 className="mt-5 text-xl font-semibold">
                No matching roles
              </h3>

              <p className="mt-2 text-sm text-white/50">
                Try another search term or clear your filters.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setDepartment("All");
                  setJobType("All");
                }}
                className="mt-5 rounded-full border border-[#D4AF37]/50 px-5 py-2.5 text-sm text-[#D4AF37]"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-r from-[#D4AF37]/10 via-black to-black p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            Don't see your role?
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                We're interested in people who love to learn.
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Contact our team to introduce yourself and your interests.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#f0d878]"
            >
              Contact Us
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Careers;
