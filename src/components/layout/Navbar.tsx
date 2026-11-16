import React from "react";

const Navbar: React.FC = () => {
  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Archives", href: "/archives" },
    { label: "Say Hello", href: "/contact" },
  ];

  return (
    <header className="relative w-full bg-[#F1E7D5]">
      <nav className="mx-auto flex min-h-[124px] max-w-[1440px] items-center justify-between border-b border-[#A98653] px-6 md:px-10 lg:px-0">
        {/* Brand */}
        <a
          href="/"
          className="flex items-center gap-4"
          aria-label="Ruhani Sethia Home"
        >
          {/* Logo Mark */}
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-t-[20px] rounded-br-[5px] bg-[#684B62] text-white">
            <span className="font-serif text-[29px] leading-none">रु</span>
          </div>

          {/* Brand Name */}
          <span className="font-serif text-[26px] font-medium tracking-[-0.5px] text-[#30251F] sm:text-[29px]">
            Ruhani Sethia
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-2 text-[13px] font-medium uppercase tracking-[1.5px] text-[#30251F] transition-colors duration-300 hover:text-[#684B62] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#684B62] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Open navigation menu"
        >
          <span className="h-[1.5px] w-6 bg-[#30251F]" />
          <span className="h-[1.5px] w-6 bg-[#30251F]" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
