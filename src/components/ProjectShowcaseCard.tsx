"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, ArrowUpRight, CheckCircle2, Laptop } from "lucide-react";

export interface ProjectShowcaseProps {
  id: string;
  index?: number;
  total?: number;
  theme: "coral" | "ice" | "lavender" | "champagne";
  sticker: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string };
  techTags: string[];
  desktopImage: string;
  mobileImage?: string;
  clientRating?: number;
  liveUrl?: string;
}

export default function ProjectShowcaseCard({
  index = 0,
  total = 4,
  theme,
  sticker,
  title,
  category,
  tagline,
  description,
  metrics,
  techTags,
  desktopImage,
  mobileImage,
  clientRating = 5,
  liveUrl = "/portfolio",
}: ProjectShowcaseProps) {
  const [isHovered, setIsHovered] = useState(false);

  const themeClass = {
    coral: "theme-coral",
    ice: "theme-ice",
    lavender: "theme-lavender",
    champagne: "theme-champagne",
  }[theme];

  // All badges unified to #9D5CFF primary palette
  const badgeBg = "bg-[#F3ECFE] text-[#6B21D0] border-[#DDD4F6]";

  // Progressive sticky top offset: each card stops slightly lower so you see the stacked tabs at the top!
  const stickyTop = 85 + index * 18;
  const zIndex = 10 + index;

  return (
    <div
      style={{
        top: `${stickyTop}px`,
        zIndex: zIndex,
      }}
      className="sticky w-full mb-16 sm:mb-24 will-change-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative rounded-[28px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 overflow-hidden transition-all duration-500 ${themeClass} shadow-[0_-8px_24px_rgba(157,92,255,0.07),0_20px_60px_rgba(0,0,0,0.10)] group hover:shadow-[0_-8px_24px_rgba(157,92,255,0.10),0_28px_70px_rgba(157,92,255,0.13)] transition-shadow`}
      >
        {/* Background Decorative Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-white/40 blur-[90px] pointer-events-none" />

        {/* Floating Animated Sticker in Top Right */}
        <div className="absolute top-6 right-8 text-4xl sm:text-5xl select-none hover-jiggle cursor-pointer transition-transform group-hover:scale-125 duration-300 z-20">
          {sticker}
        </div>

        {/* Top Status Bar: Case Study Index & Status */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/5 relative z-10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-black/80 text-white font-mono text-[11px] font-bold tracking-wider">
              PROJECT {(index + 1).toString().padStart(2, "0")} / {total.toString().padStart(2, "0")}
            </span>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="hidden sm:inline">LIVE IN PRODUCTION</span>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-slate-600 hidden sm:inline">
            LOOKSBAY FLAGSHIP CASE STUDY
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Project Details & Meta */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div>
              {/* Category Pill */}
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3 border backdrop-blur-sm shadow-xs ${badgeBg}`}>
                <span className="w-2 h-2 rounded-full bg-current opacity-80" />
                {category}
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.08] mb-2">
                {title}
              </h3>

              {/* Tagline */}
              <p className="text-base sm:text-lg font-bold text-slate-700/90 leading-snug mb-3">
                {tagline}
              </p>

              {/* Rating Pills (Red Star squares) */}
              <div className="flex items-center gap-1.5 my-3">
                {[...Array(clientRating)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#9D5CFF] text-white flex items-center justify-center shadow-xs"
                  >
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-white" />
                  </div>
                ))}
                <span className="ml-2 text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  5.0 Verified Result
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-700/80 leading-relaxed font-medium">
                {description}
              </p>
            </div>

            {/* Metric Highlight Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-black/5 shadow-xs flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                  {metrics.label}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {metrics.value}
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 max-w-[200px] justify-end">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold bg-slate-900 text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive CTAs */}
            <div className="flex items-center gap-3 pt-1">
              <Link
                href={liveUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#9D5CFF] text-white font-extrabold text-xs sm:text-sm hover:bg-[#7C3AED] transition-all shadow-[0_4px_20px_rgba(157,92,255,0.35)] hover:shadow-[0_6px_28px_rgba(157,92,255,0.45)] active:scale-95"
              >
                <span>Explore Case Study</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-[#6B21D0] hover:text-[#9D5CFF] border border-[#DDD4F6] hover:border-[#9D5CFF] transition-all bg-[#F3ECFE]/60 hover:bg-[#F3ECFE]"
              >
                <span>Get Similar Site</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Browser Screen Preview */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div
              className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-black/15 bg-slate-950 transition-all duration-500 aspect-[16/10] ${
                isHovered ? "scale-[1.02] -translate-y-1 shadow-[0_25px_60px_rgba(0,0,0,0.28)]" : ""
              }`}
            >
              {/* Browser Header Bar */}
              <div className="h-5 bg-slate-800 border-b border-white/10 px-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400/80" />
                <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
              </div>
              <div className="relative w-full h-[calc(100%-20px)] overflow-hidden">
                <img loading="lazy" decoding="async"
                  src={desktopImage}
                  alt={`${title} website preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-[6000ms] ease-linear group-hover:-translate-y-[15%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
