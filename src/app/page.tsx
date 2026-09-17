"use client";

import React from "react";
import Home1_HeroSection from "@/components/home/Home1_HeroSection";
import HomeTemplatesShelf from "@/components/home/HomeTemplatesShelf";
import HomeEditorialServices from "@/components/home/HomeEditorialServices";
import HomeClientShowcase from "@/components/home/HomeClientShowcase";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeStudioProcess from "@/components/home/HomeStudioProcess";
import HomePartnerPerks from "@/components/home/HomePartnerPerks";
import Home8_FaqSection from "@/components/home/Home8_FaqSection";
import Home10_Footer from "@/components/home/Home10_Footer";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

/**
 * 🏠 LOOKSBAY — Premier Squarespace Web Design Studio & Designer Templates
 * Inspired by the reference luxury studio website:
 * - Editorial serif typography with warm cream, olive, and espresso luxury palette
 * - 2-Column Template Grid with layered desktop + mobile mockups
 * - Bespoke Services editorial olive split block
 * - Client transformations showcase & testimonials
 * - Circle Platinum Partner perks & inclusions table
 */
export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#1E1B18] overflow-x-clip selection:bg-[#8C5238] selection:text-white">
      {/* 1. Dark Luxury Hero with Multi-Card Template Reel */}
      <Home1_HeroSection />

      {/* 2. Designer Templates: 2-Column Layered Desktop + Mobile Mockup Grid */}
      <RevealOnScroll>
        <HomeTemplatesShelf />
      </RevealOnScroll>

      {/* 3. The Signature Olive Split Section: Bespoke Design & Capabilities */}
      <RevealOnScroll>
        <HomeEditorialServices />
      </RevealOnScroll>

      {/* 4. Client Transformations & Showcase Cards */}
      <RevealOnScroll>
        <HomeClientShowcase />
      </RevealOnScroll>

      {/* 5. High-Impact Editorial Testimonials (Dark Contrast) */}
      <RevealOnScroll>
        <HomeTestimonials />
      </RevealOnScroll>

      {/* 6. Studio Process (3 Lifestyle Tiles) & Founder Banner */}
      <RevealOnScroll>
        <HomeStudioProcess />
      </RevealOnScroll>

      {/* 7. What's Included Table & Circle Platinum Partner Emblem */}
      <RevealOnScroll>
        <HomePartnerPerks />
      </RevealOnScroll>

      {/* 8. Frequently Asked Questions Accordion */}
      <RevealOnScroll>
        <Home8_FaqSection />
      </RevealOnScroll>

      {/* 9. Luxury Studio Footer with Newsletter */}
      <Home10_Footer />
    </div>
  );
}
