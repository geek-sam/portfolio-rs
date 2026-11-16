import React from "react";

const capabilities = [
  {
    title: "Brand Identity",
    description:
      "Strategy, naming support, logo, type and colour, plus guidelines your team will actually open.",
    services: ["Logo & Lettering", "Colour & Type Systems", "Brand Guidelines"],
    icon: "peacock",
  },
  {
    title: "Packaging",
    description:
      "Boxes, labels and festive editions that open like palace doors. People keep them long after the sweets are gone.",
    services: ["Structure & Dielines", "Foil & Emboss Specs", "Press Checks"],
    icon: "pot",
  },
  {
    title: "Art Direction",
    description:
      "Campaigns, shoots and illustrated key visuals, from the first messy moodboard to the final frame.",
    services: [
      "Campaign Concepts",
      "Shoot Direction",
      "Commissioned Illustration",
    ],
    icon: "door",
  },
  {
    title: "Editorial & Digital",
    description:
      "Books, magazines and websites, made with the patience of a manuscript (and much better load times).",
    services: ["Book & Magazine Design", "Websites", "Social Systems"],
    icon: "bird",
  },
];

// Decorative illustrations
const CapabilityIcon = ({ type }: { type: string }) => {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className="h-[76px] w-[76px] text-[#D9A18E]"
      {...common}
      aria-hidden="true"
    >
      {type === "peacock" && (
        <>
          <path d="M29 77 Q20 47 27 20 L30 8 L34 20 L31 46 Q39 56 52 59" />
          <path d="M52 59 Q68 35 86 32 M52 59 Q75 46 91 49 M52 59 Q73 60 88 68 M52 59 Q70 76 82 84" />
          <path d="M52 59 Q44 44 34 43" />
          <path d="M28 77 L41 77 M34 77 L34 86 M29 77 L26 86" />
          <path d="M27 20 Q19 11 28 8 M30 8 Q38 11 34 20" />
          {[32, 49, 68, 84].map((y, i) => (
            <g key={i}>
              <circle cx={[86, 91, 88, 82][i]} cy={y} r="3.5" />
              <circle cx={[86, 91, 88, 82][i]} cy={y} r="1" />
            </g>
          ))}
          <circle cx="30" cy="20" r="2" />
        </>
      )}

      {type === "pot" && (
        <>
          <path d="M50 10 C37 21 27 34 27 52 C27 73 38 88 50 88 C64 88 76 73 76 53 C76 35 65 20 53 10" />
          <path d="M50 10 Q68 5 69 17 Q70 25 59 29" />
          <path d="M36 48 Q50 39 64 48 Q68 66 57 74 Q43 81 36 65Z" />
          <circle cx="50" cy="56" r="8" stroke="#A98653" />
          <path
            d="M50 44 V49 M50 64 V70 M38 56 H42 M58 56 H63"
            stroke="#A98653"
          />
          <circle cx="69" cy="16" r="2" />
        </>
      )}

      {type === "door" && (
        <>
          <path d="M20 91 H80 M24 86 H76 V37 Q76 17 50 10 Q24 17 24 37Z" />
          <path d="M31 86 V39 Q31 22 50 17 Q69 22 69 39 V86" />
          <path d="M38 86 V45 Q38 31 50 28 Q62 31 62 45 V86" />
          <path d="M43 86 V48 Q43 38 50 38 Q57 38 57 48 V86" />
          <path d="M20 37 H80 M44 10 L50 4 L56 10" />
          <path d="M50 46 V85 M38 57 H62 M38 69 H62" stroke="#A98653" />
          <path d="M50 4 V0" />
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

const Capabilities: React.FC = () => {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-[#293A36] px-6 py-20 text-[#E9E0D2] sm:px-10 lg:px-0 lg:py-28"
    >
      <div className="mx-auto max-w-[1165px]">
        {/* Section Heading */}
        <div className="mb-14 grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#DDA99B]">
              <span>Capabilities</span>
              <span className="text-[#E9E0D2]">·</span>
              <span>सेवाएँ</span>
            </div>

            <h2 className="font-serif text-[clamp(38px,5vw,64px)] italic leading-[1.08] tracking-[-2px]">
              What I make (and make well)
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-[390px] text-[13px] font-medium leading-[1.65] text-[#C6C5BA] sm:text-[14px]">
              Every project is quoted after a first conversation, once I know
              what it needs. Ask and I’ll tell you, no awkward dance.
            </p>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="group border-t border-[#7A7770]/70 pt-6"
            >
              {/* Illustration */}
              <div className="mb-4 flex h-[82px] items-center">
                <CapabilityIcon type={item.icon} />
              </div>

              {/* Title */}
              <h3 className="mb-3 font-serif text-[23px] font-semibold leading-tight text-[#E9E0D2]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mb-4 text-[13px] leading-[1.55] text-[#C6C5BA]">
                {item.description}
              </p>

              {/* Service List */}
              <ul className="space-y-3">
                {item.services.map((service) => (
                  <li
                    key={service}
                    className="text-[10px] font-semibold uppercase tracking-[1.3px] text-[#DDA99B] transition-colors duration-300 group-hover:text-[#F1C4B4]"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
