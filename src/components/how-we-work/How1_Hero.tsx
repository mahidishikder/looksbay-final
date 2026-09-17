"use client";

import React from "react";
import Link from "next/link";
import { Zap, ShieldCheck, Rocket, MessageSquare, ArrowRight } from "lucide-react";

/**
 * ⚡ How We Work Component 1: Hero Section
 * Clean white background with warm orange accents matching Looksbay Home style
 */
export default function How1_Hero() {
  return (
    <section className="text-center max-w-4xl mx-auto space-y-8">
      {/* Eyebrow badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#0D0D0D] bg-white text-xs font-semibold text-[#0D0D0D] shadow-xs">
        <span className="w-2 h-2 rounded-full bg-[#F4511E] animate-pulse" />
        <span>The LooksBay Sprint Engine · Battle-Tested Framework</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0D0D0D] tracking-tight leading-[1.06]">
        How We Turn Bold Visions Into <br />
        <span className="text-[#F4511E]">Award-Winning Realities.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-xl text-[#555555] max-w-2xl mx-auto leading-relaxed font-normal">
        No bureaucratic runarounds. No junior account managers. Just a disciplined, 5-phase sprint system built for velocity, transparency, and uncompromising aesthetic excellence.
      </p>

      {/* Core Feature Badges */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        {[
          { icon: Zap, label: "2–4 Week Sprints" },
          { icon: ShieldCheck, label: "100% In-House Squad" },
          { icon: Rocket, label: "98+ PageSpeed Score" },
          { icon: MessageSquare, label: "Direct Slack / WhatsApp Access" },
        ].map((pill, i) => {
          const IconComponent = pill.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E5E5] text-xs font-semibold text-[#333333] shadow-xs hover:border-[#F4511E] transition-colors"
            >
              <IconComponent className="w-3.5 h-3.5 text-[#F4511E]" />
              <span>{pill.label}</span>
            </div>
          );
        })}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        <Link
          href="/contact"
          className="px-8 py-4 rounded-full bg-[#0D0D0D] hover:bg-[#F4511E] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95"
        >
          <span>Start Your Sprint</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/portfolio"
          className="px-8 py-4 rounded-full bg-white hover:bg-[#F8F8F8] border border-[#E5E5E5] text-[#0D0D0D] text-xs sm:text-sm font-bold transition-all shadow-xs"
        >
          <span>View Verified Works</span>
        </Link>
      </div>
    </section>
  );
}
