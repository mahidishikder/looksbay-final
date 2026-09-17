import React from "react";
import Home10_Footer from "@/components/home/Home10_Footer";
import Services1_Hero from "@/components/services/Services1_Hero";
import ServicesSquarespacePillars from "@/components/services/ServicesSquarespacePillars";
import Services2_IndustryGrid from "@/components/services/Services2_IndustryGrid";
import Services3_LeadHub from "@/components/services/Services3_LeadHub";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0F0F0F] selection:bg-[#FC5001] selection:text-[#FFFFFF] overflow-x-clip">
      {/* Background Harmonized Gradient Glow */}
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

      {/* Hero Banner */}
      <Services1_Hero />

      {/* Service Pillars */}
      <ServicesSquarespacePillars />

      {/* Industry Grid */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#F5F5F5] border-t border-[#0F0F0F]/10">
        <div className="max-w-[1640px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FC5001]">
              Industry Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F0F0F] tracking-tight">
              Squarespace Solutions by Industry
            </h2>
            <p className="text-xs sm:text-sm text-[#0F0F0F]/60 font-medium">
              Explore specialized Squarespace builds tailored to distinct business models and client acquisition funnels.
            </p>
          </div>
          <Services2_IndustryGrid />
        </div>
      </section>

      {/* Lead Hub */}
      <Services3_LeadHub />

      <Home10_Footer />
    </div>
  );
}
