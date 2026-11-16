import React from "react";

const principles = [
  {
    number: "१",
    title: "Border first",
    description:
      "I design the frame before the logo. It settles colour, proportion and rhythm in week one, before anyone falls for a font.",
    icon: "arch",
  },
  {
    number: "२",
    title: "Colour by daylight",
    description:
      "Every colour is printed on three papers and checked in daylight and under a warm shop bulb. Screens lie. Paper doesn't.",
    icon: "lotus",
  },
  {
    number: "३",
    title: "Show the underdrawing",
    description:
      "You see my rough sketches before any polished slides, so we argue about ideas instead of kerning.",
    icon: "bird",
  },
];

// Custom decorative illustrations
const PrincipleIcon = ({ type }: { type: string }) => {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.15,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className="h-[76px] w-[76px] text-[#C8A9A7]"
      {...common}
      aria-hidden="true"
    >
      {type === "arch" && (
        <>
          <path d="M22 87 H78 M27 82 H73 V39 Q73 17 50 10 Q27 17 27 39Z" />
          <path d="M34 82 V42 Q34 23 50 20 Q66 23 66 42 V82" />
          <path d="M39 82 V45 Q39 30 50 29 Q61 30 61 45 V82" />
          <path d="M19 37 H81 M44 10 L50 3 L56 10" />
          <path d="M50 3 V0" />
          <path
            d="M43 43 V80 M57 43 V80 M39 56 H61 M39 68 H61"
            stroke="#A98653"
          />
          <path d="M22 87 L17 92 M78 87 L83 92" />
        </>
      )}

      {type === "lotus" && (
        <>
          <path d="M50 78 Q13 43 12 35 Q34 35 50 78Z" />
          <path d="M50 78 Q21 18 50 5 Q79 18 50 78Z" />
          <path d="M50 78 Q40 25 50 5 Q60 25 50 78Z" />
          <path d="M50 78 Q66 35 88 35 Q87 46 50 78Z" />
          <path d="M50 78 Q29 57 22 40 M50 78 Q72 57 78 40" />
          <path d="M18 84 Q50 72 82 84" stroke="#A98653" />
        </>
      )}

      {type === "bird" && (
        <>
          <path d="M10 65 Q30 58 49 57 Q63 54 71 39 Q78 26 70 18 Q60 12 53 24 Q43 43 54 56 Q62 64 82 58" />
          <path d="M54 56 Q45 67 45 82 M54 56 Q56 71 52 86" />
          <path d="M54 56 Q39 43 36 28" />
          <path d="M70 18 Q74 12 80 18" />
          <path d="M82 58 Q89 52 96 53 Q90 62 82 58Z" />
          <path d="M37 28 Q30 19 34 14" />
          <circle cx="68" cy="24" r="1.5" fill="currentColor" />
          <circle cx="78" cy="19" r="2" stroke="#A98653" />
        </>
      )}
    </svg>
  );
};

const WorkingPrinciples: React.FC = () => {
  return (
    <section
      id="working-principles"
      className="relative overflow-hidden bg-[#293A36] px-6 py-20 text-[#E9E0D2] sm:px-10 lg:px-0 lg:py-28"
    >
      <div className="mx-auto max-w-[1105px]">
        {/* Section Heading */}
        <header className="mb-12 max-w-[780px]">
          <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[1.6px] text-[#C8A9A7] sm:text-[11px]">
            <span>How I Work</span>
            <span>·</span>
            <span>सिद्धांत</span>
          </p>

          <h2 className="font-serif text-[clamp(40px,5.2vw,64px)] italic leading-[1.08] tracking-[-2px] text-[#E9E0D2]">
            Three habits I picked up from painters who lived 250 years ago
          </h2>
        </header>

        {/* Three Principles */}
        <div className="grid grid-cols-1 gap-x-9 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <article
              key={item.number}
              className="group border-t border-[#65716A]/60 pt-5 transition-colors duration-500 hover:border-[#C8A9A7]"
            >
              {/* Illustration */}
              <div className="mb-4 flex h-[78px] items-center">
                <div className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                  <PrincipleIcon type={item.icon} />
                </div>
              </div>

              {/* Number */}
              <span className="mb-4 block font-serif text-[24px] leading-none text-[#C8A9A7]">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="mb-3 font-serif text-[23px] font-semibold leading-tight text-[#E9E0D2] transition-colors duration-300 group-hover:text-[#E2B5A5]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="max-w-[360px] text-[13px] leading-[1.65] text-[#C6C5BA] sm:text-[14px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingPrinciples;
