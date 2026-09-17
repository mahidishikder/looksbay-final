"use client";

import React from "react";
import { cmsPlatforms } from "@/data/cmsData";
import { ArrowUpRight } from "lucide-react";

export default function CmsMarquee() {
  const duplicatedPlatforms = [...cmsPlatforms, ...cmsPlatforms];

  return (
    <section className="relative py-12 border-y border-white/[0.08] bg-[#06070c]/60 overflow-hidden">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#06070a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#06070a] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400"></span>
          <h3 className="text-xs uppercase tracking-widest font-mono text-zinc-400">
            Supported CMS Ecosystem (All-in-One Squad)
          </h3>
        </div>
        <a
          href="/services"
          className="text-xs text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1 group"
        >
          <span>Explore All 10 Supported CMS</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Marquee Track */}
      <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max">
        {duplicatedPlatforms.map((platform, idx) => (
          <a
            key={`${platform.id}-${idx}`}
            href="/services"
            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/20 transition-all duration-300 group cursor-pointer"
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shadow-inner"
              style={{
                backgroundColor: `${platform.color}15`,
                color: platform.color,
                border: `1px solid ${platform.color}35`,
              }}
            >
              {platform.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                {platform.name}
              </span>
              <span className="text-[11px] text-zinc-400">
                {platform.projectsDelivered}+ projects • {platform.turnaround}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
