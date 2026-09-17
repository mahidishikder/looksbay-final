"use client";

import React, { useState } from "react";
import { portfolioProjects, PortfolioProject } from "@/data/portfolioData";
import Work1_HeaderFilter from "@/components/work/Work1_HeaderFilter";
import Work2_StackedCards from "@/components/work/Work2_StackedCards";
import Work4_TabsSection from "@/components/work/Work4_TabsSection";
import Work5_InquiryCard from "@/components/work/Work5_InquiryCard";
import Work6_PreviewModal from "@/components/work/Work6_PreviewModal";
import Home10_Footer from "@/components/home/Home10_Footer";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [previewProject, setPreviewProject] = useState<PortfolioProject | null>(null);

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0F0F0F] selection:bg-[#FC5001] selection:text-[#FFFFFF]">
      {/* Background Subtle Gradient Glow linking Left and Right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle at top right, rgba(252,80,1,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle at top left, rgba(252,80,1,0.06) 0%, transparent 65%)",
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

      {/* Looksbay Luxury Footer */}
      <Home10_Footer />
    </div>
  );
}
