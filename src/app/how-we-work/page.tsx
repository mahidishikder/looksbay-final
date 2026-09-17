import React from "react";
import How1_Hero from "@/components/how-we-work/How1_Hero";
import How2_VisualShowcase from "@/components/how-we-work/How2_VisualShowcase";
import How3_SprintRoadmap from "@/components/how-we-work/How3_SprintRoadmap";
import How4_ComparisonMatrix from "@/components/how-we-work/How4_ComparisonMatrix";
import How5_CollaborationStack from "@/components/how-we-work/How5_CollaborationStack";
import How6_FaqSection from "@/components/how-we-work/How6_FaqSection";
import How7_BottomCta from "@/components/how-we-work/How7_BottomCta";
import Footer from "@/components/layout/Footer";

/**
 * ⚡ LOOKSBAY How We Work Page
 * Clean white background with warm orange accents matching Looksbay Home style
 */
export default function HowWeWorkPage() {
  return (
    <div className="relative min-h-screen bg-white text-[#0D0D0D] selection:bg-[#F4511E] selection:text-white overflow-x-clip">
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
      <main className="max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24 space-y-24 relative z-10">
        {/* 1. The Blueprint Hero Section */}
        <How1_Hero />

        {/* 2. Visual Showcase: Agency at Work */}
        <How2_VisualShowcase />

        {/* 3. Interactive 5-Phase Sprint Roadmap */}
        <How3_SprintRoadmap />

        {/* 4. The LooksBay Difference: Comparison Matrix */}
        <How4_ComparisonMatrix />

        {/* 5. The Collaboration Stack: Asynchronous Tools */}
        <How5_CollaborationStack />

        {/* 6. Frequently Asked Questions */}
        <How6_FaqSection />

        {/* 7. High-Conversion Bottom CTA */}
        <How7_BottomCta />
      </main>

      {/* Full Width Edge-to-Edge Official Footer */}
      <Footer />
    </div>
  );
}
