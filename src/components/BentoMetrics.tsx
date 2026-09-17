"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Star, ArrowRight, Award, ShieldCheck, Sparkles, Zap, CheckCircle2 } from "lucide-react";

export default function BentoMetrics() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasCounted = useRef(false);

  useEffect(() => {
    const targets = [49, 720, 185, 20];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted.current) {
          hasCounted.current = true;
          targets.forEach((target, i) => {
            let start = 0;
            const step = Math.ceil(target / 40);
            const timer = setInterval(() => {
              start += step;
              if (start >= target) {
                start = target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[i] = start;
                return next;
              });
            }, 25);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 max-w-[1440px] mx-auto" ref={counterRef}>
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>Proven Track Record</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1E0D36] tracking-tight leading-[1.08]">
          On average, companies do{" "}
          <span className="underline decoration-purple-600 decoration-wavy underline-offset-8 text-purple-700">
            2+ projects
          </span>{" "}
          with us
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
          We do not just hand over a template and disappear. We build long-term digital growth engines with guaranteed performance.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-10">
        {/* Bento 1: 4.9 Rating (4 cols) */}
        <div className="md:col-span-4 rounded-3xl p-8 bg-[#141417] border border-white/10 relative overflow-hidden group hover:border-[#CCFF00]/40 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-2 flex items-baseline gap-1">
            {(counts[0] / 10).toFixed(1)}
            <span className="text-2xl text-zinc-500 font-bold">/ 5.0</span>
          </div>
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h4 className="text-base font-bold text-zinc-200 mb-1">Top-Rated Client Satisfaction</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Verified reviews across Google, Fiverr Pro, and direct enterprise contracts.
          </p>
        </div>

        {/* Bento 2: 720+ Websites Launched (4 cols) */}
        <div className="md:col-span-4 rounded-3xl p-8 bg-[#141417] border border-white/10 relative overflow-hidden group hover:border-[#CCFF00]/40 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="text-5xl sm:text-6xl font-black text-[#CCFF00] tracking-tight mb-2">
            {counts[1]}+
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-4">
            <CheckCircle2 className="w-3 h-3" />
            Zero Failed Launches
          </div>
          <h4 className="text-base font-bold text-zinc-200 mb-1">Websites Delivered Worldwide</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Engineered across 10 major CMS frameworks including Shopify, Webflow, and WordPress.
          </p>
        </div>

        {/* Bento 3: 180k+ Organic Visitors (4 cols) */}
        <div className="md:col-span-4 rounded-3xl p-8 bg-[#141417] border border-white/10 relative overflow-hidden group hover:border-[#CCFF00]/40 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-2">
            {counts[2]}k+
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-sky-500/15 text-sky-400 border border-sky-500/30 mb-4">
            <Zap className="w-3 h-3" />
            Core Web Vitals 95+
          </div>
          <h4 className="text-base font-bold text-zinc-200 mb-1">Monthly Organic Clicks Generated</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Proprietary programmatic SEO structure & schema markup baked directly into every build.
          </p>
        </div>

        {/* Bento 4: 20-Person Squad (5 cols) */}
        <div className="md:col-span-5 rounded-3xl p-8 bg-[#141417] border border-white/10 relative overflow-hidden group hover:border-[#CCFF00]/40 transition-all flex flex-col justify-between">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <div className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                {counts[3]}+
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mt-1">
                Specialists In-House
              </div>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Award className="w-7 h-7 text-[#CCFF00]" />
            </div>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed mt-2">
            Led directly by our <strong className="text-white font-semibold">Principal Architects</strong>. Full-time WordPress engineers, Shopify Liquid coders, motion designers, and SEO auditors.
          </p>
        </div>

        {/* Bento 5: Partner Recognition Banner (7 cols - Matches the "W" Webflow card in reference!) */}
        <div className="md:col-span-7 rounded-3xl p-8 bg-gradient-to-br from-[#18181D] to-[#121215] border border-white/10 relative overflow-hidden group hover:border-[#CCFF00]/40 transition-all flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#CCFF00]">
              Certified Platform Excellence
            </span>
            <h4 className="text-2xl sm:text-3xl font-black text-white">
              Official Webflow &amp; Shopify Partner Squad
            </h4>
            <p className="text-xs text-zinc-400 max-w-sm">
              We adhere to strict Finsweet Client-First standards and Shopify Liquid 2.0 clean-code guidelines.
            </p>
          </div>

          {/* Glowing Green Partner Emblem (styled like the giant neon W in reference) */}
          <div className="relative shrink-0 w-28 h-28 rounded-2xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center group-hover:scale-105 transition-transform shadow-[0_0_40px_rgba(204,255,0,0.15)]">
            <span className="text-6xl font-black text-[#CCFF00] tracking-tighter select-none font-serif">
              W
            </span>
            <span className="absolute bottom-2 text-[9px] font-black uppercase text-[#CCFF00] tracking-widest">
              Certified
            </span>
          </div>
        </div>
      </div>

      {/* High-Impact Neon Lime CTA Button (Center aligned as in reference) */}
      <div className="flex justify-center pt-2">
        <Link
          href="/contact"
          className="btn-neon-lime px-10 py-4 rounded-full text-sm font-black inline-flex items-center gap-3 transition-all"
        >
          <span>Schedule Free Strategy Call</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
