"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Sparkles,
  ShieldCheck,
  Globe,
  ArrowUpRight,
} from "lucide-react";

export default function Home10_Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#0F0F0F] text-[#FFFFFF] border-t border-[#FFFFFF]/10 relative overflow-hidden selection:bg-[#FC5001] selection:text-[#FFFFFF]">
      {/* Ambient Top Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(252,80,1,0.12) 0%, transparent 70%)",
        }}
      />

      {/* ── TOP PRE-FOOTER CALLOUT BANNER ── */}
      <div className="border-b border-[#FFFFFF]/10 relative z-10">
        <div className="max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-16">
          <div className="rounded-3xl bg-[#0F0F0F] border border-[#FFFFFF]/15 p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            {/* Subtle radial accent in banner */}
            <div
              className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(252,80,1,0.16) 0%, transparent 65%)",
              }}
            />

            <div className="space-y-3 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 text-xs font-semibold text-[#FC5001]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Accepting New Client Projects for Q2 &amp; Q3</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-[#FFFFFF] leading-tight">
                Ready to build an extraordinary Squarespace website?
              </h3>
              <p className="text-sm sm:text-base text-[#FFFFFF]/70 leading-relaxed font-normal">
                We partner with ambitious founders, high-ticket service firms, and luxury brands worldwide. Tell us about your goals and get a roadmap in 24 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 relative z-10 shrink-0">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#FC5001] hover:opacity-90 text-[#FFFFFF] text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <span>Start Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/templates"
                className="px-7 py-4 rounded-full bg-[#FFFFFF]/5 hover:bg-[#FFFFFF]/10 border border-[#FFFFFF]/15 text-[#FFFFFF] text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all"
              >
                <span>Browse Templates</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN 5-COLUMN NAVIGATION ── */}
      <div className="max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#FFFFFF]/10">
          {/* Col 1: Brand & Platinum Partner Badge (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="w-8 h-8 rounded-full bg-[#FC5001] flex items-center justify-center shadow-md">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 7L7 13L1 7L7 1Z" fill="#FFFFFF" strokeWidth="0" />
                </svg>
              </span>
              <span className="text-xl font-black tracking-tight text-[#FFFFFF] group-hover:text-[#FC5001] transition-colors">
                Looksbay
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#FFFFFF]/70 leading-relaxed max-w-sm">
              Looksbay is an authorized Squarespace Circle Platinum Partner studio. We engineer bespoke Fluid Engine 7.1 websites, sell premium designer templates, and execute high-converting digital transformations.
            </p>

            {/* Circle Platinum Badge */}
            <div className="p-4 rounded-2xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 space-y-2 max-w-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FFFFFF]">
                <ShieldCheck className="w-4 h-4 text-[#FC5001]" />
                <span>Circle Platinum Partner Perk</span>
              </div>
              <p className="text-[11px] text-[#FFFFFF]/60 leading-normal">
                Every client receives 20% off annual Squarespace hosting plus an extended 6-month free trial period.
              </p>
            </div>

            {/* Direct Contact Email */}
            <div className="pt-1">
              <a
                href="mailto:contact@looksbay.com"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FC5001] hover:text-[#FFFFFF] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>contact@looksbay.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Designer Templates (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#FC5001]">
              Templates
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FFFFFF]/70">
              <li>
                <Link href="/templates" className="hover:text-[#FC5001] transition-colors">
                  All 7.1 Templates
                </Link>
              </li>
              <li>
                <Link href="/templates/robins" className="hover:text-[#FC5001] transition-colors">
                  Robins &amp; Co.
                </Link>
              </li>
              <li>
                <Link href="/templates/hannah-lorre" className="hover:text-[#FC5001] transition-colors">
                  Hannah Lorre
                </Link>
              </li>
              <li>
                <Link href="/templates/genevieve-studio" className="hover:text-[#FC5001] transition-colors">
                  Genevieve Studio
                </Link>
              </li>
              <li>
                <Link href="/templates/sonora-collective" className="hover:text-[#FC5001] transition-colors">
                  Sonora Collective
                </Link>
              </li>
              <li>
                <Link href="/templates/vogue-storyteller" className="hover:text-[#FC5001] transition-colors">
                  Vogue Storyteller
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Custom Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#FC5001]">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FFFFFF]/70">
              <li>
                <Link href="/services" className="hover:text-[#FC5001] transition-colors">
                  Hire Squarespace Expert
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FC5001] transition-colors">
                  Bespoke 7.1 Web Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FC5001] transition-colors">
                  7-Day Fast Track Setup
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FC5001] transition-colors">
                  WordPress &amp; Wix Migration
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FC5001] transition-colors">
                  Bug Fixes &amp; Custom CSS
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FC5001] transition-colors">
                  SEO &amp; Speed Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#FC5001]">
              Studio
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FFFFFF]/70">
              <li>
                <Link href="/portfolio" className="hover:text-[#FC5001] transition-colors">
                  Selected Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FC5001] transition-colors">
                  About Looksbay
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-[#FC5001] transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#FC5001] transition-colors">
                  Client Praise
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#FC5001] transition-colors">
                  Studio Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FC5001] transition-colors">
                  Book A Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter & Updates (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#FC5001]">
              Studio Insider
            </h4>
            <p className="text-xs text-[#FFFFFF]/70 leading-relaxed">
              Get monthly Squarespace releases, custom CSS tricks, and template drop previews.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 text-[#FFFFFF] text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FC5001] shrink-0" />
                <span>Subscribed! Check inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-xs text-[#FFFFFF] placeholder:text-[#FFFFFF]/40 focus:outline-none focus:border-[#FC5001] transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#FC5001] hover:opacity-90 text-[#FFFFFF] text-[10px] font-bold flex items-center justify-center transition-opacity"
                  >
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-[10px] text-[#FFFFFF]/50">Zero spam. Unsubscribe anytime.</p>
              </form>
            )}

            {/* Live Availability Pill */}
            <div className="pt-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FC5001] animate-pulse" />
              <span className="text-[11px] font-semibold text-[#FFFFFF]/80">
                Studio Status: Sprints Open
              </span>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR: COPYRIGHT & SOCIAL CHANNELS ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#FFFFFF]/60">
          <p>
            &copy; {new Date().getFullYear()} Looksbay Studio. Authorized Squarespace Circle Platinum Partner. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FC5001] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FC5001] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FC5001] transition-colors"
            >
              X (Twitter)
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FC5001] transition-colors"
            >
              Dribbble
            </a>
            <Link href="/terms" className="hover:text-[#FC5001] transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-[#FC5001] transition-colors">
              Privacy
            </Link>
            <Link href="/refund-policy" className="hover:text-[#FC5001] transition-colors">
              Refund Policy
            </Link>
            <Link href="/contact" className="hover:text-[#FC5001] transition-colors font-bold text-[#FFFFFF]">
              Contact Studio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
