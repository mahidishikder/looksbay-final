export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  updatedAt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  author: string;
  intro: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "website-redesign-checklist",
    title: "The Website Redesign Checklist for Ambitious Businesses",
    excerpt: "A practical framework for deciding what to fix, what to keep, and what to measure before a redesign begins.",
    category: "Strategy",
    date: "2026-08-24",
    updatedAt: "2026-08-24",
    readTime: "8 min read",
    image: "/images/hero_website_mockup.jpg",
    imageAlt: "High-performance website redesign displayed on a laptop",
    author: "Looksbay Strategy Team",
    intro: "A redesign should make the business easier to understand and easier to choose. The strongest projects start with evidence, not a moodboard.",
    sections: [
      {
        heading: "Start with the business problem",
        paragraphs: [
          "Before changing a homepage, write down the commercial problem the current site creates. Is qualified traffic failing to convert, is the offer unclear, or is the site too slow for mobile visitors? A clear problem keeps the redesign focused.",
          "Connect each proposed page or feature to a measurable outcome. That might be more qualified enquiries, a higher checkout completion rate, or fewer support questions.",
        ],
      },
      {
        heading: "Audit the journey, not just the screens",
        paragraphs: [
          "Review how a first-time visitor moves from search result to proof, offer, and action. Look for missing context, competing calls to action, and dead ends in the navigation.",
          "The best redesigns remove decisions. They give each audience a clear next step while preserving enough detail for a confident purchase decision.",
        ],
      },
      {
        heading: "Define success before launch",
        paragraphs: [
          "Choose a small set of baseline metrics before development starts: Core Web Vitals, conversion rate, qualified lead volume, and the search queries that matter most.",
          "A launch is the beginning of measurement, not the end of the project. Keep a short learning loop after release and improve the pages that influence revenue first.",
        ],
      },
    ],
  },
  {
    slug: "core-web-vitals-for-business-websites",
    title: "Core Web Vitals: What Business Owners Actually Need to Know",
    excerpt: "Performance metrics explained in plain language, with the fixes that usually create the biggest commercial gains.",
    category: "Performance",
    date: "2026-08-12",
    updatedAt: "2026-08-12",
    readTime: "7 min read",
    image: "/images/service_webflow_mockup.jpg",
    imageAlt: "Responsive Webflow website interface on a desktop screen",
    author: "Looksbay Engineering Team",
    intro: "Speed is not a technical vanity metric. It affects whether visitors trust the page, find the offer, and complete the action you want them to take.",
    sections: [
      {
        heading: "The three signals that matter",
        paragraphs: [
          "Largest Contentful Paint measures how quickly the main content becomes visible. Interaction to Next Paint reflects how quickly the page responds. Cumulative Layout Shift measures whether content jumps while someone is reading or tapping.",
          "Together they describe the first impression of a page: can I see it, can I use it, and can I trust that it will stay in place?",
        ],
      },
      {
        heading: "Fix the largest cost first",
        paragraphs: [
          "Start with the largest image, the slowest server response, and unnecessary JavaScript. Compressing hero media, reserving image dimensions, and loading interactive code only when needed often delivers more than a cosmetic code cleanup.",
          "Performance work should be tested on a representative mobile connection. A fast office laptop can hide the experience your real customers receive.",
        ],
      },
      {
        heading: "Make speed part of the workflow",
        paragraphs: [
          "Set a performance budget for new pages and review it before every release. This prevents third-party scripts, oversized imagery, and unplanned animations from quietly becoming permanent.",
        ],
      },
    ],
  },
  {
    slug: "seo-content-that-builds-authority",
    title: "How to Build an SEO Content System That Compounds",
    excerpt: "Turn scattered blog posts into a useful topic architecture that earns visibility and supports conversion.",
    category: "SEO",
    date: "2026-07-30",
    updatedAt: "2026-07-30",
    readTime: "9 min read",
    image: "/images/section_bg_team.jpg",
    imageAlt: "Creative team collaborating on a digital project",
    author: "Looksbay Growth Team",
    intro: "Publishing more pages is not the same as building authority. A strong content system answers the questions your best customers ask before they are ready to buy.",
    sections: [
      {
        heading: "Organise around customer intent",
        paragraphs: [
          "Group content by the problems, comparisons, and decisions that shape your customer journey. This creates a clearer internal linking structure and makes the site easier for people and search engines to understand.",
          "Use service pages for commercial intent and blog articles for education, evidence, and early research. Each should link naturally to the next useful step.",
        ],
      },
      {
        heading: "Make every article genuinely useful",
        paragraphs: [
          "Lead with a direct answer, use specific examples, and explain trade-offs instead of repeating generic advice. Original experience is often the most defensible advantage in competitive search results.",
          "Keep the page easy to scan with descriptive headings, short paragraphs, meaningful images, and a clear summary of what the reader can do next.",
        ],
      },
      {
        heading: "Refresh winners before creating more",
        paragraphs: [
          "Review pages that already receive impressions but have weak click-through or engagement. Better titles, stronger introductions, updated examples, and clearer internal links can unlock more value than another thin article.",
        ],
      },
    ],
  },
  {
    slug: "shopify-conversion-rate-optimisation",
    title: "Shopify Conversion Rate Optimisation: The High-Impact Essentials",
    excerpt: "The product page, cart, and checkout improvements that help more of your existing traffic become customers.",
    category: "E-commerce",
    date: "2026-07-15",
    updatedAt: "2026-07-15",
    readTime: "6 min read",
    image: "/images/service_ecommerce_mockup.jpg",
    imageAlt: "E-commerce storefront interface designed for conversion",
    author: "Looksbay Commerce Team",
    intro: "A store does not need more distractions to convert. It needs confident product decisions, visible proof, and a checkout experience that removes hesitation.",
    sections: [
      {
        heading: "Give the product page a job",
        paragraphs: [
          "A useful product page answers what it is, who it is for, why it is different, and what happens after purchase. Put the strongest proof close to the primary action and make shipping, returns, and availability easy to find.",
        ],
      },
      {
        heading: "Reduce uncertainty at the cart",
        paragraphs: [
          "Show the total cost early, keep delivery expectations specific, and avoid surprising customers with avoidable steps. Small reassurance details can protect conversion without turning the page into a wall of badges.",
        ],
      },
      {
        heading: "Measure the full funnel",
        paragraphs: [
          "Track product view, add to cart, checkout start, payment completion, and repeat purchase together. Optimising one step in isolation can move the problem further down the funnel.",
        ],
      },
    ],
  },
];

export const featuredArticle = blogArticles[0];
