import React from "react";
import How1_Hero from "@/components/how-we-work/How1_Hero";
import How2_VisualShowcase from "@/components/how-we-work/How2_VisualShowcase";
import How3_SprintRoadmap from "@/components/how-we-work/How3_SprintRoadmap";
import How4_ComparisonMatrix from "@/components/how-we-work/How4_ComparisonMatrix";
import How5_CollaborationStack from "@/components/how-we-work/How5_CollaborationStack";
import How6_FaqSection from "@/components/how-we-work/How6_FaqSection";
import How7_BottomCta from "@/components/how-we-work/How7_BottomCta";
import Home10_Footer from "@/components/home/Home10_Footer";

export default function HowWeWorkPage() {
  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0F0F0F] selection:bg-[#FC5001] selection:text-[#FFFFFF] overflow-x-clip">
      {/* Background Harmonized Glow linking Left and Right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle at top right, rgba(252,80,1,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle at top left, rgba(252,80,1,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Main Container */}
      <main className="max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24 space-y-24 relative z-10">
        <How1_Hero />
        <How2_VisualShowcase />
        <How3_SprintRoadmap />
        <How4_ComparisonMatrix />
        <How5_CollaborationStack />
        <How6_FaqSection />
        <How7_BottomCta />
      </main>

      <Home10_Footer />
    </div>
  );
}
