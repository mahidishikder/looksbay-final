import React from "react";
import Home10_Footer from "@/components/home/Home10_Footer";
import Services1_Hero from "@/components/services/Services1_Hero";
import ServicesSquarespacePillars from "@/components/services/ServicesSquarespacePillars";
import Services2_IndustryGrid from "@/components/services/Services2_IndustryGrid";
import Services3_LeadHub from "@/components/services/Services3_LeadHub";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0D0D0D]">
      {/* Hero Banner */}
      <Services1_Hero />

      {/* Service Pillars */}
      <ServicesSquarespacePillars />

      {/* Industry Grid */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#F8F8F8] border-t border-[#E5E5E5]">
        <div className="max-w-[1640px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F4511E]">
              Industry Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D0D0D] tracking-tight">
              Squarespace Solutions by Industry
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B6B] font-medium">
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
