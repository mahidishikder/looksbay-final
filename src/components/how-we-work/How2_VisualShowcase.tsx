"use client";

import React from "react";

/**
 * ⚡ How We Work Component 2: Visual Showcase
 * Agency at work panoramic image with live production status & velocity guarantee
 */
export default function How2_VisualShowcase() {
  return (
    <section className="relative rounded-[36px] overflow-hidden border border-purple-100 bg-slate-900 shadow-xl group">
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
        <img loading="lazy" decoding="async"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1600&auto=format&fit=crop&q=80"
          alt="LooksBay High-End Design Sprint & Development"
          className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120726]/90 via-[#120726]/35 to-transparent" />

        {/* Top Left Floating Badge */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 bg-black/75 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-pulse" />
          <span className="text-xs font-black uppercase tracking-wider text-white">
            Live Production Methodology
          </span>
        </div>

        {/* Bottom Floating Stats Strip */}
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-xl text-white space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#CCFF00]">
              Sprint Velocity Guarantee
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Transparent Milestones. Weekly Video Reviews.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              You are never in the dark. Every milestone has a tangible deliverable you can touch, test, and approve before we move forward.
            </p>
          </div>

          {/* Mini Highlights Pill */}
          <div className="flex items-center gap-3 shrink-0 bg-black/75 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
            <div className="text-center pr-4 border-r border-white/20">
              <div className="text-lg font-black text-[#CCFF00]">100%</div>
              <div className="text-[10px] font-bold text-zinc-300 uppercase">On-Time</div>
            </div>
            <div className="text-center pl-1">
              <div className="text-lg font-black text-white">0</div>
              <div className="text-[10px] font-bold text-zinc-300 uppercase">Hidden Costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
