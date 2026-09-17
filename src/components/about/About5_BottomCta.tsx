"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About5_BottomCta() {
  return (
    <section className="rounded-[36px] bg-[#0F0F0F] p-10 sm:p-16 text-[#FFFFFF] text-center shadow-2xl relative overflow-hidden border border-[#FFFFFF]/10">
      {/* Harmonized ambient glow */}
      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(252,80,1,0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-[350px] h-[350px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(252,80,1,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-2xl mx-auto space-y-4 relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FC5001]">
          Ready To Collaborate?
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-[#FFFFFF]">
          Book a direct sprint strategy call with our Senior Squad.
        </h2>
        <p className="text-sm sm:text-base text-[#FFFFFF]/70 leading-relaxed font-normal">
          We review your current site or project wireframe and present an architectural roadmap within 24 hours.
        </p>
        <div className="pt-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-[#FC5001] hover:opacity-90 text-[#FFFFFF] text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <span>Schedule Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
