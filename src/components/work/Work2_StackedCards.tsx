"use client";

import React from "react";
import ProjectShowcaseCard from "@/components/home/ProjectShowcaseCard";

export interface WorkProjectItem {
  id: string;
  title: string;
  titleHighlight?: string;
  category: string;
  country: string;
  flag: string;
  dateRange: string;
  ribbons: { text: string; bg?: string; textCol?: string }[];
  extraRibbonCount?: number;
  description: React.ReactNode;
  initialLikes: number;
  themeBg: string;
  doodleType: "spiral" | "rockon" | "heart" | "loops";
  topSticker: string;
  frontImage: string;
  frontImageAlt: string;
  backImage: string;
  backImageAlt: string;
  liveUrl?: string;
}

export const workProjectsList: WorkProjectItem[] = [
  {
    id: "infaces",
    title: "Infaces",
    category: "Webflow",
    country: "Cyprus",
    flag: "🇨🇾",
    dateRange: "Dec 2024-Dec 2025",
    ribbons: [
      { text: "VID", bg: "#F87171" },
      { text: "V", bg: "#FB7185" },
      { text: "S", bg: "#EA580C" },
      { text: "FWA", bg: "#EF4444" },
      { text: "W.", bg: "#E11D48" },
    ],
    extraRibbonCount: 4,
    description: (
      <p>
        A storytelling platform that helped a 5,000+ employee global company{" "}
        <strong className="text-slate-900 font-bold">reconnect distributed teams</strong> and
        strengthen its shared culture.
      </p>
    ),
    initialLikes: 95,
    themeBg: "#EADBFC",
    doodleType: "rockon",
    topSticker: "🎩",
    frontImage:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=80",
    frontImageAlt: "Infaces Editorial Storytelling",
    backImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
    backImageAlt: "Infaces Global Community Culture",
    liveUrl: "/portfolio",
  },
  {
    id: "global-leathers",
    title: "Global Leathers",
    category: "Webflow",
    country: "USA",
    flag: "🇺🇸",
    dateRange: "Aug. - Oct. 2024",
    ribbons: [
      { text: "FWA", bg: "#EF4444" },
      { text: "VID", bg: "#F87171" },
      { text: "W.", bg: "#EA580C" },
      { text: "S", bg: "#DC2626" },
    ],
    extraRibbonCount: 2,
    description: (
      <p>
        A premium Webflow website that{" "}
        <strong className="text-slate-900 font-bold">strengthened the brand&apos;s online presence</strong>{" "}
        and gave the company a clearer foundation for lead generation.
      </p>
    ),
    initialLikes: 838,
    themeBg: "#EFE5D7",
    doodleType: "spiral",
    topSticker: "🔥",
    frontImage:
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=900&auto=format&fit=crop&q=80",
    frontImageAlt: "Global Leathers Interior Showcase",
    backImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&auto=format&fit=crop&q=80",
    backImageAlt: "Global Leathers Process & Craft",
    liveUrl: "/portfolio",
  },
  {
    id: "solana-payouts",
    title: "Solana Payouts",
    category: "Framer",
    country: "Czech Republic",
    flag: "🇨🇿",
    dateRange: "May - July 2024",
    ribbons: [
      { text: "VID", bg: "#F87171" },
      { text: "V", bg: "#FB7185" },
      { text: "S", bg: "#EA580C" },
      { text: "W.", bg: "#EF4444" },
    ],
    extraRibbonCount: 3,
    description: (
      <p>
        A high-converting Webflow launch site that helped Solana Payouts{" "}
        <strong className="text-slate-900 font-bold">attract 2,000+ leads in its first month</strong>{" "}
        through a Telegram-led campaign.
      </p>
    ),
    initialLikes: 620,
    themeBg: "#DBEAFE",
    doodleType: "heart",
    topSticker: "🤘",
    frontImage:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=900&auto=format&fit=crop&q=80",
    frontImageAlt: "Solana Payouts Web3 Crypto Portal",
    backImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
    backImageAlt: "Historical Performance Analytics",
    liveUrl: "/portfolio",
  },
  {
    id: "torchsensors",
    title: "TorchSensors",
    titleHighlight: "true",
    category: "Webflow",
    country: "USA",
    flag: "🇺🇸",
    dateRange: "Jan. 2023 - Ongoing",
    ribbons: [
      { text: "FWA", bg: "#EF4444" },
      { text: "W.", bg: "#EA580C" },
      { text: "S", bg: "#DC2626" },
      { text: "VID", bg: "#F87171" },
      { text: "N", bg: "#E11D48" },
    ],
    extraRibbonCount: 6,
    description: (
      <p>
        An award-winning launch website that helped a new wildfire detection product earn trust,{" "}
        <strong className="text-slate-900 font-bold">generate 30+ preorders on day one</strong>, and
        grow into a long-term digital platform.
      </p>
    ),
    initialLikes: 334,
    themeBg: "#FDDED6",
    doodleType: "loops",
    topSticker: "🔥",
    frontImage:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&auto=format&fit=crop&q=80",
    frontImageAlt: "Early Fire Detection Sensor",
    backImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&q=80",
    backImageAlt: "Wildfire Risk Prevention Mapping",
    liveUrl: "/portfolio",
  },
  {
    id: "aura-horology",
    title: "Aura Horology",
    category: "Shopify Plus",
    country: "USA",
    flag: "🇺🇸",
    dateRange: "Oct. 2024 - Jan. 2025",
    ribbons: [
      { text: "Shopify", bg: "#10B981" },
      { text: "W.", bg: "#EA580C" },
      { text: "S", bg: "#DC2626" },
      { text: "FWA", bg: "#EF4444" },
    ],
    extraRibbonCount: 5,
    description: (
      <p>
        Bespoke Liquid 2.0 luxury timepieces storefront with 3D product visualizer, yielding a{" "}
        <strong className="text-slate-900 font-bold">+42% mobile checkout conversion bump</strong> in
        under 90 days.
      </p>
    ),
    initialLikes: 512,
    themeBg: "#D1FAE5",
    doodleType: "spiral",
    topSticker: "✨",
    frontImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=80",
    frontImageAlt: "Aura Horology Luxury Timepieces",
    backImage:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&auto=format&fit=crop&q=80",
    backImageAlt: "Sub-Second Checkout Engine",
    liveUrl: "/portfolio",
  },
  {
    id: "apex-intelligence",
    title: "Apex Intelligence",
    category: "Framer",
    country: "USA",
    flag: "🇺🇸",
    dateRange: "Nov. 2024 - Present",
    ribbons: [
      { text: "Framer", bg: "#3B82F6" },
      { text: "VID", bg: "#F87171" },
      { text: "W.", bg: "#EA580C" },
      { text: "S", bg: "#DC2626" },
    ],
    extraRibbonCount: 3,
    description: (
      <p>
        SaaS platform landing experience with 60fps spring animations that generated over{" "}
        <strong className="text-slate-900 font-bold">1,200+ enterprise demo inquiries</strong> with a
        100/100 Core Vitals score.
      </p>
    ),
    initialLikes: 740,
    themeBg: "#E0F2FE",
    doodleType: "rockon",
    topSticker: "🚀",
    frontImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
    frontImageAlt: "Apex Enterprise Cloud Intelligence",
    backImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
    backImageAlt: "Real-Time Telemetry Interface",
    liveUrl: "/portfolio",
  },
  {
    id: "grand-lachine",
    title: "Grand Lachine",
    category: "WordPress",
    country: "Canada",
    flag: "🇨🇦",
    dateRange: "July - Sept. 2024",
    ribbons: [
      { text: "WP", bg: "#2563EB" },
      { text: "ACF", bg: "#059669" },
      { text: "FWA", bg: "#EF4444" },
      { text: "W.", bg: "#EA580C" },
    ],
    extraRibbonCount: 4,
    description: (
      <p>
        Ultra-luxury residential property portal engineered with custom ACF Gutenberg components,
        driving over{" "}
        <strong className="text-slate-900 font-bold">$35M+ in closed sales volume</strong> with 0.6s
        sub-second speed.
      </p>
    ),
    initialLikes: 429,
    themeBg: "#FEF3C7",
    doodleType: "heart",
    topSticker: "💎",
    frontImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80",
    frontImageAlt: "Grand Lachine Luxury Estates",
    backImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&auto=format&fit=crop&q=80",
    backImageAlt: "Architectural Floorplans Showcase",
    liveUrl: "/portfolio",
  },
  {
    id: "lumina-creative",
    title: "Lumina Studio",
    category: "Webflow",
    country: "United Kingdom",
    flag: "🇬🇧",
    dateRange: "Jan. - Feb. 2025",
    ribbons: [
      { text: "Webflow", bg: "#4353FF" },
      { text: "FWA", bg: "#EF4444" },
      { text: "W.", bg: "#EA580C" },
      { text: "Site of the Day", bg: "#8B5CF6" },
    ],
    extraRibbonCount: 3,
    description: (
      <p>
        Full brand and web experience for an award-winning London production agency, featuring{" "}
        <strong className="text-slate-900 font-bold">fluid custom cursor interactions</strong> and
        interactive 3D case study reels.
      </p>
    ),
    initialLikes: 588,
    themeBg: "#F3E8FF",
    doodleType: "loops",
    topSticker: "🎨",
    frontImage:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&auto=format&fit=crop&q=80",
    frontImageAlt: "Lumina Studio Production Showreel",
    backImage:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&auto=format&fit=crop&q=80",
    backImageAlt: "Brand Strategy Workspace",
    liveUrl: "/portfolio",
  },
  {
    id: "kinetix-athletic",
    title: "Kinetix Athletic",
    category: "Shopify Plus",
    country: "Australia",
    flag: "🇦🇺",
    dateRange: "Nov. 2024 - Jan. 2025",
    ribbons: [
      { text: "Shopify", bg: "#10B981" },
      { text: "Recharge", bg: "#3B82F6" },
      { text: "Klaviyo", bg: "#F59E0B" },
      { text: "W.", bg: "#EA580C" },
    ],
    extraRibbonCount: 4,
    description: (
      <p>
        High-performance athletic apparel storefront with custom bundle builder and sub-second cart drawer, driving{" "}
        <strong className="text-slate-900 font-bold">+54% higher average order value (AOV)</strong> across 14 countries.
      </p>
    ),
    initialLikes: 682,
    themeBg: "#FEE2E2",
    doodleType: "rockon",
    topSticker: "⚡",
    frontImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=900&auto=format&fit=crop&q=80",
    frontImageAlt: "Kinetix Athletic Activewear",
    backImage:
      "https://images.unsplash.com/photo-1483721074573-586540da5703?w=900&auto=format&fit=crop&q=80",
    backImageAlt: "Instant Cart Drawer & Bundling",
    liveUrl: "/portfolio",
  },
  {
    id: "medix-health",
    title: "Medix Clinical",
    category: "WordPress",
    country: "Germany",
    flag: "🇩🇪",
    dateRange: "Aug. - Nov. 2024",
    ribbons: [
      { text: "WordPress", bg: "#2563EB" },
      { text: "HIPAA", bg: "#059669" },
      { text: "ACF Pro", bg: "#7C3AED" },
      { text: "99/100", bg: "#10B981" },
    ],
    extraRibbonCount: 2,
    description: (
      <p>
        Enterprise clinical laboratory network portal with secure patient booking and physician portal, achieving a{" "}
        <strong className="text-slate-900 font-bold">100/100 Google Lighthouse accessibility & SEO score</strong>.
      </p>
    ),
    initialLikes: 395,
    themeBg: "#CCFBF1",
    doodleType: "spiral",
    topSticker: "🧬",
    frontImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=80",
    frontImageAlt: "Medix Clinical Diagnostic Center",
    backImage:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900&auto=format&fit=crop&q=80",
    backImageAlt: "Secure Physician Scheduling Platform",
    liveUrl: "/portfolio",
  },
];

