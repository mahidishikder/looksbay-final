"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * 👥 About Component 2: Signature Squad Group Photo
 * Panoramic group photo of all 20 in-house specialists
 */
export default function About2_SquadPhoto() {
  return (
    <section className="relative rounded-[36px] overflow-hidden bg-slate-900 shadow-2xl border border-purple-100 group">
      {/* Main Panoramic Group Photo */}
      <div className="relative aspect-[21/10] sm:aspect-[21/9] w-full overflow-hidden">
        <img loading="lazy" decoding="async"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80"
          alt="LooksBay 20-Person Senior Production Collective"
          className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#110726]/90 via-[#110726]/30 to-transparent" />

        {/* Floating Top Status Badge */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 bg-black/75 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-pulse" />
          <span className="text-xs font-black uppercase tracking-wider text-white">
            All 20 Specialists In-House
          </span>
        </div>

        {/* Bottom Overlay Info Banner */}
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-xl text-white space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#CCFF00]">
              The Collective
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight">
              One Unified Squad. Direct Engineering Access.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
              Every sprint is directly overseen by our principal architects with dedicated leads across Shopify Liquid, Webflow, custom WordPress ACF, and technical SEO.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="btn-neon-lime px-7 py-3.5 rounded-full text-xs font-black inline-flex items-center gap-2 shadow-lg"
            >
              <span>Work With Our Squad</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
