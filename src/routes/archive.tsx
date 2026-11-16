import React from "react";

interface ArchiveItem {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  alt: string;
}

const archives: ArchiveItem[] = [
  {
    id: 1,
    title: "Neel Chai wordmark",
    category: "Logo",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop",
    alt: "Vintage miniature portrait artwork",
  },
  {
    id: 2,
    title: "Terrace tea-tin labels",
    category: "Packaging",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800&auto=format&fit=crop",
    alt: "Traditional Indian painting",
  },
  {
    id: 3,
    title: "Night market flyers",
    category: "Flyers",
    year: "2020",
    image:
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=800&auto=format&fit=crop",
    alt: "Historical artwork",
  },
  {
    id: 4,
    title: "Polo club monogram",
    category: "Logo",
    year: "2020",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800&auto=format&fit=crop",
    alt: "Vintage equestrian artwork",
  },
  {
    id: 5,
    title: "The summer postcards",
    category: "Print",
    year: "2019",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop",
    alt: "Vintage art print",
  },
  {
    id: 6,
    title: "Jaipur travel journal",
    category: "Editorial",
    year: "2019",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800&auto=format&fit=crop",
    alt: "Traditional miniature artwork",
  },
  {
    id: 7,
    title: "A little wedding invite",
    category: "Stationery",
    year: "2018",
    image:
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=800&auto=format&fit=crop",
    alt: "Traditional artwork",
  },
  {
    id: 8,
    title: "The old city posters",
    category: "Posters",
    year: "2018",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop",
    alt: "Vintage painting",
  },
  {
    id: 9,
    title: "Mango season packaging",
    category: "Packaging",
    year: "2017",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800&auto=format&fit=crop",
    alt: "Vintage Indian artwork",
  },
  {
    id: 10,
    title: "Letters from Jaipur",
    category: "Editorial",
    year: "2017",
    image:
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=800&auto=format&fit=crop",
    alt: "Historical illustration",
  },
  {
    id: 11,
    title: "Sunday at the palace",
    category: "Illustration",
    year: "2016",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop",
    alt: "Palace inspired artwork",
  },
  {
    id: 12,
    title: "A mark for the makers",
    category: "Logo",
    year: "2015",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800&auto=format&fit=crop",
    alt: "Traditional miniature painting",
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
    className="h-[76px] w-[85px] text-[#A98653]"
    aria-hidden="true"
  >
    <path d="M17 65 Q43 57 75 52" />
    <path d="M48 60 Q34 35 51 12 Q62 1 73 15 Q79 28 65 45 Q57 55 48 60Z" />
    <path d="M51 12 Q64 0 74 14" />
    <path d="M65 45 Q75 54 87 48" />
    <path d="M48 60 L43 80 M51 60 L53 80" />
    <path d="M42 80 L38 84 M53 80 L58 84" />
    <path d="M38 36 Q27 32 30 22 Q41 18 43 27" />
    <path d="M50 20 Q58 28 57 40" />
    <path d="M87 48 L96 46 L89 52" />
    <circle cx="70" cy="15" r="2" stroke="#684B62" />
  </svg>
);

// Decorative ornamental divider
const OrnamentalDivider = () => (
  <svg
    viewBox="0 0 620 38"
    className="h-auto w-full max-w-[620px]"
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

// Archive Card
const ArchiveCard: React.FC<{ item: ArchiveItem }> = ({ item }) => (
  <article className="group min-w-0">
    {/* Arched Image */}
    <a
      href={`/archives/${item.id}`}
      aria-label={`View ${item.title}`}
      className="block overflow-hidden rounded-t-full rounded-b-[4px] border border-[#A98653] bg-[#C8A9A7] p-[5px]"
    >
      <div className="aspect-[0.82/1] overflow-hidden rounded-t-full rounded-b-[2px] bg-[#E8E0D5]">
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
    </a>

    {/* Project Details */}
    <div className="mt-3">
      <h3 className="font-serif text-[19px] leading-tight text-[#292329] transition-colors duration-300 group-hover:text-[#684B62] sm:text-[22px]">
        {item.title}
      </h3>

      <div className="mt-2 flex flex-wrap items-center gap-3">
        <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#684B62]">
          {item.category}
        </span>

        <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#87927B]">
          {item.year}
        </span>
      </div>
    </div>
  </article>
);

const Archives: React.FC = () => {
  return (
    <main
      id="archives"
      className="relative min-h-screen overflow-hidden bg-[#F3EFE7] px-6 py-20 sm:px-10 lg:px-0 lg:py-28"
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

      <div className="relative mx-auto max-w-[1168px]">
        {/* Page Introduction */}
        <header className="max-w-[650px]">
          {/* Bird */}
          <div className="mb-5">
            <ArchiveBird />
          </div>

          {/* Eyebrow */}
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[1.6px] text-[#684B62] sm:text-[11px]">
            Older & Smaller Work, 2015 — 2021
          </p>

          {/* Hindi Title */}
          <p className="mb-3 font-serif text-[25px] text-[#A98653]">संग्रह</p>

          {/* Main Heading */}
          <h1 className="font-serif text-[clamp(90px,12vw,170px)] leading-[0.9] tracking-[-7px] text-[#292329]">
            Archives
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[620px] text-[14px] leading-[1.85] text-[#746B67] sm:text-[16px]">
            Posters for friends, logos that never shipped, zines and
            sketchbooks. Not everything gets a case study, but all of it taught
            me something. All concept pieces, made for the love of it.
          </p>

          {/* Ornamental Divider */}
          <div className="mt-7">
            <OrnamentalDivider />
          </div>
        </header>

        {/* Archive Gallery: 12 projects */}
        <section
          aria-label="Archive projects"
          className="mt-20 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-14"
        >
          {archives.map((item) => (
            <ArchiveCard key={item.id} item={item} />
          ))}
        </section>

        {/* Bottom Note */}
        <div className="mt-20 border-t border-[#A98653] pt-6 text-center">
          <p className="font-serif text-sm italic text-[#746B67]">
            Every little thing has a story.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Archives;
