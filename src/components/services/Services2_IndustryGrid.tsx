"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industryCategories } from "@/data/industryData";

export default function Services2_IndustryGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {industryCategories.map((cat, idx) => (
        <Link
          key={cat.slug}
          href={`/services/${cat.slug}`}
          className="rounded-[28px] bg-[#FFFFFF] border border-[#0F0F0F]/10 shadow-xs hover:border-[#FC5001] hover:shadow-lg transition-all duration-300 p-8 flex flex-col justify-between group hover:-translate-y-1.5"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono font-bold text-[#FC5001]">0{idx + 1}</span>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-[#F5F5F5] text-[#FC5001] border border-[#FC5001]/20">
                5+ Case Studies
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#0F0F0F] group-hover:text-[#FC5001] transition-colors mb-2">
              {cat.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#0F0F0F]/70 leading-relaxed font-normal mb-6">
              {cat.tagline}
            </p>

            {/* Preview of top project image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#F5F5F5] mb-6 shadow-xs border border-[#0F0F0F]/10">
              <img
                loading="lazy"
                decoding="async"
                src={cat.projects[0].laptopImage}
                alt={cat.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-[#FFFFFF] text-[11px] font-bold">
                Featured: {cat.projects[0].title}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#0F0F0F]/10 flex items-center justify-between text-xs font-bold text-[#0F0F0F] group-hover:text-[#FC5001] transition-colors">
            <span>Explore Projects</span>
            <ArrowUpRight className="w-4 h-4 text-[#FC5001] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </Link>
      ))}
    </section>
  );
}
