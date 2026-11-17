import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Archives", href: "/archive" },
    { label: "Say Hello", href: "/contact" },
  ];

  return (
    <header className="relative w-full bg-[#F1E7D5]">
      <nav className="mx-auto flex min-h-[124px] max-w-[1440px] items-center justify-between border-b border-[#A98653] px-6 md:px-10 lg:px-0">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-4"
          aria-label="Ruhani Sethia Home"
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Logo Mark */}
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-t-[20px] rounded-br-[5px] bg-[#684B62] text-white">
            <span className="font-serif text-[29px] leading-none">रु</span>
          </div>

          {/* Brand Name */}
          <span className="font-serif text-[26px] font-medium tracking-[-0.5px] text-[#30251F] sm:text-[29px]">
            Ruhani Sethia
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex lg:gap-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `relative py-2 text-[13px] font-medium uppercase tracking-[1.5px] transition-colors duration-300 hover:text-[#684B62] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#684B62] after:transition-all after:duration-300 hover:after:w-full ${
                  isActive
                    ? "text-[#684B62] after:w-full"
                    : "text-[#30251F] after:w-0"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`h-[1.5px] w-6 bg-[#30251F] transition-transform duration-300 ${
              mobileMenuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-[#30251F] transition-transform duration-300 ${
              mobileMenuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-[#A98653] bg-[#F1E7D5] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium uppercase tracking-[1.5px] transition-colors ${
                    isActive ? "text-[#684B62]" : "text-[#30251F]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
