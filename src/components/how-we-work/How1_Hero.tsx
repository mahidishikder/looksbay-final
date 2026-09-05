"use client";

import React from "react";
import Link from "next/link";
import { Zap, ShieldCheck, Rocket, MessageSquare, ArrowRight, ExternalLink } from "lucide-react";

/**
 * ⚡ How We Work Component 1: Hero Section
 * Light pastel luxury design matching Home aesthetic
 */
export default function How1_Hero() {
  return (
    <section className="hero-primary text-center max-w-4xl mx-auto space-y-8">
      {/* Eyebrow badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold shadow-xs backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-[#CCFF00] border border-white/50 animate-pulse" />
        <span>The LooksBay Sprint Engine · Battle-Tested Framework</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
        How We Turn Bold Visions Into <br />
        <span className="text-[#CCFF00]">
          Award-Winning Realities.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed font-medium">
        No bureaucratic runarounds. No junior account managers. Just a disciplined, 5-phase sprint system built for velocity, transparency, and uncompromising aesthetic excellence.
      </p>

      {/* Core Feature Badges */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        {[
          { icon: Zap, label: "2–4 Week Sprints" },
          { icon: ShieldCheck, label: "100% In-House Squad" },
          { icon: Rocket, label: "95+ PageSpeed Score" },
          { icon: MessageSquare, label: "Direct Slack / WhatsApp Access" },
        ].map((pill, i) => {
          const IconComponent = pill.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 text-xs font-bold text-slate-700 shadow-xs"
            >
              <IconComponent className="w-3.5 h-3.5 text-purple-600" />
              <span>{pill.label}</span>
            </div>
          );
        })}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        <Link
          href="/contact"
          className="btn-neon-lime px-8 py-4 rounded-full text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-lg"
        >
          <span>Start Your Sprint</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/portfolio"
          className="px-7 py-4 rounded-full bg-white hover:bg-slate-50 border border-purple-200 text-slate-800 text-xs sm:text-sm font-bold shadow-xs transition-all hover:scale-102 active:scale-98 flex items-center justify-center gap-2"
        >
          <span>Explore Case Studies</span>
          <ExternalLink className="w-4 h-4 text-purple-600" />
        </Link>
      </div>
    </section>
  );
}
