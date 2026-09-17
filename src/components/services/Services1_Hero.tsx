"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * 🛠️ Services Component 1: Hero Header
 * Clean white background with warm orange accents matching Looksbay Home style
 */
export default function Services1_Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 border-b border-[#EAEAEA]">
      {/* Vertical Stripe Texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #EAEAEA 0px, #EAEAEA 1px, transparent 1px, transparent 60px)",
          opacity: 0.45,
        }}
      />

      {/* Warm Orange Gradient Glow in top-right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, rgba(244,81,30,0.18) 0%, rgba(255,122,48,0.08) 45%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Eyebrow badge with orange dot */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D0D0D] bg-white text-[12px] font-semibold text-[#0D0D0D] mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F4511E] animate-pulse" />
            <span>Authorized Squarespace Circle Platinum Studio · 100% In-House</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0D0D0D] tracking-tight leading-[1.08] mb-6">
            Bespoke Squarespace Solutions <br />
            <span className="text-[#F4511E]">for Visionary Brands.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            From tailor-made Fluid Engine 7.1 websites and 7-day designer template customizations to seamless migrations and VIP Days — explore our full suite of bespoke Squarespace services.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#0D0D0D] hover:bg-[#F4511E] text-white text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center gap-2"
            >
              <span>Book A Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-[#F8F8F8] border border-[#E5E5E5] text-[#0D0D0D] text-xs sm:text-sm font-bold transition-all shadow-xs"
            >
              <span>View Case Studies</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
