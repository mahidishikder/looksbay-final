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
 * Cleanly organized into numbered components (How 1 to How 7)
 * Light luxury theme matching Home aesthetic with edge-to-edge global footer
 */
export default function HowWeWorkPage() {
  return (
    <div className="relative min-h-screen bg-[#FAF8FF] text-slate-900 selection:bg-[#9D5CFF] selection:text-white overflow-x-clip">
      {/* Background Subtle Pastel Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-[#7C3AED]/12 via-[#C084FC]/6 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-200px] w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-200px] w-[700px] h-[700px] bg-purple-100/30 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-32 pb-24 space-y-28 relative z-10">
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

      {/* Full Width Edge-to-Edge Footer */}
      <Footer />
    </div>
  );
}
