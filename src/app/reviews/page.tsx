"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  CheckCircle2,
  Trophy,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Quote,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import Footer from "@/components/layout/Footer";

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  flag: string;
  avatar: string;
  rating: number;
  date: string;
  platform: "Shopify Plus" | "Webflow" | "WordPress" | "Framer" | "Headless";
  metric: { value: string; label: string };
  title: string;
  review: string;
  verifiedOn: "Clutch.co" | "Fiverr Pro" | "Upwork Enterprise" | "Direct Client";
}

const allReviews: Review[] = [
  {
    id: "review-1",
    name: "Sophie Laurent",
    role: "Creative Director",
    company: "InFaces Collective",
    location: "Cyprus / France",
    flag: "🇨🇾",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    date: "January 2025",
    platform: "Webflow",
    metric: { value: "180k+", label: "Monthly Organic Traffic" },
    title: "Our bounce rate plunged by 48% within 30 days of launch.",
    review:
      "LooksBay Studio engineered an editorial masterpiece for Infaces. The custom Finsweet architecture, buttery 60fps spring animations, and flawless responsive layouts blew our board away. Our previous agency took 5 months and failed to finish; LooksBay shipped in under 18 days.",
    verifiedOn: "Clutch.co",
  },
  {
    id: "review-2",
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "Aura Horology NY",
    location: "New York, USA",
    flag: "🇺🇸",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    date: "November 2024",
    platform: "Shopify Plus",
    metric: { value: "+42%", label: "Mobile Checkout Bump" },
    title: "The 0.8s checkout upgrade drove our highest holiday revenue ever.",
    review:
      "We needed a bespoke Liquid 2.0 storefront with sub-second page speeds. LooksBay overhauled our entire catalog architecture, integrated instant 3D product previews, and eliminated code bloat. We achieved a 98/100 Google Lighthouse mobile score and our conversion rate jumped by 42%.",
    verifiedOn: "Clutch.co",
  },
  {
    id: "review-3",
    name: "Darius Vance",
    role: "VP of Product",
    company: "Apex Cloud Intelligence",
    location: "San Francisco, USA",
    flag: "🇺🇸",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    date: "December 2024",
    platform: "Framer",
    metric: { value: "1,200+", label: "Enterprise Demo Requests" },
    title: "Delivered in 14 days what our previous agency couldn't finish in 4 months.",
    review:
      "The LooksBay engineering pod is unparalleled. Direct Slack channel access with zero account managers in between allowed us to iterate at lightning speed. The interactive product visualizers and micro-interactions close demos effortlessly.",
    verifiedOn: "Direct Client",
  },
  {
    id: "review-4",
    name: "Elena Rostova",
    role: "Head of Marketing",
    company: "Solana Payouts Global",
    location: "Prague, Czech Republic",
    flag: "🇨🇿",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    date: "July 2024",
    platform: "Webflow",
    metric: { value: "2,000+", label: "Leads in Month One" },
    title: "High-converting launch site that surpassed all marketing forecasts.",
    review:
      "Working with LooksBay on our Webflow launch site was seamless. They executed our brand vision with stunning dark-mode aesthetics, custom GL shaders, and structured schema data that immediately indexed on Google. True craftsmen.",
    verifiedOn: "Clutch.co",
  },
  {
    id: "review-5",
    name: "Julian Thorne",
    role: "Managing Director",
    company: "Grand Lachine Luxury Estates",
    location: "Montreal, Canada",
    flag: "🇨🇦",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    date: "September 2024",
    platform: "WordPress",
    metric: { value: "$35M+", label: "Closed Real Estate Volume" },
    title: "0.6s page loads certified by Google Lighthouse with custom ACF.",
    review:
      "We refused to use bloated off-the-shelf themes. LooksBay handcrafted custom ACF Gutenberg components integrated directly with our MLS database. The speed is unbelievable and high-net-worth buyers frequently compliment the design.",
    verifiedOn: "Upwork Enterprise",
  },
  {
    id: "review-6",
    name: "Chloe Bennett",
    role: "Co-Founder",
    company: "TorchSensors IoT",
    location: "Austin, Texas, USA",
    flag: "🇺🇸",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    date: "February 2025",
    platform: "Webflow",
    metric: { value: "30+", label: "Pre-orders on Day One" },
    title: "Award-winning launch website that established immediate credibility.",
    review:
      "As a deep-tech IoT startup, earning enterprise trust on day one was crucial. LooksBay created an interactive 3D sensor simulation on Webflow that helped us secure 30+ enterprise pre-orders immediately after our launch press release.",
    verifiedOn: "Clutch.co",
  },
  {
    id: "review-7",
    name: "Alexander Becker",
    role: "Chief Technology Officer",
    company: "Oceanic Records Collective",
    location: "Berlin, Germany",
    flag: "🇩🇪",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    date: "October 2024",
    platform: "Headless",
    metric: { value: "$2.4M", label: "ARR Scaled Without Lag" },
    title: "60fps audio waveform visualizers with zero performance latency.",
    review:
      "LooksBay is simply in a different league when it comes to front-end performance. They wrote custom Next.js animations that maintain a locked 60 frames per second on both desktop and mobile devices. 10/10 recommend.",
    verifiedOn: "Fiverr Pro",
  },
  {
    id: "review-8",
    name: "Liam O'Connor",
    role: "VP of Operations",
    company: "Cofinity-X Automotive",
    location: "Dublin, Ireland",
    flag: "🇮🇪",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    date: "August 2024",
    platform: "WordPress",
    metric: { value: "100%", label: "On-Time Milestone Delivery" },
    title: "Disciplined sprints with zero surprises or hidden costs.",
    review:
      "Their 20-person squad structure guarantees that you never suffer through flaky freelancer excuses. Every milestone was delivered on time with comprehensive Loom video walkthroughs. Remarkable experience.",
    verifiedOn: "Clutch.co",
  },
];

