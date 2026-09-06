"use client";

import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const outcomes = [
  "Clearer brand positioning",
  "Better user experience",
  "Faster website foundations",
  "Stronger conversion paths",
  "Mobile-first responsive systems",
  "A website your team can grow with",
];

export default function HomeOutcomeProof() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8FF] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#9D5CFF]/[0.06] blur-[110px]" />
      <div className="mx-auto max-w-[1280px]">
        <RevealOnScroll>
          <div className="relative grid gap-10 overflow-hidden rounded-[28px] border border-[#DCCDF4] bg-gradient-to-br from-white via-[#FBF9FF] to-[#F3ECFE] p-7 shadow-[0_22px_70px_rgba(76,29,149,0.10)] sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:p-14">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#9D5CFF]/10 blur-[70px]" />
            <div>
              <p className="relative mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#7C3AED]">The outcome</p>
              <h2 className="relative max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] text-[#17062F] sm:text-6xl">A better website should make the business clearer.</h2>
            </div>
            <p className="relative max-w-md text-base leading-7 text-[#5F5670]">We focus on the things a website needs to do well: explain the value, build trust quickly and make the next step obvious.</p>
          </div>
        </RevealOnScroll>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <RevealOnScroll key={outcome} delay={index * 60}>
              <div className="group flex min-h-[120px] items-start gap-4 rounded-[20px] border border-[#E2D8F2] bg-white/90 p-6 shadow-[0_12px_34px_rgba(76,29,149,0.06)] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#9D5CFF] hover:bg-[#F3ECFE] hover:shadow-[0_20px_44px_rgba(76,29,149,0.13)] lg:min-h-[145px]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3ECFE] text-[#7C3AED] transition-colors group-hover:bg-[#CCFF00] group-hover:text-black"><Check className="h-4 w-4" strokeWidth={3} /></span>
                <span className="max-w-xs text-xl font-black leading-tight tracking-[-0.03em] text-[#17062F]">{outcome}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <Link href="/how-we-work" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#DCCDF4] bg-white px-4 py-2.5 text-sm font-black text-[#7C3AED] shadow-sm transition-all duration-[500ms] hover:gap-3 hover:border-[#9D5CFF] hover:bg-[#F3ECFE]">See how we work <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}
