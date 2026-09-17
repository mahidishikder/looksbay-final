"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About1_Hero() {
  return (
    <section className="relative text-center max-w-4xl mx-auto space-y-6">
      {/* Eyebrow badge with orange dot */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0F0F0F] bg-[#FFFFFF] text-[12px] font-bold text-[#0F0F0F] shadow-xs">
        <span className="w-2 h-2 rounded-full bg-[#FC5001] animate-pulse" />
        <span>20-Person Dedicated In-House Production Collective</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0F0F0F] tracking-tight leading-[1.06]">
        Engineering Digital Flagships <br />
        <span className="text-[#FC5001]">With Zero Outsourced Fluff.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-[#0F0F0F]/70 max-w-2xl mx-auto leading-relaxed font-normal">
        We are not a bloated legacy agency with layers of junior account managers. We are a tightly knit collective of 20 senior Squarespace architects, motion designers, and conversion specialists who live and breathe high performance.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <Link
          href="/contact"
          className="px-8 py-3.5 rounded-full bg-[#0F0F0F] hover:bg-[#FC5001] text-[#FFFFFF] text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center gap-2"
        >
          <span>Meet Our Squad</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/portfolio"
          className="px-8 py-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#F5F5F5] border border-[#0F0F0F]/10 text-[#0F0F0F] text-xs sm:text-sm font-bold transition-all shadow-xs"
        >
          <span>Explore Works</span>
        </Link>
      </div>
    </section>
  );
}
