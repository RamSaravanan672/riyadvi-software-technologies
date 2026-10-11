import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Business Information",
  },
  {
    number: 2,
    title: "Digital Presence",
  },
  {
    number: 3,
    title: "Marketing",
  },
  {
    number: 4,
    title: "Technology",
  },
  {
    number: 5,
    title: "Your Details",
  },
];

function BusinessHealthCheckup() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    businessType: "",
    digitalPresence: "",
    website: "",
    marketing: "",
    technology: "",
    name: "",
    email: "",
    phone: "",
    company: "",
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

    if (status.error) {
      setStatus((previous) => ({
        ...previous,
        error: "",
      }));
    }
  };

  const validateCurrentStep = () => {
    if (currentStep === 1) {
      if (!formData.businessType) {
        setStatus({
          loading: false,
          success: false,
          error: "Please select your business type.",
        });
        return false;
      }
    }

    if (currentStep === 2) {
      if (!formData.digitalPresence || !formData.website) {
        setStatus({
          loading: false,
          success: false,
          error: "Please complete the digital presence section.",
        });
        return false;
      }
    }

    if (currentStep === 3) {
      if (!formData.marketing) {
        setStatus({
          loading: false,
          success: false,
          error: "Please select your current marketing approach.",
        });
        return false;
      }
    }

    if (currentStep === 4) {
      if (!formData.technology) {
        setStatus({
          loading: false,
          success: false,
          error: "Please select your current technology situation.",
        });
        return false;
      }
    }

    if (currentStep === 5) {
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone
      ) {
        setStatus({
          loading: false,
          success: false,
          error: "Please complete your name, email and phone number.",
        });
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (!validateCurrentStep()) {
      return;
    }

    setStatus({
      loading: false,
      success: false,
      error: "",
    });

    if (currentStep < 5) {
      setCurrentStep((previous) => previous + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((previous) => previous - 1);

      setStatus({
        loading: false,
        success: false,
        error: "",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateCurrentStep()) {
      return;
    }

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    try {
      const response = await fetch(
        "http://localhost:5000/api/health-checkup",
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
          data.message || "Unable to submit your health checkup."
        );
      }

      setStatus({
        loading: false,
        success: true,
        error: "",
      });
    } catch (error) {
      console.error("Health Checkup form error:", error);

      setStatus({
        loading: false,
        success: false,
        error:
          error.message ||
          "Something went wrong. Please try again.",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      businessType: "",
      digitalPresence: "",
      website: "",
      marketing: "",
      technology: "",
      name: "",
      email: "",
      phone: "",
      company: "",
    });

    setCurrentStep(1);

    setStatus({
      loading: false,
      success: false,
      error: "",
    });
  };

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-32 text-white">
      <section className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
            <Sparkles size={14} />
            Business Health Checkup
          </div>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Is Your Business Ready for Its{" "}
            <span className="gold-text">Next Digital Growth Stage?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Answer a few questions about your business, digital
            presence, marketing and technology. We&apos;ll use the
            information to understand where your business can improve.
          </p>
        </div>

        {/* SUCCESS */}
        {status.success ? (
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="glass-panel gold-glow rounded-3xl p-8 text-center sm:p-12">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">
                <CheckCircle2 size={42} />
              </div>

              <h2 className="mt-7 text-3xl font-semibold">
                Your Health Checkup Is Submitted
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-white/60">
                Thank you for sharing your business information.
                Our team can now review your digital presence,
                marketing and technology situation.
              </p>

              <button
                type="button"
                onClick={resetForm}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#D4AF37] px-7 py-3 text-sm font-medium text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
              >
                Start Another Checkup
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            {/* LEFT PROGRESS */}
            <aside className="glass-panel h-fit rounded-3xl p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                Assessment
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                Understand Your Digital Health
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Complete the five short steps to help us understand
                your current business and technology position.
              </p>

              <div className="mt-8 space-y-3">
                {steps.map((step) => {
                  const active = currentStep === step.number;
                  const completed = currentStep > step.number;

                  return (
                    <div
                      key={step.number}
                      className={`flex items-center gap-4 rounded-2xl border p-4 transition ${
                        active
                          ? "border-[#D4AF37]/50 bg-[#D4AF37]/10"
                          : completed
                            ? "border-[#D4AF37]/20 bg-white/[0.02]"
                            : "border-white/5 bg-white/[0.015]"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                          active || completed
                            ? "bg-[#D4AF37] text-black"
                            : "border border-white/10 text-white/40"
                        }`}
                      >
                        {completed ? (
                          <CheckCircle2 size={18} />
                        ) : (
                          step.number
                        )}
                      </div>

                      <div>
                        <p
                          className={`text-sm ${
                            active
                              ? "text-white"
                              : "text-white/50"
                          }`}
                        >
                          {step.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-[#D4AF37]"
                />

                <p className="text-xs leading-5 text-white/40">
                  Your information is used only to understand your
                  business requirements and improve the consultation
                  process.
                </p>
              </div>
            </aside>

            {/* FORM */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10">
              <form onSubmit={handleSubmit}>
                {/* STEP 1 */}
                {currentStep === 1 && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                      Step 01
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold">
                      Tell us about your business
                    </h2>

                    <p className="mt-3 text-white/50">
                      Understanding your business is the first step
                      toward identifying meaningful digital
                      opportunities.
                    </p>

                    <div className="mt-8">
                      <label
                        htmlFor="businessType"
                        className="mb-3 block text-sm text-white/60"
                      >
                        What type of business do you operate? *
                      </label>

                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]/60"
                      >
                        <option value="">Select business type</option>
                        <option value="Startup">Startup</option>
                        <option value="Small Business">
                          Small Business
                        </option>
                        <option value="Medium Business">
                          Medium Business
                        </option>
                        <option value="Enterprise">
                          Enterprise
                        </option>
                        <option value="Professional Services">
                          Professional Services
                        </option>
                        <option value="E-Commerce">
                          E-Commerce
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {currentStep === 2 && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                      Step 02
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold">
                      Evaluate your digital presence
                    </h2>

                    <p className="mt-3 text-white/50">
                      Tell us where your website and digital
                      experience currently stand.
                    </p>

                    <div className="mt-8 space-y-6">
                      <div>
                        <label
                          htmlFor="digitalPresence"
                          className="mb-3 block text-sm text-white/60"
                        >
                          How would you describe your digital
                          presence? *
                        </label>

                        <select
                          id="digitalPresence"
                          name="digitalPresence"
                          value={formData.digitalPresence}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]/60"
                        >
                          <option value="">
                            Select an option
                          </option>
                          <option value="No digital presence">
                            No digital presence
                          </option>
                          <option value="Basic">
                            Basic
                          </option>
                          <option value="Growing">
                            Growing
                          </option>
                          <option value="Established">
                            Established
                          </option>
                          <option value="Advanced">
                            Advanced
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="website"
                          className="mb-3 block text-sm text-white/60"
                        >
                          What best describes your website? *
                        </label>

                        <select
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]/60"
                        >
                          <option value="">
                            Select an option
                          </option>
                          <option value="No website">
                            We don't have a website
                          </option>
                          <option value="Needs improvement">
                            Existing website needs improvement
                          </option>
                          <option value="Outdated">
                            Website is outdated
                          </option>
                          <option value="Good">
                            Website is performing well
                          </option>
                          <option value="High performance">
                            High-performance digital platform
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {currentStep === 3 && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                      Step 03
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold">
                      Understand your marketing
                    </h2>

                    <p className="mt-3 text-white/50">
                      Tell us how your business currently approaches
                      digital marketing and customer acquisition.
                    </p>

                    <div className="mt-8">
                      <label
                        htmlFor="marketing"
                        className="mb-3 block text-sm text-white/60"
                      >
                        What is your current marketing situation? *
                      </label>

                      <select
                        id="marketing"
                        name="marketing"
                        value={formData.marketing}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]/60"
                      >
                        <option value="">
                          Select an option
                        </option>
                        <option value="No digital marketing">
                          No digital marketing
                        </option>
                        <option value="Social media only">
                          Mainly social media
                        </option>
                        <option value="SEO">
                          SEO focused
                        </option>
                        <option value="Paid advertising">
                          Paid advertising
                        </option>
                        <option value="Multi-channel">
                          Multi-channel marketing
                        </option>
                        <option value="Advanced strategy">
                          Advanced digital strategy
                        </option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {currentStep === 4 && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                      Step 04
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold">
                      Assess your technology
                    </h2>

                    <p className="mt-3 text-white/50">
                      Help us understand the technology supporting
                      your business today.
                    </p>

                    <div className="mt-8">
                      <label
                        htmlFor="technology"
                        className="mb-3 block text-sm text-white/60"
                      >
                        How would you describe your technology
                        setup? *
                      </label>

                      <select
                        id="technology"
                        name="technology"
                        value={formData.technology}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]/60"
                      >
                        <option value="">
                          Select an option
                        </option>
                        <option value="Mostly manual">
                          Mostly manual processes
                        </option>
                        <option value="Basic software">
                          Basic software tools
                        </option>
                        <option value="Multiple systems">
                          Multiple disconnected systems
                        </option>
                        <option value="Integrated">
                          Integrated business systems
                        </option>
                        <option value="Advanced technology">
                          Advanced technology infrastructure
                        </option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 5 */}
                {currentStep === 5 && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                      Step 05
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold">
                      Let&apos;s connect
                    </h2>

                    <p className="mt-3 text-white/50">
                      Provide your contact details so the Riyadvi
                      team can follow up with you.
                    </p>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
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
                          placeholder="Your name"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
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
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
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
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
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
                          placeholder="+971 / +91"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/60"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ERROR */}
                {status.error && (
                  <div className="mt-7 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {status.error}
                  </div>
                )}

                {/* NAVIGATION */}
                <div className="mt-10 flex flex-col-reverse gap-3 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
                    >
                      <ArrowLeft size={16} />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 5 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#f0d76a]"
                    >
                      Continue
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={status.loading}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#f0d76a] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status.loading
                        ? "Submitting..."
                        : "Submit Health Checkup"}

                      {!status.loading && (
                        <ArrowRight size={16} />
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default BusinessHealthCheckup;