import React from "react";
import { Link, useParams } from "react-router-dom";
import { getAdjacentProjects, getProjectBySlug } from "../data/projects";

// Ornamental Lotus Divider
const OrnamentalDivider = () => (
  <svg
    viewBox="0 0 620 38"
    className="h-auto w-full max-w-[560px]"
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
    <g fill="#F2EADB" stroke="#684B62" strokeWidth="1.4">
      {[76, 228, 380, 532].map((x) => (
        <circle key={x} cx={x} cy="19" r="4.5" />
      ))}
    </g>
  </svg>
);

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const { prev, next } = slug
    ? getAdjacentProjects(slug)
    : { prev: null, next: null };

  if (!project) {
    return (
      <main className="relative min-h-[70vh] flex flex-col items-center justify-center bg-[#F2EADB] px-6 py-24 text-center">
        <span className="font-serif text-6xl text-[#684B62]">॥</span>
        <h1 className="mt-4 font-serif text-4xl text-[#292329] sm:text-5xl">
          Project Not Found
        </h1>
        <p className="mt-4 max-w-md text-sm text-[#746B67] sm:text-base">
          The case study you are looking for may have been archived or moved.
        </p>
        <Link
          to="/work"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#A98653] bg-[#E8E0D5] px-6 py-3 text-xs font-semibold uppercase tracking-[1.5px] text-[#292329] transition-all hover:bg-[#684B62] hover:text-[#F5E7D3]"
        >
          ← Return to All Work
        </Link>
      </main>
    );
  }

  return (
    <article className="relative min-h-screen overflow-hidden bg-[#F2EADB] text-[#292329]">
      {/* Background Paper Texture */}
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

      <div className="relative mx-auto max-w-[1140px] px-6 py-12 sm:px-10 lg:px-0 lg:py-16">
        {/* Top Breadcrumb & Back Link */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center justify-between border-b border-[#A98653]/40 pb-5 text-[11px] font-semibold uppercase tracking-[1.6px]"
        >
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-[#684B62] transition-colors hover:text-[#292329]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            <span>All Work</span>
          </Link>

          <span className="text-[#87927B] font-hindi text-sm">
            {project.hindiTitle || "चित्रशाला"} · {project.number}
          </span>
        </nav>

        {/* Project Header */}
        <header className="relative pt-4 pb-12">
          {/* Large Hindi Watermark Number */}
          <div className="pointer-events-none absolute right-0 top-0 select-none font-hindi text-[130px] font-bold leading-none text-[#A98653]/15 sm:text-[190px]">
            {project.number}
          </div>

          <div className="relative z-10 max-w-[820px]">
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[1.8px] text-[#684B62] sm:text-xs">
              <span>{project.category}</span>
              <span className="text-[#A98653]">✦</span>
              <span className="text-[#87927B]">{project.year}</span>
              <span className="text-[#A98653]">✦</span>
              <span className="text-[#746B67]">{project.timeline}</span>
            </div>

            <h1 className="mt-4 font-serif text-[clamp(44px,6vw,84px)] italic leading-[0.98] tracking-[-2.5px] text-[#292329]">
              {project.title}
            </h1>

            <p className="mt-6 max-w-[660px] text-base leading-[1.85] text-[#746B67] sm:text-lg">
              {project.description}
            </p>

            <div className="mt-8">
              <OrnamentalDivider />
            </div>
          </div>
        </header>

        {/* Project Meta Details Bar */}
        <div className="mb-14 grid grid-cols-2 gap-6 border-y border-[#A98653]/60 bg-[#E8E0D5]/50 px-6 py-6 sm:grid-cols-4 sm:px-8">
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-[1.4px] text-[#684B62]">
              Client
            </span>
            <span className="mt-1 block font-serif text-sm text-[#292329] sm:text-base">
              {project.client}
            </span>
          </div>

          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-[1.4px] text-[#684B62]">
              Year
            </span>
            <span className="mt-1 block font-serif text-sm text-[#292329] sm:text-base">
              {project.year}
            </span>
          </div>

          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-[1.4px] text-[#684B62]">
              Role
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-[#746B67] sm:text-sm">
              {project.role}
            </span>
          </div>

          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-[1.4px] text-[#684B62]">
              Timeline
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-[#746B67] sm:text-sm">
              {project.timeline}
            </span>
          </div>
        </div>

        {/* Featured Artwork & Palette Showcase */}
        <section
          aria-label="Featured Artwork"
          className="mb-16 grid grid-cols-1 gap-6 border border-[#A98653] bg-[#E8E0D5] p-3 sm:p-5 lg:grid-cols-[1.3fr_0.7fr] lg:gap-8"
        >
          {/* Main Hero Artwork Frame */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] border border-[#A98653] bg-[#D9C4A0] shadow-[0_8px_24px_rgba(40,25,20,0.08)] sm:aspect-[16/11]">
            <img
              src={project.image}
              alt={`${project.title} hero artwork`}
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </div>

          {/* Color Palette & Deliverables Side Panel */}
          <div className="flex flex-col justify-between gap-6 border border-[#C9A96F] bg-[#F1E5CD] p-5 sm:p-7">
            {/* Palette Swatches */}
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[1.6px] text-[#684B62]">
                Court-Inspired Palette
              </p>

              {/* Arched primary swatch */}
              <div
                className="flex h-36 w-full items-center justify-center rounded-t-[40px] shadow-inner"
                style={{ backgroundColor: project.colors[0] }}
              >
                <span
                  className="font-serif text-lg italic sm:text-xl"
                  style={{
                    color: ["#E8E0D5", "#F0E5CE"].includes(project.colors[0])
                      ? "#292329"
                      : "#F5E7D3",
                  }}
                >
                  {project.brandName}
                </span>
              </div>

              {/* Supporting Color Chips */}
              <div className="mt-2 grid grid-cols-4 gap-2">
                {project.colors.slice(1).map((color, index) => (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <div
                      className="h-9 w-full rounded-[2px] border border-black/10 shadow-xs"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-mono text-[9px] uppercase text-[#746B67]">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="border-t border-[#A98653]/40 pt-5">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[1.6px] text-[#684B62]">
                Key Deliverables
              </p>
              <ul className="space-y-1.5 text-xs text-[#746B67]">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#A98653]">◇</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Editorial Case Study Content */}
        <section className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Deep Narrative */}
          <div className="space-y-10 lg:col-span-7">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[1.6px] text-[#684B62]">
                The Overview
              </span>
              <h2 className="mt-2 font-serif text-2xl italic text-[#292329] sm:text-3xl">
                Honouring memory through slow craft
              </h2>
              <p className="mt-4 text-[15px] leading-[1.85] text-[#746B67]">
                {project.overview}
              </p>
            </div>

            <div className="border-t border-[#A98653]/40 pt-8">
              <span className="text-[10px] font-semibold uppercase tracking-[1.6px] text-[#684B62]">
                The Challenge
              </span>
              <p className="mt-3 text-[15px] leading-[1.85] text-[#746B67]">
                {project.challenge}
              </p>
            </div>

            <div className="border-t border-[#A98653]/40 pt-8">
              <span className="text-[10px] font-semibold uppercase tracking-[1.6px] text-[#684B62]">
                The Solution & Craft
              </span>
              <p className="mt-3 text-[15px] leading-[1.85] text-[#746B67]">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Right Column: Pull Quote & Philosophy Plaque */}
          <div className="space-y-8 lg:col-span-5">
            {project.quote && (
              <blockquote className="relative rounded-t-[40px] rounded-b-[4px] border border-[#A98653] bg-[#E8E0D5] p-7 sm:p-9">
                <span className="font-serif text-5xl leading-none text-[#684B62]/40">
                  “
                </span>
                <p className="mt-2 font-serif text-lg italic leading-[1.6] text-[#292329] sm:text-xl">
                  {project.quote.text}
                </p>
                <footer className="mt-6 border-t border-[#A98653]/40 pt-4 text-[11px] font-medium uppercase tracking-[1.2px] text-[#87927B]">
                  {project.quote.author}
                </footer>
              </blockquote>
            )}

            <div className="border border-[#A98653]/60 bg-[#F1E5CD]/60 p-6">
              <span className="font-hindi text-2xl text-[#A98653]">
                ॥ साधना ॥
              </span>
              <p className="mt-2 text-xs leading-[1.7] text-[#746B67]">
                Designed in Jaipur with attention to paper grain, natural
                pigments, and time-tested proportions inspired by Kishangarh
                miniatures.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Showcase Grid */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mb-24 border-t border-[#A98653] pt-16">
            <header className="mb-10 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[1.8px] text-[#684B62]">
                Visual Artifacts
              </p>
              <h2 className="mt-2 font-serif text-3xl italic text-[#292329] sm:text-4xl">
                Material, Texture & Execution
              </h2>
            </header>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {project.gallery.map((item, idx) => (
                <figure key={idx} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-[30px] rounded-b-[3px] border border-[#A98653] bg-[#E8E0D5] p-[5px]">
                    <div className="h-full w-full overflow-hidden rounded-t-[26px] rounded-b-[2px]">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-3 text-xs leading-relaxed text-[#746B67]">
                    <span className="font-hindi text-sm text-[#684B62] mr-1.5">
                      {["१", "२", "३"][idx] || "•"}
                    </span>
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Adjacent Navigation */}
        <nav
          aria-label="Adjacent Projects"
          className="border-t border-b border-[#A98653] py-10"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {prev && (
              <Link
                to={`/work/${prev.slug}`}
                className="group flex flex-col items-start rounded-[3px] border border-transparent p-4 transition-all duration-300 hover:border-[#A98653] hover:bg-[#E8E0D5]/50"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[1.6px] text-[#87927B]">
                  ← Previous Project
                </span>
                <span className="mt-2 font-serif text-2xl italic text-[#292329] transition-colors group-hover:text-[#684B62]">
                  {prev.title}
                </span>
                <span className="mt-1 text-xs text-[#746B67]">
                  {prev.category} · {prev.year}
                </span>
              </Link>
            )}

            {next && (
              <Link
                to={`/work/${next.slug}`}
                className="group flex flex-col items-start sm:items-end rounded-[3px] border border-transparent p-4 transition-all duration-300 hover:border-[#A98653] hover:bg-[#E8E0D5]/50 sm:text-right"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[1.6px] text-[#87927B]">
                  Next Project →
                </span>
                <span className="mt-2 font-serif text-2xl italic text-[#292329] transition-colors group-hover:text-[#684B62]">
                  {next.title}
                </span>
                <span className="mt-1 text-xs text-[#746B67]">
                  {next.category} · {next.year}
                </span>
              </Link>
            )}
          </div>
        </nav>

        {/* Bottom CTA to Return */}
        <div className="pt-12 text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-serif text-lg text-[#684B62] transition-transform hover:-translate-x-1"
          >
            <span>←</span>
            <span>Back to All Selected Work</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetailPage;
