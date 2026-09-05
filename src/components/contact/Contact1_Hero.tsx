"use client";

import React from "react";
import { Sparkles } from "lucide-react";

/**
 * 📩 Contact Component 1: Hero Header
 * "Let's Build Your Flagship Website" headline & 2-hour turnaround badge
 */
export default function Contact1_Hero() {
  return (
    <section className="hero-primary text-center max-w-3xl mx-auto space-y-6">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold shadow-xs backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
        <span>Direct Project Consultation · 2-Hour Response Time</span>
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
        Let&apos;s Build Your <br />
        <span className="text-[#CCFF00]">
          Flagship Website.
        </span>
      </h1>

      <p className="text-base sm:text-lg text-purple-100 max-w-xl mx-auto leading-relaxed font-medium">
        Submit your project details below. Our senior engineering architects will review your brief and respond within 2 business hours.
      </p>
    </section>
  );
}
