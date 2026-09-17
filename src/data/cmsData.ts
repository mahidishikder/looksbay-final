export interface CmsPlatform {
  id: string;
  name: string;
  category: "Custom Design" | "Templates" | "Migration" | "VIP Day & Consulting";
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
    id: "bespoke-squarespace",
    name: "Bespoke Custom Squarespace Design",
    category: "Custom Design",
    tagline: "Tailored Architecture, Brand Identity & High-Converting Fluid Engine 7.1",
    description: "End-to-end bespoke design built exclusively for your business. We craft custom wireframes in Figma, write bespoke CSS/JavaScript animations, and deliver an unshakeable Squarespace website that commands authority.",
    icon: "Sparkles",
    color: "#7C3AED",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    capabilities: [
      "Custom Figma UI/UX & Conversion Strategy",
      "Squarespace 7.1 Fluid Engine Custom Coding",
      "Tailored Micro-Animations & Custom CSS",
      "Interactive Client Portals & Inquiries",
      "Loom Video Handover & Training"
    ],
    popularFor: "Established service businesses, luxury firms & growing agencies",
    turnaround: "10 - 18 Days",
    projectsDelivered: 240
  },
  {
    id: "template-customization",
    name: "Template Customization Package",
    category: "Templates",
    tagline: "Fast 7-Day Launch Utilizing Our Designer Squarespace 7.1 Templates",
    description: "Love one of our designer templates? Our team takes your selected Looksbay template, inserts your custom copy, high-res photos, brand fonts, and configures all domain and form settings for a rapid, stress-free launch.",
    icon: "LayoutTemplate",
    color: "#2563EB",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    capabilities: [
      "Rapid 7-Day Guaranteed Delivery",
      "Complete Brand Font & Color Injections",
      "Copy & Image Placement Optimization",
      "Form Routing & Third-party Integrations",
      "Pre-launch 40-Point Quality Assurance"
    ],
    popularFor: "Founders, coaches, consultants & creators needing a fast, polished launch",
    turnaround: "5 - 7 Days",
    projectsDelivered: 310
  },
  {
    id: "squarespace-migration",
    name: "Platform Migration & Redesign",
    category: "Migration",
    tagline: "Seamless Transfer from WordPress, Wix, or Shopify into Squarespace",
    description: "Tired of plugin vulnerabilities, broken updates, and clunky dashboards? We migrate your existing pages, blog archives, customer data, and SEO rankings cleanly into Squarespace 7.1 with zero downtime.",
    icon: "ArrowRightLeft",
    color: "#059669",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    capabilities: [
      "Full URL Mapping & 301 Redirect Architecture",
      "Blog Content & Image Asset Transfer",
      "Domain DNS & SSL Configuration",
      "SEO Ranking Preservation Guarantee",
      "Clean Code Injection Elimination"
    ],
    popularFor: "Brands escaping messy WordPress or restrictive Wix setups",
    turnaround: "7 - 12 Days",
    projectsDelivered: 185
  },
  {
    id: "squarespace-vip-day",
    name: "Squarespace VIP Day / Intensive",
    category: "VIP Day & Consulting",
    tagline: "A Full Dedicated Day of Senior Squarespace Design & Engineering",
    description: "Book an intensive VIP Day to resolve stubborn design quirks, build new high-converting sales landing pages, inject bespoke CSS features, or give your existing Squarespace website a high-impact facelift in just 24-48 hours.",
    icon: "Zap",
    color: "#EA580C",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    capabilities: [
      "Dedicated 8-Hour Senior Designer Sprint",
      "Same-Day Custom CSS & Layout Fixes",
      "Acuity & E-Commerce Flow Optimization",
      "Live Private Slack/WhatsApp Collaboration",
      "Immediate Production Deployment"
    ],
    popularFor: "Urgent campaign launches, feature upgrades & site cleanups",
    turnaround: "1 - 2 Days",
    projectsDelivered: 140
  },
  {
    id: "squarespace-seo",
    name: "Squarespace SEO & PageSpeed Audit",
    category: "Custom Design",
    tagline: "Technical Core Web Vitals, Schema Markup & Search Authority",
    description: "Make sure your Squarespace website ranks #1 on Google for high-intent client queries. We audit and calibrate meta tags, semantic heading hierarchy, image compression, structured data, and local search signals.",
    icon: "TrendingUp",
    color: "#D97706",
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
    capabilities: [
      "Squarespace Native SEO Configuration",
      "Google Search Console Indexing Fixes",
      "Schema.org Structured Data Injection",
      "Image Compression & Core Web Vitals",
      "Local Map Pack & High-Intent Keyword Strategy"
    ],
    popularFor: "Businesses wanting to dominate Google search without paid ads",
    turnaround: "3 - 5 Days",
    projectsDelivered: 215
  }
];
