
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Send,
  Sparkles,
} from "lucide-react";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  projectDetails: "",
  preferredContact: "Email",
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#D4AF37]/70";

function Consultation() {
  const [formData, setFormData] = useState(initialForm);
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
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/consultation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to submit your consultation request."
        );
      }

      setSuccess(true);
      setMessage(
        result.message || "Your consultation request has been submitted."
      );
      setFormData(initialForm);
    } catch (error) {
      setMessage(
        error.message ||
          "Something went wrong. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-black pb-20 pt-32 text-white">
      <section className="relative">
        <div className="premium-grid absolute inset-0 opacity-40" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-[#D4AF37]"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-xs text-[#D4AF37]">
                <Sparkles size={14} />
                Let's build something meaningful
              </span>

              <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Your next big idea starts with a{" "}
                <span className="gold-text">conversation.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
                Tell us about your business, project, or digital challenge.
                We'll use the details to understand your goals and discuss
                potential solutions.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  {
                    title: "Understand your goals",
                    description:
                      "Share your challenges, audience, and desired outcomes.",
                  },
                  {
                    title: "Explore the right solution",
                    description:
                      "Discuss suitable technologies and possible approaches.",
                  },
                  {
                    title: "Plan your next steps",
                    description:
                      "Identify practical priorities for your project.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-sm text-[#D4AF37]">
                      0{index + 1}
                    </div>
                    <div>
                      <h2 className="font-medium">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-white/50">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-sm text-white/50">
                  Looking for something else?
                </p>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:text-[#f0d477]"
                >
                  Visit our contact page
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="glass-panel gold-glow rounded-3xl p-6 sm:p-9">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                Free consultation
              </p>

              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Tell us about your project
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Fields marked with * are required.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm text-white/75"
                    >
                      Full name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your name"
                      autoComplete="name"
                      maxLength={100}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm text-white/75"
                    >
                      Email address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="you@example.com"
                      autoComplete="email"
                      maxLength={254}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm text-white/75"
                    >
                      Phone number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="+971 ..."
                      autoComplete="tel"
                      maxLength={25}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm text-white/75"
                    >
                      Company name
                    </label>
                    <input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your company"
                      autoComplete="organization"
                      maxLength={150}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm text-white/75"
                  >
                    What service do you need? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    <option value="" disabled className="bg-black">
                      Select a service
                    </option>
                    <option value="Web Development" className="bg-black">
                      Web Development
                    </option>
                    <option value="App Development" className="bg-black">
                      App Development
                    </option>
                    <option value="UI/UX Design" className="bg-black">
                      UI/UX Design
                    </option>
                    <option value="Digital Marketing" className="bg-black">
                      Digital Marketing
                    </option>
                    <option value="AR / VR" className="bg-black">
                      AR / VR
                    </option>
                    <option value="3D Modeling" className="bg-black">
                      3D Modeling
                    </option>
                    <option value="Business Strategy" className="bg-black">
                      Business Strategy
                    </option>
                    <option value="Other" className="bg-black">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm text-white/75"
                  >
                    Estimated project budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" className="bg-black">
                      Select a budget range
                    </option>
                    <option value="Under AED 5,000" className="bg-black">
                      Under AED 5,000
                    </option>
                    <option value="AED 5,000–15,000" className="bg-black">
                      AED 5,000–15,000
                    </option>
                    <option value="AED 15,000–50,000" className="bg-black">
                      AED 15,000–50,000
                    </option>
                    <option value="Above AED 50,000" className="bg-black">
                      Above AED 50,000
                    </option>
                    <option value="Not decided" className="bg-black">
                      Not decided yet
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="projectDetails"
                    className="mb-2 block text-sm text-white/75"
                  >
                    Describe your project or challenge *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    className={`${inputClass} resize-y leading-6`}
                    placeholder="What are you looking to build or improve?"
                    rows={5}
                    maxLength={3000}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="preferredContact"
                    className="mb-2 block text-sm text-white/75"
                  >
                    Preferred contact method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="Email" className="bg-black">
                      Email
                    </option>
                    <option value="Phone" className="bg-black">
                      Phone
                    </option>
                    <option value="WhatsApp" className="bg-black">
                      WhatsApp
                    </option>
                  </select>
                </div>

                {message && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`flex gap-3 rounded-xl border p-4 text-sm leading-6 ${
                      success
                        ? "border-green-500/30 bg-green-500/10 text-green-300"
                        : "border-red-500/30 bg-red-500/10 text-red-300"
                    }`}
                  >
                    {success && (
                      <CheckCircle2 size={18} className="mt-1 shrink-0" />
                    )}
                    <span>{message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-4 font-semibold text-black transition hover:bg-[#f0d477] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Submitting request..." : "Request consultation"}
                  {!submitting && <Send size={17} />}
                </button>

                <p className="text-center text-xs leading-5 text-white/40">
                  Your details will be submitted to our consultation API so
                  your request can be reviewed.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Consultation;
