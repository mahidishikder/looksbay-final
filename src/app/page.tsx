"use client";

import React from "react";
import Home1_HeroSection from "@/components/home/Home1_HeroSection";
import Home2_IndustryGrid from "@/components/home/Home2_IndustryGrid";
import Home3_ProjectShowcase from "@/components/home/Home3_ProjectShowcase";
import Home4_BentoMetrics from "@/components/home/Home4_BentoMetrics";
import Home8_FaqSection from "@/components/home/Home8_FaqSection";
import Home9_LeadHub from "@/components/home/Home9_LeadHub";
import Home10_Footer from "@/components/home/Home10_Footer";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

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
      <RevealOnScroll>
        <Home2_IndustryGrid />
      </RevealOnScroll>

      {/* 3. Signature Showcase Cards (Sticky Stacking on Scroll) */}
      <RevealOnScroll>
        <Home3_ProjectShowcase />
      </RevealOnScroll>

      {/* 4. Bento Metrics Section */}
      <RevealOnScroll>
        <Home4_BentoMetrics />
      </RevealOnScroll>

      {/* 5. FAQ Accordion (Unified max-w-[1440px] matching all sections) */}
      <RevealOnScroll>
        <Home8_FaqSection />
      </RevealOnScroll>

      {/* 6. Interactive Lead Calculator Hub */}
      <RevealOnScroll>
        <Home9_LeadHub />
      </RevealOnScroll>

      {/* 7. Platform Footer */}
      <Home10_Footer />
    </div>
  );
}
