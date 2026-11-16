import React from "react";

const processSteps = [
  {
    number: "१",
    title: "Rekha · Research",
    duration: "Weeks 1 — 2",
    description:
      "I dig through archives, markets and your family’s old shoeboxes, then turn it all into a loose drawing of how the brand should feel.",
  },
  {
    number: "२",
    title: "Rang · Direction",
    duration: "Weeks 3 — 4",
    description:
      "Two or three routes in colour, type and image, shown as painted boards. No sixty-slide decks, promise.",
  },
  {
    number: "३",
    title: "Rachna · System",
    duration: "Weeks 5 — 9",
    description:
      "We pick a route together and I build it out everywhere, from the business card to the shop sign.",
  },
  {
    number: "४",
    title: "Pardakht · Finish",
    duration: "Weeks 10 — 12",
    description:
      "Guidelines, production files and press checks. Yes, I’ll be at the printer at 7am, fussing over the last gold rule.",
  },
];

// Decorative ornamental divider
const OrnamentalDivider = () => (
  <svg
    viewBox="0 0 620 38"
    fill="none"
    className="mt-5 h-auto w-full max-w-[620px]"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g stroke="#A98653" strokeWidth="1.2" opacity="0.85">
      <path d="M0 19 Q38 -2 76 19 Q38 40 0 19Z" />
      <path d="M76 19 Q114 -2 152 19 Q114 40 76 19Z" />
      <path d="M152 19 Q190 -2 228 19 Q190 40 152 19Z" />
      <path d="M228 19 Q266 -2 304 19 Q266 40 228 19Z" />
      <path d="M304 19 Q342 -2 380 19 Q342 40 304 19Z" />
      <path d="M380 19 Q418 -2 456 19 Q418 40 380 19Z" />
      <path d="M456 19 Q494 -2 532 19 Q494 40 456 19Z" />
      <path d="M532 19 Q570 -2 608 19 Q570 40 532 19Z" />

      <path d="M38 9 Q31 0 38 0 Q45 0 38 9Z" />
      <path d="M114 9 Q107 0 114 0 Q121 0 114 9Z" />
      <path d="M190 9 Q183 0 190 0 Q197 0 190 9Z" />
      <path d="M266 9 Q259 0 266 0 Q273 0 266 9Z" />
      <path d="M342 9 Q335 0 342 0 Q349 0 342 9Z" />
      <path d="M418 9 Q411 0 418 0 Q425 0 418 9Z" />
      <path d="M494 9 Q487 0 494 0 Q501 0 494 9Z" />
    </g>

    <g fill="#F3EFE7" stroke="#684B62" strokeWidth="1.4">
      <circle cx="76" cy="19" r="4.5" />
      <circle cx="228" cy="19" r="4.5" />
      <circle cx="380" cy="19" r="4.5" />
      <circle cx="532" cy="19" r="4.5" />
    </g>
  </svg>
);

const Process: React.FC = () => {
  return (
    <section
      id="process"
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

      <div className="relative mx-auto max-w-[1110px]">
        {/* Section Heading */}
        <div className="max-w-[850px]">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[1.6px] text-[#684B62] sm:text-[11px]">
            How we'll work together
          </p>

          <h2 className="max-w-[850px] font-serif text-[clamp(38px,5.2vw,64px)] italic leading-[1.05] tracking-[-2px] text-[#292329]">
            Four stages, borrowed shamelessly from the court painters
          </h2>

          <OrnamentalDivider />
        </div>

        {/* Process Steps */}
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="group border-t-[2px] border-[#C4A66D] pt-5 transition-colors duration-300 hover:border-[#684B62]"
            >
              {/* Step Number */}
              <span className="mb-4 block font-serif text-[23px] leading-none text-[#A98653]">
                {step.number}
              </span>

              {/* Step Title */}
              <h3 className="mb-3 font-serif text-[23px] leading-tight text-[#292329]">
                {step.title}
              </h3>

              {/* Duration */}
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#84916D]">
                {step.duration}
              </p>

              {/* Description */}
              <p className="max-w-[275px] text-[13px] leading-[1.65] text-[#746B67]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
