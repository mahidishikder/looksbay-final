"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industryCategories } from "@/data/industryData";

/**
 * 🛠️ Services Component 2: 10 Industry Cards Grid
 * Clean white cards with orange badges and hover micro-interactions
 */
export default function Services2_IndustryGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {industryCategories.map((cat, idx) => (
        <Link
          key={cat.slug}
          href={`/services/${cat.slug}`}
          className="rounded-[28px] bg-white border border-[#E5E5E5] shadow-xs hover:border-[#F4511E] hover:shadow-[0_16px_40px_rgba(244,81,30,0.08)] transition-all duration-300 p-8 flex flex-col justify-between group hover:-translate-y-1.5"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono font-bold text-[#F4511E]">0{idx + 1}</span>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-[#FFF4F0] text-[#F4511E] border border-[#F4511E]/20">
                5+ Case Studies
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#0D0D0D] group-hover:text-[#F4511E] transition-colors mb-2">
              {cat.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed font-normal mb-6">
              {cat.tagline}
            </p>

            {/* Preview of top project image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#F5F5F5] mb-6 shadow-xs border border-[#F0F0F0]">
              <img
                loading="lazy"
                decoding="async"
                src={cat.projects[0].laptopImage}
                alt={cat.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-[11px] font-bold">
                Featured: {cat.projects[0].title}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#F0F0F0] flex items-center justify-between text-xs font-bold text-[#0D0D0D] group-hover:text-[#F4511E] transition-colors">
            <span>Explore Projects</span>
            <ArrowUpRight className="w-4 h-4 text-[#F4511E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </Link>
      ))}
    </section>
  );
}
