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
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28 border-t border-[#E5E5E5]">
      {/* Orange glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[760px] -translate-x-1/2 rounded-full bg-[#F4511E]/[0.05] blur-[110px]" />
      <div className="relative mx-auto max-w-[1280px]">
        <RevealOnScroll>
          <div className="border border-[#E5E5E5] bg-[#F8F8F8] p-7 sm:p-10 lg:p-14">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#F4511E]">Since 2016</p>
              <p className="mt-3 text-5xl font-black leading-none tracking-[-0.06em] text-[#0D0D0D] sm:text-7xl">
                600<span className="text-[#F4511E]">+</span>
              </p>
              <p className="mt-3 text-base font-bold text-[#6B6B6B]">projects shipped</p>
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
          <div className="grid gap-8 border border-[#E5E5E5] bg-[#F8F8F8] p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:p-14">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#F4511E]">Who we work with</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.98] tracking-tight text-[#0D0D0D] sm:text-6xl">
                From ambitious startups to established B2B companies.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#6B6B6B]">
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
          <div className="overflow-hidden bg-[#0D0D0D] p-7 text-white sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#F4511E]">Flagship portfolio</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.98] tracking-tight sm:text-6xl">
                  Handcrafted websites that print measurable results.
                </h2>
              </div>
              <div>
                <p className="text-base leading-7 text-[#A0A0A0]">
                  Every build is shaped around a clear offer, a faster experience and a next step people actually want to take.
                </p>
                <Link href="/portfolio" className="mt-7 inline-flex items-center gap-2 bg-[#F4511E] px-5 py-3 text-sm font-black text-white transition-all hover:bg-[#D43D0F] hover:scale-[1.03] group">
                  Explore the portfolio <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
            <div className="mt-10 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm font-bold text-[#A0A0A0]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F4511E]" />
                  {point}
                </div>
              ))}
            </div>
            <Link href="/how-we-work" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-white transition-colors hover:text-[#F4511E]">
              See how we work <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
