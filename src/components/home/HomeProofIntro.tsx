"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const proofPoints = [
  "Clearer positioning",
  "Faster foundations",
  "Stronger conversion paths",
];

export default function HomeProofIntro() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8FF] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[760px] -translate-x-1/2 rounded-full bg-[#9D5CFF]/[0.07] blur-[110px]" />
      <div className="relative mx-auto max-w-[1280px]">
        <RevealOnScroll>
          <div className="rounded-[28px] border border-[#DCCDF4] bg-white p-7 shadow-[0_18px_55px_rgba(76,29,149,0.08)] sm:p-10 lg:p-14">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#7C3AED]">Since 2016</p>
              <p className="mt-3 text-5xl font-black leading-none tracking-[-0.06em] text-[#17062F] sm:text-7xl">600<span className="text-[#9D5CFF]">+</span></p>
              <p className="mt-3 text-base font-bold text-[#5F5670]">projects shipped</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function HomeAudiencePositioning() {
  return (
    <section className="bg-white px-6 py-6 sm:px-10 lg:px-16 lg:py-8">
      <div className="mx-auto max-w-[1280px]">
        <RevealOnScroll>
          <div className="grid gap-8 rounded-[28px] border border-[#E8E4F2] bg-[#F7F4FF] p-7 shadow-[0_18px_55px_rgba(76,29,149,0.06)] sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:p-14">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#7C3AED]">Who we work with</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] text-[#17062F] sm:text-6xl">
                From ambitious startups to established B2B companies.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#6B6375]">
              One senior team for the strategy, design and technology behind your next stage of growth.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function HomeFlagshipPortfolio() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-6 sm:px-10 lg:px-16 lg:py-8">
      <div className="mx-auto max-w-[1280px]">
        <RevealOnScroll>
          <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#4C1D95] via-[#581C87] to-[#3B0764] p-7 text-white shadow-[0_24px_70px_rgba(76,29,149,0.18)] sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#CCFF00]">Flagship portfolio</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl">
                  Handcrafted websites that print measurable results.
                </h2>
              </div>
              <div>
                <p className="text-base leading-7 text-purple-100">
                  Every build is shaped around a clear offer, a faster experience and a next step people actually want to take.
                </p>
                <Link href="/portfolio" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-5 py-3 text-sm font-black text-black transition-transform hover:scale-[1.03]">
                  Explore the portfolio <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="mt-10 grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm font-bold text-purple-100">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#CCFF00]" />
                  {point}
                </div>
              ))}
            </div>
            <Link href="/how-we-work" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-white transition-colors hover:text-[#CCFF00]">
              See how we work <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
