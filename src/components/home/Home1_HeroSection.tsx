"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Play,
} from "lucide-react";

export default function Home1_HeroSection() {
  const videoEmbedUrl = "https://www.youtube.com/embed/k2maqlyUuVw?si=g05sLuxSE0aur-Q6";
  const [videoStarted, setVideoStarted] = useState(false);

  return (
    <section className="relative pt-36 pb-[100px] px-6 sm:px-12 lg:px-20 overflow-hidden bg-gradient-to-b from-[#7B35E8] via-[#9D5CFF] to-[#6B21D0] text-white">
      {/* Ambient Top Radiant Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-[#9D5CFF]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[350px] h-[350px] bg-[#CCFF00]/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto text-center flex flex-col items-center">
        {/* Status Capsule Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-white">
            20-Person In-House Squad · Dedicated Production Pods
          </span>
        </div>

        {/* Massive Punchy Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-white leading-[1.04] max-w-5xl">
          Clear. Credible. <br />
          <span className="text-white">High-Converting Websites</span> <br />
          <span className="inline-block mt-3 px-6 py-1 rounded-2xl bg-[#CCFF00] text-black font-black tracking-tight transform -rotate-1 shadow-[0_0_50px_rgba(204,255,0,0.4)]">
            ready to win big next.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-base sm:text-xl text-purple-100 max-w-2xl font-medium leading-relaxed">
          We engineer flagship websites across Shopify Plus, Webflow, and custom CMS platforms. Zero code bloat. Guaranteed 95+ PageSpeed. Built for ambitious founders.
        </p>

        {/* Dual CTAs */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-neon-lime px-9 py-4 rounded-full text-sm font-black inline-flex items-center gap-3 transition-all"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="#showcase"
            className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm backdrop-blur-md transition-all inline-flex items-center gap-2"
          >
            <span>Explore Selected Works</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>

        {/* Proof Badges Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold text-purple-100">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
            <span>95+ PageSpeed Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
            <span>30-Day Launch Warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
            <span>Zero-Outsourced Production</span>
          </div>
        </div>

        {/* Overlapping Hero Video Showcase (Title Hidden Clean Video Container) */}
        <div className="mt-14 w-full max-w-5xl relative rounded-3xl p-2.5 sm:p-3 bg-white/10 border border-white/20 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.45)] group">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black shadow-2xl">
            {videoStarted ? (
              <iframe
                className="absolute inset-0 w-full h-full border-0"
                src={videoEmbedUrl}
                title="Website Showcase Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setVideoStarted(true)}
                className="group/video absolute inset-0 flex items-center justify-center overflow-hidden text-white"
                aria-label="Play Looksbay website showcase video"
              >
                <img
                  src="https://i.ytimg.com/vi/k2maqlyUuVw/maxresdefault.jpg"
                  alt="Looksbay website showcase video preview"
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover/video:scale-105"
                />
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#CCFF00] text-black shadow-[0_0_45px_rgba(204,255,0,0.5)] transition-transform duration-300 group-hover/video:scale-110">
                  <Play className="ml-1 h-6 w-6 fill-current" />
                </span>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}