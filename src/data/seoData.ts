export interface SeoFeature {
  id: string;
  title: string;
  badge: string;
  description: string;
  score: string;
  points: string[];
  icon: string;
}

export const seoServices: SeoFeature[] = [
  {
    id: "technical-seo",
    title: "Technical SEO & Core Web Vitals",
    badge: "95+ Lighthouse Guarantee",
    description: "We eliminate code bloat, optimize Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and First Input Delay (FID) across every CMS.",
    score: "99/100",
    points: [
      "JavaScript & CSS critical path elimination",
      "Next-gen WebP/AVIF asset automation",
      "Dynamic XML Sitemaps & robots.txt tuning",
      "Schema.org Structured Data (JSON-LD)",
      "Server caching & CDN edge configuration"
    ],
    icon: "Cpu"
  },
  {
    id: "onpage-seo",
    title: "On-Page Architecture & Semantic Structure",
    badge: "Maximum Search Visibility",
    description: "Search engines love structure. We construct an unshakeable hierarchy of H1-H6 tags, semantic entities, internal link clusters, and intent-focused copy.",
    score: "#1 Rank Ready",
    points: [
      "Competitor keyword gap analysis",
      "Title tag & meta description CTR engineering",
      "Topical authority content clustering",
      "Internal linking mesh architecture",
      "Image ALT tags & rich snippets optimization"
    ],
    icon: "FileSearch"
  },
  {
    id: "platform-seo",
    title: "Platform-Specific CMS SEO",
    badge: "Platform Mastery",
    description: "Every CMS has quirks. We configure native and plugin-based SEO engines without sacrificing site speed.",
    score: "Zero Errors",
    points: [
      "Shopify: Canonical URL fixes & collection tag optimization",
      "WordPress: RankMath / Yoast schema & breadcrumb setup",
      "Webflow: Dynamic CMS meta rules & Open Graph cards",
      "Framer: Semantic HTML5 tags & SSR search indexing",
      "Squarespace: Clean URL mapping & 301 redirect management"
    ],
    icon: "Layers"
  },
  {
    id: "local-seo",
    title: "Local SEO & High-Intent Conversion",
    badge: "Local Dominance",
    description: "Own your local market and Google Maps pack with coordinated Google Business Profile optimization and geo-targeted schema.",
    score: "Top 3 Local",
    points: [
      "Google Business Profile (GBP) optimization",
      "Local schema markup (LocalBusiness JSON-LD)",
      "Geo-targeted landing page creation",
      "NAP consistency (Name, Address, Phone)",
      "Review generation funnels"
    ],
    icon: "MapPin"
  }
];

export const seoAuditStats = [
  { label: "Google PageSpeed Mobile", value: "98+", sub: "Green Core Web Vitals" },
  { label: "Organic Search Lift", value: "+185%", sub: "Average within 90 days" },
  { label: "Bounce Rate Reduction", value: "-42%", sub: "Instant page responses" },
  { label: "Ranked Keywords", value: "12,000+", sub: "First-page Google rankings" },
];
