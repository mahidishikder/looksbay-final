"use client";

import React from "react";
import Services1_Hero from "@/components/services/Services1_Hero";
import Services2_IndustryGrid from "@/components/services/Services2_IndustryGrid";
import Services3_LeadHub from "@/components/services/Services3_LeadHub";
import Footer from "@/components/layout/Footer";

/**
 * 🛠️ LOOKSBAY All Services Page
 * Cleanly organized into numbered components (Services 1 to 3)
 */
export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#FAF8FF] text-slate-900 pt-32 pb-24 px-6 sm:px-12 lg:px-20 selection:bg-[#CCFF00] selection:text-black">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#7C3AED]/10 via-[#C084FC]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto space-y-20 relative z-10">
        {/* 1. Services Hero Header */}
        <Services1_Hero />

        {/* 2. 10 Industry Verticals Cards Grid */}
        <Services2_IndustryGrid />

        {/* 3. Interactive Lead Hub & Pricing Calculator */}
        <Services3_LeadHub />
      </div>

      <Footer />
    </div>
  );
}
