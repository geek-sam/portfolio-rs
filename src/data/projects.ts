export interface ProjectGalleryItem {
  image: string;
  caption: string;
  alt: string;
  aspect?: string;
}

export interface Project {
  id: number;
  slug: string;
  number: string;
  title: string;
  hindiTitle?: string;
  category: string;
  year: string;
  client: string;
  role: string;
  timeline: string;
  deliverables: string[];
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  quote?: {
    text: string;
    author: string;
  };
  brandName: string;
  image: string;
  gallery: ProjectGalleryItem[];
  colors: string[];
  imagePosition?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "tanpura-records",
    number: "०१",
    title: "Tanpura Records",
    hindiTitle: "तानपुरा",
    category: "Identity",
    year: "2025",
    client: "Tanpura Music Foundation",
    role: "Art direction, identity, twelve album covers",
    timeline: "5 Months · Spring 2025",
    deliverables: [
      "Brand Identity System",
      "Vinyl & CD Packaging",
      "Custom Typography",
      "Editorial Art Direction",
      "Digital Listening Hub",
    ],
    description:
      "A classical-music label wanted to feel collectible, not dusty. We built a type-led identity around the tanpura's long neck and a palette lifted from eighteenth-century court portraits.",
    overview:
      "Tanpura Records was founded in Mumbai to preserve and press rare archive recordings of Dhrupad and Khayal maestros onto heavyweight vinyl. The founders wanted packaging that felt worthy of court patronage—something listeners would display like heirloom art rather than file away in dust.",
    challenge:
      "Indian classical music packaging has historically swung between austere archival neutrality and gaudy temple kitsch. The brief demanded a visual language as austere and disciplined as a morning raga, yet sumptuous enough to justify limited-edition box sets priced for serious collectors.",
    solution:
      "We developed an identity anchored in the proportions of the instrument itself: elongated vertical letterforms reflecting the tanpura's resonant gourd and slender stem. The palette was extracted directly from Kishangarh court paintings of court musicians: crushed pomegranate madder (#684B62), aged brass gold, and handmade parchment cream.",
    quote: {
      text: "Ruhani captured the sacred cadence of our sound without falling into predictable nostalgic clichés.",
      author: "Vidushi Meera Joshi · Creative Director, Tanpura Records",
    },
    brandName: "TANPURA",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&auto=format&fit=crop",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&auto=format&fit=crop",
        caption: "Hand-set Devanagari titling paired with custom foil stamp on unbleached cotton rag.",
        alt: "Vinyl sleeve detail showing foil stamping",
      },
      {
        image:
          "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1200&auto=format&fit=crop",
        caption: "Twelve-part box set exterior inspired by vintage miniature folio bindings.",
        alt: "Box set exterior folio packaging",
      },
      {
        image:
          "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&auto=format&fit=crop",
        caption: "Liner notes booklet featuring archival photographs tinted in mineral pigments.",
        alt: "Booklet interior pages",
      },
    ],
    colors: ["#684B62", "#684B62", "#87927B", "#E8E0D5", "#2B201B"],
  },
  {
    id: 2,
    slug: "gundalao-hotels",
    number: "०२",
    title: "Gundalao Hotels",
    hindiTitle: "गुंदालाव",
    category: "Brand System",
    year: "2024",
    client: "Gundalao Heritage Trust",
    role: "Brand strategy, identity, signage, print",
    timeline: "7 Months · 2024",
    deliverables: [
      "Hospitality Identity",
      "Architectural Wayfinding",
      "Keycard & Stationery Suite",
      "Linen & Dining Monograms",
      "Heritage Storybook",
    ],
    description:
      "A lakeside heritage hotel reopened after a long restoration. The system borrows the barge's canopy arches for signage, keycards, menus and a custom numeral set.",
    overview:
      "Resting on the serene edge of Kishangarh's historic Gundalao Lake, this 18th-century royal summer pavilion was meticulously restored over five years. The new hotel required a comprehensive visual identity that honoured its water-borne courtly past while offering contemporary five-star clarity.",
    challenge:
      "Guests needed to feel transportive royal seclusion without feeling like they were sleeping in a museum. The wayfinding had to integrate into centuries-old lime plaster and sandstone arches without drilling or jarring modern fixtures.",
    solution:
      "Taking cues from the ornamental scalloped barge canopies once used for royal water revels, we crafted an arch-derived system for every point of guest contact. Menus are sewn with raw silk thread, door numerals are carved in local marble with brass inlays, and the stationery reproduces miniature water-garden motifs.",
    quote: {
      text: "Every guest mentions the tactile richness of the stationery and the signage. It completes the sensory atmosphere of our lakeside retreat.",
      author: "Thakur Vikramaditya Singh · Gundalao Hotels",
    },
    brandName: "Gundalao",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&auto=format&fit=crop",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1200&auto=format&fit=crop",
        caption: "Bespoke brass keycards and leather room compendium embossed with royal barge arches.",
        alt: "Keycard and room amenities suite",
      },
      {
        image:
          "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&auto=format&fit=crop",
        caption: "Hand-painted dining menu cards printed on handmade Sanganer paper.",
        alt: "Restaurant menu design with gold borders",
      },
      {
        image:
          "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&auto=format&fit=crop",
        caption: "Custom directional stone markers designed to age gracefully alongside heritage masonry.",
        alt: "Wayfinding signage in heritage hotel courtyard",
      },
    ],
    colors: ["#293A36", "#293A36", "#DCA8A1", "#AD8331", "#F0E5CE"],
  },
  {
    id: 3,
    slug: "phuljhadi-sweets",
    number: "०३",
    title: "Phuljhadi Sweets",
    hindiTitle: "फुलझड़ी",
    category: "Festive Packaging",
    year: "2023",
    client: "Phuljhadi Confectioners, Jaipur",
    role: "Packaging design, illustration direction, press checks",
    timeline: "4 Months · Autumn 2023",
    deliverables: [
      "Diwali Gift Box Architecture",
      "Custom Foil Embellishments",
      "Sleeve & Ribbon Accents",
      "Window Display Collateral",
      "Ingredient Parchment Inserts",
    ],
    description:
      "A Diwali gift range for a ninety-year-old mithai shop: twelve boxes that open like palace doors, foiled in gold and lit by painted fireworks.",
    overview:
      "Established in 1934 in the Johari Bazaar of Jaipur, Phuljhadi has crafted legendary pistachio halwa and saffron pedas for four generations. For their 90th anniversary Diwali edition, they sought packaging that turned receiving a box of sweets into an unforgettable festive unboxing ceremony.",
    challenge:
      "Festive packaging in northern India is often overwhelmed by plastic laminate and disposable glitter. Phuljhadi wanted durable, plastic-free keepsake boxes that families would treasure long after the confections were enjoyed.",
    solution:
      "We engineered rigid two-tier boxes with central magnetic split gates inspired by haveli entrance doors. As the doors open, a hand-drawn night sky bursts into life with delicate gold and vermilion sparklers (phuljhadis). The interior cradles sweets in compostable glassine compartments stamped with natural botanical inks.",
    quote: {
      text: "The boxes sold out three weeks before Diwali. Customers came back just to buy empty boxes for their family keepsakes.",
      author: "Rajendra Khandelwal · Master Halwai & Proprietor",
    },
    brandName: "फुलझड़ी",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1200&auto=format&fit=crop",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&auto=format&fit=crop",
        caption: "Double-door haveli box unboxing experience with raised hot-foil sparks.",
        alt: "Festive luxury sweets gift box open",
      },
      {
        image:
          "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&auto=format&fit=crop",
        caption: "Detailed macro view of gold foil linework reflecting traditional brass stamp making.",
        alt: "Close-up of gold foil embossing on paper packaging",
      },
      {
        image:
          "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&auto=format&fit=crop",
        caption: "Three box sizes stacked to form a palace pavilion silhouette on retail shelves.",
        alt: "Stack of festive boxes in retail setting",
      },
    ],
    colors: ["#291D19", "#291D19", "#E6A63A", "#684B62", "#F0E5CE"],
  },
  {
    id: 4,
    slug: "bani-and-co",
    number: "०४",
    title: "Bani & Co. Jewellers",
    hindiTitle: "बनी & कं.",
    category: "Identity",
    year: "2026",
    client: "Bani & Co. Fine Jewels",
    role: "Identity, campaign art direction, lookbook",
    timeline: "6 Months · Winter 2026",
    deliverables: [
      "Luxury Brand Identity",
      "Hardbound Collection Lookbook",
      "Jewellery Presentation Boxes",
      "Certificate of Authenticity",
      "Social Campaign Direction",
    ],
    description:
      "A third-generation jeweller's first campaign. We cast their pieces into miniature-style portraits and let the famous Bani Thani profile become the monogram.",
    overview:
      "Bani & Co. crafts uncut polki and emerald pieces using enamel techniques unchanged since the Mughal courts. To mark their transition into an international salon, they commissioned their first full brand system and debut catalog.",
    challenge:
      "High jewellery branding often defaults to cold European minimalism that strips away the soul of Indian craftsmanship. We needed to communicate supreme luxury while celebrating the regal, poetic spirit of Kishangarh portraiture.",
    solution:
      "We drew a contemporary silhouette inspired by the celebrated arched eyebrows and lotus eyes of Radha as Bani Thani. The lookbook was shot with classical portrait lighting and warm chiaroscuro, printing on tactile uncoated cotton stocks with gilded edges.",
    quote: {
      text: "Our international collectors finally understand the story and history behind every polki setting through Ruhani's vision.",
      author: "Aditi Soni · Head Gemologist & Founder",
    },
    brandName: "Bani & Co.",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&auto=format&fit=crop",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&auto=format&fit=crop",
        caption: "Bespoke monogram debossed into rose-tinted velvet jewellery casket.",
        alt: "Velvet presentation box with monogram",
      },
      {
        image:
          "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1200&auto=format&fit=crop",
        caption: "Lookbook spread contrasting raw emerald sketches with final heirloom pieces.",
        alt: "Open jewelry lookbook showcasing craftsmanship",
      },
      {
        image:
          "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&auto=format&fit=crop",
        caption: "Embossed certificate of authenticity on handmade watermarked cotton deckle paper.",
        alt: "Certificate of authenticity on deckle edge paper",
      },
    ],
    colors: ["#C8A9A7", "#C8A9A7", "#AD8331", "#F0E5CE", "#6E5A4D"],
  },
  {
    id: 5,
    slug: "chitthi-stationers",
    number: "०५",
    title: "Chitthi Stationers",
    hindiTitle: "चिट्ठी",
    category: "Identity",
    year: "2026",
    client: "Chitthi Letterpress Studio",
    role: "Identity, stationery range, custom packaging",
    timeline: "3 Months · 2026",
    deliverables: [
      "Visual Identity System",
      "Stationery & Envelope Range",
      "Wax Seal Stamps & Ribbons",
      "Packaging Sleeves",
      "Letterpress Product Catalog",
    ],
    description:
      "A letterpress studio in Jaipur wanted people to write letters again. We built a stationery range around the painted love letters of Rajput courts.",
    overview:
      "Chitthi operates antique Heidelberg cylinder presses in the pink city, hand-inking bespoke correspondence cards, invitations and journals. They approached us to shape their public brand and signature boxed letter sets.",
    challenge:
      "In an era of instant digital messaging, paper correspondence is an act of deliberate slowness. The branding had to elevate epistolary romance into an everyday sensory ritual.",
    solution:
      "We framed the brand around the motif of folded love letters exchanged between palace towers. The stationery features hand-torn deckled edges, blind letterpress borders, and envelopes lined with miniature lotus patterns and sealing wax buttons.",
    quote: {
      text: "The brand has inspired a whole community of letter-writers to rediscover the beauty of ink on paper.",
      author: "Kavita Rathore · Master Printer, Chitthi",
    },
    brandName: "Chitthi",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&auto=format&fit=crop",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&auto=format&fit=crop",
        caption: "Blind debossed correspondence cards on 600gsm cotton rag with gold-foiled envelopes.",
        alt: "Letterpress cards and envelopes suite",
      },
      {
        image:
          "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1200&auto=format&fit=crop",
        caption: "Brass wax seal matrix and custom marbled sealing wax sticks.",
        alt: "Brass wax stamp and sealing wax sticks",
      },
      {
        image:
          "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&auto=format&fit=crop",
        caption: "Rigid gift slipcase wrapped in hand-marbled vegetable-dyed paper.",
        alt: "Gift stationery set in slipcase",
      },
    ],
    colors: ["#87927B", "#87927B", "#F0E5CE", "#AD8331", "#291D19"],
  },
  {
    id: 6,
    slug: "the-offering-journal",
    number: "०६",
    title: "The Offering Journal",
    hindiTitle: "द ऑफरिंग",
    category: "Editorial Design",
    year: "2022",
    client: "The Offering Publishing Co.",
    role: "Editorial design, typography system, print direction",
    timeline: "6 Months · 2022",
    deliverables: [
      "Masthead & Editorial Grid",
      "Typography Guidelines",
      "Volume I — IV Cover System",
      "Custom Editorial Pullquotes",
      "Subscription Folio Mailers",
    ],
    description:
      "A twice-yearly journal on craft and ritual. We designed the masthead, page system and covers, and art-directed its first four issues.",
    overview:
      "The Offering is an independent publication documenting disappearing folk craft traditions, ritual arts, and textile archives across the Indian subcontinent. Published twice a year in limited editions, it reads like an heirloom monograph.",
    challenge:
      "Balancing expansive longform scholarship with breathtaking visual documentation across 240 uncoated pages without feeling dense or academic.",
    solution:
      "We established a generous grid with wide margins inspired by ancient palm-leaf manuscript margins. Devanagari numerals are used for chapter pagination, and section breaks feature tipped-in miniature art plates on textured semitransparent butter paper.",
    quote: {
      text: "A masterpiece of editorial rhythm. Ruhani gave our quiet stories the dignity of a royal archive.",
      author: "Ananya Sen · Editor-in-Chief, The Offering",
    },
    brandName: "The Offering",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1200&auto=format&fit=crop",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&auto=format&fit=crop",
        caption: "Masthead treatment and open book spine with exposed Smyth-sewn binding.",
        alt: "Open journal showing exposed spine binding",
      },
      {
        image:
          "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&auto=format&fit=crop",
        caption: "Double-page photo essay layout highlighting handloom weavers of Varanasi.",
        alt: "Editorial magazine spread with photo essay",
      },
      {
        image:
          "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&auto=format&fit=crop",
        caption: "Four-volume collector's slipcase finished in unbleached linen with foil stamping.",
        alt: "Hardcover magazine slipcase set",
      },
    ],
    colors: ["#E8E0D5", "#E8E0D5", "#684B62", "#293A36", "#87927B"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };

  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];

  return { prev, next };
}
