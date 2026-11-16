import React from "react";

const Lotus = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 60 45"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    className={className}
    aria-hidden="true"
  >
    <path d="M30 37 C15 30 12 15 30 5 C48 15 45 30 30 37Z" />
    <path d="M30 37 C20 20 21 11 30 5 C39 11 40 20 30 37Z" />
    <path d="M30 37 C9 34 4 25 4 22 C17 19 26 27 30 37Z" />
    <path d="M30 37 C51 34 56 25 56 22 C43 19 34 27 30 37Z" />
    <path d="M12 39 Q30 43 48 39" />
  </svg>
);

const topItems = [
  { text: "Campaigns", type: "english" },
  { text: "अभियान", type: "hindi" },
  { text: "Identity", type: "english" },
  { text: "पहचान", type: "hindi" },
  { text: "Packaging", type: "english" },
  { text: "पैकेजिंग", type: "hindi" },
];

const clients = [
  "The Offering",
  "Tanpura Records",
  "Gundalao Hotels",
  "Phuljhadi Sweets",
  "Bani & Co.",
  "Kishangarh Collective",
];

const MarqueeRibbon: React.FC = () => {
  return (
    <section className="w-full overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0%);
          }
        }

        .marquee-track-left{
          display: flex;
          width: max-content;
          animation: marquee-left 35s linear infinite;
          will-change: transform;
        }

        .marquee-track-right{
          display: flex;
          width: max-content;
          animation: marquee-right 35s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-track-fast {
          animation-duration: 28s;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            transform: none;
          }
        }
      `}</style>

      {/* TOP RED MARQUEE */}
      <div className="relative flex h-[150px] items-center overflow-hidden border-b border-[#D3A65B] bg-[#684B62] sm:h-[180px]">
        <div className="marquee-track-left marquee-track-fast">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
              aria-hidden={group === 1}
            >
              {topItems.map((item, index) => (
                <React.Fragment key={`${group}-${index}`}>
                  <span
                    className={
                      item.type === "english"
                        ? "whitespace-nowrap font-[400] font-serif text-[clamp(65px,7.5vw,120px)]  italic leading-none tracking-[-4px] text-[#F5E6D2]"
                        : "whitespace-nowrap font-[400] font-serif text-[clamp(45px,5vw,80px)]  leading-none text-[#F0C978]"
                    }
                  >
                    {item.text}
                  </span>

                  <Lotus className="h-12 w-14 shrink-0 text-[#F0C978]" />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CREAM MARQUEE */}
      <div className="relative flex min-h-[215px] flex-col justify-center overflow-hidden border-b border-[#A98653] bg-[#E8E0D5] py-10">
        {/* Section Label */}
        <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[2px] text-[#684B62] sm:text-sm">
          Lovely people I’ve made things with, 2018 — 2026
        </p>

        {/* Client Names */}
        <div className="overflow-hidden">
          <div className="marquee-track-right">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
                aria-hidden={group === 1}
              >
                {clients.map((client, index) => (
                  <React.Fragment key={`${group}-${index}`}>
                    <span className="whitespace-nowrap font-serif text-[25px] tracking-[-0.7px] text-[#30251F] sm:text-[32px]">
                      {client}
                    </span>

                    <Lotus className="h-7 w-7 shrink-0 text-[#A98653]" />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeRibbon;
