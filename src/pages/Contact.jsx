import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    requirement: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit your enquiry.");
      }

      setStatus({
        loading: false,
        success: true,
        error: "",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        requirement: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        loading: false,
        success: false,
        error:
          error.message ||
          "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-32 text-white">
      <section className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Contact Riyadvi
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something{" "}
            <span className="gold-text">Exceptional.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Tell us about your business, project, or digital challenge.
            Our team will get back to you and explore how Riyadvi can
            help.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT */}
          <div className="space-y-6">
            <div className="glass-panel gold-glow rounded-3xl p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                Start a conversation
              </p>

              <h2 className="mt-4 text-2xl font-semibold">
                Have an idea?
              </h2>

              <p className="mt-4 leading-7 text-white/60">
                Whether you need a website, application, digital
                strategy, immersive experience, or a custom software
                solution, tell us what you have in mind.
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass-panel flex items-center gap-4 rounded-2xl p-5">
                <div className="rounded-xl border border-[#D4AF37]/30 p-3 text-[#D4AF37]">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm text-white/40">Email</p>
                  <p className="mt-1 text-sm">
                    hello@riyadvi.com
                  </p>
                </div>
              </div>

              <div className="glass-panel flex items-center gap-4 rounded-2xl p-5">
                <div className="rounded-xl border border-[#D4AF37]/30 p-3 text-[#D4AF37]">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-sm text-white/40">Phone</p>
                  <p className="mt-1 text-sm">
                    +91 XXX XXX XXXX
                  </p>
                </div>
              </div>

              <div className="glass-panel flex items-center gap-4 rounded-2xl p-5">
                <div className="rounded-xl border border-[#D4AF37]/30 p-3 text-[#D4AF37]">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm text-white/40">Location</p>
                  <p className="mt-1 text-sm">
                    India · UAE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10">
            {status.success ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-5 text-[#D4AF37]">
                  <CheckCircle2 size={42} />
                </div>

                <h2 className="mt-6 text-3xl font-semibold">
                  Thank You!
                </h2>

                <p className="mt-4 max-w-md leading-7 text-white/60">
                  Your enquiry has been submitted successfully.
                  Our team will review your requirement and get
                  back to you.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setStatus({
                      loading: false,
                      success: false,
                      error: "",
                    })
                  }
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#D4AF37] px-6 py-3 text-sm text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
                >
                  Send Another Enquiry
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm text-white/60"
                    >
                      Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm text-white/60"
                    >
                      Email *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm text-white/60"
                    >
                      Phone *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+971 / +91"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm text-white/60"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="requirement"
                    className="mb-2 block text-sm text-white/60"
                  >
                    Requirement *
                  </label>

                  <select
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/60"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">
                      Web Development
                    </option>
                    <option value="App Development">
                      App Development
                    </option>
                    <option value="Digital Marketing">
                      Digital Marketing
                    </option>
                    <option value="AR / VR">AR / VR</option>
                    <option value="3D Modeling">
                      3D Modeling
                    </option>
                    <option value="UI/UX Design">
                      UI/UX Design
                    </option>
                    <option value="Custom Software">
                      Custom Software
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-white/60"
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project or requirement..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
                  />
                </div>

                {status.error && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {status.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-4 text-sm font-semibold text-black transition hover:bg-[#f0d76a] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status.loading
                    ? "Submitting..."
                    : "Submit Enquiry"}

                  {!status.loading && <ArrowRight size={17} />}
                </button>

                <p className="text-center text-xs leading-5 text-white/35">
                  By submitting this form, you agree to be contacted
                  regarding your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;