"use client";

import React, { useState } from "react";
import { portfolioProjects, PortfolioProject } from "@/data/portfolioData";
import Work1_HeaderFilter from "@/components/work/Work1_HeaderFilter";
import Work2_StackedCards from "@/components/work/Work2_StackedCards";
import Work4_TabsSection from "@/components/work/Work4_TabsSection";
import Work5_InquiryCard from "@/components/work/Work5_InquiryCard";
import Work6_PreviewModal from "@/components/work/Work6_PreviewModal";
import Home10_Footer from "@/components/home/Home10_Footer";

/**
 * 💼 LOOKSBAY Selected Works / Portfolio Page
 * Matches the clean Looksbay Home style with white background, warm orange accents, and Home10_Footer
 */
export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [previewProject, setPreviewProject] = useState<PortfolioProject | null>(null);

  return (
    <div className="relative min-h-screen bg-white text-[#0D0D0D] selection:bg-[#F4511E] selection:text-white">
      {/* Background Subtle Warm Orange Ambient Glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle at top right, rgba(244,81,30,0.12) 0%, rgba(255,122,48,0.04) 40%, transparent 70%)",
        }}
      />
      {/* Vertical Stripe Texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #EAEAEA 0px, #EAEAEA 1px, transparent 1px, transparent 60px)",
          opacity: 0.35,
        }}
      />

      {/* Main Container */}
      <div className="max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20 relative z-10">
        {/* 1. Header & Dynamic Category Filter */}
        <Work1_HeaderFilter
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
        />

        {/* 2. Parallax Stacked Project Cards */}
        <Work2_StackedCards activeCategory={activeCategory} />

        {/* 3. 3-Tab Feature Switcher: Works | Why | Team */}
        <Work4_TabsSection />

        {/* 4. Client Intake & Inquiry Proposal Card */}
        <Work5_InquiryCard />
      </div>

      {/* 5. Full-Screen Interactive Project Preview Modal */}
      <Work6_PreviewModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />

      {/* Official Looksbay Luxury Footer */}
      <Home10_Footer />
    </div>
  );
}
