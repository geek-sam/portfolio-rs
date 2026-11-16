import React from "react";

const experience = [
  {
    period: "2018 —",
    title: "Ruhani Sethia Studio",
    description: "Founder and art director, Jaipur",
  },
  {
    period: "2015 — 18",
    title: "Senior art director",
    description: "Brand agency, Mumbai",
  },
  {
    period: "2012 — 15",
    title: "Designer",
    description: "Packaging studio, New Delhi",
  },
  {
    period: "2008 — 12",
    title: "Communication design",
    description: "Design school, Ahmedabad",
  },
];

const recognition: TimelineItem[] = [
  {
    period: "2026",
    title: "Gold · Packaging",
    description: "Phuljhadi Sweets festive edition",
  },
  {
    period: "2025",
    title: "Speaker · Heritage & brand",
    description: "Design week talk, New Delhi",
  },
  {
    period: "2024",
    title: "Shortlist · Identity",
    description: "Gundalao Hotels rebrand",
  },
  {
    period: "2023",
    title: "Featured · Print annual",
    description: "Chitthi Stationers letterpress range",
  },
];

interface TimelineItem {
  period?: string;
  year?: string;
  title: string;
  description: string;
}

const TimelineColumn: React.FC<{
  label: string;
  heading: string;
  items: TimelineItem[];
}> = ({ label, heading, items }) => {
  return (
    <div className="min-w-0">
      {/* Column Heading */}
      <header className="mb-8">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[1.6px] text-[#684B62] sm:text-[11px]">
          {label}
        </p>

        <h2 className="font-serif text-[clamp(38px,4.2vw,60px)] italic leading-[1.05] tracking-[-2px] text-[#292329]">
          {heading}
        </h2>
      </header>

      {/* Timeline Items */}
      <div className="border-t border-dotted border-[#A98653]">
        {items.map((item) => (
          <article
            key={item.title}
            className="group grid grid-cols-[90px_minmax(0,1fr)] gap-3 border-b border-dotted border-[#A98653] py-5  sm:grid-cols-[100px_minmax(0,1fr)] sm:gap-3"
          >
            {/* Year / Period */}
            <span className="pt-1 text-[10px] font-semibold uppercase tracking-[1.3px] text-[#684B62] sm:text-[11px]">
              {item.period ?? item.year}
            </span>

            {/* Details */}
            <div className="min-w-0">
              <h3 className="font-serif text-[19px] leading-tight text-[#292329] transition-colors duration-300 group-hover:text-[#684B62] sm:text-[23px]">
                {item.title}
              </h3>

              <p className="mt-1.5 text-[12px] leading-relaxed text-[#746B67] sm:text-[13px]">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const ExperienceRecognition: React.FC = () => {
  return (
    <section
      id="experience-recognition"
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

      <div className="relative mx-auto grid max-w-[1105px] grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-[72px]">
        {/* Experience */}
        <TimelineColumn
          label="Experience"
          heading="Where I’ve worked"
          items={experience}
        />

        {/* Recognition */}
        <TimelineColumn
          label="Recognition"
          heading="Awards & talks"
          items={recognition}
        />
      </div>
    </section>
  );
};

export default ExperienceRecognition;
