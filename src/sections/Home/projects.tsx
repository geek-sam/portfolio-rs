import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomCursor from "../../components/common/customCursor";
import { projects, type Project } from "../../data/projects";

const LotusDivider = () => (
  <svg
    viewBox="0 0 50 35"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className="h-7 w-9 shrink-0 text-[#A98653]"
    aria-hidden="true"
  >
    <path d="M25 29C12 22 11 11 25 3C39 11 38 22 25 29Z" />
    <path d="M25 29C17 16 18 8 25 3C32 8 33 16 25 29Z" />
    <path d="M25 29C12 27 6 20 5 16C15 15 22 21 25 29Z" />
    <path d="M25 29C38 27 44 20 45 16C35 15 28 21 25 29Z" />
    <path d="M13 31H37" />
  </svg>
);

const ProjectCard: React.FC<{
  project: Project;
  index: number;
  onMouseEnter: () => void;
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
}> = ({ project, index, onMouseEnter, onMouseMove, onMouseLeave }) => {
  return (
    <article
      id={`project-${index + 1}`}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="sticky mx-auto w-full rounded-[4px] border border-[#A98653] bg-[#E8E0D5] p-[5px] shadow-[0_10px_35px_rgba(63,43,20,0.06)]"
      style={{
        top: `${80 + index * 18}px`,
        zIndex: index + 1,
        cursor: "none", // hide default mouse pointer
      }}
    >
      {/* Inner Border */}
      <div className="grid min-h-[380px] grid-cols-1 gap-7 border border-[#C9A96F] p-5 sm:p-7 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-9 lg:p-10">
        {/* Left: Artwork and Palette */}
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(76px,0.42fr)] gap-2 border border-[#C9A96F] bg-[#F1E5CD] p-2 sm:gap-3 sm:p-3">
          {/* Artwork */}
          <div className="relative min-h-[240px] overflow-hidden border border-[#A98653] sm:min-h-[280px] lg:min-h-[475px]">
            <img
              src={project.image}
              alt={`${project.title} project artwork`}
              className={`absolute inset-0 h-full w-full object-cover ${project.imagePosition || ""}`}
              loading="lazy"
            />
          </div>

          {/* Brand Palette */}
          <div className="flex min-h-[240px] flex-col gap-[5px] sm:min-h-[280px]">
            {/* Brand Color / Arch */}
            <div
              className="flex flex-1 items-center justify-center rounded-t-full px-1"
              style={{ backgroundColor: project.colors[0] }}
            >
              <span
                className="text-center font-serif text-xs italic sm:text-base"
                style={{
                  color:
                    project.colors[0] === "#E8E0D5" ||
                    project.colors[0] === "#F0E5CE"
                      ? "#30251F"
                      : "#F5E7D3",
                }}
              >
                {project.brandName}
              </span>
            </div>

            {/* Supporting Colors */}
            {project.colors.slice(1).map((color, i) => (
              <div
                key={i}
                className="min-h-[22px] max-h-[30px] lg:max-h-[48px] flex-1"
                style={{
                  backgroundColor: color,
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: Project Details */}
        <div className="flex flex-col justify-center lg:py-1">
          {/* Project Number */}
          <span className="mb-4 font-hindi text-[58px] leading-[0.9] text-[#AE812E] sm:text-[100px]">
            {project.number}
          </span>

          {/* Category and Year */}
          <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-semibold uppercase tracking-[1.1px]">
            <span className="text-[#684B62]">{project.category}</span>
            <span className="text-[#84916D]">{project.year}</span>
          </div>

          {/* Project Title */}
          <h3 className="mb-3 font-serif text-[36px] italic leading-[1.03] tracking-[-1.5px] text-[#292329] sm:text-[64px]">
            <Link
              to={`/work/${project.slug}`}
              className="transition-colors duration-300 hover:text-[#684B62]"
            >
              {project.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="max-w-[390px] text-[12px] leading-[1.8] text-[#756455] sm:text-[18px]">
            {project.description}
          </p>

          {/* Role */}
          <div className="mt-4 grid grid-cols-[36px_1fr] gap-3 border-t border-[#CFB98E] pt-3">
            <span className="text-[9px] font-semibold uppercase tracking-[1px] text-[#84916D]">
              Role
            </span>
            <span className="text-[10px] leading-relaxed text-[#756455]">
              {project.role}
            </span>
          </div>

          {/* CTA */}
          <Link
            to={`/work/${project.slug}`}
            className="mt-4 inline-flex w-fit items-center gap-2 font-serif text-[16px] text-[#684B62] transition-all duration-300 hover:gap-4 hover:text-[#292329]"
          >
            See how it came together
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects: React.FC = () => {
  const [cursor, setCursor] = useState({
    active: false,
    x: 0,
    y: 0,
  });

  const handleMouseEnter = () => {
    setCursor((prev) => ({
      ...prev,
      active: true,
    }));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setCursor({
      active: true,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseLeave = () => {
    setCursor((prev) => ({
      ...prev,
      active: false,
    }));
  };

  return (
    <section
      id="work"
      className="relative overflow-clip bg-[#F3EFE7] px-5 pb-28 pt-16 sm:px-8 lg:px-0 lg:pb-36 lg:pt-20"
    >
      {/* Paper Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            radial-gradient(#A88C65 0.6px, transparent 0.6px),
            radial-gradient(#A88C65 0.5px, transparent 0.5px)
          `,
          backgroundSize: "7px 7px, 11px 11px",
          backgroundPosition: "0 0, 3px 4px",
        }}
      />

      <div className="relative mx-auto max-w-[690px] lg:max-w-[1170px]">
        {/* Section Ornament */}
        <div className="mb-10 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-[#A98653]" />
          <LotusDivider />
          <span className="whitespace-nowrap font-serif text-sm text-[#684B62]">
            ॥ चित्रशाला ॥
          </span>
          <LotusDivider />
          <div className="h-px flex-1 bg-[#A98653]" />
        </div>

        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[1.6px] text-[#684B62]">
            Selected work, 2022 — 2026
          </p>

          <h2 className="font-serif text-[clamp(34px,5vw,48px)] italic leading-tight tracking-[-1.5px] text-[#292329]">
            A few favourites, pinned to the wall
          </h2>
        </div>

        {/* Stacked Project Cards */}
        <div className="relative flex flex-col gap-16 space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>

      <CustomCursor active={cursor.active} x={cursor.x} y={cursor.y} />
    </section>
  );
};

export default Projects;
