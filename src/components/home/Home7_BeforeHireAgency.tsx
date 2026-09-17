"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Zap, Award, ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * 🏠 Home Component 7: "Read This Before You Hire Another Agency"
 * Completely elevated from a dark jarring box into a high-end luxury editorial card
 * that seamlessly harmonizes with the light, airy pastel design language of Sections 1, 2, 3, 4.
 */
export default function Home7_BeforeHireAgency() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto overflow-hidden">
      {/* Outer Card Container */}
      <div className="relative rounded-[36px] bg-gradient-to-br from-[#FAF5FF] via-[#F5EEFF] to-[#FAF8FF] border border-purple-200/80 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_25px_70px_rgba(124,58,237,0.08)]">
        {/* Background Dot Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: "radial-gradient(rgba(124, 58, 237, 0.2) 1.2px, transparent 1.2px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Floating Colorful Dots */}
        <div
          className="absolute top-10 left-12 w-3.5 h-3.5 rounded-full bg-purple-500/80 pointer-events-none animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute top-1/4 right-14 w-4 h-4 rounded-full bg-amber-400/80 pointer-events-none animate-bounce"
          style={{ animationDuration: "4.5s" }}
        />
        <div
          className="absolute bottom-12 left-1/3 w-3 h-3 rounded-full bg-emerald-400/80 pointer-events-none animate-ping"
          style={{ animationDuration: "4s" }}
        />

        {/* Header Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-white/90 text-purple-900 border border-purple-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
            <span>The LooksBay Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1E0D36] tracking-tight leading-[1.08]">
            Read this{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#4F46E5] bg-clip-text text-transparent">
              before you hire
            </span>{" "}
            another agency.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            The web agency industry is filled with broken promises, slow delivery, and hidden subcontracting. Here is our direct commitment to every founder who trusts us.
          </p>
        </div>

        {/* 3 High-Impact Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 01 */}
          <div className="rounded-[28px] p-7 sm:p-9 bg-white border border-purple-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 relative group hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-5xl font-black text-[#7C3AED] font-mono tracking-tighter">01</span>
                <span className="text-3xl select-none group-hover:scale-110 transition-transform">🛡️</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 leading-snug">
                Zero Outsourced Juniors. You Work With Senior Leads.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Most agencies sell you with an articulate pitch director, then silently outsource your build to inexperienced junior contractors. At LooksBay, every line of code is written by our verified 20-person in-house squad led by dedicated principal architects.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-purple-700">
              <CheckCircle2 className="w-4 h-4 text-purple-600" />
              <span>Direct WhatsApp &amp; Slack Channel Access</span>
            </div>
          </div>

          {/* Card 02 */}
          <div className="rounded-[28px] p-7 sm:p-9 bg-white border border-purple-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 relative group hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-5xl font-black text-[#7C3AED] font-mono tracking-tighter">02</span>
                <span className="text-3xl select-none group-hover:scale-110 transition-transform">⚡</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 leading-snug">
                Obsessive Speed: 95+ PageSpeed Or We Don&apos;t Launch.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                A 1-second delay in page load drops mobile conversions by 7%. We handcraft clean, bloat-free code with zero unnecessary plugins to guarantee industry-leading Google Lighthouse and Core Web Vitals scores.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Sub-Second Fast Loading Guaranteed</span>
            </div>
          </div>

          {/* Card 03 */}
          <div className="rounded-[28px] p-7 sm:p-9 bg-white border border-purple-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 relative group hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-5xl font-black text-[#7C3AED] font-mono tracking-tighter">03</span>
                <span className="text-3xl select-none group-hover:scale-110 transition-transform">🤝</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 leading-snug">
                Fixed Pricing Sprints &amp; 30-Day Launch Warranty.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                No surprise hourly invoices. No disappearing developers once the site is published. We deliver on time with guaranteed milestones and 30 full days of post-launch maintenance, bug fixes, and analytics checks included.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>100% On-Time Delivery Guarantee</span>
            </div>
          </div>
        </div>

        {/* Bottom Trust Badge Banner */}
        <div className="relative z-10 mt-12 pt-8 border-t border-purple-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
            <span className="text-amber-500 font-extrabold">★★★★★</span>
            <span>Rated 4.9/5 on Clutch across 120+ enterprise reviews</span>
          </div>
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-purple-700 hover:text-purple-900 hover:underline"
          >
            <span>Read All Client Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
