
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  BookOpen,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import blogPosts from "../data/blogPosts";

function BlogPost() {
  const { slug } = useParams();

  const post = blogPosts.find((article) => article.slug === slug);

  if (!post) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 pt-24 text-center text-white">
        <div>
          <BookOpen size={42} className="mx-auto text-[#D4AF37]" />
          <h1 className="mt-6 text-3xl font-semibold">
            Article not found
          </h1>
          <p className="mt-3 text-white/50">
            This article may have moved or no longer exists.
          </p>
          <Link
            to="/blog"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = blogPosts
    .filter(
      (article) =>
        article.slug !== post.slug &&
        article.category === post.category
    )
    .concat(
      blogPosts.filter(
        (article) =>
          article.slug !== post.slug &&
          article.category !== post.category
      )
    )
    .slice(0, 3);

  const formattedDate = new Date(
    `${post.date}T00:00:00`
  ).toLocaleDateString("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="premium-grid relative px-6 pb-16 pt-36 lg:px-12 lg:pb-20">
        <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[110px]" />

        <div className="relative mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-[#D4AF37]"
          >
            <ArrowLeft size={16} />
            All articles
          </Link>

          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-4 py-2 text-xs text-[#D4AF37]">
            {post.category}
          </span>

          <h1 className="mt-7 text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-white/10 py-5 text-xs text-white/45">
            <span className="inline-flex items-center gap-2">
              <Sparkles size={15} className="text-[#D4AF37]" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={15} />
              {formattedDate}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 size={15} />
              {post.readTime}
            </span>
          </div>

          <div className="relative mt-10 flex min-h-[240px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#211b08] via-[#090909] to-black sm:min-h-[360px]">
            <div className="absolute h-72 w-72 rounded-full border border-[#D4AF37]/15" />
            <div className="absolute h-56 w-56 rounded-full border border-[#D4AF37]/25" />
            <div className="absolute h-40 w-40 rounded-full border border-white/10" />
            <div className="absolute h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-3xl" />

            <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-[#D4AF37]/40 bg-black/70 shadow-[0_0_70px_rgba(212,175,55,0.12)] sm:h-36 sm:w-36">
              <BookOpen size={54} className="text-[#D4AF37]" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <article className="min-w-0">
            <div className="mb-10 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-6 sm:p-8">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                In this article
              </p>
              <p className="text-sm leading-7 text-white/65">
                {post.excerpt}
              </p>
            </div>

            <div className="space-y-10">
              {post.content.map((section, index) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
                    <span className="mr-3 text-sm text-[#D4AF37]">
                      0{index + 1}
                    </span>
                    {section.heading}
                  </h2>

                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-sm leading-8 text-white/65 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Key takeaways</h2>

              <ul className="mt-5 space-y-4">
                {post.takeaways.map((takeaway) => (
                  <li
                    key={takeaway}
                    className="flex items-start gap-3 text-sm leading-7 text-white/65"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#D4AF37]"
                    />
                    {takeaway}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
              <p className="text-sm text-white/45">
                Published by {post.author}
              </p>

              <Link
                to="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D4AF37]/40 px-5 py-3 text-sm text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
              >
                Discuss your project
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>

          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              Explore more
            </p>

            <h2 className="mt-3 text-xl font-semibold">
              Related articles
            </h2>

            <div className="mt-6 space-y-5">
              {relatedPosts.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="group block border-b border-white/10 pb-5 last:border-0 last:pb-0"
                >
                  <p className="mb-2 text-[11px] text-[#D4AF37]">
                    {article.category}
                  </p>

                  <h3 className="text-sm font-medium leading-6 text-white/80 transition group-hover:text-[#D4AF37]">
                    {article.title}
                  </h3>

                  <span className="mt-2 inline-flex items-center gap-2 text-xs text-white/40">
                    Read article
                    <ArrowRight
                      size={13}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>

            <Link
              to="/blog"
              className="mt-7 inline-flex items-center gap-2 text-sm text-[#D4AF37]"
            >
              View all articles
              <ArrowRight size={15} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-r from-[#D4AF37]/10 via-black to-black p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            Let's Build Something
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Ready to explore a digital solution?
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/55">
                Tell us about your goals and challenges.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#f0d878]"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogPost;
