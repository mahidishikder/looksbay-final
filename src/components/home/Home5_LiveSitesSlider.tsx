"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight, Star, ExternalLink, Zap, ShieldCheck } from "lucide-react";

interface LiveSite {
  id: string;
  title: string;
  category: string;
  domain: string;
  metric: string;
  metricLabel: string;
  speed: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  themePill: string;
  image: string;
}

const liveSites: LiveSite[] = [
  {
    id: "infaces",
    title: "InFaces Culture Platform",
    category: "Webflow + Spline 3D",
    domain: "infaces.global",
    metric: "180k+",
    metricLabel: "Monthly Active Visits",
    speed: "99/100 Lighthouse",
    quote: "Our bounce rate plunged by 48% within 30 days of launch. The animations feel butter-smooth on mobile.",
    author: "Sophie Laurent",
    role: "Creative Director, Infaces",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    themePill: "bg-purple-100 text-purple-800 border-purple-200",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&auto=format&fit=crop&q=80",
  },
  {
    id: "apex",
    title: "Apex Cloud Intelligence",
    category: "Framer + Next.js",
    domain: "apexcloud.io",
    metric: "1,200+",
    metricLabel: "Enterprise Demos",
    speed: "100/100 Core Vitals",
    quote: "LooksBay delivered in 14 days what our previous agency couldn't finish in 4 months. Unbelievable execution.",
    author: "Darius Vance",
    role: "VP Product, Apex",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    themePill: "bg-blue-100 text-blue-800 border-blue-200",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80",
  },
  {
    id: "aura",
    title: "Aura Horology New York",
    category: "Shopify Plus 2.0",
    domain: "aurahorology.com",
    metric: "+42%",
    metricLabel: "Mobile Checkout Lift",
    speed: "98/100 Mobile",
    quote: "The 0.8s checkout upgrade drove our highest holiday revenue in brand history. Worth every penny.",
    author: "Marcus Vance",
    role: "Founder, Aura NY",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    themePill: "bg-emerald-100 text-emerald-800 border-emerald-200",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=80",
  },
  {
    id: "grand-lachine",
    title: "Grand Lachine Luxury Estates",
    category: "WordPress ACF Pro",
    domain: "grandlachine.ca",
    metric: "$35M+",
    metricLabel: "Closed Sales Volume",
    speed: "0.6s Sub-Second",
    quote: "The custom interactive architectural floorplans turned casual browsers into qualified high-net-worth buyers.",
    author: "Elena Rostova",
    role: "Principal Partner",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    themePill: "bg-amber-100 text-amber-800 border-amber-200",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80",
  },
];

/**
 * 🏠 Home Component 5: Live Sites Showcase
 * Re-engineered with dot-grid textures, floating playful dots, realistic Safari browser chrome,
 * verified metric badges, and interactive testimonials matching Sections 1, 2, 3, 4.
 */
export default function Home5_LiveSitesSlider() {
  const [activeSiteIndex, setActiveSiteIndex] = useState(0);

  const nextSite = () => {
    setActiveSiteIndex((prev) => (prev + 1) % liveSites.length);
  };
  const prevSite = () => {
    setActiveSiteIndex((prev) => (prev - 1 + liveSites.length) % liveSites.length);
  };

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto overflow-hidden">
      {/* Background Dot Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.22) 1.2px, transparent 1.2px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Floating Animated Dots matching Sections 2 & 4 */}
      <div
        className="absolute top-12 left-10 w-3.5 h-3.5 rounded-full bg-purple-500/70 pointer-events-none animate-pulse"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-20 left-1/4 w-4 h-4 rounded-full bg-emerald-400/80 pointer-events-none animate-bounce"
        style={{ animationDuration: "5s" }}
      />
      <div
        className="absolute top-1/3 right-8 w-3 h-3 rounded-full bg-rose-400/80 pointer-events-none animate-ping"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-10 right-16 w-3.5 h-3.5 rounded-full bg-amber-400/80 pointer-events-none animate-pulse"
        style={{ animationDuration: "3.5s" }}
      />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Real Production Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1E0D36] tracking-tight leading-[1.08]">
            These sites are live. <br />
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#4F46E5] bg-clip-text text-transparent">
              And they generate serious revenue.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl font-medium leading-relaxed">
            Zero conceptual Figma mockups. Every build featured below is deployed live, handling hundreds of thousands of active visitors, and generating verified client returns.
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-3 self-start sm:self-end shrink-0">
          <button
            onClick={prevSite}
            className="w-12 h-12 rounded-full border border-purple-200 bg-white hover:bg-purple-50 flex items-center justify-center text-purple-900 transition-all shadow-sm hover:scale-105 active:scale-95"
            aria-label="Previous live site"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-xs font-black text-slate-500 font-mono px-1">
            0{activeSiteIndex + 1} / 0{liveSites.length}
          </div>
          <button
            onClick={nextSite}
            className="w-12 h-12 rounded-full border border-purple-200 bg-white hover:bg-purple-50 flex items-center justify-center text-purple-900 transition-all shadow-sm hover:scale-105 active:scale-95"
            aria-label="Next live site"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Showcase Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {liveSites.map((site, index) => {
          const isSelected = index === activeSiteIndex;
          return (
            <div
              key={site.id}
              onClick={() => setActiveSiteIndex(index)}
              className={`group cursor-pointer rounded-[28px] overflow-hidden bg-white transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "border-2 border-purple-500 shadow-[0_20px_60px_rgba(124,58,237,0.16)] -translate-y-2"
                  : "border border-slate-200/90 hover:border-purple-300 shadow-sm hover:-translate-y-1 hover:shadow-md"
              }`}
            >
              {/* Browser Window Chrome Top */}
              <div>
                <div className="px-4 py-2.5 bg-slate-50/90 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white border border-slate-200/60 text-[10px] font-mono text-slate-500">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>{site.domain}</span>
                  </div>
                </div>

                {/* Card Image with Live Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img loading="lazy" decoding="async"
                    src={site.image}
                    alt={site.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-black/80 backdrop-blur-md text-emerald-300 border border-white/10 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Category Pill */}
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide border ${site.themePill}`}>
                    {site.category}
                  </span>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-purple-700 transition-colors leading-snug">
                      {site.title}
                    </h3>
                  </div>

                  {/* Highlight Metric */}
                  <div className="p-3 rounded-2xl bg-purple-50/70 border border-purple-100/80 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-black text-purple-900 leading-none">{site.metric}</div>
                      <div className="text-[10px] font-bold text-slate-500 mt-0.5">{site.metricLabel}</div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono font-black text-emerald-700 bg-white px-2 py-1 rounded-lg border border-emerald-200">
                      <Zap className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                      <span>{site.speed.split(" ")[0]}</span>
                    </div>
                  </div>

                  {/* Client Quote */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed italic font-medium">
                      &ldquo;{site.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Author & CTA */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-2">
                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center gap-2.5">
                    <img loading="lazy" decoding="async"
                      src={site.avatar}
                      alt={site.author}
                      className="w-7 h-7 rounded-full object-cover border border-purple-200"
                    />
                    <div>
                      <div className="text-xs font-black text-slate-800 leading-none">{site.author}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{site.role}</div>
                    </div>
                  </div>

                  <Link
                    href="/portfolio"
                    className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all shadow-xs"
                    aria-label={`View ${site.title} case study`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
