"use client";

import React from "react";
import About1_Hero from "@/components/about/About1_Hero";
import About2_SquadPhoto from "@/components/about/About2_SquadPhoto";
import About3_StatsBento from "@/components/about/About3_StatsBento";
import About4_ProductionPods from "@/components/about/About4_ProductionPods";
import About5_BottomCta from "@/components/about/About5_BottomCta";
import Footer from "@/components/layout/Footer";

/**
 * 👥 LOOKSBAY About Us Page
 * Cleanly organized into numbered components (About 1 to About 5)
 * Standardized 1440px container & edge-to-edge global footer
 */
export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#FAF8FF] text-slate-900 selection:bg-[#9D5CFF] selection:text-white overflow-x-clip">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-[#7C3AED]/12 via-[#C084FC]/6 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-32 pb-24 space-y-20 relative z-10">
        {/* 1. About Hero Header */}
        <About1_Hero />

        {/* 2. Signature Squad Group Photo */}
        <About2_SquadPhoto />

        {/* 3. Stats Bento Grid */}
        <About3_StatsBento />

        {/* 4. Squad Engineering Disciplines & Pods */}
        <About4_ProductionPods />

        {/* 5. Bottom Strategy Call CTA */}
        <About5_BottomCta />
      </main>

      {/* Full Width Edge-to-Edge Footer */}
      <Footer />
    </div>
  );
}
