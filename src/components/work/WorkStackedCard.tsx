"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Star, Zap, ExternalLink, Sparkles, Eye, ShieldCheck, Laptop, Globe } from "lucide-react";
import { PortfolioProject } from "@/data/portfolioData";

interface WorkStackedCardProps {
  project: PortfolioProject;
  index: number;
  total: number;
  onPreview: (project: PortfolioProject) => void;
}

export default function WorkStackedCard({
  project,
  index,
  total,
  onPreview,
}: WorkStackedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Curated color accents per index for rich agency variety
  const accents = [
    { border: "border-purple-500/20", glow: "from-purple-600/10", tagBg: "bg-purple-100 text-purple-900", badge: "#7C3AED", dot: "bg-emerald-500" },
    { border: "border-sky-500/20", glow: "from-sky-600/10", tagBg: "bg-sky-100 text-sky-900", badge: "#0284C7", dot: "bg-emerald-500" },
    { border: "border-emerald-500/20", glow: "from-emerald-600/10", tagBg: "bg-emerald-100 text-emerald-900", badge: "#059669", dot: "bg-emerald-500" },
    { border: "border-amber-500/20", glow: "from-amber-600/10", tagBg: "bg-amber-100 text-amber-900", badge: "#D97706", dot: "bg-emerald-500" },
    { border: "border-rose-500/20", glow: "from-rose-600/10", tagBg: "bg-rose-100 text-rose-900", badge: "#E11D48", dot: "bg-emerald-500" },
  ];
  const accent = accents[index % accents.length];

  // Progressive sticky top offset for clean stacking parallax
  const stickyTop = 100 + index * 10;

  return (
    <div
      style={{
        top: `${stickyTop}px`,
        zIndex: 10 + index,
      }}
      className="sticky w-full mb-12 sm:mb-16 will-change-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`glass-surface relative w-full rounded-[28px] sm:rounded-[36px] bg-white border ${accent.border} shadow-[0_15px_40px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(124,58,237,0.14)] transition-all duration-500 overflow-hidden group`}
      >
        {/* Subtle dynamic ambient glow */}
        <div
          className={`absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br ${accent.glow} to-transparent blur-3xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700`}
        />

        {/* TOP STATUS BAR */}
        <div className="px-6 sm:px-10 pt-6 sm:pt-8 pb-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 relative z-10">
          <div className="flex flex-wrap items-center gap-3">
            {/* Number Pill */}
            <div className="px-3 py-1 rounded-full bg-slate-900 text-white font-mono text-xs font-bold shadow-xs">
              {(index + 1).toString().padStart(2, "0")} / {total.toString().padStart(2, "0")}
            </div>

            {/* Live Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE IN PRODUCTION</span>
            </div>

            {/* CMS / Engine Badge */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
              <Laptop className="w-3.5 h-3.5 text-purple-600" />
              <span>{project.cms}</span>
            </div>
          </div>

          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${accent.tagBg}`}>
              {project.category}
            </span>
          </div>
        </div>

        {/* MAIN BODY: 2 COLUMNS */}
        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* LEFT: Clean Single Image Showcase (No coded mockups) */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto w-full max-w-[680px]">
              <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group-hover:scale-[1.015] transition-transform duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Quick interactive preview hover button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => onPreview(project)}
                    className="px-5 py-2.5 rounded-full bg-white text-slate-900 font-extrabold text-xs shadow-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
                  >
                    <Eye className="w-4 h-4 text-purple-600" />
                    <span>Expand Image View</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT, METRICS & CTAS (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Client Name & Verification */}
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-purple-700 mb-1">
                <span>{project.client}</span>
                <span className="w-1 h-1 rounded-full bg-purple-400" />
                <span className="text-slate-500 font-medium">Enterprise Client</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-purple-700 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-600 leading-relaxed font-medium">
                {project.description}
              </p>

              {/* 3 Metric Pills with Highlight styling */}
              <div className="grid grid-cols-3 gap-2.5 py-3.5 px-3 rounded-2xl bg-purple-50/70 border border-purple-100 text-center my-5 shadow-xs">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col justify-center">
                    <div className="text-base sm:text-lg font-black text-[#1E0D36] tracking-tight">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-purple-700 font-bold line-clamp-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Verified Result Strip */}
              <div className="p-3 rounded-xl bg-emerald-50/90 border border-emerald-200/80 text-xs font-bold text-emerald-900 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{project.results}</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onPreview(project)}
                className="flex-1 min-w-[140px] py-3 px-5 rounded-full text-center text-xs font-black bg-[#2E1065] text-white hover:bg-[#4C1D95] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-sm group-hover:shadow-md"
              >
                <span>View Full Showcase</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <Link
                href="/contact"
                className="py-3 px-5 rounded-full text-center text-xs font-bold text-slate-800 hover:text-black border border-slate-300 hover:border-purple-600 hover:bg-purple-50/50 transition-all flex items-center justify-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5 text-purple-600" />
                <span>Build Similar</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
