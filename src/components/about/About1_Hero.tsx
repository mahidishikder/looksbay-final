"use client";

import React from "react";
import { Users } from "lucide-react";

/**
 * 👥 About Component 1: Hero Header
 * Headline, badge & intro for LooksBay's 20-person in-house collective
 */
export default function About1_Hero() {
  return (
    <section className="hero-primary text-center max-w-4xl mx-auto space-y-6">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold shadow-xs backdrop-blur-md">
        <Users className="w-3.5 h-3.5 text-[#CCFF00]" />
        <span>20-Person Dedicated In-House Production Collective</span>
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
        Engineering Digital Flagships <br />
        <span className="text-[#CCFF00]">
          With Zero Outsourced Fluff.
        </span>
      </h1>

      <p className="text-base sm:text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed font-medium">
        We are not a bloated legacy agency with layers of junior account managers. We are a tightly knit collective of 20 senior CMS developers, motion designers, and SEO auditors who live and breathe high performance.
      </p>
    </section>
  );
}
