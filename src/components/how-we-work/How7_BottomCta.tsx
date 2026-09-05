"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

/**
 * ⚡ How We Work Component 7: Bottom CTA Banner
 * "Let's Map Out Your Project Sprint Today" conversion banner
 */
export default function How7_BottomCta() {
  return (
    <section className="rounded-[36px] bg-gradient-to-r from-[#2E1065] via-[#4C1D95] to-[#581C87] p-8 sm:p-16 text-center space-y-6 relative overflow-hidden shadow-2xl">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#CCFF00]/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-400/20 rounded-full blur-[90px] pointer-events-none" />

      <span className="inline-block px-4 py-1.5 rounded-full bg-[#CCFF00]/15 border border-[#CCFF00]/30 text-[#CCFF00] text-xs font-black uppercase tracking-wider">
        Ready to Build Your Flagship?
      </span>

      <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-2xl mx-auto leading-tight">
        Let&apos;s Map Out Your Project Sprint Today.
      </h2>

      <p className="text-xs sm:text-base text-purple-100 max-w-xl mx-auto leading-relaxed font-medium">
        Schedule a 20-minute discovery call with our senior squad. We will review your current challenges, recommend the right tech stack, and share a guaranteed milestone quote.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link
          href="/contact"
          className="btn-neon-lime w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-black tracking-wide shadow-xl flex items-center justify-center gap-2"
        >
          <span>Book Discovery Session</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href="https://wa.me/8801XXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur-xl transition-all hover:scale-102 active:scale-98 flex items-center justify-center gap-2"
        >
          <span>Chat on WhatsApp</span>
          <ExternalLink className="w-4 h-4 text-purple-200" />
        </a>
      </div>
    </section>
  );
}
