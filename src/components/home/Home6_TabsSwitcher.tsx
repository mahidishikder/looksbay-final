"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Shield, Sparkles, Layers, Cpu, Award } from "lucide-react";

/**
 * 🏠 Home Component 6: Interactive Section Switcher
 * Harmonized with Sections 1, 2, 3, 4 with dot-grid pattern, floating bouncy dots,
 * pill tab controls, 3D stickers, and high-impact bento cards.
 */
export default function Home6_TabsSwitcher() {
  const [activeTab, setActiveTab] = useState<"works" | "why" | "team">("works");

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto overflow-hidden">
      {/* Background Dot Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.22) 1.2px, transparent 1.2px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Floating Animated Dots */}
      <div
        className="absolute top-10 right-20 w-3 h-3 rounded-full bg-purple-500/70 pointer-events-none animate-pulse"
        style={{ animationDuration: "3.2s" }}
      />
      <div
        className="absolute bottom-16 left-12 w-4 h-4 rounded-full bg-cyan-400/80 pointer-events-none animate-bounce"
        style={{ animationDuration: "4.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-3 h-3 rounded-full bg-amber-400/70 pointer-events-none animate-ping"
        style={{ animationDuration: "5s" }}
      />

      {/* Section Header & Interactive Pill Switcher */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-14 space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-purple-100 text-purple-900 border border-purple-200 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>Inside LooksBay Engineering</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1E0D36] tracking-tight leading-[1.08]">
          Architecture. Reliability. <br />
          <span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#4F46E5] bg-clip-text text-transparent">
            A squad built to win.
          </span>
        </h2>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
          <button
            onClick={() => setActiveTab("works")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all duration-300 flex items-center gap-2 shadow-xs ${
              activeTab === "works"
                ? "bg-[#2E1065] text-white shadow-lg scale-105 ring-2 ring-[#CCFF00]"
                : "bg-white text-slate-700 hover:text-black hover:bg-slate-50 border border-slate-200/90"
            }`}
          >
            <Layers className="w-4 h-4 text-[#CCFF00]" />
            <span>01 · Engineered Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab("why")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all duration-300 flex items-center gap-2 shadow-xs ${
              activeTab === "why"
                ? "bg-[#2E1065] text-white shadow-lg scale-105 ring-2 ring-[#CCFF00]"
                : "bg-white text-slate-700 hover:text-black hover:bg-slate-50 border border-slate-200/90"
            }`}
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <span>02 · Why Choose Us</span>
          </button>

          <button
            onClick={() => setActiveTab("team")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all duration-300 flex items-center gap-2 shadow-xs ${
              activeTab === "team"
                ? "bg-[#2E1065] text-white shadow-lg scale-105 ring-2 ring-[#CCFF00]"
                : "bg-white text-slate-700 hover:text-black hover:bg-slate-50 border border-slate-200/90"
            }`}
          >
            <Award className="w-4 h-4 text-emerald-400" />
            <span>03 · 20-Person Squad</span>
          </button>
        </div>
      </div>

      {/* Dynamic Tab Contents */}
      <div className="relative z-10">
        {/* TAB 1: WORKS */}
        {activeTab === "works" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {/* Bento Card 1 */}
            <div className="glass-surface rounded-[30px] p-7 sm:p-8 bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#EADBFC]" />
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-purple-700 font-mono">01</span>
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-snug">
                  Zero-Bloat Headless &amp; Custom CMS
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  We never rely on fragile, sluggish third-party page builders or 40+ conflicting plugins. We write clean, native Liquid, ACF blocks, and React components from scratch.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-700">
                <span>Clean semantic HTML5</span>
                <span className="px-2 py-0.5 rounded-md bg-purple-50 border border-purple-200 font-mono">100% Score</span>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="glass-surface rounded-[30px] p-7 sm:p-8 bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#DBEAFE]" />
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-blue-700 font-mono">02</span>
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-snug">
                  Data-Backed Conversion Funnels
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Every user interaction, button placement, and headline hierarchy is calculated from real user heatmaps and checkout drop-off data to maximize inbound conversions.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                <span>Sticky checkout drawers</span>
                <span className="px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200 font-mono">+38% Average Lift</span>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="glass-surface rounded-[30px] p-7 sm:p-8 bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#FEF3C7]" />
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-amber-700 font-mono">03</span>
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-snug">
                  Strict Technical Sprints &amp; Warranty
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Guaranteed delivery dates with fixed-scope sprints. Includes 30 days of post-launch code maintenance, schema audit, and dedicated video training for your internal team.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-800">
                <span>30-Day Post-Launch Warranty</span>
                <span className="px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 font-mono">0 Surprises</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: WHY CHOOSE US */}
        {activeTab === "why" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {/* Bento Card 1 */}
            <div className="glass-surface rounded-[30px] p-7 sm:p-8 bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-2 bg-emerald-400" />
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-emerald-700 font-mono">95+</span>
                  <span className="text-2xl">🟢</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-snug">
                  Unconditional PageSpeed Guarantee
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  If your site doesn&apos;t score 95+ on Google Lighthouse, we keep refining it at zero extra cost. We obsess over sub-second Largest Contentful Paint (LCP) and zero layout shifts.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                <span>Google Lighthouse Verified</span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 font-mono">&lt;0.8s LCP</span>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="glass-surface rounded-[30px] p-7 sm:p-8 bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-2 bg-purple-400" />
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-purple-700 font-mono">10+</span>
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-snug">
                  Certified Specialists on Every Platform
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Shopify Plus 2.0, Webflow, custom WordPress (ACF &amp; Blocks), Framer, GoHighLevel, and Next.js. We allocate developers certified specifically in your technology stack.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-800">
                <span>No Generalists, Only Specialists</span>
                <span className="px-2 py-0.5 rounded-md bg-purple-50 border border-purple-200 font-mono">Top 1% Talent</span>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="rounded-[30px] p-7 sm:p-8 bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-2 bg-cyan-400" />
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-cyan-700 font-mono">100%</span>
                  <span className="text-2xl">🔑</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-snug">
                  Complete Code &amp; Asset Ownership
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  You own all Figma files, GitHub repositories, 3D assets, and licenses. Zero vendor lock-in, zero hidden monthly subscription fees, and full freedom to scale.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-cyan-800">
                <span>Full GitHub &amp; Figma Transfer</span>
                <span className="px-2 py-0.5 rounded-md bg-cyan-50 border border-cyan-200 font-mono">100% Yours</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: OUR SQUAD */}
        {activeTab === "team" && (
          <div className="rounded-[36px] overflow-hidden bg-white border border-purple-100 shadow-xl animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
              <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[16/10] relative shadow-md">
                <img loading="lazy" decoding="async"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80"
                  alt="LooksBay 20-Person Production Collective"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black uppercase text-white flex items-center gap-2 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
                  <span>20 Full-Time In-House Engineers</span>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-100 text-purple-900 border border-purple-200">
                  <span>Leadership &amp; Execution</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                  One Unified 20-Person Squad. <br />
                  <span className="text-purple-700">Zero Junior Outsourcing.</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Led directly by our senior technical directors, our agency pairs senior full-stack developers with motion designers and SEO auditors. You speak directly with the architects writing your code.
                </p>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#FAF5FF] border border-purple-100 text-center">
                    <div className="text-2xl font-black text-purple-900">4+</div>
                    <div className="text-[10px] text-purple-700 font-bold uppercase mt-0.5">Years Lead</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF5FF] border border-purple-100 text-center">
                    <div className="text-2xl font-black text-purple-900">20+</div>
                    <div className="text-[10px] text-purple-700 font-bold uppercase mt-0.5">Specialists</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF5FF] border border-purple-100 text-center">
                    <div className="text-2xl font-black text-purple-900">700+</div>
                    <div className="text-[10px] text-purple-700 font-bold uppercase mt-0.5">Launches</div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href="/about"
                    className="px-6 py-3 rounded-full bg-[#2E1065] text-white text-xs sm:text-sm font-black hover:bg-purple-900 transition-all inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Meet Our Full Squad</span>
                    <ArrowRight className="w-4 h-4 text-[#CCFF00]" />
                  </Link>
                  <Link
                    href="/reviews"
                    className="text-xs sm:text-sm font-black text-purple-700 hover:underline"
                  >
                    View Verified Clutch Reviews (4.9/5) →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
