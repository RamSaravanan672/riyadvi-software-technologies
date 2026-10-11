import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  FileText,
  Sparkles,
} from "lucide-react";

function SoftwareProjectGuide() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    submitted: false,
    error: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.error) {
      setStatus((previous) => ({
        ...previous,
        error: "",
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      loading: true,
      submitted: false,
      error: "",
    });

    try {
      const response = await fetch(
        "http://localhost:5000/api/lead-magnet",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to submit your request."
        );
      }

      setStatus({
        loading: false,
        submitted: true,
        error: "",
      });
    } catch (error) {
      console.error("Planning Guide API error:", error);

      setStatus({
        loading: false,
        submitted: false,
        error:
          error.message ||
          "Something went wrong. Please try again.",
      });
    }
  };

  if (status.submitted) {
    return (
      <main className="min-h-screen bg-black px-6 py-32 text-white lg:px-10">
        <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.1)]">
            <Check size={36} strokeWidth={1.5} />
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            Request Received
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Your Guide Is Ready
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/40">
            Thank you for requesting the Software Project Planning
            Guide. Your details have been securely recorded and the
            guide can be accessed below.
          </p>

          <a
            href="/software-project-planning-guide.pdf"
            download
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-semibold text-black transition hover:scale-105 hover:bg-[#e6c34a]"
          >
            <Download size={17} />
            Download Project Guide
          </a>

          <Link
            to="/"
            className="mt-6 text-xs uppercase tracking-[0.2em] text-white/30 transition hover:text-[#D4AF37]"
          >
            Back to Riyadvi
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="premium-grid pointer-events-none absolute inset-0 opacity-20" />

      <div className="pointer-events-none absolute left-1/2 top-[25%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#D4AF37]/7 blur-[160px]" />

      <section className="relative px-6 pb-32 pt-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* BACK */}

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/35 transition hover:text-[#D4AF37]"
          >
            <ArrowLeft size={15} />
            Back to Riyadvi
          </Link>

          {/* HEADER */}

          <div className="mt-14 grid items-center gap-16 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2">
                <Sparkles
                  size={13}
                  className="text-[#D4AF37]"
                />

                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                  Free Resource
                </span>
              </div>

              <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[1] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Software Project{" "}
                <span className="gold-text">
                  Planning Guide
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
                A practical starting point for understanding project
                requirements, planning technology, defining scope and
                preparing for successful software development.
              </p>

              {/* BENEFITS */}

              <div className="mt-9 space-y-4">
                {[
                  "Understand your project requirements",
                  "Define scope and technology needs",
                  "Plan your development journey",
                  "Identify important project considerations",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/5 text-[#D4AF37]">
                      <Check size={13} />
                    </div>

                    <span className="text-sm text-white/50">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* GUIDE VISUAL */}

            <div className="relative mx-auto w-full max-w-md">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

              <div className="relative rounded-[30px] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl">
                <div className="rounded-2xl border border-white/10 bg-black/70 p-7 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                      <FileText size={24} />
                    </div>

                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                      GUIDE / 01
                    </span>
                  </div>

                  <div className="mt-10">
                    <div className="h-2 w-24 rounded-full bg-[#D4AF37]/60" />

                    <div className="mt-4 h-6 w-4/5 rounded bg-white/10" />

                    <div className="mt-2 h-6 w-3/5 rounded bg-white/5" />
                  </div>

                  <div className="mt-10 space-y-3">
                    <div className="h-2 w-full rounded bg-white/5" />
                    <div className="h-2 w-11/12 rounded bg-white/5" />
                    <div className="h-2 w-4/5 rounded bg-white/5" />
                  </div>

                  <div className="mt-10 grid grid-cols-2 gap-3">
                    <div className="h-20 rounded-xl border border-white/5 bg-white/[0.02]" />
                    <div className="h-20 rounded-xl border border-white/5 bg-white/[0.02]" />
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                      Riyadvi
                    </p>

                    <p className="mt-1 text-sm text-white/50">
                      Digital Solutions
                    </p>
                  </div>

                  <Download
                    size={18}
                    className="text-[#D4AF37]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}

          <div className="mx-auto mt-24 max-w-3xl">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl sm:p-10">
              <div className="mb-9">
                <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                  Get The Guide
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  Enter Your Details
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/35">
                  Enter your details to receive access to the
                  Software Project Planning Guide.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs text-white/40"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#D4AF37]/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="text-xs text-white/40"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      required
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#D4AF37]/50"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs text-white/40"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#D4AF37]/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs text-white/40"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 / +971"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#D4AF37]/50"
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-[#D4AF37]/10 bg-[#D4AF37]/[0.025] p-5">
                  <div className="flex gap-4">
                    <FileText
                      size={20}
                      className="mt-0.5 shrink-0 text-[#D4AF37]"
                    />

                    <div>
                      <p className="text-sm font-medium text-white">
                        What you&apos;ll receive
                      </p>

                      <p className="mt-2 text-xs leading-6 text-white/35">
                        A practical project-planning resource covering
                        requirements, scope, technology considerations
                        and development planning.
                      </p>
                    </div>
                  </div>
                </div>

                {status.error && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {status.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.loading}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-[#e6c34a] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status.loading
                    ? "Submitting..."
                    : "Get The Free Guide"}

                  {!status.loading && (
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SoftwareProjectGuide;