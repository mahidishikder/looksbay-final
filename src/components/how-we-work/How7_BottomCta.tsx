"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

/**
 * ⚡ How We Work Component 7: Bottom CTA Banner
 * Sleek dark luxury card with Looksbay orange button
 */
export default function How7_BottomCta() {
  return (
    <section className="rounded-[36px] bg-[#0D0D0D] p-8 sm:p-16 text-center space-y-6 relative overflow-hidden shadow-2xl border border-[#222222]">
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(244,81,30,0.22) 0%, transparent 70%)",
        }}
      />

      <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#F4511E] text-xs font-bold uppercase tracking-wider">
        Ready to Build Your Flagship?
      </span>

      <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-2xl mx-auto leading-tight">
        Let&apos;s Map Out Your Project Sprint Today.
      </h2>

      <p className="text-xs sm:text-base text-[#AAAAAA] max-w-xl mx-auto leading-relaxed font-normal">
        Schedule a 20-minute discovery consultation with our senior squad. We will review your current goals, recommend the right Squarespace setup, and share a guaranteed milestone quote.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link
          href="/contact"
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F4511E] hover:bg-[#D83A07] text-white text-xs sm:text-sm font-bold tracking-wide shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
        >
          <span>Book Discovery Session</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href="mailto:contact@looksbay.com"
          className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur-xl transition-all flex items-center justify-center gap-2"
        >
          <span>Email Our Architects</span>
          <ExternalLink className="w-4 h-4 text-[#F4511E]" />
        </a>
      </div>
    </section>
  );
}