interface Work2_StackedCardsProps {
  activeCategory?: string;
}

/**
 * 💼 Work Component 2: Parallax Stacked Project Cards
 * Uses the exact same award-winning Home 3 showcase cards with custom pastel backgrounds,
 * dot-grid textures, crisp white hand-drawn vector doodles, 3D stickers, and dual-screen mockups.
 */
export default function Work2_StackedCards({ activeCategory = "All" }: Work2_StackedCardsProps) {
  const filtered =
    activeCategory === "All"
      ? workProjectsList
      : workProjectsList.filter(
          (p) =>
            p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
            activeCategory.toLowerCase().includes(p.category.toLowerCase())
        );

  const displayList = filtered.length > 0 ? filtered : workProjectsList;

  return (
    <section className="relative w-full mb-28">
      <div className="relative">
        {displayList.map((project, index) => (
          <ProjectShowcaseCard
            key={project.id}
            index={index}
            total={displayList.length}
            id={project.id}
            title={project.title}
            titleHighlight={project.titleHighlight}
            country={project.country}
            flag={project.flag}
            dateRange={project.dateRange}
            ribbons={project.ribbons}
            extraRibbonCount={project.extraRibbonCount}
            description={project.description}
            initialLikes={project.initialLikes}
            themeBg={project.themeBg}
            doodleType={project.doodleType}
            topSticker={project.topSticker}
            frontImage={project.frontImage}
            frontImageAlt={project.frontImageAlt}
            backImage={project.backImage}
            backImageAlt={project.backImageAlt}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
}
