import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { label: "Services", href: "/#services" },
    { label: "Technology", href: "/#technology" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ];

  const isActive = (href) => {
    if (href === "/about") return location.pathname === "/about";
    if (href === "/blog") return location.pathname.startsWith("/blog");
    if (href === "/careers") return location.pathname.startsWith("/careers");
    return false;
  };

  const linkClass = (href) =>
    `text-sm transition-colors duration-200 hover:text-[#D4AF37] ${
      isActive(href) ? "text-[#D4AF37]" : "text-white/70"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group inline-flex shrink-0 items-center gap-3"
          aria-label="Riyadvi home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] transition-colors group-hover:bg-[#D4AF37]/20">
            <Code2 size={22} />
          </span>

          <span className="text-xl font-semibold tracking-wide text-white">
            Riyadvi<span className="text-[#D4AF37]">.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-8">
          {links.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={linkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/consultation"
          className="group hidden items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#f0d477] lg:inline-flex"
        >
          Let's Talk
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:border-[#D4AF37]/50 hover:text-[#D4AF37] lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050505] px-5 pb-6 pt-4 shadow-2xl lg:hidden sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={closeMenu}
                className={`border-b border-white/[0.07] py-4 text-sm transition-colors hover:text-[#D4AF37] ${
                  isActive(item.href) ? "text-[#D4AF37]" : "text-white/75"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="border-b border-white/[0.07] py-4 text-sm text-white/75 transition-colors hover:text-[#D4AF37]"
            >
              Contact
            </Link>

            <Link
              to="/business-health-checkup"
              onClick={closeMenu}
              className="border-b border-white/[0.07] py-4 text-sm text-white/75 transition-colors hover:text-[#D4AF37]"
            >
              Business Health Checkup
            </Link>

            <Link
              to="/software-project-planning-guide"
              onClick={closeMenu}
              className="border-b border-white/[0.07] py-4 text-sm text-white/75 transition-colors hover:text-[#D4AF37]"
            >
              Planning Guide
            </Link>

            <Link
              to="/consultation"
              onClick={closeMenu}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#f0d477]"
            >
              Book a Consultation
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;