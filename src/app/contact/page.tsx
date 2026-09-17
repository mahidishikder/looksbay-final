"use client";

import React, { useState } from "react";
import Contact1_Hero from "@/components/contact/Contact1_Hero";
import Contact2_IntakeChannels from "@/components/contact/Contact2_IntakeChannels";
import ProjectOrderModal from "@/components/shared/ProjectOrderModal";
import Home10_Footer from "@/components/home/Home10_Footer";
import { Rocket } from "lucide-react";

export default function ContactPage() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

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

      <div className="max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24 relative z-10 space-y-12">
        {/* 1. Contact Hero Header */}
        <Contact1_Hero />

        {/* Action Banner to open Full Order Form */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#F5F5F5] border border-[#0F0F0F]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F0F0F] text-[#FC5001] flex items-center justify-center shrink-0">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0F0F0F]">Ready to place a formal sprint order?</div>
              <div className="text-[11px] text-[#0F0F0F]/65">Configure scope, pages, addons &amp; timeline with instant estimate.</div>
            </div>
          </div>
          <button
            onClick={() => setOrderModalOpen(true)}
            className="px-6 py-2.5 rounded-full bg-[#0F0F0F] hover:bg-[#FC5001] text-[#FFFFFF] text-xs font-bold shrink-0 transition-all shadow-xs hover:scale-105 active:scale-95 flex items-center gap-1.5"
          >
            <span>Launch Project Order Form ⚡</span>
          </button>
        </div>

        {/* 2. Project Intake Form & Direct Touchpoints */}
        <Contact2_IntakeChannels />
      </div>

      {/* 3. Global Project Order Modal */}
      <ProjectOrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />

      {/* Official Looksbay Luxury Footer */}
      <Home10_Footer />
    </div>
  );
}
