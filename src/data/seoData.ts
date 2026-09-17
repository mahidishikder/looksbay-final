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
    id: "technical-squarespace-seo",
    title: "Squarespace Technical SEO & Core Web Vitals",
    badge: "95+ Lighthouse Guarantee",
    description: "We optimize Squarespace 7.1 Fluid Engine sites to achieve lightning-fast loading speeds, passing Core Web Vitals with flying colors on mobile and desktop.",
    score: "99/100",
    points: [
      "Custom CSS critical path optimization",
      "Next-gen WebP image asset scaling",
      "Dynamic XML sitemap indexing verification",
      "JSON-LD Schema structured data injection",
      "Elimination of slow third-party render blockers"
    ],
    icon: "Cpu"
  },
  {
    id: "migration-seo",
    title: "Migration & 301 Redirect Protection",
    badge: "Zero Traffic Loss",
    description: "Moving from WordPress, Wix, or Shopify to Squarespace? We guarantee 100% preservation of your hard-earned Google search rankings with precise URL mapping.",
    score: "100% Retained",
    points: [
      "Comprehensive legacy URL crawl & audit",
      "1-to-1 301 permanent redirect configuration",
      "Google Search Console address change filing",
      "Backlink retention & canonical tag mapping",
      "Post-launch 404 error monitoring & fixing"
    ],
    icon: "FileSearch"
  },
  {
    id: "onpage-squarespace-seo",
    title: "On-Page Architecture & Semantic Content",
    badge: "Intent-Driven Rankings",
    description: "We structure your Squarespace pages with rock-solid semantic HTML5, clear H1-H3 hierarchies, and high-converting meta tags that win the click on SERPs.",
    score: "#1 Rank Ready",
    points: [
      "High-intent commercial keyword mapping",
      "Click-optimized Title tags & Meta descriptions",
      "Image ALT text & caption optimization",
      "Internal linking architecture across service pages",
      "Rich snippet validation for local services"
    ],
    icon: "Layers"
  },
  {
    id: "local-squarespace-seo",
    title: "Local SEO & Google Maps Visibility",
    badge: "Local Authority",
    description: "Dominate local client searches in your city or region. We optimize Squarespace local business schema and NAP consistency for consistent client inquiries.",
    score: "Top 3 Pack",
    points: [
      "Google Business Profile sync & optimization",
      "Local schema markup with geocoordinates",
      "Location-specific service landing pages",
      "Localized customer review schema integration",
      "Directory citation consistency audit"
    ],
    icon: "TrendingUp"
  }
];
