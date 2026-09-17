"use client";

import React from "react";
import { Layers } from "lucide-react";
import { workProjectsList } from "./Work2_StackedCards";

export const workCategories = [
  "All",
  "Custom Squarespace",
  "Template Customization",
  "Squarespace Commerce",
  "Migration & Redesign",
];

interface Work1_HeaderFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Work1_HeaderFilter({
  activeCategory,
  onSelectCategory,
}: Work1_HeaderFilterProps) {
  return (
    <section className="relative text-center max-w-4xl mx-auto space-y-6 mb-16">
      {/* Top Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0F0F0F] bg-[#FFFFFF] text-[12px] font-bold text-[#0F0F0F] shadow-xs">
        <span className="w-2 h-2 rounded-full bg-[#FC5001] animate-pulse" />
        <span>600+ Verified Squarespace Builds · Circle Platinum Partner</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0F0F0F] tracking-tight leading-[1.06]">
        LOOKSBAY <br />
        <span className="text-[#FC5001]">Squarespace Showcase</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-[#0F0F0F]/70 max-w-2xl mx-auto leading-relaxed font-normal">
        Explore our curated Squarespace 7.1 builds featuring custom Fluid Engine layouts, bespoke CSS micro-interactions, Acuity scheduling, and high-converting eCommerce.
      </p>

      {/* DYNAMIC CATEGORY PILL FILTER */}
      <div className="flex flex-wrap justify-center gap-2.5 pt-4">
        {workCategories.map((cat) => {
          const isActive = activeCategory === cat;
          const count =
            cat === "All"
              ? workProjectsList.length
              : workProjectsList.filter((p) => p.category === cat).length;

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center gap-2 ${
                isActive
                  ? "bg-[#0F0F0F] text-[#FFFFFF] shadow-md scale-105"
                  : "bg-[#FFFFFF] text-[#0F0F0F]/70 hover:text-[#0F0F0F] hover:border-[#0F0F0F] border border-[#0F0F0F]/10"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                  isActive ? "bg-[#FC5001] text-[#FFFFFF]" : "bg-[#F5F5F5] text-[#0F0F0F]/60"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Parallax Stacking Instruction Hint */}
      <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-[#0F0F0F]/50">
        <Layers className="w-3.5 h-3.5 text-[#FC5001] animate-bounce" />
        <span>Scroll down to experience the selected works &amp; case studies</span>
      </div>
    </section>
  );
}
