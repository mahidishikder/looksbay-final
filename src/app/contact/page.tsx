"use client";

import React, { useState } from "react";
import Contact1_Hero from "@/components/contact/Contact1_Hero";
import Contact2_IntakeChannels from "@/components/contact/Contact2_IntakeChannels";
import ProjectOrderModal from "@/components/shared/ProjectOrderModal";
import Footer from "@/components/layout/Footer";
import { Rocket } from "lucide-react";

/**
 * 📩 LOOKSBAY Contact & Project Inquiry Page
 * Form 1 (General Consultation) + Form 2 (Detailed Project Order Modal)
 */
export default function ContactPage() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FAF8FF] text-slate-900 selection:bg-[#CCFF00] selection:text-black">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#7C3AED]/12 via-[#C084FC]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 pt-32 pb-24 relative z-10 space-y-12">
        {/* 1. Contact Hero Header */}
        <Contact1_Hero />

        {/* Action Banner to open Full Order Form */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-purple-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E1065] text-[#CCFF00] flex items-center justify-center shrink-0">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-[#1E0D36]">Ready to place a formal sprint order?</div>
              <div className="text-[11px] text-slate-500">Configure scope, pages, addons &amp; timeline with instant estimate.</div>
            </div>
          </div>
          <button
            onClick={() => setOrderModalOpen(true)}
            className="px-5 py-2.5 rounded-full bg-[#2E1065] hover:bg-purple-900 text-[#CCFF00] text-xs font-black shrink-0 transition-all shadow-xs hover:scale-105 active:scale-95 flex items-center gap-1.5"
          >
            <span>Launch Project Order Form ⚡</span>
          </button>
        </div>

        {/* 2. Project Intake Form & Direct Touchpoints */}
        <Contact2_IntakeChannels />
      </div>

      {/* Form 2: Interactive Project Order Modal */}
      <ProjectOrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />

      <Footer />
    </div>
  );
}
