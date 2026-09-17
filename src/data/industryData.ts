export interface IndustryProject {
  id: string;
  title: string;
  tagline: string;
  categoryTag: string;
  countryFlag: string;
  location: string;
  year: string;
  description: string;
  metric: string;
  laptopImage: string;
  liveUrl?: string;
  techTags: string[];
}

export interface IndustryCategory {
  slug: string;
  name: string;
  tagline: string;
  heroTag: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  projectsHeader: string;
  projectsSubheader: string;
  projects: IndustryProject[];
}

export const industryCategories: IndustryCategory[] = [
  /* 1. Real Estate */
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Property listings, MLS aggregators & luxury portals",
    heroTag: "Real estate companies & project developers",
    heroTitle: "Real Estate Web Platforms",
    heroHighlight: "& Digital Solutions",
    heroDescription:
      "From high-converting property listings to dynamic MLS systems — we build scalable, lightning-fast digital experiences for luxury developers, brokerage firms, and property portals.",
    projectsHeader: "Projects That Move Properties Forward",
    projectsSubheader:
      "A catalog of web solutions engineered for luxury real estate developers, commercial brokerages, and modern MLS portals.",
    projects: [
      {
        id: "re-1",
        title: "From Template to Premium Booking Experience",
        tagline: "Exclusive Mediterranean Villa & Penthouse Escapes",
        categoryTag: "Real Estate · Webflow CMS",
        countryFlag: "🇨🇾",
        location: "Cyprus",
        year: "2024",
        description:
          "Replaced an outdated WordPress template with a bespoke Webflow booking engine. Interactive 3D floorplan tours and direct reservation checkout boosted high-season occupancy by 64%.",
        metric: "+64% Direct Bookings",
        laptopImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Webflow CMS", "3D Floorplans", "Stripe Checkout"],
      },
      {
        id: "re-2",
        title: "New Build Club & Automated Investor Portal",
        tagline: "Institutional PropTech Investment Marketplace",
        categoryTag: "PropTech · Next.js & Headless",
        countryFlag: "🇺🇸",
        location: "USA",
        year: "2024",
        description:
          "Full-stack property syndication platform allowing accredited investors to browse off-market new developments with live construction camera feeds and automated legal docs.",
        metric: "$28M Capital Raised",
        laptopImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Next.js", "Investor Portal", "0.5s Latency"],
      },
      {
        id: "re-3",
        title: "Enterprise Website Build: 400+ Dynamic Subdomain Pages",
        tagline: "Nationwide Commercial Mortgage & Loan Portal",
        categoryTag: "Finance & Real Estate · WordPress ACF",
        countryFlag: "🇺🇸",
        location: "USA",
        year: "2024",
        description:
          "Programmatic multi-city landing page architecture generating 400+ targeted county and city subdomain pages with real-time interest rate calculator APIs.",
        metric: "140k Monthly Search Clicks",
        laptopImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Programmatic SEO", "WordPress ACF", "API Engine"],
      },
      {
        id: "re-4",
        title: "A High-Conversion Mortgage Portal That Converts",
        tagline: "Frictionless 60-Second Home Loan Pre-Approval",
        categoryTag: "FinTech & Real Estate · Framer Motion",
        countryFlag: "🇬🇧",
        location: "UK",
        year: "2024",
        description:
          "Simplified a complex 12-step loan application into a playful, gamified 3-step pre-qualification funnel. Reduced form drop-off rate by 52%.",
        metric: "3.2x Lead Velocity",
        laptopImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Framer", "Funnel Engine", "Mobile-First"],
      },
      {
        id: "re-5",
        title: "Azure Marina Luxury Waterfront Residences",
        tagline: "Private Island Penthouse & Yacht Slip Reservation",
        categoryTag: "Luxury Real Estate · Webflow 3D",
        countryFlag: "🇦🇺",
        location: "Australia",
        year: "2024",
        description:
          "Cinematic WebGL-powered waterfront development portal with daytime/nighttime lighting switches, 360-degree balcony view selector, and private broker scheduling.",
        metric: "100% Units Reserved in 90 Days",
        laptopImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&auto=format&fit=crop&q=80",
        techTags: ["WebGL 3D", "Finsweet", "Core Vitals 99"],
      },
    ],
  },

  /* 2. Award-Winning Websites */
  {
    slug: "award-winning-websites",
    name: "Award-Winning Websites",
    tagline: "Awwwards, FWA & CSS Design Awards caliber experiences",
    heroTag: "Next-generation digital experiences & creative studios",
    heroTitle: "Award-Winning Websites",
    heroHighlight: "& Brand Masterpieces",
    heroDescription:
      "Experimental typography, 60fps physics-based motion, and Apple-grade micro-interactions engineered to captivate audiences and win global design accolades.",
    projectsHeader: "Showpieces That Set Global Industry Standards",
    projectsSubheader:
      "Bespoke visual executions voted Site of the Day and nominated for prestigious international web awards.",
    projects: [
      {
        id: "aw-1",
        title: "InFaces Avant-Garde Design Manifesto",
        tagline: "Editorial Interactive Fashion & Typography Archive",
        categoryTag: "Design Studio · Webflow & Three.js",
        countryFlag: "🇫🇷",
        location: "France",
        year: "2024",
        description:
          "Experimental editorial layout with fluid cursor interactions, magnetic typography, and audio-reactive WebGL shaders. Winner of Awwwards Site of the Day.",
        metric: "Awwwards SOTD Winner",
        laptopImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Three.js", "Webflow CMS", "Kinetic Type"],
      },
      {
        id: "aw-2",
        title: "Chronos Haute Horlogerie 3D Experience",
        tagline: "Swiss Master Horology Virtual Assembly Showcase",
        categoryTag: "Luxury & 3D · Spline & Next.js",
        countryFlag: "🇨🇭",
        location: "Switzerland",
        year: "2024",
        description:
          "Exploded 3D view of a luxury tourbillon movement allowing users to dismantle gears in real-time in the browser. 0.8s load speed across all devices.",
        metric: "FWA of the Day",
        laptopImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Spline 3D", "Next.js", "Zero Lag"],
      },
      {
        id: "aw-3",
        title: "Hyperion Spatial Computing Vision",
        tagline: "Interactive Next-Gen AR OS Landing Showcase",
        categoryTag: "Tech & Hardware · Framer Motion",
        countryFlag: "🇺🇸",
        location: "USA",
        year: "2024",
        description:
          "Immersive dark-mode product reveal featuring custom Apple Vision Pro-style glassmorphism, responsive depth parallax, and 120Hz smooth scrolling.",
        metric: "CSSDA Best UI/UX",
        laptopImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Framer", "Glassmorphism", "120Hz Motion"],
      },
      {
        id: "aw-4",
        title: "Velvet & Stone Architectural Monographs",
        tagline: "Minimalist Scandinavian Architecture Gallery",
        categoryTag: "Architecture · Custom Headless",
        countryFlag: "🇩🇰",
        location: "Denmark",
        year: "2024",
        description:
          "Ultra-refined monochrome aesthetic with asymmetrical grids, seamless page transitions, and smooth scroll hijacking tuned for architectural photography.",
        metric: "Site of the Month Nominee",
        laptopImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80",
        techTags: ["GSAP ScrollTrigger", "Headless", "High-DPI"],
      },
      {
        id: "aw-5",
        title: "Solaria Sonic Synthesizer Hub",
        tagline: "Browser-Based Modular Synthesizer Experience",
        categoryTag: "Audio & Web Audio API · React 19",
        countryFlag: "🇩🇪",
        location: "Germany",
        year: "2024",
        description:
          "Interactive analog synthesizer playable directly in the browser with Web Audio API, oscilloscope canvas rendering, and instant MIDI recording export.",
        metric: "Developer Award 2024",
        laptopImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Web Audio API", "Canvas 2D", "React"],
      },
    ],
  },

  /* 3. Web Platforms & Services */
  {
    slug: "web-platforms-services",
    name: "Web Platforms & Services",
    tagline: "Custom web applications, client portals & API integrations",
    heroTag: "Scalable digital ecosystems & cloud architectures",
    heroTitle: "Web Platforms",
    heroHighlight: "& Enterprise Services",
    heroDescription:
      "We design and build robust full-stack platforms, client portals, and multi-tenant systems that streamline workflows and automate digital operations.",
    projectsHeader: "Mission-Critical Platforms Engineered for Scale",
    projectsSubheader:
      "Complex cloud platforms built with clean-code architecture, bank-grade encryption, and sub-second data synchronization.",
    projects: [
      {
        id: "wp-1",
        title: "FinPulse Global Wealth Client Portal",
        tagline: "Private Client Portfolio Dashboard & Analytics",
        categoryTag: "FinTech Platform · Next.js & Node",
        countryFlag: "🇨🇭",
        location: "Switzerland",
        year: "2024",
        description:
          "Secure institutional investor dashboard with real-time portfolio valuation charts, tax report generators, and end-to-end encrypted messaging.",
        metric: "$140M Managed Assets",
        laptopImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Next.js", "Financial APIs", "SOC2 Compliant"],
      },
      {
        id: "wp-2",
        title: "OmniChannel B2B Wholesale Ordering System",
        tagline: "Automated Bulk Inventory & Tiered Pricing Portal",
        categoryTag: "B2B Platform · Shopify Plus B2B",
        countryFlag: "🇺🇸",
        location: "USA",
        year: "2024",
        description:
          "Replaced manual PDF ordering with an instant wholesale portal featuring tiered volume discounts, net-30 invoicing, and multi-warehouse stock routing.",
        metric: "+210% Reorder Rate",
        laptopImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Shopify Plus B2B", "Net-30 Terms", "ERP Sync"],
      },
      {
        id: "wp-3",
        title: "SkillVault Enterprise LMS & Certification Engine",
        tagline: "Corporate Training & Automated Video Learning",
        categoryTag: "EdTech · Custom Webflow + Memberstack",
        countryFlag: "🇬🇧",
        location: "UK",
        year: "2024",
        description:
          "Interactive corporate training hub with video progress tracking, timed quizzing modules, and instant LinkedIn-shareable verification certificates.",
        metric: "45,000 Active Learners",
        laptopImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1000&auto=format&fit=crop&q=80",
        techTags: ["LMS Architecture", "Video CDN", "Memberstack"],
      },
      {
        id: "wp-4",
        title: "CareSync Telemedicine & Intake Portal",
        tagline: "HIPAA-Compliant Doctor Consultation Platform",
        categoryTag: "HealthTech · Web App & WebRTC",
        countryFlag: "🇨🇦",
        location: "Canada",
        year: "2024",
        description:
          "Virtual clinic system with instant high-definition video consultations, digital prescription refills, and electronic health record (EHR) synchronization.",
        metric: "15,000+ Appointments/Mo",
        laptopImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&auto=format&fit=crop&q=80",
        techTags: ["WebRTC", "HIPAA Ready", "Stripe Medical"],
      },
      {
        id: "wp-5",
        title: "TradeFlow Global Maritime Booking Dashboard",
        tagline: "Container Freight Tracking & Customs Engine",
        categoryTag: "Logistics SaaS · Next.js & Mapbox",
        countryFlag: "🇸🇬",
        location: "Singapore",
        year: "2024",
        description:
          "Real-time vessel geolocation map and instant bill of lading document automation for commercial shipping lines across 40 worldwide ports.",
        metric: "0.4s Global Latency",
        laptopImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Mapbox GL", "WebSockets", "Cloud Architecture"],
      },
    ],
  },

  /* 4. Landing Page */
  {
    slug: "landing-page",
    name: "Landing Page",
    tagline: "Ultra-high-converting landing pages & promotional hubs",
    heroTag: "Performance marketing & conversion rate optimization",
    heroTitle: "High-Converting Landing Pages",
    heroHighlight: "& Funnel Systems",
    heroDescription:
      "Engineered with behavioral psychology, heatmapped layout hierarchies, and 0.6s page loads to turn paid media ad spend into profitable inbound revenue.",
    projectsHeader: "Landing Pages That Maximize ROAS & Ad Spend",
    projectsSubheader:
      "Tailored promotional pages built for hyper-growth startups, paid advertising campaigns, and product launches.",
    projects: [
      {
        id: "lp-1",
        title: "Verve Hybrid Performance Shoe Drop",
        tagline: "Limited-Edition Athletic Sneaker Launch Funnel",
        categoryTag: "DTC Landing Page · Shopify & Framer",
        countryFlag: "🇺🇸",
        location: "USA",
        year: "2024",
        description:
          "Interactive 360 shoe customizer paired with a high-urgency countdown timer. Handled 80,000 concurrent visitors without a millisecond of server slowdown.",
        metric: "$420k Sold in 4 Hours",
        laptopImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Shopify Liquid", "High Concurrency", "Apple Pay"],
      },
      {
        id: "lp-2",
        title: "Apex High-Ticket Consulting Accelerator",
        tagline: "Executive Strategy Program Application Funnel",
        categoryTag: "Consulting Funnel · GoHighLevel",
        countryFlag: "🇦🇺",
        location: "Australia",
        year: "2024",
        description:
          "High-ticket qualification video funnel with automated calendar routing, dynamic SMS reminders, and multi-tier application intake forms.",
        metric: "28.4% Opt-In Rate",
        laptopImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80",
        techTags: ["GoHighLevel", "SMS Routing", "Video Sales Letter"],
      },
      {
        id: "lp-3",
        title: "NeuroFocus Brainwave Nootropic Reveal",
        tagline: "Clinically-Backed Cognitive Health Launch Page",
        categoryTag: "Supplements · Webflow & ReCharge",
        countryFlag: "🇬🇧",
        location: "UK",
        year: "2024",
        description:
          "Medical study interactive infographics, verified doctor video testimonials, and a 1-click subscription bundle selector that lifted AOV by 32%.",
        metric: "+32% Average Order Value",
        laptopImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=80",
        techTags: ["ReCharge Subscriptions", "Webflow", "CRO"],
      },
      {
        id: "lp-4",
        title: "Kite AI Coding Assistant Waitlist",
        tagline: "Developer Tool Viral Waitlist & Referral Loop",
        categoryTag: "Developer Tool · Next.js & Supabase",
        countryFlag: "🇺🇸",
        location: "USA",
        year: "2024",
        description:
          "Gamified developer waitlist with GitHub login, live queue leaderboard, and instant priority access referral codes.",
        metric: "120k Waitlist Signups",
        laptopImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Next.js", "GitHub OAuth", "Viral Referrals"],
      },
      {
        id: "lp-5",
        title: "Monolith Wealth Mastermind Ticket Page",
        tagline: "Ultra-VIP Dubai Finance Conference Booking",
        categoryTag: "Event Landing Page · Framer Motion",
        countryFlag: "🇦🇪",
        location: "Dubai, UAE",
        year: "2024",
        description:
          "Black-gold luxury conference portal with keynote speaker reveal reels, tiered VIP pass checkout, and personalized hotel concierge addons.",
        metric: "Sold Out 45 Days Early",
        laptopImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Stripe Elements", "Framer", "Luxury Vibe"],
      },
    ],
  },

  /* 5. Corporate Website */
  {
    slug: "corporate-website",
    name: "Corporate Website",
    tagline: "Enterprise credibility, investor relations & corporate portals",
    heroTag: "Fortune 500 & middle-market market leaders",
    heroTitle: "Corporate Websites",
    heroHighlight: "& Enterprise Authority",
    heroDescription:
      "We design authoritative corporate web presences that convey institutional credibility, comply with accessibility standards, and dominate commercial search terms.",
    projectsHeader: "Corporate Portals Engineered for Institutional Trust",
    projectsSubheader:
      "Multi-regional corporate portals built for legal practices, private equity groups, and enterprise consulting firms.",
    projects: [
      {
        id: "cw-1",
        title: "Cambridge Law & Global Advisory Portal",
        tagline: "Multi-Jurisdictional Corporate Legal Practice",
        categoryTag: "Legal Corporate · WordPress ACF Pro",
        countryFlag: "🇬🇧",
        location: "UK",
        year: "2024",
        description:
          "Bespoke Gutenberg design system with partner bio search, practice area resource hub, and confidential client intake encrypted at rest.",
        metric: "35+ #1 Google Ranks",
        laptopImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=80",
        techTags: ["WordPress ACF", "Enterprise SEO", "WCAG AA"],
      },
      {
        id: "cw-2",
        title: "Nordic Capital Growth Partners",
        tagline: "Private Equity Portfolio & Investor Relations",
        categoryTag: "Finance Corporate · Webflow Enterprise",
        countryFlag: "🇸🇪",
        location: "Sweden",
        year: "2024",
        description:
          "Clean Scandinavian corporate architecture featuring interactive portfolio case filters, annual ESG report downloads, and executive leadership bios.",
        metric: "$1.2B Fund Announcements",
        laptopImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Webflow Enterprise", "Investor Hub", "0.6s Speed"],
      },
      {
        id: "cw-3",
        title: "Apex Cloud Industrial Robotics Group",
        tagline: "Automation Systems for Tier-1 Manufacturing",
        categoryTag: "Industrial Corporate · Next.js & Sanity",
        countryFlag: "🇩🇪",
        location: "Germany",
        year: "2024",
        description:
          "Multi-lingual industrial conglomerate portal with interactive 3D robot arm configurator, CAD file spec downloads, and global distributor directory.",
        metric: "+180% Inbound RFQs",
        laptopImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Sanity CMS", "Multi-Language", "B2B RFP Engine"],
      },
      {
        id: "cw-4",
        title: "Veritas Global Risk & Compliance Consulting",
        tagline: "International Regulatory & Security Advisory",
        categoryTag: "Consulting · Webflow CMS",
        countryFlag: "🇺🇸",
        location: "USA",
        year: "2024",
        description:
          "Authoritative corporate site featuring whitepaper lead gates, dynamic podcast episodes, and executive consultation booking calendar sync.",
        metric: "14,000+ Whitepaper Downloads",
        laptopImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Finsweet", "Lead Magnet Gates", "High Authority"],
      },
      {
        id: "cw-5",
        title: "Sovereign Maritime Infrastructure Holdings",
        tagline: "Global Commercial Seaport & Logistics Group",
        categoryTag: "Infrastructure · Headless WordPress",
        countryFlag: "🇦🇪",
        location: "UAE",
        year: "2024",
        description:
          "Interactive map of deepwater ports with terminal throughput data metrics, press room archives, and institutional investor disclosures.",
        metric: "Lighthouse Score 99/100",
        laptopImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Headless WordPress", "SVG Mapping", "Investor Kit"],
      },
    ],
  },

  /* 6. Non-profit */
  {
    slug: "non-profit",
    name: "Non-profit",
    tagline: "Mission-driven storytelling, transparent giving & volunteer hubs",
    heroTag: "Charitable foundations & global impact initiatives",
    heroTitle: "Non-Profit Web Portals",
    heroHighlight: "& Mission Platforms",
    heroDescription:
      "We help NGOs, foundations, and community initiatives inspire donors, maximize recurring giving, and mobilize volunteer communities through transparent storytelling.",
    projectsHeader: "Platforms That Drive Real Global Impact",
    projectsSubheader:
      "Award-winning digital experiences for environmental conservation, crisis relief funds, and educational non-profits.",
    projects: [
      {
        id: "np-1",
        title: "HopeBridge Global Emergency Relief Fund",
        tagline: "Rapid-Response Humanitarian Disaster Aid",
        categoryTag: "Humanitarian · Webflow & Stripe Giving",
        countryFlag: "🇨🇭",
        location: "Switzerland",
        year: "2024",
        description:
          "Transparent donation tracker showing exact meal and medical kit allocation. Enabled Apple Pay 1-tap giving during international crisis events.",
        metric: "+240% Donation Volume",
        laptopImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Webflow CMS", "Stripe Giving", "Apple Pay Donate"],
      },
      {
        id: "np-2",
        title: "CleanEarth Oceanic Plastic Recovery Project",
        tagline: "Ocean Cleanup Monitoring & Sponsor Hub",
        categoryTag: "Environmental · Next.js & Mapbox",
        countryFlag: "🇳🇱",
        location: "Netherlands",
        year: "2024",
        description:
          "Live vessel GPS telemetry tracking ocean trash cleanup barriers with kilograms removed tally and corporate ESG tax receipt generation.",
        metric: "$1.4M Corporate Grants",
        laptopImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Live Telemetry", "Corporate Giving", "Mapbox GL"],
      },
      {
        id: "np-3",
        title: "Rainforest Canopy Preservation Trust",
        tagline: "Indigenous Land Defense & Acre Adoption",
        categoryTag: "Conservation · WordPress ACF Pro",
        countryFlag: "🇧🇷",
        location: "Brazil",
        year: "2024",
        description:
          "Interactive acre adoption map allowing donors to protect specific parcels of the Amazon with automated satellite photos and ranger reports.",
        metric: "62,000 Acres Protected",
        laptopImage: "https://images.unsplash.com/photo-1511497584788-87676104235f?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Interactive Acre Map", "WordPress", "Recurring CRM"],
      },
      {
        id: "np-4",
        title: "CodeForFuture Youth STEM Scholarship",
        tagline: "Free Tech Education for Underrepresented Youth",
        categoryTag: "Education · Webflow & Airtable",
        countryFlag: "🇺🇸",
        location: "USA",
        year: "2024",
        description:
          "Student scholarship application portal synced with Airtable and mentor matching calendar algorithms. Over 1,400 students placed in tech jobs.",
        metric: "1,400+ Tech Placements",
        laptopImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Airtable Sync", "Student Portal", "Finsweet"],
      },
      {
        id: "np-5",
        title: "Veterans Health & Transition Collective",
        tagline: "Mental Health Support & Career Mentorship",
        categoryTag: "Veterans Care · Squarespace & Acuity",
        countryFlag: "🇺🇸",
        location: "USA",
        year: "2024",
        description:
          "Confidential peer helpline portal, job board integration, and nationwide support chapter directory with 24/7 crisis hotline click-to-call.",
        metric: "100% Free Resources",
        laptopImage: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Crisis Helpline", "Chapter Directory", "Local SEO"],
      },
    ],
  },

  /* 7. Tech & Data */
  {
    slug: "tech-data",
    name: "Tech & Data",
    tagline: "AI SaaS platforms, developer APIs & big data infrastructure",
    heroTag: "DeepTech, B2B SaaS & artificial intelligence innovators",
    heroTitle: "Tech & Data Platforms",
    heroHighlight: "& AI Digital Fronts",
    heroDescription:
      "We transform complex data architectures and AI products into crisp, compelling digital interfaces that drive developer adoption and enterprise contracts.",
    projectsHeader: "Platforms Engineered for DeepTech & SaaS Leaders",
    projectsSubheader:
      "High-performance digital frontends for AI infrastructure, cyber defense, and cloud computing firms.",
    projects: [
      {
        id: "td-1",
        title: "Nexus Quantum AI Data Intelligence",
        tagline: "Real-Time Vector Database & Neural Search Engine",
        categoryTag: "AI SaaS · Framer & WebGL",
        countryFlag: "🇺🇸",
        location: "USA",
        year: "2024",
        description:
          "Interactive vector similarity playground right on the hero section. Generated over 1,200 enterprise sales demo requests in the first 60 days.",
        metric: "1,200+ Enterprise Demos",
        laptopImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Framer", "WebGL Vector Demo", "100/100 Vitals"],
      },
      {
        id: "td-2",
        title: "CipherShield Autonomous Cyber Defense",
        tagline: "Zero-Trust Threat Telemetry & SIEM Platform",
        categoryTag: "Cybersecurity · Next.js & Tailwind",
        countryFlag: "🇮🇱",
        location: "Israel",
        year: "2024",
        description:
          "Dark cyber interface with live simulated attack vectors, interactive SOC compliance matrix, and instant API documentation sandbox.",
        metric: "4.2x Faster Onboarding",
        laptopImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Next.js", "API Sandbox", "Enterprise Grade"],
      },
      {
        id: "td-3",
        title: "KubeStream Serverless Event Pipeline",
        tagline: "Kubernetes Event Streaming & Observability",
        categoryTag: "DevOps · Webflow & Docsify",
        countryFlag: "🇩🇪",
        location: "Germany",
        year: "2024",
        description:
          "Developer-focused documentation hub with copy-paste CLI commands, syntax highlighting, and interactive pricing calculator by node count.",
        metric: "350k Developer Views",
        laptopImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Docs Engine", "CLI Tools", "DevRel Hub"],
      },
      {
        id: "td-4",
        title: "OmniData Analytics Lakehouse Portal",
        tagline: "SQL Query Engine for Petabyte-Scale Warehouses",
        categoryTag: "Big Data SaaS · React & Tailwind",
        countryFlag: "🇺🇸",
        location: "USA",
        year: "2024",
        description:
          "High-speed marketing front with interactive benchmark speed comparison graphs versus Snowflake and BigQuery.",
        metric: "+185% Free Trial Signups",
        laptopImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Benchmarking UI", "React", "Core Web Vitals"],
      },
      {
        id: "td-5",
        title: "Sentient Voice Conversational AI API",
        tagline: "Ultra-Low Latency Voice Agents for Contact Centers",
        categoryTag: "Voice AI · Framer Motion",
        countryFlag: "🇨🇦",
        location: "Canada",
        year: "2024",
        description:
          "Users can talk live to a voice AI bot directly through browser microphone with sub-200ms roundtrip audio response.",
        metric: "80,000 Live Audio Demos",
        laptopImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1000&auto=format&fit=crop&q=80",
        techTags: ["WebSockets Audio", "Framer", "Interactive Demo"],
      },
    ],
  },

  /* 8. Logistics & Fulfillment */
  {
    slug: "logistics-fulfillment",
    name: "Logistics & Fulfillment",
    tagline: "Supply chain portals, freight tracking & warehouse systems",
    heroTag: "3PL providers, freight forwarders & supply chain leaders",
    heroTitle: "Logistics & Fulfillment",
    heroHighlight: "& Supply Chain Web",
    heroDescription:
      "We engineer modern logistics web experiences featuring live shipment trackers, automated freight rate quote engines, and warehouse partner integrations.",
    projectsHeader: "Platforms Moving Global Freight & Warehousing",
    projectsSubheader:
      "Enterprise logistics platforms built for 3PL providers, trucking fleets, and international air cargo forwarders.",
    projects: [
      {
        id: "lf-1",
        title: "Apex Global Cold-Chain Express",
        tagline: "Temperature-Controlled Pharmaceutical Transport",
        categoryTag: "Freight Logistics · Next.js & IoT APIs",
        countryFlag: "🇩🇪",
        location: "Germany",
        year: "2024",
        description:
          "Real-time sensor IoT dashboard showing temperature, humidity, and location for sensitive vaccine and oncology drug shipments across Europe.",
        metric: "Zero Spoilage Rate",
        laptopImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80",
        techTags: ["IoT Telemetry", "Next.js", "GDP Certified"],
      },
      {
        id: "lf-2",
        title: "Nexus 3PL Automated E-Commerce Fulfillment",
        tagline: "Same-Day Pick, Pack & Shipping for DTC Brands",
        categoryTag: "3PL Portal · Webflow & Shopify API",
        countryFlag: "🇺🇸",
        location: "USA",
        year: "2024",
        description:
          "Clean, modern 3PL marketing site with instant Shopify/WooCommerce integration calculators and automated SLA delivery guarantees.",
        metric: "+240% Inbound Brands",
        laptopImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Shopify Integration", "Webflow", "Rate Calculator"],
      },
      {
        id: "lf-3",
        title: "TransContinental Freight & Ocean Brokerage",
        tagline: "Instant FTL & LTL Commercial Trucking Quotes",
        categoryTag: "Freight Portal · WordPress ACF",
        countryFlag: "🇺🇸",
        location: "USA",
        year: "2024",
        description:
          "Algorithmic instant rate calculator allowing shippers to input origin/destination zip codes and receive guaranteed spot market freight rates.",
        metric: "18,000 Quotes Generated/Mo",
        laptopImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Instant Quote API", "WordPress", "Zip Code Routing"],
      },
      {
        id: "lf-4",
        title: "AeroFleet Express Air Cargo Network",
        tagline: "Charter Air Freight & AOG Aircraft On Ground Aid",
        categoryTag: "Aviation Cargo · Webflow Enterprise",
        countryFlag: "🇦🇪",
        location: "UAE",
        year: "2024",
        description:
          "24/7 urgent flight charter booking desk with live cargo aircraft tail number tracking and hazardous goods compliance calculators.",
        metric: "30-Min Emergency Response",
        laptopImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Live Aircraft Map", "Emergency Desk", "High Speed"],
      },
      {
        id: "lf-5",
        title: "PortVantage Container Drayage Portal",
        tagline: "Intermodal Rail & Harbor Trucking Management",
        categoryTag: "Port Drayage · Custom Web App",
        countryFlag: "🇳🇱",
        location: "Rotterdam, NL",
        year: "2024",
        description:
          "Driver app onboarding and container pickup appointment reservation system integrated directly with Rotterdam port terminal gates.",
        metric: "45% Faster Gate Turns",
        laptopImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Terminal APIs", "Mobile Drayage", "Zero Delay"],
      },
    ],
  },

  /* 9. Healthcare & Medical */
  {
    slug: "healthcare-medical",
    name: "Healthcare & Medical",
    tagline: "Medical clinics, aesthetics centers & telemedicine systems",
    heroTag: "Healthcare networks, surgical clinics & medspas",
    heroTitle: "Healthcare & Medical Platforms",
    heroHighlight: "& Clinical Systems",
    heroDescription:
      "HIPAA-compliant medical portals designed with calm clinical elegance, seamless appointment booking, patient intake forms, and high-ranking local SEO.",
    projectsHeader: "Clinical Platforms Built for Patient Trust & Care",
    projectsSubheader:
      "Medical-grade portals for cosmetic surgery centers, dermatology clinics, and multi-location hospital networks.",
    projects: [
      {
        id: "hm-1",
        title: "Dr. Alistair Vance Aesthetics & Longevity",
        tagline: "Bespoke Facial Plastic Surgery & Regenerative Med",
        categoryTag: "Aesthetics Surgery · Webflow & HIPAA",
        countryFlag: "🇺🇸",
        location: "Beverly Hills, CA",
        year: "2024",
        description:
          "Ultra-private before-and-after photo slider galleries, encrypted virtual consultation intake, and patient journey recovery timeline guides.",
        metric: "Fully Booked 6 Months Out",
        laptopImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&auto=format&fit=crop&q=80",
        techTags: ["HIPAA Compliant", "Before/After Sliders", "Local SEO"],
      },
      {
        id: "hm-2",
        title: "Kailani Integrative Functional Medicine",
        tagline: "Comprehensive Gut & Hormone Optimization Clinics",
        categoryTag: "Functional Medicine · Shopify & Webflow",
        countryFlag: "🇺🇸",
        location: "USA",
        year: "2024",
        description:
          "Hybrid practice offering both clinical telemedicine appointments and e-commerce physician-formulated supplement drops with automatic refills.",
        metric: "+210% Supplement GMV",
        laptopImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Shopify Medical", "Telehealth", "ReCharge"],
      },
      {
        id: "hm-3",
        title: "Apex Spine & Orthopedic Surgical Institute",
        tagline: "Minimally Invasive Outpatient Joint Reconstruction",
        categoryTag: "Orthopedic Surgery · WordPress ACF Pro",
        countryFlag: "🇬🇧",
        location: "London, UK",
        year: "2024",
        description:
          "Condition and symptom self-assessment checker that directs patients to the appropriate surgical specialist with insurance verification.",
        metric: "3.4x Faster Intake",
        laptopImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Symptom Checker", "Insurance Verification", "WordPress"],
      },
      {
        id: "hm-4",
        title: "MindSpring Pediatric & Adolescent Behavioral Hub",
        tagline: "Compassionate Autism & ADHD Therapy Services",
        categoryTag: "Pediatric Therapy · Squarespace & Acuity",
        countryFlag: "🇨🇦",
        location: "Canada",
        year: "2024",
        description:
          "Friendly, calming illustrations and simple parent onboarding forms with insurance pre-clearance and multi-clinic location map routing.",
        metric: "450 New Families Enrolled",
        laptopImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Acuity Scheduling", "Family Portal", "Accessibility"],
      },
      {
        id: "hm-5",
        title: "Lumina Dental Studio & Smile Architecture",
        tagline: "Cosmetic Porcelain Veneers & Clear Aligners",
        categoryTag: "Dental Aesthetics · Framer Motion",
        countryFlag: "🇦🇺",
        location: "Sydney, Australia",
        year: "2024",
        description:
          "Interactive 3D smile makeover simulator, transparent financing payment breakdown calculator, and 1-click WhatsApp instant booking.",
        metric: "+320% Veneer Consultations",
        laptopImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Smile Simulator", "Framer", "Instant WhatsApp"],
      },
    ],
  },

  /* 10. Automotive */
  {
    slug: "automotive",
    name: "Automotive",
    tagline: "Exotic dealerships, EV charging networks & tuning brands",
    heroTag: "Luxury car dealerships, EV technology & performance tuning",
    heroTitle: "Automotive Web Platforms",
    heroHighlight: "& Dealership Systems",
    heroDescription:
      "High-octane digital experiences for supercar dealerships, aftermarket performance tuning brands, and electric vehicle charging ecosystems.",
    projectsHeader: "High-Performance Platforms Built for Automotive Brands",
    projectsSubheader:
      "Immersive automotive showcases featuring 360 virtual showroom tours, VIN inventory filtering, and finance calculators.",
    projects: [
      {
        id: "au-1",
        title: "Apex Prestige Supercar Dealership",
        tagline: "Curated Exotic Ferrari, Porsche & McLaren Inventory",
        categoryTag: "Exotic Dealership · Next.js & Sanity",
        countryFlag: "🇦🇪",
        location: "Dubai, UAE",
        year: "2024",
        description:
          "Virtual 360 showroom tour with high-fidelity engine rev audio clips, live WhatsApp VIP sales desk, and crypto escrow vehicle reservation.",
        metric: "$42M Vehicle Sales",
        laptopImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Next.js", "Virtual 360 Tour", "Crypto Checkout"],
      },
      {
        id: "au-2",
        title: "VoltEdge Commercial EV Fast-Charging Network",
        tagline: "Nationwide Ultra-Fast Fleet Charging Hubs",
        categoryTag: "EV CleanTech · Webflow & Mapbox",
        countryFlag: "🇺🇸",
        location: "USA",
        year: "2024",
        description:
          "Interactive live charger availability map with kilowatt charging speed filters, commercial fleet pricing tiers, and mobile app download links.",
        metric: "1,200 Station Locations",
        laptopImage: "https://images.unsplash.com/photo-1558441719-8b489c63f728?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Mapbox Live Status", "EV Fleet", "Webflow CMS"],
      },
      {
        id: "au-3",
        title: "Klausen Rennsport Porsche Performance Tuning",
        tagline: "Bespoke Carbon Fiber Aerodynamics & ECU Flashing",
        categoryTag: "Motorsport DTC · Shopify Plus 2.0",
        countryFlag: "🇩🇪",
        location: "Stuttgart, Germany",
        year: "2024",
        description:
          "Year/Make/Model VIN fitment filter guaranteeing 100% part compatibility, 3D dyno horsepower gain charts, and worldwide express DHL tracking.",
        metric: "+48% Tuning Kit Revenue",
        laptopImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Shopify Plus", "Year/Make/Model Filter", "Dyno Charts"],
      },
      {
        id: "au-4",
        title: "Monza Classic Concours Restoration Registry",
        tagline: "Vintage European Collector Car Provenance Archive",
        categoryTag: "Heritage Cars · WordPress ACF",
        countryFlag: "🇮🇹",
        location: "Italy",
        year: "2024",
        description:
          "Historic chassis number lookups with high-resolution restoration progression diaries, historic race victory records, and private auction bidding.",
        metric: "Heritage Award Winner",
        laptopImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1000&auto=format&fit=crop&q=80",
        techTags: ["Chassis Registry", "High-DPI Gallery", "WordPress"],
      },
      {
        id: "au-5",
        title: "Overland Armor Expedition Vehicles",
        tagline: "Custom 4x4 Heavy-Duty Overland Camper Builds",
        categoryTag: "Expedition 4x4 · Framer Motion",
        countryFlag: "🇦🇺",
        location: "Australia",
        year: "2024",
        description:
          "Step-by-step 3D overland truck builder with solar battery calculation, custom suspension selection, and instant deposit checkout.",
        metric: "2-Year Build Waitlist Filled",
        laptopImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1000&auto=format&fit=crop&q=80",
        techTags: ["3D Vehicle Configurator", "Framer", "Stripe Deposit"],
      },
    ],
  },
];
