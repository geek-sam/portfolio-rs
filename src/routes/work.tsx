import React, { useState } from "react";

interface Project {
  id: number;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  brandName: string;
  image: string;
  colors: string[];
  imagePosition?: string;
}

const projects: Project[] = [
  {
    id: 1,
    number: "०१",
    title: "Tanpura Records",
    category: "Identity",
    year: "2025",
    description:
      "A classical-music label wanted to feel collectible, not dusty. We built a type-led identity around the tanpura's long neck and a palette lifted from eighteenth-century court portraits.",
    brandName: "TANPURA",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&auto=format&fit=crop",
    colors: ["#684B62", "#684B62", "#87927B", "#E8E0D5", "#2B201B"],
  },
  {
    id: 2,
    number: "०२",
    title: "Gundalao Hotels",
    category: "Brand System",
    year: "2024",
    description:
      "A lakeside heritage hotel reopened after a long restoration. The system borrows the barge's canopy arches for signage, keycards, menus and a custom numeral set.",
    brandName: "Gundalao",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1200&auto=format&fit=crop",
    colors: ["#293A36", "#293A36", "#DCA8A1", "#AD8331", "#F0E5CE"],
  },
  {
    id: 3,
    number: "०३",
    title: "Phuljhadi Sweets",
    category: "Festive Packaging",
    year: "2023",
    description:
      "A Diwali gift range for a ninety-year-old mithai shop: twelve boxes that open like palace doors, foiled in gold and lit by painted fireworks.",
    brandName: "फुलझड़ी",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1200&auto=format&fit=crop",
    colors: ["#291D19", "#291D19", "#E6A63A", "#684B62", "#F0E5CE"],
  },
  {
    id: 4,
    number: "०४",
    title: "Bani & Co. Jewellers",
    category: "Identity",
    year: "2026",
    description:
      "A third-generation jeweller's first campaign. We cast their pieces into miniature-style portraits and let the famous Bani Thani profile become the monogram.",
    brandName: "Bani & Co.",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&auto=format&fit=crop",
    colors: ["#C8A9A7", "#C8A9A7", "#AD8331", "#F0E5CE", "#6E5A4D"],
  },
  {
    id: 5,
    number: "०५",
    title: "Chitthi Stationers",
    category: "Identity",
    year: "2026",
    description:
      "A letterpress studio in Jaipur wanted people to write letters again. We built a stationery range around the painted love letters of Rajput courts.",
    brandName: "Chitthi",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&auto=format&fit=crop",
    colors: ["#87927B", "#87927B", "#F0E5CE", "#AD8331", "#291D19"],
  },
  {
    id: 6,
    number: "०६",
    title: "The Offering Journal",
    category: "Editorial Design",
    year: "2022",
    description:
      "A twice-yearly journal on craft and ritual. We designed the masthead, page system and covers, and art-directed its first four issues.",
    brandName: "The Offering",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1200&auto=format&fit=crop",
    colors: ["#E8E0D5", "#E8E0D5", "#684B62", "#293A36", "#87927B"],
  },
];

const categories = [
  "All",
  "Identity",
  "Brand System",
  "Festive Packaging",
  "Editorial Design",
];

// Decorative divider
const OrnamentalDivider = () => (
  <svg
    viewBox="0 0 620 38"
    className="h-auto w-full max-w-[580px]"
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

// Project Card
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <article className="group min-w-0">
      {/* Artwork and Brand Palette */}
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(76px,0.34fr)] gap-2 border border-[#A98653] bg-[#E8E0D5] p-2 sm:gap-2.5 sm:p-2.5">
        {/* Artwork */}
        <div className="relative aspect-square overflow-hidden border border-[#A98653] bg-[#D9C4A0]">
          <img
            src={project.image}
            alt={`${project.title} brand artwork`}
            loading="lazy"
            className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${project.imagePosition || ""}`}
          />
        </div>

        {/* Brand Palette */}
        <div className="flex min-h-[240px] flex-col gap-[5px] sm:min-h-[280px]">
          {/* Arch Shape */}
          <div
            className="flex flex-1 items-center justify-center rounded-t-full px-1"
            style={{ backgroundColor: project.colors[0] }}
          >
            <span
              className="text-center font-serif text-[clamp(11px,1.2vw,17px)] italic"
              style={{
                color: ["#E8E0D5", "#F0E5CE"].includes(project.colors[0])
                  ? "#292329"
                  : "#F5E7D3",
              }}
            >
              {project.brandName}
            </span>
          </div>

          {/* Supporting Colors */}
          {project.colors.slice(1).map((color, index) => (
            <div
              key={index}
              className="min-h-[22px] max-h-[30px] lg:max-h-[48px] flex-1 border border-black/5"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Project Information */}
      <div className="mt-4 grid grid-cols-[44px_1fr] gap-3 sm:grid-cols-[46px_1fr]">
        {/* Project Number */}
        <span className="font-serif text-[23px] leading-tight text-[#684B62]">
          {project.number}
        </span>

        <div className="min-w-0">
          {/* Title */}
          <h3 className="font-serif text-[22px] leading-tight text-[#292329] transition-colors duration-300 group-hover:text-[#684B62] sm:text-[24px]">
            {project.title}
          </h3>

          {/* Category and Year */}
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#684B62]">
              {project.category}
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#87927B]">
              {project.year}
            </span>
          </div>

          {/* Description */}
          <p className="mt-2 max-w-[490px] text-[12px] leading-[1.65] text-[#746B67] sm:text-[13px]">
            {project.description}
          </p>
        </div>
      </div>
    </article>
  );
};

// Main Work Page
const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main
      id="work"
      className="relative min-h-screen overflow-hidden bg-[#F3EFE7] px-6 py-20 sm:px-10 lg:px-0 lg:py-20"
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

      <div className="relative mx-auto max-w-[1115px]">
        {/* Page Introduction */}
        <header className="max-w-[640px]">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[1.6px] text-[#684B62]">
            Selected Work, 2022 — 2026
          </p>

          <p className="mb-2 font-serif text-[24px] text-[#A98653]">
            चित्रशाला
          </p>

          <h1 className="font-serif text-[clamp(100px,14vw,170px)] leading-[0.88] tracking-[-8px] text-[#292329]">
            Work
          </h1>

          <p className="mt-6 max-w-[600px] text-[14px] leading-[1.85] text-[#746B67] sm:text-[16px]">
            Every project is pinned up the way I’d pin it in the studio: one key
            image, the wordmark, and the colours we argued about for weeks.
            These are self-initiated concept projects; the brands are imagined.
          </p>

          {/* Ornament */}
          <div className="mt-6">
            <OrnamentalDivider />
          </div>
        </header>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[1.2px] transition-all duration-300 sm:text-[10px] ${
                  isActive
                    ? "border-[#684B62] bg-[#684B62] text-[#F5E7D3]"
                    : "border-[#D2C4AA] bg-transparent text-[#292329] hover:border-[#684B62] hover:text-[#684B62]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <section
          aria-label="Project listings"
          className="mt-12 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 sm:gap-y-20"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-serif text-3xl italic text-[#292329]">
              No projects found.
            </p>
          </div>
        )}

        {/* Bottom Note */}
        <div className="mt-24 border-t border-[#A98653] pt-6">
          <p className="text-center font-serif text-sm italic text-[#746B67]">
            Made slowly, with stories worth keeping.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Work;
