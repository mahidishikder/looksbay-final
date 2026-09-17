"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ShowcaseCardData {
  id: string;
  title: string;
  link: string;
  centerScreen: {
    title: string;
    subtitle?: string;
    image: string;
    badge?: string;
  };
  sideScreens: {
    farLeft: string;
    midLeft: string;
    midRight: string;
    farRight: string;
  };
  brands: {
    name: string;
    logoType: "chevrolet" | "kia" | "geely" | "cofinity" | "prosperity" | "remax" | "fairway" | "compass" | "allur" | "wowmi" | "bridal" | "indrive" | "globalleaders" | "solana";
  }[];
}

const industryCards: ShowcaseCardData[] = [
  {
    id: "automotive",
    title: "Automotive & Mobility",
    link: "/services/automotive",
    centerScreen: {
      title: "Cofinity-X Mobility",
      subtitle: "Unleash the potential of Data-X",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&auto=format&fit=crop&q=80",
      badge: "Mobility Platform",
    },
    sideScreens: {
      farLeft: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop&q=80",
      midLeft: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80",
      midRight: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=600&auto=format&fit=crop&q=80",
      farRight: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&auto=format&fit=crop&q=80",
    },
    brands: [
      { name: "Chevrolet", logoType: "chevrolet" },
      { name: "KIA", logoType: "kia" },
      { name: "GEELY", logoType: "geely" },
      { name: "Cofinity-X", logoType: "cofinity" },
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate & Finance",
    link: "/services/real-estate",
    centerScreen: {
      title: "UNDIVIDED",
      subtitle: "For discerning clients, investors, and professionals",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80",
      badge: "Real Estate Portal",
    },
    sideScreens: {
      farLeft: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80",
      midLeft: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=80",
      midRight: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=80",
      farRight: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format&fit=crop&q=80",
    },
    brands: [
      { name: "Prosperity Home Mortgage", logoType: "prosperity" },
      { name: "RE/MAX", logoType: "remax" },
      { name: "FAIRWAY", logoType: "fairway" },
      { name: "COMPASS", logoType: "compass" },
    ],
  },
  {
    id: "web-platforms",
    title: "Web Platforms & Products",
    link: "/services/web-platforms-services",
    centerScreen: {
      title: "Your Local Vendor",
      subtitle: "Curated directory & discovery platform",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80",
      badge: "Marketplace SaaS",
    },
    sideScreens: {
      farLeft: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
      midLeft: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
      midRight: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80",
      farRight: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
    },
    brands: [
      { name: "allur", logoType: "allur" },
      { name: "WOWMÍ", logoType: "wowmi" },
      { name: "BRIDAL PLATFORM", logoType: "bridal" },
    ],
  },
  {
    id: "award-winning",
    title: "Award-Winning Websites",
    link: "/services/award-winning-websites",
    centerScreen: {
      title: "Early Fire Detection Sensor",
      subtitle: "Autonomous IoT wildfire defense network",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
      badge: "Site of the Day",
    },
    sideScreens: {
      farLeft: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
      midLeft: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
      midRight: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80",
      farRight: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&auto=format&fit=crop&q=80",
    },
    brands: [
      { name: "inDrive", logoType: "indrive" },
      { name: "Global Leaders", logoType: "globalleaders" },
      { name: "SOLANA PAYOUTS", logoType: "solana" },
    ],
  },
];

/* Brand Logo Renderer Component */
function BrandLogo({ type, name }: { type: string; name: string }) {
  switch (type) {
    case "chevrolet":
      return (
        <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
          <svg viewBox="0 0 60 20" className="h-4 w-auto fill-slate-700">
            <path d="M10 5h40l-3 10H7z" opacity="0.4" />
            <path d="M22 2h16l-1 16H21z" />
          </svg>
          <span className="text-[11px] font-black tracking-widest text-slate-800 uppercase hidden sm:inline">CHEVROLET</span>
        </div>
      );
    case "kia":
      return (
        <div className="opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-sm font-black tracking-tighter text-slate-800 font-mono">K I A</span>
        </div>
      );
    case "geely":
      return (
        <div className="flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
          <div className="w-4 h-3.5 border-2 border-slate-700 rounded-xs flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-slate-700" />
          </div>
          <span className="text-[11px] font-black tracking-wider text-slate-800 uppercase">GEELY</span>
        </div>
      );
    case "cofinity":
      return (
        <div className="opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-xs font-black tracking-tight text-slate-800">Cofinity-X</span>
        </div>
      );
    case "prosperity":
      return (
        <div className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-700 fill-none stroke-current stroke-2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          <div className="text-left leading-tight">
            <div className="text-[10px] font-black text-slate-800 tracking-tight">Prosperity</div>
            <div className="text-[7px] font-bold text-slate-500 uppercase">Home Mortgage</div>
          </div>
        </div>
      );
    case "remax":
      return (
        <div className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-xs font-black text-slate-800 tracking-tight">RE/MAX</span>
          <span className="text-[9px] font-bold text-slate-400">®</span>
        </div>
      );
    case "fairway":
      return (
        <div className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-slate-700 fill-current">
            <path d="M12 2L2 22h20L12 2zm0 5l5.5 11h-11L12 7z" />
          </svg>
          <span className="text-[10px] font-black tracking-widest text-slate-800 uppercase">FAIRWAY</span>
        </div>
      );
    case "compass":
      return (
        <div className="opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[11px] font-black tracking-widest text-slate-800 uppercase">COMPASS</span>
        </div>
      );
    case "allur":
      return (
        <div className="opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-base font-black tracking-tight text-slate-800 lowercase">allur</span>
        </div>
      );
    case "wowmi":
      return (
        <div className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
          <span className="w-4 h-4 rounded-xs bg-slate-800 text-white text-[9px] font-black flex items-center justify-center">W</span>
          <span className="text-xs font-black tracking-wider text-slate-800">WOWMÍ</span>
        </div>
      );
    case "bridal":
      return (
        <div className="opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-extrabold tracking-[0.2em] text-slate-800 uppercase">BRIDAL PLATFORM</span>
        </div>
      );
    case "indrive":
      return (
        <div className="flex items-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity">
          <span className="w-4 h-4 rounded-full bg-slate-800 text-white text-[9px] font-black flex items-center justify-center">iD</span>
          <span className="text-xs font-black tracking-tight text-slate-800">inDrive</span>
        </div>
      );
    case "globalleaders":
      return (
        <div className="opacity-70 hover:opacity-100 transition-opacity font-serif italic">
          <span className="text-xs font-bold text-slate-800 tracking-normal">Global Leaders</span>
        </div>
      );
    case "solana":
      return (
        <div className="opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[9px] font-mono font-bold tracking-widest text-slate-700 uppercase">SOLANA PAYOUTS</span>
        </div>
      );
    default:
      return <span className="text-xs font-bold text-slate-700">{name}</span>;
  }
}

export default function ClientIndustryGrid() {
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger fan-out expansion as soon as section is ~15% in view
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-white overflow-hidden"
    >
      {/* ── Ambient Decorative Scattered Dots ── */}
      <div className="absolute top-12 left-10 w-2.5 h-2.5 rounded-full bg-[#9D5CFF] opacity-50 blur-[0.5px]" />
      <div className="absolute top-1/3 left-6 w-3 h-3 rounded-full bg-[#C4A0FF] opacity-60" />
      <div className="absolute top-1/2 left-14 w-2 h-2 rounded-full bg-[#9D5CFF] opacity-40" />
      <div className="absolute bottom-20 left-8 w-3.5 h-3.5 rounded-full bg-[#7C3AED] opacity-50" />

      <div className="absolute top-20 right-16 w-2.5 h-2.5 rounded-full bg-[#9D5CFF] opacity-50" />
      <div className="absolute top-1/2 right-10 w-2.5 h-2.5 rounded-full bg-[#C4A0FF] opacity-60" />
      <div className="absolute bottom-28 right-14 w-2 h-2 rounded-full bg-[#9D5CFF] opacity-40" />

      <div className="max-w-[1400px] mx-auto space-y-16 relative z-10">

        {/* ══════════════════════════════════════════════════════════
            HEADER: FROM AMBITIOUS STARTUPS TO ESTABLISHED B2B
        ══════════════════════════════════════════════════════════ */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Purple Dot Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8E4F2] shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9D5CFF]" />
            <span className="text-xs font-bold text-slate-700 tracking-normal">
              Since 2020: 700+ projects shipped
            </span>
          </div>

          {/* Main Two-Tone Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-[1.12]">
            From ambitious startups <br />
            <span className="text-[#9D5CFF]">to established B2B companies</span>
          </h2>
        </div>

        {/* ══════════════════════════════════════════════════════════
            2x2 GRID OF FANNED SHOWCASE CARDS
        ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {industryCards.map((card) => (
            <div
              key={card.id}
              className="group relative rounded-[28px] sm:rounded-[34px] bg-white border border-[#E8E4F2] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_rgba(157,92,255,0.12)] hover:border-[#C4A0FF] transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle Dot Grid Background Pattern on Card */}
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-60" />

              {/* Card Top: Title & Explore Work Pill */}
              <div className="relative z-10 pt-8 sm:pt-10 px-6 text-center space-y-3">
                <h3 className="text-2xl sm:text-[28px] font-black tracking-tight text-slate-900">
                  {card.title}
                </h3>

                {/* Explore Work Pill Button */}
                <div className="flex justify-center">
                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1 rounded-full bg-[#F3ECFE] hover:bg-[#EDE4FD] text-[#6B21D0] text-xs font-bold transition-all duration-300 group-hover:scale-105"
                  >
                    <span>Explore work</span>
                    <span className="w-5 h-5 rounded-full bg-[#9D5CFF] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* ────────────────────────────────────────────────────────
                  Card Middle: FANNED MULTI-PAGE SCREEN STACK
                  Tall vertical website screenshots that fan out gracefully!
              ──────────────────────────────────────────────────────── */}
              <div className="relative z-10 h-[340px] sm:h-[420px] md:h-[460px] flex items-end justify-center px-2 sm:px-4 pt-2 overflow-hidden">
                <div className="relative w-full max-w-[500px] h-full flex items-end justify-center">

                  {/* 1. Far Left Screen (Layer 1, Z-10) — Tall Page Screenshot */}
                  <div
                    className={`absolute bottom-0 w-[160px] sm:w-[200px] md:w-[220px] h-[270px] sm:h-[340px] md:h-[380px] rounded-t-2xl rounded-b-lg overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.22)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 origin-bottom ${
                      isRevealed
                        ? "-translate-x-26 sm:-translate-x-36 md:-translate-x-44 -rotate-[14deg] scale-[0.84] opacity-90 group-hover:-translate-x-28 sm:group-hover:-translate-x-40 md:group-hover:-translate-x-48 group-hover:-rotate-[17deg]"
                        : "translate-x-0 rotate-0 scale-95 opacity-0"
                    }`}
                  >
                    {/* Browser Chrome Header */}
                    <div className="h-4 bg-slate-100 border-b border-slate-200 px-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    </div>
                    <div className="relative w-full h-[calc(100%-16px)] overflow-hidden bg-slate-950">
                      <img loading="lazy" decoding="async"
                        src={card.sideScreens.farLeft}
                        alt={`${card.title} Full Page 1`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* 2. Mid Left Screen (Layer 2, Z-20) — Tall Page Screenshot */}
                  <div
                    className={`absolute bottom-0 w-[175px] sm:w-[220px] md:w-[245px] h-[290px] sm:h-[365px] md:h-[405px] rounded-t-2xl rounded-b-lg overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 origin-bottom ${
                      isRevealed
                        ? "-translate-x-13 sm:-translate-x-18 md:-translate-x-22 -rotate-[7deg] scale-[0.92] opacity-95 group-hover:-translate-x-15 sm:group-hover:-translate-x-20 md:group-hover:-translate-x-25 group-hover:-rotate-[9deg]"
                        : "translate-x-0 rotate-0 scale-95 opacity-0"
                    }`}
                  >
                    <div className="h-4 bg-slate-100 border-b border-slate-200 px-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    </div>
                    <div className="relative w-full h-[calc(100%-16px)] overflow-hidden bg-slate-950">
                      <img loading="lazy" decoding="async"
                        src={card.sideScreens.midLeft}
                        alt={`${card.title} Full Page 2`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* 3. Mid Right Screen (Layer 2, Z-20) — Tall Page Screenshot */}
                  <div
                    className={`absolute bottom-0 w-[175px] sm:w-[220px] md:w-[245px] h-[290px] sm:h-[365px] md:h-[405px] rounded-t-2xl rounded-b-lg overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 origin-bottom ${
                      isRevealed
                        ? "translate-x-13 sm:translate-x-18 md:translate-x-22 rotate-[7deg] scale-[0.92] opacity-95 group-hover:translate-x-15 sm:group-hover:translate-x-20 md:group-hover:translate-x-25 group-hover:rotate-[9deg]"
                        : "translate-x-0 rotate-0 scale-95 opacity-0"
                    }`}
                  >
                    <div className="h-4 bg-slate-100 border-b border-slate-200 px-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    </div>
                    <div className="relative w-full h-[calc(100%-16px)] overflow-hidden bg-slate-950">
                      <img loading="lazy" decoding="async"
                        src={card.sideScreens.midRight}
                        alt={`${card.title} Full Page 3`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* 4. Far Right Screen (Layer 1, Z-10) — Tall Page Screenshot */}
                  <div
                    className={`absolute bottom-0 w-[160px] sm:w-[200px] md:w-[220px] h-[270px] sm:h-[340px] md:h-[380px] rounded-t-2xl rounded-b-lg overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.22)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 origin-bottom ${
                      isRevealed
                        ? "translate-x-26 sm:translate-x-36 md:translate-x-44 rotate-[14deg] scale-[0.84] opacity-90 group-hover:translate-x-28 sm:group-hover:translate-x-40 md:group-hover:translate-x-48 group-hover:rotate-[17deg]"
                        : "translate-x-0 rotate-0 scale-95 opacity-0"
                    }`}
                  >
                    <div className="h-4 bg-slate-100 border-b border-slate-200 px-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    </div>
                    <div className="relative w-full h-[calc(100%-16px)] overflow-hidden bg-slate-950">
                      <img loading="lazy" decoding="async"
                        src={card.sideScreens.farRight}
                        alt={`${card.title} Full Page 4`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* 5. Center Hero Screen (Always in Front, Z-30) — Full Desktop Webpage Mockup */}
                  <div className="relative bottom-0 w-[205px] sm:w-[255px] md:w-[280px] h-[315px] sm:h-[390px] md:h-[435px] rounded-t-2xl rounded-b-lg overflow-hidden bg-white border border-slate-200 shadow-[0_25px_60px_rgba(0,0,0,0.3)] z-30 transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1.5">
                    {/* Realistic Browser Bar with 3 Dots & Mini URL bar */}
                    <div className="h-5 sm:h-6 bg-slate-100/95 border-b border-slate-200/90 px-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-400/85" />
                        <span className="w-2 h-2 rounded-full bg-amber-400/85" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400/85" />
                      </div>
                      <div className="h-3 w-28 sm:w-36 bg-white/90 rounded-full border border-slate-200/80" />
                      <div className="w-2" />
                    </div>

                    {/* Main Long Webpage Screenshot Container */}
                    <div className="relative w-full h-[calc(100%-20px)] sm:h-[calc(100%-24px)] overflow-hidden bg-slate-950">
                      <img loading="lazy" decoding="async"
                        src={card.centerScreen.image}
                        alt={card.centerScreen.title}
                        className="w-full h-full object-cover object-top transition-transform duration-[6000ms] ease-linear group-hover:-translate-y-[15%]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent flex flex-col justify-end p-3 sm:p-4 text-white pointer-events-none">
                        <div className="text-[10px] font-black uppercase tracking-wider text-[#CCFF00]">
                          {card.centerScreen.badge}
                        </div>
                        <div className="text-xs sm:text-sm font-black leading-tight text-white line-clamp-1">
                          {card.centerScreen.title}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* ────────────────────────────────────────────────────────
                  Card Bottom: CLIENT / PARTNER LOGOS STRIP
              ──────────────────────────────────────────────────────── */}
              <div className="relative z-10 border-t border-slate-100 bg-white/95 px-5 sm:px-8 py-3.5 sm:py-4.5 flex items-center justify-between gap-3">
                {card.brands.map((brand, idx) => (
                  <BrandLogo key={idx} type={brand.logoType} name={brand.name} />
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
