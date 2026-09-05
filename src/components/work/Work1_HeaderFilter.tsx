"use client";

import React from "react";
import { Trophy, Layers } from "lucide-react";
import { workProjectsList } from "./Work2_StackedCards";

export const workCategories = ["All", "Webflow", "Shopify Plus", "Framer", "WordPress"];

interface Work1_HeaderFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

/**
 * 💼 Work Component 1: Header & Category Filter
 * Hero title, subtitle, and dynamic category pill buttons
 */
export default function Work1_HeaderFilter({
  activeCategory,
  onSelectCategory,
}: Work1_HeaderFilterProps) {
  return (
    <section className="hero-primary text-center max-w-4xl mx-auto space-y-6 mb-16">
      {/* Top Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black shadow-xs backdrop-blur-md">
        <Trophy className="w-3.5 h-3.5 text-[#CCFF00]" />
        <span>700+ Global Builds · 100% On-Time Delivery · 99.8% CSAT</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.04]">
        LOOKSBAY <br />
        <span className="text-[#CCFF00]">
          Selected Works
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed font-medium">
        Explore our curated flagship builds featuring custom liquid development, headless CMS architecture, and ultra-high conversion funnels. Scroll down to experience our stacked card showcase.
      </p>

      {/* DYNAMIC CATEGORY PILL FILTER */}
      <div className="flex flex-wrap justify-center gap-2 pt-4">
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
                  ? "bg-[#2E1065] text-white shadow-md scale-105 ring-2 ring-[#CCFF00]"
                  : "bg-white/10 text-white hover:text-black hover:bg-white border border-white/20"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  isActive ? "bg-[#CCFF00] text-black font-extrabold" : "bg-white/20 text-purple-100"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Parallax Stacking Instruction Hint */}
      <div className="pt-2 flex items-center justify-center gap-2 text-xs font-bold text-purple-100/90">
        <Layers className="w-3.5 h-3.5 text-[#CCFF00] animate-bounce" />
        <span>Scroll down to experience the stacked card parallax effect</span>
      </div>
    </section>
  );
}
