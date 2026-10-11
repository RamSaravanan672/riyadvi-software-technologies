
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  BookOpen,
  Clock3,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import blogPosts from "../data/blogPosts";

function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const featuredPost = blogPosts.find((post) => post.featured);

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const visibleFeatured =
    featuredPost &&
    activeCategory === "All" &&
    !search.trim();

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="premium-grid relative px-6 pb-16 pt-36 lg:px-12 lg:pb-24">
        <div className="pointer-events-none absolute -right-20 top-28 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            <Sparkles size={14} />
            Riyadvi Insights
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Ideas that move
            <span className="gold-text block">business forward.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Explore practical perspectives on software development,
            artificial intelligence, digital strategy, and user experience.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <label className="flex max-w-xl flex-1 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3.5 focus-within:border-[#D4AF37]/60">
              <Search size={19} className="shrink-0 text-[#D4AF37]" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search articles, topics, or categories..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                aria-label="Search blog articles"
              />
            </label>

            <a
              href="#articles"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/80 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Explore articles
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {visibleFeatured && (
        <section className="px-6 py-12 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              <Sparkles size={15} />
              Featured article
            </div>

            <article className="group grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] md:grid-cols-2">
              <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#211b08] via-[#0a0a0a] to-black p-10 sm:min-h-[350px]">
                <div className="absolute h-64 w-64 rounded-full border border-[#D4AF37]/15" />
                <div className="absolute h-48 w-48 rounded-full border border-[#D4AF37]/25" />
                <div className="absolute h-32 w-32 rounded-full border border-white/10" />
                <div className="absolute h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl" />

                <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-[#D4AF37]/40 bg-black/70 shadow-[0_0_50px_rgba(212,175,55,0.12)] transition duration-500 group-hover:rotate-6">
                  <Sparkles size={48} className="text-[#D4AF37]" />
                </div>

                <span className="absolute bottom-6 left-6 rounded-full border border-[#D4AF37]/30 bg-black/60 px-4 py-2 text-xs text-[#D4AF37]">
                  Editor's pick
                </span>
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <span className="mb-5 w-fit rounded-full bg-[#D4AF37]/10 px-3 py-1.5 text-xs text-[#D4AF37]">
                  {featuredPost.category}
                </span>

                <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/55">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/40">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={14} />
                    {new Date(`${featuredPost.date}T00:00:00`).toLocaleDateString(
                      "en",
                      { month: "short", day: "numeric", year: "numeric" }
                    )}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#f0d878]"
                >
                  Read featured article
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      <section id="articles" className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                Knowledge & Ideas
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Latest articles
              </h2>
            </div>

            <p className="text-sm text-white/45">
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "article" : "articles"} found
            </p>
          </div>

          <div className="mb-10 flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs transition ${
                  activeCategory === category
                    ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                    : "border-white/10 bg-white/[0.02] text-white/60 hover:border-[#D4AF37]/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts
              .filter((post) => !visibleFeatured || post.slug !== featuredPost.slug)
              .map((post, index) => (
                <article
                  key={post.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40"
                >
                  <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-[#171307] via-[#090909] to-black">
                    <div
                      className={`absolute h-36 w-36 rounded-full border ${
                        index % 2 === 0
                          ? "border-[#D4AF37]/25"
                          : "border-white/15"
                      } transition duration-500 group-hover:scale-110`}
                    />
                    <div className="absolute h-24 w-24 rounded-full border border-[#D4AF37]/25" />
                    <div className="absolute h-20 w-20 rounded-full bg-[#D4AF37]/10 blur-2xl" />
                    <BookOpen
                      size={34}
                      className="relative text-[#D4AF37] transition duration-300 group-hover:scale-110"
                    />

                    <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] text-[#D4AF37]">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] text-white/40">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={13} />
                        {new Date(`${post.date}T00:00:00`).toLocaleDateString(
                          "en",
                          { month: "short", day: "numeric", year: "numeric" }
                        )}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 size={13} />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold leading-7 transition group-hover:text-[#D4AF37]">
                      {post.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-white/50">
                      {post.excerpt}
                    </p>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#D4AF37]"
                    >
                      Read article
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              ))}
          </div>

          {filteredPosts.filter(
            (post) => !visibleFeatured || post.slug !== featuredPost.slug
          ).length === 0 && (
            <div className="rounded-2xl border border-white/10 px-6 py-16 text-center">
              <Search size={32} className="mx-auto text-[#D4AF37]" />
              <h3 className="mt-5 text-xl font-semibold">No articles found</h3>
              <p className="mt-2 text-sm text-white/50">
                Try another search term or select a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-5 rounded-full border border-[#D4AF37]/50 px-5 py-2.5 text-sm text-[#D4AF37] hover:bg-[#D4AF37]/10"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-r from-[#D4AF37]/10 via-black to-black p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            Have a project in mind?
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Let's turn your next idea into reality.
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/55">
                Talk to our team about your goals and digital opportunities.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#f0d878]"
            >
              Contact Riyadvi
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
