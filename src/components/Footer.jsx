import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Mail,
  Globe2,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/#services" },
    { label: "Technology", to: "/#technology" },
    { label: "Portfolio", to: "/#portfolio" },
    { label: "Blog", to: "/blog" },
    { label: "Careers", to: "/careers" },
  ];

  const resourceLinks = [
    { label: "Contact Us", to: "/contact" },
    { label: "Book a Consultation", to: "/consultation" },
    { label: "Business Health Checkup", to: "/business-health-checkup" },
    {
      label: "Software Project Planning Guide",
      to: "/software-project-planning-guide",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[#D4AF37]/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#D4AF37]/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* CTA section */}
        <div className="flex flex-col gap-7 border-b border-white/10 py-12 sm:py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Have a project in mind?
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Let's build something{" "}
              <span className="gold-text">remarkable.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Tell us about your business goals. Let's explore how technology
              can help you move forward.
            </p>
          </div>

          <Link
            to="/consultation"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#D4AF37] px-6 py-4 text-sm font-semibold text-black transition duration-300 hover:bg-[#f0d477]"
          >
            Start a Conversation
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]">
                <Code2 size={23} />
              </span>

              <span className="text-xl font-semibold tracking-wide">
                Riyadvi
                <span className="text-[#D4AF37]">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Riyadvi Software Technologies helps businesses explore digital
              solutions through software development, modern web experiences,
              and technology-driven innovation.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
              <Globe2 size={16} className="text-[#D4AF37]" />
              <span>Technology for a better tomorrow.</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Explore
            </h3>

            <ul className="space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-[#D4AF37]"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Resources
            </h3>

            <ul className="space-y-4">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-start gap-2 text-sm leading-6 text-white/55 transition-colors hover:text-[#D4AF37]"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      size={13}
                      className="mt-1 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Get in Touch
            </h3>

            <p className="text-sm leading-7 text-white/55">
              Have questions or an idea to discuss? Reach out to our team
              through the contact page.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] transition-colors hover:text-[#f0d477]"
            >
              <Mail size={16} />
              Contact our team
              <ArrowRight size={15} />
            </Link>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.025] p-4">
              <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                Let's connect
              </p>
              <Link
                to="/consultation"
                className="mt-2 inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-[#D4AF37]"
              >
                Discuss your project
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Riyadvi Software Technologies. All rights reserved.
          </p>

          <Link
            to="/"
            className="inline-flex w-fit items-center gap-2 transition-colors hover:text-[#D4AF37]"
          >
            Crafted with purpose
            <span className="text-[#D4AF37]">✦</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;