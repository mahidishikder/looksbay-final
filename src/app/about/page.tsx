import React from "react";
import About1_Hero from "@/components/about/About1_Hero";
import About2_SquadPhoto from "@/components/about/About2_SquadPhoto";
import About3_StatsBento from "@/components/about/About3_StatsBento";
import About4_ProductionPods from "@/components/about/About4_ProductionPods";
import About5_BottomCta from "@/components/about/About5_BottomCta";
import Home10_Footer from "@/components/home/Home10_Footer";

/**
 * 👥 LOOKSBAY About Us Page
 * Clean white background with warm orange accents matching Looksbay Home style
 */
export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white text-[#0D0D0D] selection:bg-[#F4511E] selection:text-white overflow-x-clip">
      {/* Background Warm Orange Ambient Glow */}
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

      {/* Main Content Area */}
      <main className="max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24 space-y-20 relative z-10">
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

      {/* Full Width Edge-to-Edge Official Footer */}
      <Home10_Footer />
    </div>
  );
}
