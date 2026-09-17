"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function How7_BottomCta() {
  return (
    <section className="rounded-[36px] bg-[#0F0F0F] p-8 sm:p-16 text-center space-y-6 relative overflow-hidden shadow-2xl border border-[#FFFFFF]/10">
      {/* Harmonized ambient glow */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(252,80,1,0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-72 h-72 pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(252,80,1,0.08) 0%, transparent 65%)",
        }}
      />

      <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFFF]/10 border border-[#FFFFFF]/15 text-[#FC5001] text-xs font-bold uppercase tracking-wider">
        Ready to Build Your Flagship?
      </span>

      <h2 className="text-3xl sm:text-5xl font-black text-[#FFFFFF] tracking-tight max-w-2xl mx-auto leading-tight">
        Let&apos;s Map Out Your Project Sprint Today.
      </h2>

      <p className="text-xs sm:text-base text-[#FFFFFF]/70 max-w-xl mx-auto leading-relaxed font-normal">
        Schedule a 20-minute discovery consultation with our senior squad. We will review your current goals, recommend the right Squarespace setup, and share a guaranteed milestone quote.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link
          href="/contact"
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FC5001] hover:opacity-90 text-[#FFFFFF] text-xs sm:text-sm font-bold tracking-wide shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
        >
          <span>Book Discovery Session</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href="mailto:contact@looksbay.com"
          className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/20 border border-[#FFFFFF]/20 text-[#FFFFFF] text-xs sm:text-sm font-bold backdrop-blur-xl transition-all flex items-center justify-center gap-2"
        >
          <span>Email Our Architects</span>
          <ExternalLink className="w-4 h-4 text-[#FC5001]" />
        </a>
      </div>
    </section>
  );
}
