import React from "react";

const PaperBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {/* Warm paper base */}
      <div className="absolute inset-0 bg-[#F3EFE7]" />

      {/* Natural paper grain */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.13]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>

        <rect width="100%" height="100%" filter="url(#paper-noise)" />
      </svg>

      {/* Subtle warm variation */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 20%, rgba(185,155,112,0.12), transparent 55%), radial-gradient(ellipse at 80% 75%, rgba(185,155,112,0.10), transparent 50%)",
        }}
      />
    </div>
  );
};

export default PaperBackground;
