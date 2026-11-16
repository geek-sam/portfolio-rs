import React from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Ruhani gave a ninety-year-old sweet shop a look our grandparents recognise and our customers’ children photograph.",
    name: "Phuljhadi Sweets",
    role: "Founder",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=200&auto=format&fit=crop",
  },
  {
    quote:
      "She showed us pencil sketches before a single slide, and we knew exactly where it was going. Twelve covers later, we still can’t pick a favourite.",
    name: "Tanpura Records",
    role: "Head of A&R",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=200&auto=format&fit=crop",
  },
  {
    quote:
      "Guests photograph the room numbers. In eighty years of running this hotel, that had never happened before.",
    name: "Gundalao Hotels",
    role: "General Manager",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=200&auto=format&fit=crop",
  },
];

// Decorative lotus illustration
const Lotus = () => (
  <svg
    viewBox="0 0 100 90"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[78px] w-[90px] text-[#A98653]"
    aria-hidden="true"
  >
    <path d="M50 75 Q12 45 12 35 Q35 35 50 75Z" />
    <path d="M50 75 Q22 15 50 5 Q78 15 50 75Z" />
    <path d="M50 75 Q37 23 50 5 Q63 23 50 75Z" />
    <path d="M50 75 Q65 35 88 35 Q88 45 50 75Z" />
    <path d="M50 75 Q30 58 22 40" />
    <path d="M50 75 Q70 58 78 40" />
    <path d="M17 80 Q50 69 83 80" stroke="#684B62" />
  </svg>
);

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
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

      <div className="relative mx-auto max-w-[1120px]">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="flex items-center gap-5">
            <div className="hidden sm:block">
              <Lotus />
            </div>

            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[1.6px] text-[#684B62]">
                Kind words · प्रशंसा
              </p>

              <h2 className="font-serif text-[clamp(38px,5vw,60px)] italic leading-[1.05] tracking-[-2px] text-[#292329]">
                Notes left on the studio wall
              </h2>
            </div>
          </div>

          <a
            href="#work"
            className="inline-flex w-fit items-center gap-2 font-serif text-xl text-[#684B62] transition-all duration-300 hover:gap-4"
          >
            See all the work <span>→</span>
          </a>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="group relative flex min-h-[395px] flex-col rounded-[4px] border border-[#A98653] bg-[#E8E0D5] p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#684B62] hover:bg-[#F0E1C5] hover:shadow-[0_16px_35px_rgba(75,48,25,0.12)] sm:p-8"
            >
              {/* Quote Mark */}
              <span className="mb-7 block font-serif text-[48px] font-bold leading-[0.65] text-[#684B62] transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-1">
                “
              </span>

              {/* Quote */}
              <blockquote className="flex-1">
                <p className="font-serif text-[21px] font-medium leading-[1.3] tracking-[-0.35px] text-[#292329] sm:text-[23px]">
                  {item.quote}
                </p>
              </blockquote>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-[#C6A46A] transition-colors duration-500 group-hover:bg-[#684B62]" />

              {/* Client Details */}
              <div className="flex items-center gap-3">
                {/* Client Thumbnail */}
                <div className="h-[57px] w-[44px] shrink-0 overflow-hidden rounded-t-full rounded-b-[3px] border border-[#A98653] bg-[#F3EFE7] p-[2px]">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full rounded-t-full rounded-b-[2px] object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Name and Role */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[14px] font-medium text-[#292329]">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[1.2px] text-[#8A7765]">
                    {item.role}
                  </p>
                </div>

                {/* Arrow */}
                <span className="shrink-0 text-lg text-[#C77B64] transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
