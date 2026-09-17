export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category:
    | "Service Business"
    | "Coaching & Consulting"
    | "Boutique & E-Commerce"
    | "Architecture & Real Estate"
    | "Creative Studios & Agencies"
    | "Health & Wellness";
  cms: string;
  description: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  results: string;
}

export const portfolioCategories = [
  "All",
  "Service Business",
  "Coaching & Consulting",
  "Boutique & E-Commerce",
  "Architecture & Real Estate",
  "Creative Studios & Agencies",
  "Health & Wellness",
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "project-1",
    title: "Aura Haute Horology & Jewels",
    client: "Aura Fine Jewelry New York",
    category: "Boutique & E-Commerce",
    cms: "Squarespace 7.1 Commerce",
    description: "High-end Squarespace Commerce storefront engineered for bespoke Swiss timepieces & fine jewelry, featuring smooth slide-out carts, editorial lookbooks, and 0.8s checkout.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Checkout Conversion", value: "+44%" },
      { label: "PageSpeed Score", value: "98/100" },
      { label: "Quarterly GMV", value: "$1.2M" },
    ],
    tags: ["Squarespace 7.1", "Fluid Engine", "Squarespace Commerce", "Custom CSS"],
    results: "Achieved $1.2M GMV in the first 90 days with seamless mobile checkout on Squarespace.",
  },
  {
    id: "project-2",
    title: "Cambridge Law & Global Advisory",
    client: "Cambridge Partners LLP",
    category: "Service Business",
    cms: "Squarespace 7.1 Enterprise",
    description: "Multi-jurisdictional legal and business advisory firm website with interactive practice areas, attorney directories, confidential intake forms, and high-trust editorial aesthetics.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Organic Search", value: "28+ #1 Ranks" },
      { label: "Inbound Retainers", value: "+170%" },
      { label: "Client Inquiries", value: "3.4x" },
    ],
    tags: ["Squarespace 7.1", "Custom Layouts", "Technical SEO", "Lead Generation"],
    results: "Positioned the firm as an authoritative Tier-1 advisory practice, tripling inbound client retainers.",
  },
  {
    id: "project-3",
    title: "Apex Executive Leadership Accelerator",
    client: "Apex Growth Group",
    category: "Coaching & Consulting",
    cms: "Squarespace 7.1 & Acuity",
    description: "Authority-driven personal brand & mastermind portal with integrated Acuity calendar scheduling, high-converting video sales layout, and private client member onboarding.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Application Rate", value: "31.2%" },
      { label: "Booked Strategy Calls", value: "480/mo" },
      { label: "Show-up Rate", value: "94%" },
    ],
    tags: ["Squarespace Fluid Engine", "Acuity Scheduling", "Member Areas", "Sales Funnel"],
    results: "Completely sold out executive mastermind cohorts 3 months ahead of launch schedule.",
  },
  {
    id: "project-4",
    title: "Grand Lachine Luxury Residences",
    client: "Lachine Real Estate Holdings",
    category: "Architecture & Real Estate",
    cms: "Squarespace 7.1 Architecture",
    description: "Ultra-prime residential estate showcase with full-bleed architectural galleries, neighborhood amenity highlights, interactive floorplan request, and VIP viewing bookings.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Units Sold", value: "$32M Value" },
      { label: "Private Tour Leads", value: "+215%" },
      { label: "Mobile Bounce", value: "19%" },
    ],
    tags: ["Squarespace 7.1", "Fluid Engine", "Luxury Architecture", "Custom CSS"],
    results: "All penthouse residences were 100% reserved within 45 days of launching the Squarespace website.",
  },
  {
    id: "project-5",
    title: "Studio Minimal Atelier",
    client: "Minimal Brand Studio Paris",
    category: "Creative Studios & Agencies",
    cms: "Squarespace 7.1 Portfolio",
    description: "Avant-garde creative agency portfolio with dynamic grid rhythm, interactive hover case studies, smooth typography scaling, and streamlined proposal request flow.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Brand Inquiries", value: "120+/mo" },
      { label: "Average Deal Size", value: "+65%" },
      { label: "Design Recognition", value: "Featured Studio" },
    ],
    tags: ["Squarespace 7.1", "Custom Hover Interactions", "Editorial Grid", "Agency Portfolio"],
    results: "Allowed the agency to double their minimum project engagement rate from $8k to $16k.",
  },
  {
    id: "project-6",
    title: "Dr. Vance Aesthetic Dermatology",
    client: "Vance Medical Aesthetics",
    category: "Health & Wellness",
    cms: "Squarespace & Acuity Scheduling",
    description: "Tranquil, medical-grade dermatology clinic website featuring online treatment consultation booking, patient before/after sliders, and automated intake forms.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Online Bookings", value: "+320%" },
      { label: "Front Desk Call Load", value: "-60%" },
      { label: "Patient Rating", value: "5.0 ★" },
    ],
    tags: ["Squarespace 7.1", "Acuity Scheduling", "Local SEO", "Medical UI"],
    results: "Clinic reached full booking capacity for 4 consecutive months following the Squarespace launch.",
  },
  {
    id: "project-7",
    title: "Nordic Haven Eco Retreats",
    client: "Nordic Haven Fjords Norway",
    category: "Architecture & Real Estate",
    cms: "Squarespace 7.1 Hospitality",
    description: "Breathtaking Scandinavian cabin retreat website with direct reservation forms, seasonal itinerary visualizers, and atmospheric imagery capturing the aurora borealis.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Direct Bookings", value: "+190%" },
      { label: "OTA Commission Saved", value: "$72k/yr" },
      { label: "Lighthouse Speed", value: "99/100" },
    ],
    tags: ["Squarespace 7.1", "Hospitality Booking", "Custom Code Injections", "SEO"],
    results: "Replaced high OTA platform commissions with direct, profitable guest reservations.",
  },
  {
    id: "project-8",
    title: "Kanso Holistic Therapy & Mindset",
    client: "Kanso Wellness Collective",
    category: "Health & Wellness",
    cms: "Squarespace 7.1 Fluid Engine",
    description: "Soothing, empathetic digital home for a group therapy and somatic practice. Features therapist matching quiz, confidential booking, and wellness resource library.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Intake Conversion", value: "+245%" },
      { label: "Session Retention", value: "91%" },
      { label: "Organic Search", value: "#1 Local" },
    ],
    tags: ["Squarespace 7.1", "Acuity Scheduling", "Intake Funnel", "Fluid Engine"],
    results: "Filled 8 practitioner schedules to 100% capacity within 60 days.",
  },
  {
    id: "project-9",
    title: "Verve Artisan Fragrance & Home",
    client: "Verve Botanical Parfums",
    category: "Boutique & E-Commerce",
    cms: "Squarespace 7.1 Commerce",
    description: "Sensory boutique eCommerce site with custom fragrance notes explorer, discovery sample set bundles, and automated subscription refilling.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Average Order Value", value: "$138 (+34%)" },
      { label: "Mobile Checkout", value: "0.6s" },
      { label: "Repeat Buyers", value: "48%" },
    ],
    tags: ["Squarespace Commerce", "Subscription Billing", "Product Storytelling", "Custom CSS"],
    results: "Expanded direct consumer sales by 300% without recurring app subscription fees.",
  },
];
