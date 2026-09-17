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
    <footer className="bg-[#0A0A0B] text-white border-t border-[#1F1F23] relative overflow-hidden selection:bg-[#F4511E] selection:text-white">
      {/* Ambient Top Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(244,81,30,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ── TOP PRE-FOOTER CALLOUT BANNER ── */}
      <div className="border-b border-[#1A1A1E] relative z-10">
        <div className="max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-16">
          <div className="rounded-3xl bg-gradient-to-r from-[#141416] via-[#17171A] to-[#141416] border border-[#26262B] p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            {/* Subtle radial accent in banner */}
            <div
              className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(244,81,30,0.14) 0%, transparent 65%)",
              }}
            />

            <div className="space-y-3 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#F4511E]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Accepting New Client Projects for Q2 &amp; Q3</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Ready to build an extraordinary Squarespace website?
              </h3>
              <p className="text-sm sm:text-base text-[#999999] leading-relaxed font-normal">
                We partner with ambitious founders, high-ticket service firms, and luxury brands worldwide. Tell us about your goals and get a roadmap in 24 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 relative z-10 shrink-0">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#F4511E] hover:bg-[#D83A07] text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                <span>Start Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/templates"
                className="px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all"
              >
                <span>Browse Templates</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN 5-COLUMN NAVIGATION ── */}
      <div className="max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#1A1A1E]">
          {/* Col 1: Brand & Platinum Partner Badge (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="w-8 h-8 rounded-full bg-[#F4511E] flex items-center justify-center shadow-md">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 7L7 13L1 7L7 1Z" fill="white" strokeWidth="0" />
                </svg>
              </span>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#F4511E] transition-colors">
                Looksbay
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed max-w-sm">
              Looksbay is an authorized Squarespace Circle Platinum Partner studio. We engineer bespoke Fluid Engine 7.1 websites, sell premium designer templates, and execute high-converting digital transformations.
            </p>

            {/* Circle Platinum Badge */}
            <div className="p-4 rounded-2xl bg-[#141416] border border-[#242428] space-y-2 max-w-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-[#F4511E]" />
                <span>Circle Platinum Partner Perk</span>
              </div>
              <p className="text-[11px] text-[#7E7E84] leading-normal">
                Every client receives 20% off annual Squarespace hosting plus an extended 6-month free trial period.
              </p>
            </div>

            {/* Direct Contact Email */}
            <div className="pt-1">
              <a
                href="mailto:contact@looksbay.com"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#F4511E] hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>contact@looksbay.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Designer Templates (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#F4511E]">
              Templates
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E8E93]">
              <li>
                <Link href="/templates" className="hover:text-white transition-colors">
                  All 7.1 Templates
                </Link>
              </li>
              <li>
                <Link href="/templates/robins" className="hover:text-white transition-colors">
                  Robins &amp; Co. (Consultancy)
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-white transition-colors">
                  Lumina (Creative Studio)
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-white transition-colors">
                  Atelier (Architecture)
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-white transition-colors">
                  Solstice (eCommerce)
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-white transition-colors">
                  Forma (Editorial)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Custom Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#F4511E]">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E8E93]">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Bespoke Squarespace 7.1
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  7-Day Fast Track Launch
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  WordPress &amp; Wix Migration
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Squarespace Commerce &amp; Acuity
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Technical SEO &amp; Speed Audit
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  VIP Day Intensive
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#F4511E]">
              Studio
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E8E93]">
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Selected Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About LooksBay
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-white transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Client Praise
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Studio Insights &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Book A Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter & Updates (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#F4511E]">
              Studio Insider
            </h4>
            <p className="text-xs text-[#8E8E93] leading-relaxed">
              Get monthly Squarespace releases, custom CSS tricks, and template drop previews.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141416] border border-[#2A2A2E] text-xs text-white placeholder:text-[#666666] focus:outline-none focus:border-[#F4511E] transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#F4511E] hover:bg-[#D83A07] text-white text-[10px] font-bold flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-[10px] text-[#555555]">Zero spam. Unsubscribe anytime.</p>
              </form>
            )}

            {/* Live Availability Pill */}
            <div className="pt-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-semibold text-zinc-300">
                Studio Status: Sprints Open
              </span>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR: COPYRIGHT & SOCIAL CHANNELS ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#71717A]">
          <p>
            &copy; {new Date().getFullYear()} Looksbay Studio. Authorized Squarespace Circle Platinum Partner. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              X (Twitter)
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Dribbble
            </a>
            <Link href="/contact" className="hover:text-[#F4511E] transition-colors font-semibold">
              Contact Studio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
