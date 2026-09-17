"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * 👥 About Component 5: Bottom CTA Banner
 * Sleek dark luxury card with orange accents matching Looksbay Home style
 */
export default function About5_BottomCta() {
  return (
    <section className="rounded-[36px] bg-[#0D0D0D] p-10 sm:p-16 text-white text-center shadow-2xl relative overflow-hidden border border-[#222222]">
      {/* Warm orange glow */}
      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(244,81,30,0.22) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto space-y-4 relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F4511E]">
          Ready To Collaborate?
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
          Book a direct sprint strategy call with our Senior Squad.
        </h2>
        <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed font-normal">
          We review your current site or project wireframe and present an architectural roadmap within 24 hours.
        </p>
        <div className="pt-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-[#F4511E] hover:bg-[#D83A07] text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <span>Schedule Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
