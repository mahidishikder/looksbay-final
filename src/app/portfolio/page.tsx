"use client";

import React, { useState } from "react";
import { portfolioProjects, PortfolioProject } from "@/data/portfolioData";
import Work1_HeaderFilter from "@/components/work/Work1_HeaderFilter";
import Work2_StackedCards from "@/components/work/Work2_StackedCards";
import Work4_TabsSection from "@/components/work/Work4_TabsSection";
import Work5_InquiryCard from "@/components/work/Work5_InquiryCard";
import Work6_PreviewModal from "@/components/work/Work6_PreviewModal";
import Footer from "@/components/layout/Footer";

/**
 * 💼 LOOKSBAY Selected Works / Portfolio Page
 * Organized cleanly into numbered components (Work 1 to Work 6)
 */
export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [previewProject, setPreviewProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = portfolioProjects.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  return (
    <div className="relative min-h-screen bg-[#FAF8FF] text-slate-900 selection:bg-[#CCFF00] selection:text-black">
      {/* Background Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-[#7C3AED]/12 via-[#C084FC]/6 to-transparent rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-sky-400/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-32 pb-20 relative z-10">
        {/* 1. Header & Dynamic Category Filter */}
        <Work1_HeaderFilter
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
        />

        {/* 2. Parallax Stacked Project Cards */}
        <Work2_StackedCards activeCategory={activeCategory} />

        {/* 3. 3-Tab Feature Switcher: Works | Why | Team */}
        <Work4_TabsSection />

        {/* 5. Client Intake & Inquiry Proposal Card */}
        <Work5_InquiryCard />
      </div>

      {/* 6. Full-Screen Interactive Project Preview Modal */}
      <Work6_PreviewModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />

      {/* Agency Footer */}
      <Footer />
    </div>
  );
}
