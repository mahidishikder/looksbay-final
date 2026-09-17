"use client";

import React from "react";

export default function Contact1_Hero() {
  return (
    <section className="text-center max-w-3xl mx-auto space-y-4">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D0D0D] bg-white text-[12px] font-semibold text-[#0D0D0D] shadow-xs">
        <span className="w-2 h-2 rounded-full bg-[#F4511E] animate-pulse" />
        <span>Start A Project · Rapid 24-Hour Review</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-black text-[#0D0D0D] tracking-tight leading-[1.08]">
        Let&apos;s build your <span className="text-[#F4511E]">Squarespace.</span>
      </h1>

      <p className="text-sm sm:text-base text-[#555555] max-w-lg mx-auto leading-relaxed font-normal">
        Submit your project details below. We review every brief and reply within 24 hours with a custom scope and roadmap.
      </p>
    </section>
  );
}
