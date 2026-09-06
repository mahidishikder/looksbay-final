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
    <section className="bg-[#F5F6FA] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <RevealOnScroll>
          <div className="grid gap-10 rounded-[28px] border border-[#E8E4F2] bg-[#F7F7F5] p-7 shadow-[0_18px_55px_rgba(76,29,149,0.05)] sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:p-14">
            <div>
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#7C3AED]">The outcome</p>
              <h2 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] text-[#0B0B0F] sm:text-6xl">A better website should make the business clearer.</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#6B6B73]">We focus on the things a website needs to do well: explain the value, build trust quickly and make the next step obvious.</p>
          </div>
        </RevealOnScroll>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <RevealOnScroll key={outcome} delay={index * 60}>
              <div className="group flex min-h-[120px] items-start gap-4 rounded-[20px] border border-[#E8E4F2] bg-[#FAFBFF] p-6 shadow-[0_10px_30px_rgba(76,29,149,0.04)] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#C4A0FF] hover:bg-[#F3ECFE] hover:shadow-[0_18px_40px_rgba(76,29,149,0.09)] lg:min-h-[145px]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3ECFE] text-[#7C3AED]"><Check className="h-4 w-4" /></span>
                <span className="max-w-xs text-xl font-black leading-tight tracking-[-0.03em] text-[#0B0B0F]">{outcome}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <Link href="/how-we-work" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[#7C3AED] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:gap-3">See how we work <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}
