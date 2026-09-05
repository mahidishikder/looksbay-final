"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industryCategories } from "@/data/industryData";

/**
 * 🛠️ Services Component 2: 10 Industry Cards Grid
 * Displays industry cards with live project preview and link to case studies
 */
export default function Services2_IndustryGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {industryCategories.map((cat, idx) => (
        <Link
          key={cat.slug}
          href={`/services/${cat.slug}`}
          className="glass-surface rounded-[32px] bg-white border border-purple-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)] hover:border-purple-300 transition-all duration-300 p-8 flex flex-col justify-between group hover:-translate-y-1.5"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono font-bold text-purple-700">0{idx + 1}</span>
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-purple-50 text-purple-800 border border-purple-200">
                5+ Case Studies
              </span>
            </div>

            <h3 className="text-2xl font-black text-[#1E0D36] group-hover:text-purple-700 transition-colors mb-2">
              {cat.name}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6">
              {cat.tagline}
            </p>

            {/* Preview of top project image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 mb-6 shadow-xs">
              <img loading="lazy" decoding="async"
                src={cat.projects[0].laptopImage}
                alt={cat.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-[11px] font-bold">
                Featured: {cat.projects[0].title}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black text-purple-700 group-hover:text-purple-900">
            <span>View 5+ Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </Link>
      ))}
    </section>
  );
}
