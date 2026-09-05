"use client";

import React from "react";
import { Sparkles } from "lucide-react";

/**
 * 🛠️ Services Component 1: Hero Header
 * Title, badge, and intro for services and industry verticals
 */
export default function Services1_Hero() {
  return (
    <section className="hero-primary text-center max-w-4xl mx-auto space-y-6">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold shadow-xs backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
        <span>10 Industry Verticals · 5+ Live Verified Builds Per Category</span>
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
        Engineered Platforms for <br />
        <span className="text-[#CCFF00]">
          Ambitious Market Leaders.
        </span>
      </h1>

      <p className="text-base sm:text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed font-medium">
        Select your industry to explore curated case studies, technical frameworks, and verified business growth metrics. Every project is backed by our 95+ PageSpeed guarantee.
      </p>
    </section>
  );
}
