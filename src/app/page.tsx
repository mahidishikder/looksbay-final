"use client";

import React from "react";
import Home1_HeroSection from "@/components/home/Home1_HeroSection";
import HomeOutcomeProof from "@/components/home/HomeOutcomeProof";
import HomeTemplatesShelf from "@/components/home/HomeTemplatesShelf";
import HomeEditorialServices from "@/components/home/HomeEditorialServices";
import HomeClientShowcase from "@/components/home/HomeClientShowcase";
import HomeSquarespaceDirectory from "@/components/home/HomeSquarespaceDirectory";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeStudioProcess from "@/components/home/HomeStudioProcess";
import HomePartnerPerks from "@/components/home/HomePartnerPerks";
import Home8_FaqSection from "@/components/home/Home8_FaqSection";
import Home10_Footer from "@/components/home/Home10_Footer";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

/**
 * 🏠 LOOKSBAY — Premier Squarespace Web Design Studio & Designer Templates
 * Strict Palette: #FC5001 (Orange), #F5F5F5 (Light Surface), #FFFFFF (White), #0F0F0F (Dark)
 */
export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0F0F0F] overflow-x-clip selection:bg-[#FC5001] selection:text-[#FFFFFF]">
      {/* 1. Harmonized Luxury Hero with Multi-Card Sliding Mockup Reel */}
      <Home1_HeroSection />

      {/* 2. Core Quality Standards & Outcomes Proof */}
      <RevealOnScroll>
        <HomeOutcomeProof />
      </RevealOnScroll>

      {/* 3. Designer Templates: 2-Column Layered Desktop + Mobile Mockup Grid */}
      <RevealOnScroll>
        <HomeTemplatesShelf />
      </RevealOnScroll>

      {/* 4. Bespoke Design & Capabilities Editorial Section */}
      <RevealOnScroll>
        <HomeEditorialServices />
      </RevealOnScroll>

      {/* 5. 16 Industry Niches & High-Intent Squarespace Search Directory (SEO) */}
      <RevealOnScroll>
        <HomeSquarespaceDirectory />
      </RevealOnScroll>

      {/* 6. Client Transformations & Showcase Cards */}
      <RevealOnScroll>
        <HomeClientShowcase />
      </RevealOnScroll>

      {/* 7. Client Praise & High-Impact Testimonials */}
      <RevealOnScroll>
        <HomeTestimonials />
      </RevealOnScroll>

      {/* 8. Studio Process & Founder Statement */}
      <RevealOnScroll>
        <HomeStudioProcess />
      </RevealOnScroll>

      {/* 9. What's Included Table & Circle Platinum Partner Privileges */}
      <RevealOnScroll>
        <HomePartnerPerks />
      </RevealOnScroll>

      {/* 10. Frequently Asked Questions Accordion */}
      <RevealOnScroll>
        <Home8_FaqSection />
      </RevealOnScroll>

      {/* 11. Luxury Studio Footer with Unified 5-Column Navigation */}
      <Home10_Footer />
    </div>
  );
}
