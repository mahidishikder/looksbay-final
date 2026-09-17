"use client";

import React from "react";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

/**
 * 👥 About Component 1: Hero Header
 * Clean white background with warm orange accents matching Looksbay Home style
 */
export default function About1_Hero() {
  return (
    <section className="relative text-center max-w-4xl mx-auto space-y-6">
      {/* Eyebrow badge with orange dot */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D0D0D] bg-white text-[12px] font-semibold text-[#0D0D0D] shadow-xs">
        <span className="w-2 h-2 rounded-full bg-[#F4511E] animate-pulse" />
        <span>20-Person Dedicated In-House Production Collective</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0D0D0D] tracking-tight leading-[1.06]">
        Engineering Digital Flagships <br />
        <span className="text-[#F4511E]">With Zero Outsourced Fluff.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed font-normal">
        We are not a bloated legacy agency with layers of junior account managers. We are a tightly knit collective of 20 senior Squarespace architects, motion designers, and conversion specialists who live and breathe high performance.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <Link
          href="/contact"
          className="px-8 py-3.5 rounded-full bg-[#0D0D0D] hover:bg-[#F4511E] text-white text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center gap-2"
        >
          <span>Meet Our Squad</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/portfolio"
          className="px-8 py-3.5 rounded-full bg-white hover:bg-[#F8F8F8] border border-[#E5E5E5] text-[#0D0D0D] text-xs sm:text-sm font-bold transition-all shadow-xs"
        >
          <span>Explore Works</span>
        </Link>
      </div>
    </section>
  );
}
