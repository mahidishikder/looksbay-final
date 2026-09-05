"use client";

import React from "react";
import Home1_HeroSection from "@/components/home/Home1_HeroSection";
import Home2_IndustryGrid from "@/components/home/Home2_IndustryGrid";
import Home3_ProjectShowcase from "@/components/home/Home3_ProjectShowcase";
import Home4_BentoMetrics from "@/components/home/Home4_BentoMetrics";
import Home8_FaqSection from "@/components/home/Home8_FaqSection";
import Home9_LeadHub from "@/components/home/Home9_LeadHub";
import Home10_Footer from "@/components/home/Home10_Footer";

/**
 * 🏠 LOOKSBAY Main Home Page
 * Clean, fast, and unified luxury experience
 */
export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-x-clip selection:bg-[#9D5CFF] selection:text-white">
      {/* 1. Hero Section */}
      <Home1_HeroSection />

      {/* 2. Client & Industry Fanned Card Grid */}
      <Home2_IndustryGrid />

      {/* 3. Signature Showcase Cards (Sticky Stacking on Scroll) */}
      <Home3_ProjectShowcase />

      {/* 4. Bento Metrics Section */}
      <Home4_BentoMetrics />

      {/* 5. FAQ Accordion (Unified max-w-[1440px] matching all sections) */}
      <Home8_FaqSection />

      {/* 6. Interactive Lead Calculator Hub */}
      <Home9_LeadHub />

      {/* 7. Platform Footer */}
      <Home10_Footer />
    </div>
  );
}
