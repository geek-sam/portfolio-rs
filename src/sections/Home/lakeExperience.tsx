import React, { useCallback, useRef, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const LakeExperience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lastRipple = useRef(0);
  const rippleId = useRef(0);

  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  // Mouse movement and ripple generation
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMouse({ x, y });

    // Limit ripple creation frequency
    const now = Date.now();

    if (now - lastRipple.current > 130) {
      lastRipple.current = now;

      const id = ++rippleId.current;

      setRipples((prev) => [...prev.slice(-4), { id, x, y }]);

      // Remove expired ripples
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
      }, 1800);
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRipples([]);
  };

  return (
    <section
      ref={sectionRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="lake-section group relative flex min-h-[650px] w-full items-center justify-center overflow-hidden bg-[#292D31] sm:min-h-[750px] lg:min-h-[850px]"
    >
      {/* SVG Water Distortion Filter */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter
            id="lake-distortion"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.025"
              numOctaves="2"
              seed="4"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.012 0.025;0.018 0.035;0.012 0.025"
                dur="5s"
                repeatCount="indefinite"
              />
            </feTurbulence>

            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="4"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Background Artwork */}
      <div
        className="lake-artwork absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=2400&auto=format&fit=crop')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: isHovering ? "url(#lake-distortion)" : "none",
          transition: "filter 400ms ease",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#15191D]/45" />

      {/* Water Texture */}
      <div className="lake-water-texture pointer-events-none absolute inset-0 opacity-20" />

      {/* Ripple Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="lake-ripple absolute"
            style={{
              left: `${ripple.x}%`,
              top: `${ripple.y}%`,
            }}
          />
        ))}
      </div>

      {/* Inner Gold Border */}
      <div className="pointer-events-none absolute inset-[14px] z-20 border border-[#C7A76B]/70 sm:inset-[24px] lg:inset-[32px]" />

      {/* Decorative Corner Details */}
      <div className="pointer-events-none absolute left-[32px] top-[32px] z-20 h-3 w-3 border-l border-t border-[#C7A76B]" />
      <div className="pointer-events-none absolute right-[32px] top-[32px] z-20 h-3 w-3 border-r border-t border-[#C7A76B]" />
      <div className="pointer-events-none absolute bottom-[32px] left-[32px] z-20 h-3 w-3 border-b border-l border-[#C7A76B]" />
      <div className="pointer-events-none absolute bottom-[32px] right-[32px] z-20 h-3 w-3 border-b border-r border-[#C7A76B]" />

      {/* Center Content */}
      <div className="relative z-30 mx-auto flex max-w-[850px] flex-col items-center px-6 py-32 text-center">
        {/* Eyebrow */}
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1.8px] text-[#E8D9BF] sm:text-sm">
          Interlude · Lake Gundalao, c. 1750
        </p>

        {/* Hindi Heading */}
        <h2 className="font-serif text-[clamp(42px,7vw,90px)] leading-tight tracking-wide text-[#F0D89B]">
          राग ही राग है
        </h2>

        {/* English Heading */}
        <h3 className="mt-5 font-serif text-[clamp(34px,5vw,65px)] italic leading-tight tracking-[-2px] text-[#F2E8D7]">
          Colour itself is melody.
        </h3>

        {/* Instruction */}
        <p className="mt-3 text-sm text-[#E0D1BC] sm:text-base">
          Go on, run your cursor across the water
        </p>
      </div>

      {/* Optional Mouse Position Indicator */}
      <div
        className="pointer-events-none absolute z-30 hidden h-3 w-3 rounded-full border border-[#F0D89B]/70 transition-opacity duration-300 md:block"
        style={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
          opacity: isHovering ? 0.7 : 0,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Interaction Styles */}
      <style>{`
        .lake-water-texture {
          background-image:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 3px,
              rgba(255,255,255,0.08) 4px,
              transparent 5px
            );
          mix-blend-mode: soft-light;
        }

        .lake-ripple {
          width: 20px;
          height: 20px;
          border: 1px solid rgba(240, 216, 155, 0.7);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: lakeWave 1.8s ease-out forwards;
          box-shadow: 0 0 8px rgba(240, 216, 155, 0.12);
        }

        @keyframes lakeWave {
          0% {
            width: 15px;
            height: 15px;
            opacity: 0.8;
          }
          40% {
            opacity: 0.45;
          }
          100% {
            width: 230px;
            height: 230px;
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lake-ripple {
            animation: none;
            opacity: 0;
          }
        }

        @media (max-width: 640px) {
          .lake-ripple {
            width: 10px;
            height: 10px;
          }

          @keyframes lakeWave {
            0% {
              width: 10px;
              height: 10px;
              opacity: 0.7;
            }
            100% {
              width: 120px;
              height: 120px;
              opacity: 0;
            }
          }
        }
      `}</style>
    </section>
  );
};

export default LakeExperience;
