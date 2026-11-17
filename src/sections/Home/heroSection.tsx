import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Left typography moves upward slowly
  const ruhaniY = useTransform(scrollYProgress, [0, 1], [0, -180]);

  // Portrait moves downward
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // Right typography moves upward faster
  const sethiaY = useTransform(scrollYProgress, [0, 1], [0, -280]);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#F3EBDD] text-[#292329]"
    >
      {/* Paper Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `
            radial-gradient(#a88c65 0.6px, transparent 0.6px),
            radial-gradient(#a88c65 0.5px, transparent 0.5px)
          `,
          backgroundSize: "7px 7px, 11px 11px",
          backgroundPosition: "0 0, 3px 4px",
        }}
      />

      {/* Main Container */}
      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-0">
        {/* Top Meta Information */}
        <div className="flex items-center justify-between pt-6 text-[10px] font-medium uppercase tracking-[1.5px] sm:text-xs">
          <span className="text-[#684B62]">Folio · Vol. I</span>
          <span className="hidden text-[#76685B] sm:block">
            Art Direction & Brand Design
          </span>
          <span className="text-[#76685B]">Jaipur · 26.91° N, 75.79° E</span>
        </div>

        {/* Hero Main Area */}
        <div className="relative grid min-h-[700px] grid-cols-1 md:grid-cols-12">
          {/* Left Content */}
          <div className="relative z-10 md:col-span-5">
            {/* Main Heading */}
            <motion.h1
              style={{ y: ruhaniY }}
              className="font-serif text-[clamp(90px,15vw,270px)] leading-[0.85] tracking-[-0.09em] text-[#261B17] md:mt-12 md:whitespace-nowrap"
            >
              Ruhani
            </motion.h1>

            {/* Hindi Name */}
            <p className="mt-5 font-serif text-4xl tracking-wide text-[#AC812E] md:text-5xl">
              रुहानी
            </p>

            {/* Description */}
            <div className="mt-12 max-w-[325px]">
              <p className="font-sans text-[15px] leading-[1.95] text-[#746B67] sm:text-[17px]">
                I make identities, packaging and campaigns for brands with
                grandmothers’ recipes and great-grandfathers’ signboards. I
                borrow the gold borders and lotus palettes of Kishangarh
                painting, minus the 250-year turnaround.
              </p>

              <a
                href="#work"
                className="mt-5 inline-flex items-center gap-2 font-serif text-2xl text-[#684B62] transition-transform hover:translate-x-2"
              >
                Take a look <span className="text-lg">↓</span>
              </a>
            </div>
          </div>

          {/* Center Portrait */}
          <motion.div
            style={{ y: imageY }}
            className="relative z-20 mt-12 flex justify-center md:absolute md:left-[49%] md:top-10 md:mt-0 md:block"
          >
            {/* Decorative Star */}
            <span className="absolute -left-8 top-4 text-[#C39B4C]">✦</span>

            {/* Portrait Frame */}

            <div className="relative h-[440px] w-[280px] overflow-hidden rounded-t-[145px] rounded-b-[8px] border-[10px] border-[#C6A04E] bg-[#D6C4A2] shadow-[0_15px_30px_rgba(70,48,20,0.15)] sm:h-[490px] sm:w-[325px]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop"
                alt="Vintage inspired portrait"
                className="h-full w-full object-cover object-center sepia-[0.35]"
              />
            </div>

            {/* Lotus Decoration */}
            <svg
              className="absolute -right-16 top-8 hidden h-16 w-20 text-[#B68A35] md:block"
              viewBox="0 0 100 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M50 65 Q15 30 10 35 Q30 65 50 65 Q70 65 90 35 Q85 30 50 65Z" />
              <path d="M50 65 Q20 10 50 5 Q80 10 50 65Z" />
              <path d="M50 65 Q35 15 50 5 Q65 15 50 65Z" />
              <path d="M50 65 L50 76 M25 65 Q50 78 75 65" />
            </svg>
          </motion.div>

          {/* Right Name Typography */}
          <motion.div
            style={{ y: sethiaY }}
            className="relative z-30 mt-[-30px] flex justify-end md:absolute md:bottom-0 md:right-[-10px] md:mt-0"
          >
            <h2 className="font-serif text-[clamp(90px,15vw,240px)] leading-[0.75] tracking-[-0.085em] text-[#684B62]">
              Sethia
            </h2>
          </motion.div>
        </div>

        {/* Bottom Information */}
        <div className="relative border-t border-[#AD853D] py-8 md:mt-2">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
            {/* Practice */}
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#684B62]">
                Practice
              </span>
              <p className="mt-2 text-sm leading-[1.65] text-[#746B67]">
                Six years art-directing at agencies in Mumbai and Delhi taught
                me plenty. In 2018 I came home to Jaipur to do it my way.
              </p>
            </div>

            {/* Focus */}
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#684B62]">
                Focus
              </span>
              <p className="mt-2 text-sm leading-[1.65] text-[#746B67]">
                Sweet shops, hotels, jewellers and record labels: brands old
                enough to have stories, and brave enough to want new ones.
              </p>
            </div>

            {/* Availability */}
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#684B62]">
                Now
              </span>

              <p className="mt-2 flex items-center gap-2 text-sm text-[#746B67]">
                <span className="text-[#79905C]">♧</span>
                Now booking spring 2027
              </p>

              <a
                href="#contact"
                className="mt-2 inline-flex items-center gap-2 font-serif text-2xl text-[#684B62] transition-transform hover:translate-x-2"
              >
                Let’s talk <span className="text-lg">→</span>
              </a>
            </div>

            {/* Peacock Decoration */}
            <div className="hidden justify-end md:flex">
              <svg
                viewBox="0 0 160 130"
                className="h-28 w-36 text-[#B68A35]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              >
                <path d="M30 110 Q45 65 25 25 Q50 50 60 65 Q80 25 130 15" />
                <path d="M60 65 Q90 45 135 40" />
                <path d="M60 65 Q100 65 140 75" />
                <path d="M60 65 Q100 90 130 105" />
                <path d="M60 65 Q85 110 115 120" />
                <path d="M30 110 L55 110 L60 65" />
                <path d="M30 110 L25 120 M55 110 L58 120" />
                <circle cx="130" cy="15" r="4" />
                <circle cx="135" cy="40" r="4" />
                <circle cx="140" cy="75" r="4" />
                <circle cx="130" cy="105" r="4" />
                <circle cx="115" cy="120" r="4" />
                <path d="M24 25 Q15 5 30 8 Q40 5 25 25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
