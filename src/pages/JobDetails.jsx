
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { jobs } from "../data/jobs";

function JobDetails() {
  const { slug } = useParams();
  const job = jobs.find((item) => item.slug === slug);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    resumeUrl: "",
    coverLetter: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");
    setSuccess(false);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/applications`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            jobSlug: job.slug,
            jobTitle: job.title,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit your application.");
      }

      setSuccess(true);
      setMessage(
        result.message || "Your application has been submitted successfully."
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        portfolio: "",
        resumeUrl: "",
        coverLetter: "",
      });
    } catch (error) {
      setMessage(
        error.message ||
          "Could not submit your application. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!job) {
    return (
      <main className="min-h-screen bg-black px-6 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Careers
          </p>
          <h1 className="mb-5 text-4xl font-semibold">
            This role could not be found
          </h1>
          <p className="mb-8 text-white/60">
            The job listing may have been removed or the link may be incorrect.
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-black"
          >
            <ArrowLeft size={17} />
            Back to Careers
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-black pb-24 pt-32 text-white">
      <section className="relative border-b border-white/10">
        <div className="premium-grid absolute inset-0 opacity-50" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <Link
            to="/careers"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-[#D4AF37]"
          >
            <ArrowLeft size={16} />
            All opportunities
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:items-end">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-xs text-[#D4AF37]">
                  {job.department}
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/70">
                  {job.type}
                </span>
                {job.featured && (
                  <span className="inline-flex items-center gap-1 text-xs text-white/60">
                    <Sparkles size={14} className="text-[#D4AF37]" />
                    Featured role
                  </span>
                )}
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                {job.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                {job.summary}
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <MapPin className="text-[#D4AF37]" size={19} />
                <div>
                  <p className="text-xs text-white/40">Location</p>
                  <p className="mt-1 text-sm">{job.location}</p>
                </div>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <BriefcaseBusiness className="text-[#D4AF37]" size={19} />
                <div>
                  <p className="text-xs text-white/40">Department</p>
                  <p className="mt-1 text-sm">{job.department}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 className="text-[#D4AF37]" size={19} />
                <div>
                  <p className="text-xs text-white/40">Employment type</p>
                  <p className="mt-1 text-sm">{job.type}</p>
                </div>
              </div>

              <a
                href="#apply"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 font-semibold text-black transition hover:bg-[#f0d477]"
              >
                Apply for this role
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-[1fr_420px] lg:px-10 lg:py-24">
        <div>
          <div className="mb-12">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              The opportunity
            </p>
            <h2 className="mb-6 text-3xl font-semibold">About this role</h2>
            <p className="leading-8 text-white/65">
              {job.summary} Join our team to contribute to meaningful projects,
              collaborate with colleagues, and continue developing your skills.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold">
              Responsibilities
            </h2>
            <ul className="space-y-4">
              {job.responsibilities.map((item, index) => (
                <li key={index} className="flex gap-3 text-sm leading-7 text-white/65">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-[#D4AF37]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold">
              Qualifications
            </h2>
            <ul className="space-y-4">
              {job.qualifications.map((item, index) => (
                <li key={index} className="flex gap-3 text-sm leading-7 text-white/65">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-[#D4AF37]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-semibold">Relevant skills</h2>
            <div className="flex flex-wrap gap-3">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside id="apply" className="scroll-mt-28">
          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              Take the next step
            </p>
            <h2 className="text-2xl font-semibold">Apply now</h2>
            <p className="mt-3 text-sm leading-6 text-white/55">
              Submit your details for the {job.title} position.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm text-white/75">
                  Full name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  autoComplete="name"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-white/75">
                  Email address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={254}
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm text-white/75">
                  Phone number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={25}
                  autoComplete="tel"
                  placeholder="+971 ..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
                />
              </div>

              <div>
                <label htmlFor="linkedin" className="mb-2 block text-sm text-white/75">
                  LinkedIn profile
                </label>
                <input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  value={formData.linkedin}
                  onChange={handleChange}
                  maxLength={500}
                  placeholder="https://linkedin.com/in/..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
                />
              </div>

              <div>
                <label htmlFor="portfolio" className="mb-2 block text-sm text-white/75">
                  Portfolio or GitHub URL
                </label>
                <input
                  id="portfolio"
                  name="portfolio"
                  type="url"
                  value={formData.portfolio}
                  onChange={handleChange}
                  maxLength={500}
                  placeholder="https://..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
                />
              </div>

              <div>
                <label htmlFor="resumeUrl" className="mb-2 block text-sm text-white/75">
                  Resume link *
                </label>
                <input
                  id="resumeUrl"
                  name="resumeUrl"
                  type="url"
                  value={formData.resumeUrl}
                  onChange={handleChange}
                  required
                  maxLength={1000}
                  placeholder="Link to your online resume"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
                />
                <p className="mt-2 text-xs leading-5 text-white/40">
                  Provide a shareable resume link, such as a Google Drive link
                  with viewing access enabled.
                </p>
              </div>

              <div>
                <label htmlFor="coverLetter" className="mb-2 block text-sm text-white/75">
                  Cover letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={4}
                  maxLength={3000}
                  placeholder="Tell us briefly why you are suitable for this role..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
                />
              </div>

              {message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border p-4 text-sm leading-6 ${
                    success
                      ? "border-green-500/30 bg-green-500/10 text-green-300"
                      : "border-red-500/30 bg-red-500/10 text-red-300"
                  }`}
                >
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-5 py-4 text-sm font-semibold text-black transition hover:bg-[#f0d477] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit application"}
                {!submitting && <Send size={16} />}
              </button>

              <p className="text-center text-xs leading-5 text-white/35">
                Your details will be submitted securely to our application API.
              </p>
            </form>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default JobDetails;
