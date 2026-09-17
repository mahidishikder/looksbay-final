"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Services1_Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] pt-32 pb-20 border-b border-[#0F0F0F]/10">
      {/* Seamless Left-to-Right Subtle Gradient Texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(115deg, #FFFFFF 0%, #F5F5F5 35%, #FFFFFF 70%, #F5F5F5 100%)",
        }}
      />

      {/* Balanced Soft Glow Accents linking Left and Right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, rgba(252,80,1,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-[450px] h-[450px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at top left, rgba(252,80,1,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Eyebrow badge with orange dot */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0F0F0F] bg-[#FFFFFF] text-[12px] font-bold text-[#0F0F0F] mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FC5001] animate-pulse" />
            <span>Authorized Squarespace Circle Platinum Studio · 100% In-House</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0F0F0F] tracking-tight leading-[1.08] mb-6">
            Bespoke Squarespace Solutions <br />
            <span className="text-[#FC5001]">for Visionary Brands.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#0F0F0F]/70 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            From tailor-made Fluid Engine 7.1 websites and 7-day designer template customizations to bug fixes, custom CSS code and SEO ranking — explore our full suite of bespoke Squarespace services.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#0F0F0F] hover:bg-[#FC5001] text-[#FFFFFF] text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center gap-2"
            >
              <span>Book A Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-3.5 rounded-full bg-[#FFFFFF] border border-[#0F0F0F] hover:border-[#FC5001] text-[#0F0F0F] hover:text-[#FC5001] text-xs sm:text-sm font-bold transition-all"
            >
              <span>View Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
