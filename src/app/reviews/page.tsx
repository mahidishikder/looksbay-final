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
  ShieldCheck,
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
  platform: "Bespoke Squarespace" | "Template Customization" | "Squarespace Commerce" | "Platform Migration" | "VIP Day";
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
    platform: "Bespoke Squarespace",
    metric: { value: "180k+", label: "Monthly Organic Traffic" },
    title: "Our bounce rate plunged by 48% within 30 days of launch.",
    review:
      "LooksBay Studio engineered an editorial masterpiece for Infaces. The custom Fluid Engine architecture, buttery 60fps spring animations, and flawless responsive layouts blew our board away. Our previous agency took 5 months and failed to finish; LooksBay shipped in under 18 days.",
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
    platform: "Squarespace Commerce",
    metric: { value: "+42%", label: "Mobile Checkout Bump" },
    title: "The 0.8s checkout upgrade drove our highest holiday revenue ever.",
    review:
      "We needed a bespoke Squarespace Commerce storefront with sub-second page speeds. LooksBay overhauled our entire catalog architecture, integrated instant lookbooks, and eliminated code bloat. We achieved a 98/100 Google Lighthouse mobile score and our conversion rate jumped by 42%.",
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
    platform: "Template Customization",
    metric: { value: "1,200+", label: "Enterprise Demo Requests" },
    title: "Delivered in 7 days what our previous agency couldn't finish in 4 months.",
    review:
      "The LooksBay Squarespace engineering pod is unparalleled. We used their Solstice designer template and they customized every section, form, and brand font in under 7 business days. The interactive booking flow closes clients effortlessly.",
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
    platform: "Template Customization",
    metric: { value: "2,000+", label: "Leads in Month One" },
    title: "High-converting launch site that surpassed all marketing forecasts.",
    review:
      "Working with LooksBay on our Squarespace launch was seamless. They executed our brand vision with stunning aesthetics, custom CSS styling, and structured schema data that immediately indexed on Google. True craftsmen.",
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
    platform: "Platform Migration",
    metric: { value: "$35M+", label: "Closed Real Estate Volume" },
    title: "Migrated from WordPress with zero SEO loss and 0.6s page loads.",
    review:
      "We escaped our sluggish WordPress setup. LooksBay migrated our entire property portal to Squarespace 7.1 with complete 301 redirects and zero search rank loss. The speed is unbelievable and high-net-worth buyers frequently compliment the design.",
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
    platform: "Bespoke Squarespace",
    metric: { value: "30+", label: "Pre-orders on Day One" },
    title: "Award-winning Squarespace site that established immediate credibility.",
    review:
      "As a deep-tech IoT startup, earning enterprise trust on day one was crucial. LooksBay created an interactive product narrative on Squarespace Fluid Engine that helped us secure 30+ enterprise pre-orders immediately after our launch press release.",
    verifiedOn: "Clutch.co",
  },
  {
    id: "review-7",
    name: "Benjamin Carter",
    role: "Partner",
    company: "Carter & Wood Legal",
    location: "London, UK",
    flag: "🇬🇧",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    date: "October 2024",
    platform: "VIP Day",
    metric: { value: "24 Hours", label: "Turnaround Time" },
    title: "VIP Day sprint delivered full legal rebrand without a hitch.",
    review:
      "Their Squarespace VIP Day sprint delivered our entire campaign redesign in 24 hours with comprehensive Loom video walkthroughs and zero stress. Remarkable experience.",
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
    <div className="relative min-h-screen bg-white text-[#0D0D0D] selection:bg-[#F4511E] selection:text-white overflow-x-clip">
      {/* Background Ambient Warm Orange Glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle at top right, rgba(244,81,30,0.12) 0%, rgba(255,122,48,0.04) 40%, transparent 70%)",
        }}
      />
      {/* Vertical Stripe Texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #EAEAEA 0px, #EAEAEA 1px, transparent 1px, transparent 60px)",
          opacity: 0.35,
        }}
      />

      <div className="max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 sm:pt-36 pb-24 relative z-10">
        {/* ── HERO SUMMARY SECTION ── */}
        <section className="text-center max-w-4xl mx-auto space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D0D0D] bg-white text-[12px] font-semibold text-[#0D0D0D] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F4511E] animate-pulse" />
            <span>Squarespace Circle Platinum · 52 Verified Client Reviews · 99.8% CSAT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0D0D0D] tracking-tight leading-[1.06]">
            Don&apos;t take our word for it. <br />
            <span className="text-[#F4511E]">Hear from our partners.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed font-normal">
            Over 320+ ambitious founders, coaches, and boutique brands have partnered with Looksbay to build high-converting Squarespace websites.
          </p>

          {/* Social Proof Stat Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto">
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAEAEA] shadow-xs text-center">
              <div className="text-3xl font-black text-[#0D0D0D] flex items-center justify-center gap-1">
                <span>4.9</span>
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div className="text-xs font-bold text-[#777777] mt-1">Clutch Rating</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAEAEA] shadow-xs text-center">
              <div className="text-3xl font-black text-emerald-600">99.8%</div>
              <div className="text-xs font-bold text-[#777777] mt-1">Client Satisfaction</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAEAEA] shadow-xs text-center">
              <div className="text-3xl font-black text-[#F4511E]">700+</div>
              <div className="text-xs font-bold text-[#777777] mt-1">Squarespace Builds</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAEAEA] shadow-xs text-center">
              <div className="text-3xl font-black text-[#0D0D0D]">98+</div>
              <div className="text-xs font-bold text-[#777777] mt-1">PageSpeed Score</div>
            </div>
          </div>
        </section>

        {/* ── PLATFORM FILTER PILLS ── */}
        <section className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {["All", "Bespoke Squarespace", "Template Customization", "Squarespace Commerce", "Platform Migration", "VIP Day"].map((platform) => {
            const isActive = selectedPlatform === platform;
            const count =
              platform === "All"
                ? allReviews.length
                : allReviews.filter((r) => r.platform === platform).length;

            return (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center gap-2 ${
                  isActive
                    ? "bg-[#0D0D0D] text-white shadow-md scale-105"
                    : "bg-white text-[#555555] hover:text-[#0D0D0D] hover:border-[#0D0D0D] border border-[#E5E5E5]"
                }`}
              >
                <span>{platform}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                    isActive ? "bg-[#F4511E] text-white" : "bg-[#F0F0F0] text-[#666666]"
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
              className="rounded-[32px] bg-white border border-[#E5E5E5] p-8 sm:p-10 shadow-xs hover:shadow-[0_16px_40px_rgba(244,81,30,0.08)] hover:border-[#F4511E] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Review Header: User Profile + Verified Platform Badge */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={item.avatar}
                      alt={item.name}
                      className="w-13 h-13 rounded-full object-cover border-2 border-[#F4511E]/30 shadow-xs"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-[#0D0D0D] flex items-center gap-1.5">
                        <span>{item.name}</span>
                        <span>{item.flag}</span>
                      </h3>
                      <div className="text-xs text-[#666666] font-medium">
                        {item.role} · <strong className="text-[#0D0D0D]">{item.company}</strong>
                      </div>
                      <div className="text-[11px] text-[#888888] font-mono mt-0.5">
                        {item.location} · {item.date}
                      </div>
                    </div>
                  </div>

                  {/* Verified Pill */}
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
                  <span className="text-xs font-bold text-[#0D0D0D] ml-2">5.0 / 5.0</span>
                </div>

                {/* Highlighted Quote Title */}
                <h4 className="text-lg sm:text-xl font-bold text-[#0D0D0D] leading-snug mb-3 group-hover:text-[#F4511E] transition-colors">
                  &ldquo;{item.title}&rdquo;
                </h4>

                {/* Body Content */}
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal mb-6">
                  {item.review}
                </p>
              </div>

              {/* Card Footer: Metrics Achieved & Platform */}
              <div className="pt-4 border-t border-[#F0F0F0] flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-xl bg-[#FFF4F0] border border-[#F4511E]/20">
                    <span className="text-xs font-bold text-[#F4511E]">{item.metric.value}</span>{" "}
                    <span className="text-[11px] font-medium text-[#555555]">{item.metric.label}</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0D0D0D] text-white">
                  {item.platform}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* ── BOTTOM CONVERSION BANNER ── */}
        <section className="rounded-[36px] bg-[#0D0D0D] p-10 sm:p-16 text-white text-center shadow-2xl relative overflow-hidden border border-[#222222]">
          <div
            className="absolute top-0 right-0 w-80 h-80 pointer-events-none rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(244,81,30,0.2) 0%, transparent 70%)",
            }}
          />

          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#F4511E] text-xs font-bold uppercase tracking-wider">
              Ready to launch your vision?
            </span>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
              Let&apos;s build your next 5-star success story.
            </h2>

            <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed font-normal">
              Direct access to our senior Squarespace pod and principal architects. Guaranteed 95+ PageSpeed score and 30-day post-launch warranty.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#F4511E] hover:bg-[#D83A07] text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <span>Start Your Project Sprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-bold transition-all inline-flex items-center gap-2"
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
