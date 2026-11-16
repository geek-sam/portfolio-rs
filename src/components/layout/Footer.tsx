import React, { useEffect, useRef, useState } from "react";

const Footer: React.FC = () => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [pupil, setPupil] = useState({ x: 0, y: 0 });

  // Track mouse movement across the viewport
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!eyeRef.current) return;

      const rect = eyeRef.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;

      const angle = Math.atan2(dy, dx);
      const distance = Math.min(Math.sqrt(dx * dx + dy * dy), 300);
      const movement = (distance / 300) * 11;

      setPupil({
        x: Math.cos(angle) * movement,
        y: Math.sin(angle) * movement * 0.65,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer className="relative min-h-[700px] overflow-hidden bg-[#684B62] text-[#F5E7D3]">
      {/* Custom Animations */}
      <style>{`
        @keyframes eyeBlink {
          0%, 94%, 100% {
            transform: scaleY(0);
          }
          96% {
            transform: scaleY(1);
          }
          98% {
            transform: scaleY(0);
          }
        }

        .eye-blink {
          transform-box: fill-box;
          transform-origin: center;
          animation: eyeBlink 5.5s infinite;
        }

        .eye-pupil {
          transition: transform 0.16s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .eye-blink {
            animation: none;
          }
          .eye-pupil {
            transition: none;
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-[1290px] px-6 pb-6 pt-20 sm:px-10 lg:px-0 lg:pt-32">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Left: Contact Information */}
          <div className="lg:col-span-7">
            <p className="mb-7 text-[12px] font-semibold uppercase tracking-[1.8px] text-[#E9A99B]">
              Got a project?
            </p>

            <h2 className="max-w-[680px] font-serif text-[clamp(38px,5vw,76px)] italic leading-[1.02] tracking-[-2.5px] text-[#F8EADB]">
              Got a brand with a long memory? Let’s write its next chapter, over
              chai.
            </h2>

            <a
              href="mailto:studio@ruhanisethia.in"
              className="mt-7 inline-block border-b-2 border-[#E8B4A2] pb-1 font-serif text-xl font-medium transition-colors hover:text-[#E8B4A2] sm:text-2xl"
            >
              studio@ruhanisethia.in
            </a>
          </div>

          {/* Right: Interactive Eye */}
          <div className="flex flex-col items-center justify-start pt-2 lg:col-span-5 lg:pt-16">
            <div
              ref={eyeRef}
              className="relative flex h-[145px] w-[270px] items-center justify-center"
            >
              <svg
                viewBox="0 0 270 145"
                className="h-full w-full overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="eyeClip">
                    <path d="M14 86 C65 30 203 25 256 67 C205 122 65 125 14 86Z" />
                  </clipPath>
                </defs>

                {/* Eyeball */}
                <g clipPath="url(#eyeClip)">
                  <rect width="270" height="145" fill="#F2E6D0" />

                  {/* Iris */}
                  <g
                    className="eye-pupil"
                    transform={`translate(${pupil.x}, ${pupil.y})`}
                  >
                    <circle cx="86" cy="77" r="34" fill="#B88C3F" />
                    <circle cx="86" cy="77" r="27" fill="#30221C" />
                    <circle cx="86" cy="77" r="16" fill="#1D1815" />
                    <circle cx="76" cy="65" r="5" fill="#F5E8D3" />
                  </g>
                </g>

                {/* Eye Outline */}
                <path
                  d="M14 86 C65 30 203 25 256 67 C205 122 65 125 14 86Z"
                  stroke="#251B17"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Upper Eyelid */}
                <path
                  d="M38 47 C94 25 191 25 244 47"
                  stroke="#251B17"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                <path
                  d="M64 59 C115 43 176 43 214 58"
                  stroke="#251B17"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                {/* Blinking Eyelid */}
                <path
                  className="eye-blink"
                  d="M14 86 C65 30 203 25 256 67 C205 122 65 125 14 86Z"
                  fill="#684B62"
                  stroke="#251B17"
                  strokeWidth="3"
                />
              </svg>
            </div>

            <p className="mt-5 text-center text-[11px] font-medium uppercase tracking-[1.5px] text-[#E9A99B]">
              Bani Thani is keeping an eye on you
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-t-full rounded-b-[5px] border border-[#DF8B77] transition-all hover:-translate-y-1 hover:bg-[#F5E7D3] hover:text-[#684B62]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                aria-label="Behance"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-t-full rounded-b-[5px] border border-[#DF8B77] font-sans text-xl font-bold transition-all hover:-translate-y-1 hover:bg-[#F5E7D3] hover:text-[#684B62]"
              >
                Bē
              </a>

              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-t-full rounded-b-[5px] border border-[#DF8B77] transition-all hover:-translate-y-1 hover:bg-[#F5E7D3] hover:text-[#684B62]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 0 0-3.64 19.31c-.09-.8-.17-2.03.04-2.9l1.3-5.5s-.33-.67-.33-1.66c0-1.55.9-2.7 2.03-2.7.96 0 1.42.72 1.42 1.59 0 .97-.62 2.42-.94 3.76-.27 1.12.56 2.04 1.66 2.04 1.99 0 3.52-2.1 3.52-5.13 0-2.68-1.92-4.56-4.66-4.56-3.17 0-5.03 2.38-5.03 4.84 0 .96.37 1.99.83 2.55.09.11.1.2.07.31l-.31 1.26c-.05.2-.16.24-.36.14-1.35-.63-2.19-2.6-2.19-4.18 0-3.4 2.47-6.53 7.12-6.53 3.74 0 6.65 2.67 6.65 6.24 0 3.72-2.35 6.72-5.61 6.72-1.1 0-2.13-.57-2.49-1.24l-.68 2.59c-.25.95-.93 2.14-1.38 2.87A10 10 0 1 0 12 2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Large Hindi Typography */}
        <div className="pointer-events-none relative flex justify-center py-16 sm:py-20 lg:py-10">
          <span className="select-none font-serif text-[clamp(100px,20vw,270px)] font-medium leading-[1.1] tracking-[-0.07em] text-[#E6A398]">
            रुहानी
          </span>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="flex flex-col justify-between gap-5 border-t border-[#D77C68] pt-7 text-sm text-[#F3D8C8] md:flex-row md:items-start">
          <p>© 2026 Ruhani Sethia Studio · Made slowly in Jaipur</p>

          <a
            href="https://commons.wikimedia.org/"
            target="_blank"
            rel="noreferrer"
            className="max-w-[480px] text-left underline decoration-[#DF9A86] underline-offset-4 transition-colors hover:text-white md:text-right"
          >
            Paintings: Kishangarh miniatures from museum collections via
            Wikimedia Commons · Image credits →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
