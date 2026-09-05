export interface CmsPlatform {
  id: string;
  name: string;
  category: "Ecommerce" | "Visual & No-Code" | "Funnel & Marketing" | "Boutique & Business";
  tagline: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  capabilities: string[];
  popularFor: string;
  turnaround: string;
  projectsDelivered: number;
}

export const cmsPlatforms: CmsPlatform[] = [
  {
    id: "wordpress",
    name: "WordPress & WooCommerce",
    category: "Ecommerce",
    tagline: "Custom Themes, ACF Pro, Headless & WooCommerce Scalability",
    description: "Enterprise-grade WordPress engineering with clean PHP/React code, zero bloat, custom Gutenberg blocks, and ultra-fast WooCommerce checkouts.",
    icon: "Globe",
    color: "#21759B",
    gradient: "from-blue-500/20 via-sky-500/10 to-transparent",
    capabilities: [
      "Custom Gutenberg Block Development",
      "Headless WordPress with Next.js/GraphQL",
      "WooCommerce High-Volume Optimization",
      "ACF Pro Dynamic Architectures",
      "Security Hardening & Malware Defense"
    ],
    popularFor: "Content hubs, multi-vendor stores & enterprise portals",
    turnaround: "7 - 14 Days",
    projectsDelivered: 160
  },
  {
    id: "shopify",
    name: "Shopify & Shopify Plus",
    category: "Ecommerce",
    tagline: "Liquid Masterclass, Custom Apps & High-Conversion Stores",
    description: "Tailored Shopify Plus store setups, custom section-driven themes, checkout extensibility, and automated inventory sync built to maximize GMV.",
    icon: "ShoppingBag",
    color: "#96BF48",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    capabilities: [
      "Shopify 2.0 Custom Theme Architecture",
      "Custom Private Apps & Webhooks",
      "Checkout Extensibility (Shopify Plus)",
      "Speed Optimization & Liquid Refactoring",
      "ERP / CRM Third-party Integrations"
    ],
    popularFor: "DTC brands, high-SKU stores & fashion labels",
    turnaround: "10 - 18 Days",
    projectsDelivered: 195
  },
  {
    id: "webflow",
    name: "Webflow",
    category: "Visual & No-Code",
    tagline: "Pixel-Perfect Webflow CMS, Finsweet & Dynamic Interactions",
    description: "World-class visual development with Client-First (Finsweet) architecture, intricate 3D/Lottie animations, and clean semantic code.",
    icon: "Sparkles",
    color: "#4353FF",
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    capabilities: [
      "Client-First (Finsweet) System Build",
      "Complex Multi-Reference CMS",
      "Custom GSAP & Lottie Micro-Interactions",
      "Memberstack & Wized App Integration",
      "SEO-Ready Clean DOM Hierarchy"
    ],
    popularFor: "SaaS websites, venture-backed startups & design agencies",
    turnaround: "5 - 12 Days",
    projectsDelivered: 140
  },
  {
    id: "framer",
    name: "Framer",
    category: "Visual & No-Code",
    tagline: "Futuristic Motion, Apple-Style Landing Pages & Rapid Launch",
    description: "Award-winning Framer layouts with buttery-smooth 60fps spring physics, interactive components, responsive breakouts, and blazing global CDN speed.",
    icon: "Zap",
    color: "#0055FF",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    capabilities: [
      "Framer Component System & Design Tokens",
      "Interactive 3D Spline Canvas Embedding",
      "Smooth Scroll & Parallax Storytelling",
      "Automated CMS Collections & Filtering",
      "Instant Global Edge Deployment"
    ],
    popularFor: "AI products, mobile apps & high-end personal brands",
    turnaround: "4 - 8 Days",
    projectsDelivered: 115
  },
  {
    id: "gohighlevel",
    name: "GoHighLevel (GHL)",
    category: "Funnel & Marketing",
    tagline: "High-Converting Sales Funnels, Pipelines & Client Portals",
    description: "End-to-end GoHighLevel funnel architectures, snapshot customization, SMS/Email marketing automations, and custom code injects for sleek looks.",
    icon: "Flame",
    color: "#F97316",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    capabilities: [
      "Custom CSS/JS Funnel Beautification",
      "Multi-step Conversion Checkout Funnels",
      "Automated Booking & Calendar Sync",
      "SaaS Snapshot Cloning & White-labeling",
      "Membership & Course Portal Setup"
    ],
    popularFor: "Marketing agencies, coaches, lead gen & service businesses",
    turnaround: "5 - 10 Days",
    projectsDelivered: 85
  },
  {
    id: "kajabi",
    name: "Kajabi",
    category: "Funnel & Marketing",
    tagline: "Course Creation, Membership Ecosystems & Premium Communities",
    description: "Custom Kajabi website templates, sleek course player layouts, webinar funnels, and checkout flows styled to match premier luxury brands.",
    icon: "BookOpen",
    color: "#007AFE",
    gradient: "from-sky-500/20 via-indigo-500/10 to-transparent",
    capabilities: [
      "Custom Course Product Theming",
      "High-Ticket Offer Funnel Flows",
      "Member Community Area Customization",
      "Automated Email Sequences & Tags",
      "Podcast & Coaching Integration"
    ],
    popularFor: "Educators, executive coaches & membership creators",
    turnaround: "6 - 12 Days",
    projectsDelivered: 70
  },
  {
    id: "squarespace",
    name: "Squarespace",
    category: "Boutique & Business",
    tagline: "Fluid Engine Mastery, Custom CSS & Elegant Typography",
    description: "Elevating Squarespace 7.1 beyond standard templates with bespoke CSS, custom fonts, interactive galleries, and seamless commerce tools.",
    icon: "Layers",
    color: "#71717A",
    gradient: "from-zinc-500/20 via-slate-500/10 to-transparent",
    capabilities: [
      "Fluid Engine Custom CSS Overrides",
      "Bespoke Responsive Layouts",
      "Custom Booking & Acuity Scheduling",
      "Boutique E-commerce Setup",
      "Built-in Analytics & Meta Setup"
    ],
    popularFor: "Creative studios, photographers, architects & cafes",
    turnaround: "4 - 8 Days",
    projectsDelivered: 95
  },
  {
    id: "wix",
    name: "Wix & Wix Studio",
    category: "Boutique & Business",
    tagline: "Wix Studio Responsive Breakpoints & Velo Custom Code",
    description: "Cutting-edge Wix Studio designs with fluid responsive breakpoints, advanced animations, and custom Velo by Wix JavaScript logic.",
    icon: "Code",
    color: "#EA580C",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    capabilities: [
      "Wix Studio Responsive Prototyping",
      "Velo (Node.js/JS) Database & APIs",
      "Wix Bookings & Events Configuration",
      "Dynamic Page Repeater Systems",
      "Speed & Asset Optimization"
    ],
    popularFor: "Local businesses, event venues & corporate consultancies",
    turnaround: "5 - 10 Days",
    projectsDelivered: 110
  },
  {
    id: "showit",
    name: "Showit",
    category: "Boutique & Business",
    tagline: "Drag-and-Drop Luxury Layouts with Integrated WordPress Blog",
    description: "High-fashion, editorial-style Showit websites featuring complete mobile layout independence and seamless WordPress blog power.",
    icon: "Camera",
    color: "#D946EF",
    gradient: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
    capabilities: [
      "Editorial Drag-and-Drop Canvas Design",
      "Desktop & Mobile Independent Flow",
      "Custom WordPress Blog Theme Sync",
      "Font License & Typography Magic",
      "High-Res Asset Compression"
    ],
    popularFor: "Luxury wedding photographers, interior designers & podcasters",
    turnaround: "5 - 9 Days",
    projectsDelivered: 60
  },
  {
    id: "godaddy",
    name: "GoDaddy Website Builder",
    category: "Boutique & Business",
    tagline: "Fast, Affordable & Clean Business Launchpad",
    description: "Rapid turnaround setups on GoDaddy's modern website platform with clean structure, DNS configuration, and direct domain integration.",
    icon: "Compass",
    color: "#059669",
    gradient: "from-teal-500/20 via-emerald-500/10 to-transparent",
    capabilities: [
      "Quick 48h Turnaround Launch",
      "Domain, DNS & Professional Email Setup",
      "Local Business Profile Integration",
      "Appointment Booking Integration",
      "Mobile-Optimized Structure"
    ],
    popularFor: "Trades, local contractors, consultants & starter startups",
    turnaround: "2 - 5 Days",
    projectsDelivered: 80
  }
];
