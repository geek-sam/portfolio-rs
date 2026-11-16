import React from "react";

// Decorative ornamental divider
const OrnamentalDivider = () => (
  <svg
    viewBox="0 0 620 38"
    className="h-auto w-full max-w-[600px]"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g stroke="#A98653" strokeWidth="1.2">
      {Array.from({ length: 8 }).map((_, i) => {
        const x = i * 76;

        return (
          <g key={i}>
            <path
              d={`M${x} 19 Q${x + 38} -2 ${x + 76} 19 Q${x + 38} 40 ${x} 19Z`}
            />
            <path
              d={`M${x + 38} 9 Q${x + 31} 0 ${x + 38} 0 Q${x + 45} 0 ${x + 38} 9Z`}
            />
          </g>
        );
      })}
    </g>

    <g fill="#F3EFE7" stroke="#684B62" strokeWidth="1.4">
      {[76, 228, 380, 532].map((x) => (
        <circle key={x} cx={x} cy="19" r="4.5" />
      ))}
    </g>
  </svg>
);

const AboutIntro: React.FC = () => {
  return (
    <section
      id="about-intro"
      className="relative overflow-hidden bg-[#F3EFE7] px-6 py-20 sm:px-10 lg:px-0 lg:py-28"
    >
      {/* Paper Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            radial-gradient(#A88C65 0.6px, transparent 0.6px),
            radial-gradient(#A88C65 0.5px, transparent 0.5px)
          `,
          backgroundSize: "7px 7px, 11px 11px",
          backgroundPosition: "0 0, 3px 4px",
        }}
      />

      <div className="relative mx-auto max-w-[1195px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:gap-20">
          {/* Left: About Content */}
          <div className="max-w-[650px]">
            {/* Eyebrow */}
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[1.6px] text-[#684B62] sm:text-[11px]">
              About Me
            </p>

            {/* Hindi Label */}
            <p className="mb-6 font-serif text-[25px] text-[#A98653]">रुहानी</p>

            {/* Main Heading */}
            <h1 className="font-serif text-[clamp(48px,6.2vw,84px)] font-normal leading-[0.99] tracking-[-3px] text-[#292329]">
              Hi, I’m Ruhani.
              <br />
              I make old
              <br />
              brands feel new.
            </h1>

            {/* Introduction */}
            <div className="mt-7 space-y-6 text-[14px] leading-[1.85] text-[#746B67] sm:text-[16px]">
              <p>
                I’m an art director and brand designer in Jaipur. I spent six
                years leading design teams at agencies in Mumbai and Delhi, then
                came home in 2018 to work more closely with fewer clients, and
                to stop presenting to rooms of twenty.
              </p>

              <p>
                Most of the brands I work with are older than I am: sweet shops,
                jewellers, hotels and record labels with stories worth keeping.
                I borrow from Kishangarh miniatures because those painters
                solved my problem 250 years ago: how to fit a lot of meaning
                into a small, beautiful frame.
              </p>
            </div>

            {/* Ornamental Divider */}
            <div className="mt-8">
              <OrnamentalDivider />
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="mx-auto w-full max-w-[420px] lg:ml-auto lg:mr-0">
            <div className="relative overflow-hidden rounded-t-full rounded-b-[5px] border border-[#A98653] bg-[#C8A9A7] p-[14px]">
              {/* Inner Image Frame */}
              <div className="aspect-[0.75/1] overflow-hidden rounded-t-full rounded-b-[3px] border-[2px] border-[#A98653] bg-[#E8E0D5]">
                <img
                  src="./about.png"
                  alt="Portrait of Ruhani"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
