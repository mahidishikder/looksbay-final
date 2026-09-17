import React from "react";
import About1_Hero from "@/components/about/About1_Hero";
import About2_SquadPhoto from "@/components/about/About2_SquadPhoto";
import About3_StatsBento from "@/components/about/About3_StatsBento";
import About4_ProductionPods from "@/components/about/About4_ProductionPods";
import About5_BottomCta from "@/components/about/About5_BottomCta";
import Home10_Footer from "@/components/home/Home10_Footer";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0F0F0F] selection:bg-[#FC5001] selection:text-[#FFFFFF] overflow-x-clip">
      {/* Background Harmonized Gradient Glow linking Left and Right */}
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

      {/* Main Content Area */}
      <main className="max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24 space-y-20 relative z-10">
        <About1_Hero />
        <About2_SquadPhoto />
        <About3_StatsBento />
        <About4_ProductionPods />
        <About5_BottomCta />
      </main>

      <Home10_Footer />
    </div>
  );
}
