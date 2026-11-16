import React, { useState } from "react";
import CustomCursor from "../../components/common/customCursor";

const archiveItems = [
  {
    title: "Neel Chai wordmark",
    category: "Logo",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop",
    alt: "Vintage inspired portrait artwork",
  },
  {
    title: "Terrace tea-tin labels",
    category: "Packaging",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900&auto=format&fit=crop",
    alt: "Traditional miniature painting inspired artwork",
  },
  {
    title: "Night market flyers",
    category: "Flyers",
    year: "2020",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=900&auto=format&fit=crop",
    alt: "Historical Indian miniature painting inspired artwork",
  },
];

// Decorative bird illustration
const ArchiveBird = () => (
  <svg
    viewBox="0 0 100 90"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[75px] w-[85px] text-[#A98653]"
    aria-hidden="true"
  >
    <path d="M17 65 Q43 57 75 52" />
    <path d="M48 60 Q34 35 51 12 Q62 1 73 15 Q79 28 65 45 Q57 55 48 60Z" />
    <path d="M51 12 Q64 0 74 14" />
    <path d="M65 45 Q75 54 87 48" />
    <path d="M87 48 L96 46 L89 52" />
    <path d="M48 60 L43 80 M51 60 L53 80" />
    <path d="M42 80 L38 84 M53 80 L58 84" />
    <path d="M38 36 Q27 32 30 22 Q41 18 43 27" />
    <path d="M50 20 Q58 28 57 40" />
    <path d="M17 65 Q11 66 8 71" />
    <circle cx="70" cy="15" r="2" stroke="#684B62" />
  </svg>
);

// Custom cursor
// const ArchiveCursor: React.FC<{
//   x: number;
//   y: number;
//   visible: boolean;
// }> = ({ x, y, visible }) => (
//   <div
//     aria-hidden="true"
//     className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:flex"
//     style={{
//       transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
//       opacity: visible ? 1 : 0,
//       transition: "opacity 180ms ease",
//     }}
//   >
//     <div className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full bg-[#684B62] text-[#F5E7D3] shadow-xl">
//       <span className="font-serif text-[35px] leading-tight">
//         देखें
//       </span>
//       <span className="mt-1 text-[15px] font-semibold tracking-[2px]">
//         VIEW
//       </span>
//     </div>
//   </div>
// );

const Archive: React.FC = () => {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursor({
      x: e.clientX,
      y: e.clientY,
      visible: true,
    });
  };

  const hideCursor = () => {
    setCursor((prev) => ({
      ...prev,
      visible: false,
    }));
  };

  return (
    <section
      id="archives"
      className="relative overflow-visible bg-[#F3EFE7] px-6 py-20 sm:px-10 lg:px-0 lg:py-28"
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
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="flex items-center gap-5">
            <div className="hidden sm:block">
              <ArchiveBird />
            </div>

            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[1.6px] text-[#684B62]">
                From the archive · संग्रह
              </p>

              <h2 className="font-serif text-[clamp(38px,5vw,60px)] italic leading-[1.05] tracking-[-2px] text-[#292329]">
                Before the case studies
              </h2>
            </div>
          </div>

          <a
            href="/archives"
            className="inline-flex w-fit items-center gap-2 font-serif text-xl text-[#684B62] transition-all duration-300 hover:gap-4"
          >
            See the archive
            <span>→</span>
          </a>
        </div>

        {/* Archive Cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {archiveItems.map((item) => (
            <article key={item.title} className="group">
              {/* Image Hover Area */}
              <div
                className="relative cursor-none overflow-hidden rounded-t-[48%] rounded-b-[4px] border border-[#A98653] bg-[#E8E0D5] p-[5px]"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseMove}
                onMouseLeave={hideCursor}
              >
                <div className="relative aspect-[1/0.82] overflow-hidden rounded-t-[48%] rounded-b-[2px]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle image overlay */}
                  <div className="absolute inset-0 bg-[#292329]/0 transition-colors duration-500 group-hover:bg-[#292329]/10" />
                </div>
              </div>

              {/* Project Information */}
              <div className="mt-3">
                <h3 className="font-serif text-[22px] leading-tight text-[#292329] sm:text-[24px]">
                  {item.title}
                </h3>

                <div className="mt-2 flex items-center gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#684B62]">
                    {item.category}
                  </span>

                  <span className="text-[11px] font-semibold tracking-[1px] text-[#84916D]">
                    {item.year}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Floating Custom Cursor */}
      <CustomCursor x={cursor.x} y={cursor.y} active={cursor.visible} />
    </section>
  );
};

export default Archive;
