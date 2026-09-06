"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectShowcaseCard from "./ProjectShowcaseCard";

/**
 * 🏠 Home Component 3: Project Showcase Section
 * Ultra-large height cards with custom pastel palettes, rich dot-grid texture,
 * prominent crisp-white hand-drawn vector doodles and 2-layered editorial web mockups.
 */
export default function Home3_ProjectShowcase() {
  return (
    <section id="showcase" className="py-[100px] px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto relative bg-white">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-12">
        <div>
          <span className="text-xs font-black uppercase tracking-widest text-[#7C3AED] mb-2.5 block">
            Flagship Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1E0D36] tracking-tight leading-tight">
            Handcrafted websites that <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#4F46E5] bg-clip-text text-transparent">
              print measurable results.
            </span>
          </h2>
        </div>

        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#1E0D36] text-white hover:bg-[#7C3AED] text-sm font-black transition-all shadow-md shrink-0 hover:scale-105 active:scale-95"
        >
          <span>View All 700+ Works</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Sticky Stacking Cards Deck Container */}
      <div className="relative">
        
        {/* ────────── CARD 1: INFACES (Vibrant Soft Lavender, Exact Screenshot Match) ────────── */}
        <ProjectShowcaseCard
          id="infaces"
          index={0}
          total={4}
          title="Infaces"
          country="Cyprus"
          dateRange="Dec 2024-Dec 2025"
          statusDotColor="#84cc16"
          ribbons={[
            { text: "VID", bg: "#F87171" },
            { text: "V", bg: "#FB7185" },
            { text: "S", bg: "#EA580C" },
            { text: "FWA", bg: "#EF4444" },
            { text: "W.", bg: "#E11D48" },
          ]}
          extraRibbonCount={4}
          description={
            <p>
              A storytelling platform that helped a 5,000+ employee global company{" "}
              <strong className="text-slate-900 font-bold">
                reconnect distributed teams
              </strong>{" "}
              and strengthen its shared culture.
            </p>
          }
          initialLikes={95}
          themeBg="#EADBFC"
          doodleType="rockon"
          frontCustomContent={
            <div className="w-full h-full bg-[#F4F1E9] p-5 sm:p-7 flex flex-col justify-between select-none overflow-hidden font-serif text-[#111111]">
              <div>
                {/* Micro Header */}
                <div className="flex items-center justify-between text-[8px] sm:text-[9px] uppercase tracking-widest text-zinc-500 pb-4 border-b border-black/10 font-mono">
                  <span>Editorial Issue 04</span>
                  <span>Infaces Collective</span>
                  <span>2025</span>
                </div>

                {/* Massive Infaces Headline */}
                <div className="pt-5 pb-3">
                  <h4 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#111111] leading-none" style={{ fontFamily: "Georgia, serif" }}>
                    infaces
                  </h4>
                </div>

                {/* Subtitle with Neon Yellow / Lime Marker Highlights */}
                <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wide leading-relaxed text-[#181818] pt-3 max-w-xs">
                  TOGETHER WITH OUR HEROES, WE REMEMBER THE HAPPY{" "}
                  <span className="bg-[#CCFF00] text-black px-1 py-0.2 rounded-xs font-black">
                    MOMENTS
                  </span>{" "}
                  OF OUR{" "}
                  <span className="bg-[#CCFF00] text-black px-1 py-0.2 rounded-xs font-black">
                    LIVES
                  </span>
                  ,{" "}
                  <span className="bg-[#CCFF00] text-black px-1 py-0.2 rounded-xs font-black">
                    LOVED ONES
                  </span>
                  , PLEASANT{" "}
                  <span className="bg-[#CCFF00] text-black px-1 py-0.2 rounded-xs font-black">
                    IMPRESSIONS
                  </span>
                  .
                </div>

                <p className="text-[8px] sm:text-[9px] text-zinc-600 leading-normal pt-2 max-w-[220px] font-sans">
                  These stories represent people and teams effectively crafting a positive collective environment.
                </p>
              </div>

              {/* Photo Grid at the Bottom */}
              <div className="grid grid-cols-4 gap-2 pt-4 border-t border-black/10">
                <div className="aspect-[3/4] rounded-md overflow-hidden bg-zinc-200">
                  <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80" alt="Infaces portrait 1" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="aspect-[3/4] rounded-md overflow-hidden bg-zinc-200">
                  <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&auto=format&fit=crop&q=80" alt="Infaces portrait 2" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] rounded-md overflow-hidden bg-zinc-200">
                  <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80" alt="Infaces portrait 3" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] rounded-md overflow-hidden bg-zinc-200">
                  <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80" alt="Infaces portrait 4" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          }
          backCustomContent={
            <div className="w-full h-full bg-[#FBF8F2] p-5 sm:p-7 flex flex-col justify-between select-none overflow-hidden font-serif text-[#181818]">
              <div>
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-wide leading-relaxed text-[#111111] max-w-xs">
                  BEING{" "}
                  <span className="bg-[#CCFF00] text-black px-1 py-0.2 rounded-xs font-black">
                    IN A TEAM
                  </span>
                  , AND INTERACTING WITH CORRECTLY, A PERSON IS ABLE TO ACHIEVE MORE{" "}
                  <span className="bg-[#CCFF00] text-black px-1 py-0.2 rounded-xs font-black">
                    THAN ALONE
                  </span>
                  . I REMAIN TRUE TO THE{" "}
                  <span className="bg-[#CCFF00] text-black px-1 py-0.2 rounded-xs font-black">
                    PRINCIPLES NOW
                  </span>
                </div>

                <div className="pt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl overflow-hidden aspect-[4/5] bg-zinc-200">
                    <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80" alt="Team member" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden aspect-[4/5] bg-zinc-200">
                    <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80" alt="Team member" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="pt-3 text-[9px] text-zinc-500 font-sans border-t border-black/10 flex items-center justify-between">
                <span>Infaces Archive #2025</span>
                <span>Global Culture Index</span>
              </div>
            </div>
          }
          liveUrl="/portfolio"
        />

        {/* ────────── CARD 2: GLOBAL LEATHERS (Warm Linen Sand) ────────── */}
        <ProjectShowcaseCard
          id="global-leathers"
          index={1}
          total={4}
          title="Global Leathers"
          country="USA"
          flag="🇺🇸"
          dateRange="Aug. - Oct. 2024"
          statusDotColor="#ef4444"
          ribbons={[
            { text: "FWA", bg: "#EF4444" },
            { text: "VID", bg: "#F87171" },
            { text: "W.", bg: "#EA580C" },
            { text: "S", bg: "#DC2626" },
          ]}
          extraRibbonCount={2}
          description={
            <p>
              A premium Webflow website that{" "}
              <strong className="text-slate-900 font-bold">
                strengthened the brand&apos;s online presence
              </strong>{" "}
              and gave the company a clearer foundation for lead generation.
            </p>
          }
          initialLikes={838}
          themeBg="#EFE5D7"
          doodleType="spiral"
          frontImage="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=900&auto=format&fit=crop&q=80"
          frontImageAlt="Global Leathers Restaurant & Design Vision"
          backImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&auto=format&fit=crop&q=80"
          backImageAlt="Global Leathers How We Work Process"
          liveUrl="/portfolio"
        />

        {/* ────────── CARD 3: SOLANA PAYOUTS (Ice Sky Blue) ────────── */}
        <ProjectShowcaseCard
          id="solana-payouts"
          index={2}
          total={4}
          title="Solana Payouts"
          country="Czech Republic"
          dateRange="May - July 2024"
          statusDotColor="#3b82f6"
          ribbons={[
            { text: "VID", bg: "#F87171" },
            { text: "V", bg: "#FB7185" },
            { text: "S", bg: "#EA580C" },
            { text: "W.", bg: "#EF4444" },
          ]}
          extraRibbonCount={3}
          description={
            <p>
              A high-converting Webflow launch site that helped Solana Payouts{" "}
              <strong className="text-slate-900 font-bold">
                attract 2,000+ leads in its first month
              </strong>{" "}
              through a Telegram-led campaign.
            </p>
          }
          initialLikes={620}
          themeBg="#DBEAFE"
          doodleType="heart"
          frontImage="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=900&auto=format&fit=crop&q=80"
          frontImageAlt="Solana Payouts Web3 Crypto Portal"
          backImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80"
          backImageAlt="Historical Performance Analytics"
          liveUrl="/portfolio"
        />

        {/* ────────── CARD 4: TORCHSENSORS (Warm Coral Peach + Lime Badge) ────────── */}
        <ProjectShowcaseCard
          id="torchsensors"
          index={3}
          total={4}
          title="TorchSensors"
          titleHighlight="true"
          country="USA"
          flag="🇺🇸"
          dateRange="Jan. 2023 - Ongoing"
          statusDotColor="#84cc16"
          ribbons={[
            { text: "FWA", bg: "#EF4444" },
            { text: "W.", bg: "#EA580C" },
            { text: "S", bg: "#DC2626" },
            { text: "VID", bg: "#F87171" },
            { text: "N", bg: "#E11D48" },
          ]}
          extraRibbonCount={6}
          description={
            <p>
              An award-winning launch website that helped a new wildfire detection product earn trust,{" "}
              <strong className="text-slate-900 font-bold">
                generate 30+ preorders on day one
              </strong>
              , and grow into a long-term digital platform.
            </p>
          }
          initialLikes={334}
          themeBg="#FDDED6"
          doodleType="loops"
          frontImage="https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&auto=format&fit=crop&q=80"
          frontImageAlt="Early Fire Detection Sensor"
          backImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&q=80"
          backImageAlt="Wildfire Risk Prevention Mapping"
          liveUrl="/portfolio"
        />

      </div>
    </section>
  );
}