export default function ReviewsPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("All");

  const filteredReviews = allReviews.filter((r) => {
    if (selectedPlatform === "All") return true;
    return r.platform === selectedPlatform;
  });

  return (
    <div className="relative min-h-screen bg-[#FAF8FF] text-slate-900 selection:bg-[#CCFF00] selection:text-black">
      {/* Background Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-[#7C3AED]/12 via-[#C084FC]/6 to-transparent rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-sky-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-24 relative z-10">
        
        {/* ── HERO SUMMARY SECTION ── */}
        <section className="hero-primary text-center max-w-4xl mx-auto space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black shadow-xs backdrop-blur-md">
            <Trophy className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span>Clutch 4.9 ★ · 52 Verified Enterprise Reviews · 99.8% CSAT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.04]">
            Don&apos;t take our word for it. <br />
            <span className="text-[#CCFF00]">
              Hear from our partners.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed font-medium">
            Over 320+ ambitious founders, marketing leads, and enterprise product directors have partnered with our 20-person squad to build high-converting flagship websites.
          </p>

          {/* Social Proof Stat Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto">
            <div className="glass-surface p-5 rounded-2xl bg-white border border-purple-100 shadow-xs text-center">
              <div className="text-3xl font-black text-[#1E0D36] flex items-center justify-center gap-1">
                <span>4.9</span>
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div className="text-xs font-bold text-slate-500 mt-1">Clutch Rating</div>
            </div>

            <div className="glass-surface p-5 rounded-2xl bg-white border border-purple-100 shadow-xs text-center">
              <div className="text-3xl font-black text-emerald-600">99.8%</div>
              <div className="text-xs font-bold text-slate-500 mt-1">Client Retention</div>
            </div>

            <div className="glass-surface p-5 rounded-2xl bg-white border border-purple-100 shadow-xs text-center">
              <div className="text-3xl font-black text-purple-700">700+</div>
              <div className="text-xs font-bold text-slate-500 mt-1">Global Builds</div>
            </div>

            <div className="glass-surface p-5 rounded-2xl bg-white border border-purple-100 shadow-xs text-center">
              <div className="text-3xl font-black text-blue-600">95+</div>
              <div className="text-xs font-bold text-slate-500 mt-1">PageSpeed Score</div>
            </div>
          </div>
        </section>

        {/* ── PLATFORM FILTER PILLS ── */}
        <section className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {["All", "Shopify Plus", "Webflow", "WordPress", "Framer", "Headless"].map((platform) => {
            const isActive = selectedPlatform === platform;
            const count =
              platform === "All"
                ? allReviews.length
                : allReviews.filter((r) => r.platform === platform).length;

            return (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center gap-2 ${
                  isActive
                    ? "bg-[#2E1065] text-white shadow-md scale-105 ring-2 ring-[#CCFF00]"
                    : "bg-white text-slate-700 hover:text-black hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <span>{platform}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                    isActive ? "bg-[#CCFF00] text-black font-black" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </section>

        {/* ── REVIEWS MASONRY GRID ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
                className="glass-surface rounded-[32px] bg-white border border-purple-100 p-8 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.10)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              style={{
                backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            >
              <div>
                {/* Review Header: User Profile + Verified Platform Badge */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <img loading="lazy" decoding="async"
                      src={item.avatar}
                      alt={item.name}
                      className="w-13 h-13 rounded-full object-cover border-2 border-purple-200 shadow-xs"
                    />
                    <div>
                      <h3 className="text-lg font-black text-slate-900 flex items-center gap-1.5">
                        <span>{item.name}</span>
                        <span>{item.flag}</span>
                      </h3>
                      <div className="text-xs text-slate-500 font-medium">
                        {item.role} · <strong className="text-purple-900">{item.company}</strong>
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {item.location} · {item.date}
                      </div>
                    </div>
                  </div>

                  {/* Verified Clutch / Platform Pill */}
                  <div className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center gap-1 shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>{item.verifiedOn}</span>
                  </div>
                </div>

                {/* Stars Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-black text-slate-700 ml-2">5.0 / 5.0</span>
                </div>

                {/* Highlighted Quote Title */}
                <h4 className="text-lg sm:text-xl font-extrabold text-[#1E0D36] leading-snug mb-3">
                  &ldquo;{item.title}&rdquo;
                </h4>

                {/* Body Content */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {item.review}
                </p>
              </div>

              {/* Card Footer: Metrics Achieved & Platform */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-100">
                    <span className="text-xs font-black text-purple-900">{item.metric.value}</span>{" "}
                    <span className="text-[11px] font-semibold text-purple-700">{item.metric.label}</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-slate-900 text-white">
                  {item.platform}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* ── BOTTOM CONVERSION BANNER ── */}
        <section className="rounded-[36px] bg-gradient-to-r from-[#2E1065] via-[#4C1D95] to-[#1E0D36] p-10 sm:p-16 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#CCFF00]/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#CCFF00]/15 border border-[#CCFF00]/30 text-[#CCFF00] text-xs font-black uppercase tracking-wider">
              Ready to win big next?
            </span>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Let&apos;s build your next 5-star success story.
            </h2>

            <p className="text-sm sm:text-base text-purple-100 leading-relaxed font-normal">
              Direct access to our senior CMS engineering pod and principal architects. Guaranteed 95+ PageSpeed score and 30-day post-launch warranty.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-neon-lime px-8 py-4 rounded-full text-xs sm:text-sm font-black inline-flex items-center gap-2 shadow-xl"
              >
                <span>Start Your Project Sprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur-md transition-all inline-flex items-center gap-2"
              >
                <span>Explore Selected Works</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
