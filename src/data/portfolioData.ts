export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category:
    | "E-Commerce & DTC"
    | "Corporate & Business"
    | "Landing Pages & Funnels"
    | "Non-Profit & Community"
    | "SaaS & Technology"
    | "Luxury, Real Estate & Hospitality"
    | "Healthcare & Clinic";
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
  "E-Commerce & DTC",
  "Corporate & Business",
  "Landing Pages & Funnels",
  "Non-Profit & Community",
  "SaaS & Technology",
  "Luxury, Real Estate & Hospitality",
  "Healthcare & Clinic",
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "project-1",
    title: "Aura Luxury Timepieces",
    client: "Aura Horology New York",
    category: "E-Commerce & DTC",
    cms: "Shopify Plus 2.0",
    description: "High-end bespoke Shopify Plus storefront engineered for luxury Swiss watches featuring custom 3D product view, micro-animations, and instant 0.8s checkout.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Checkout Bump", value: "+38%" },
      { label: "PageSpeed Score", value: "98/100" },
      { label: "Quarterly GMV", value: "$1.4M" },
    ],
    tags: ["Shopify Plus", "Custom Liquid", "3D Product Viewer", "Technical SEO"],
    results: "Achieved $1.4M GMV in the first 90 days with sub-second page loads.",
  },
  {
    id: "project-2",
    title: "Cambridge Law & Global Advisory",
    client: "Cambridge Partners LLP",
    category: "Corporate & Business",
    cms: "WordPress ACF Pro",
    description: "Multi-jurisdictional corporate legal firm portal with lawyer directory, confidential consultation intake, and custom enterprise design system.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Google Rankings", value: "35+ #1 Ranks" },
      { label: "Inbound Leads", value: "+185%" },
      { label: "Page Load", value: "0.7s" },
    ],
    tags: ["WordPress Headless", "ACF Pro", "Schema JSON-LD", "Zero Bloat"],
    results: "Captured #1 search positions for top-tier international corporate advisory keywords.",
  },
  {
    id: "project-3",
    title: "Apex High-Ticket Conversion Funnel",
    client: "Apex Executive Accelerator",
    category: "Landing Pages & Funnels",
    cms: "GoHighLevel & Framer",
    description: "High-converting multi-step qualification funnel with automated calendar routing, video sales letter, and SMS follow-up orchestration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Opt-in Rate", value: "28.4%" },
      { label: "Qualified Calls", value: "520/mo" },
      { label: "Show-up Rate", value: "92%" },
    ],
    tags: ["GoHighLevel", "Framer Motion", "CRM Automation", "Split Testing"],
    results: "Delivered a record 520 booked calendar calls in the first 30 days of campaign launch.",
  },
  {
    id: "project-4",
    title: "HopeBridge Global Relief Fund",
    client: "HopeBridge International",
    category: "Non-Profit & Community",
    cms: "Webflow CMS & Stripe",
    description: "Mission-driven humanitarian portal with transparent donation allocation trackers, real-time crisis emergency banners, and recurring micro-giving.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Donation Lift", value: "+240%" },
      { label: "Recurring Donors", value: "12,500+" },
      { label: "Lighthouse Score", value: "100/100" },
    ],
    tags: ["Webflow CMS", "Stripe Giving", "WCAG 2.1 AA", "Global CDN"],
    results: "Surpassed annual donation goals within 45 days of launching the redesigned portal.",
  },
  {
    id: "project-5",
    title: "Nexus Quantum AI Intelligence",
    client: "Nexus Labs San Francisco",
    category: "SaaS & Technology",
    cms: "Framer & Next.js",
    description: "Award-winning interactive product launch site for an enterprise AI data infrastructure platform with 60fps spring animations and WebGL motion physics.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Enterprise Demos", value: "1,200+" },
      { label: "Core Vitals", value: "100/100" },
      { label: "Avg Session Time", value: "3m 42s" },
    ],
    tags: ["Framer", "Next.js", "Spring Physics", "Awwwards Nominee"],
    results: "Voted Site of the Day and secured 1,200+ enterprise demo inquiries.",
  },
  {
    id: "project-6",
    title: "Grand Lachine Luxury Residences",
    client: "Lachine Real Estate Holdings",
    category: "Luxury, Real Estate & Hospitality",
    cms: "WordPress & Mapbox",
    description: "Ultra-prime residential real estate showcase with 360 virtual architectural tours, neighborhood amenity mapping, and VIP penthouse reservations.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Sold Out Volume", value: "$35M+" },
      { label: "Inquiry Velocity", value: "3.2x Faster" },
      { label: "Page Load", value: "0.6s" },
    ],
    tags: ["WordPress Custom", "Mapbox APIs", "Luxury Design", "Mobile-First"],
    results: "100% of luxury penthouse inventory was fully reserved within 60 days of launch.",
  },
  {
    id: "project-7",
    title: "Dr. Alistair Vance Aesthetics",
    client: "Vance Medical & Dermatology",
    category: "Healthcare & Clinic",
    cms: "Squarespace & Acuity",
    description: "Tranquil, medical-grade aesthetic clinic website with HIPAA-compliant patient intake, instant appointment booking, and treatment visualizers.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Booked Patients", value: "+310%" },
      { label: "Mobile Bounce Rate", value: "18%" },
      { label: "Patient Rating", value: "5.0 ★" },
    ],
    tags: ["Squarespace", "Acuity Scheduling", "HIPAA Compliant", "Local SEO"],
    results: "Clinic reached full capacity for 3 consecutive months following site launch.",
  },
  {
    id: "project-8",
    title: "Verve High-Performance Athletics",
    client: "Verve Performance Gear",
    category: "E-Commerce & DTC",
    cms: "Shopify Plus",
    description: "Modern athletic gear direct-to-consumer store with dynamic colorway previews, size fit calculator, and instant Apple Pay checkout.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Drop Launch Sales", value: "$420k in 4h" },
      { label: "Average Order Value", value: "+28%" },
      { label: "Checkout Latency", value: "0.5s" },
    ],
    tags: ["Shopify Plus", "Klaviyo Flows", "Apple Pay", "Mobile Optimized"],
    results: "Sold out limited-edition production run in under 4 hours.",
  },
  {
    id: "project-9",
    title: "Nordic Haven Boutique Retreats",
    client: "Nordic Haven Resorts Norway",
    category: "Luxury, Real Estate & Hospitality",
    cms: "Webflow CMS",
    description: "Breathtaking Scandinavian eco-resort booking experience with dynamic seasonal weather widget, cabin reservation engine, and ambient audio.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Direct Bookings", value: "+175%" },
      { label: "OTA Commission Saved", value: "$85k/yr" },
      { label: "PageSpeed Score", value: "99/100" },
    ],
    tags: ["Webflow CMS", "Finsweet", "Direct Booking", "High Performance"],
    results: "Shifted 60% of guests away from Booking.com directly to their website, saving commissions.",
  },
  {
    id: "project-10",
    title: "CleanEarth Oceanic Initiative",
    client: "CleanEarth Non-Profit",
    category: "Non-Profit & Community",
    cms: "WordPress & Beaver",
    description: "International ocean plastic cleanup organization with interactive world map of cleanups, corporate sponsorship deck, and volunteer onboarding.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Volunteers Enrolled", value: "24,000+" },
      { label: "Corporate Grants", value: "+320%" },
      { label: "Global Reach", value: "48 Countries" },
    ],
    tags: ["WordPress", "Interactive Maps", "Zero Downtime", "Google Ad Grants"],
    results: "Secured $1.2M in corporate environmental sustainability grants.",
  },
  {
    id: "project-11",
    title: "FinPulse Global Wealth Management",
    client: "FinPulse Capital Zurich",
    category: "Corporate & Business",
    cms: "Webflow Enterprise",
    description: "Private Swiss wealth advisory portal with client portfolio login, market outlook insights, and bank-grade SSL data encryption.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "HNW Inquiries", value: "140+/mo" },
      { label: "AUM Growth", value: "$120M+" },
      { label: "Audit Score", value: "A+ Grade" },
    ],
    tags: ["Webflow Enterprise", "Security Hardening", "Executive UI", "B2B SEO"],
    results: "Onboarded $120M in new accredited assets under management.",
  },
  {
    id: "project-12",
    title: "Kailani Integrative Health Center",
    client: "Kailani Wellness Clinics",
    category: "Healthcare & Clinic",
    cms: "Shopify & Webflow",
    description: "Holistic wellness clinic offering both in-person patient bookings and e-commerce functional medicine supplements under one unified digital experience.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&auto=format&fit=crop&q=80",
    metrics: [
      { label: "Supplement GMV", value: "+210%" },
      { label: "Patient Re-bookings", value: "88%" },
      { label: "Lighthouse Vitals", value: "97/100" },
    ],
    tags: ["E-Commerce", "Health Intake", "Mobile First", "Core Web Vitals"],
    results: "Integrated healthcare booking with supplement re-orders into a 7-figure revenue stream.",
  },
];
