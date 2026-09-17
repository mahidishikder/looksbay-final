"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Trophy, Users, Zap, ShieldCheck, Clock, Award, ArrowRight, Star } from "lucide-react";

export default function WorkTabsSection() {
  const [activeTab, setActiveTab] = useState<"works" | "why" | "team">("works");

  return (
    <section className="py-20 border-t border-[#EAEAEA]">
      {/* 3-TAB SELECTOR BUTTONS */}
      <div className="flex justify-center items-center gap-4 sm:gap-8 mb-14 border-b border-[#EAEAEA] pb-4 max-w-xl mx-auto">
        <button
          onClick={() => setActiveTab("works")}
          className={`px-4 sm:px-6 py-2.5 text-base sm:text-xl font-bold transition-all relative ${
            activeTab === "works"
              ? "text-[#0D0D0D] after:absolute after:-bottom-4 after:left-0 after:right-0 after:h-1 after:bg-[#F4511E] after:rounded-full"
              : "text-[#888888] hover:text-[#0D0D0D]"
          }`}
        >
          Works
        </button>

        <button
          onClick={() => setActiveTab("why")}
          className={`px-4 sm:px-6 py-2.5 text-base sm:text-xl font-bold transition-all relative ${
            activeTab === "why"
              ? "text-[#0D0D0D] after:absolute after:-bottom-4 after:left-0 after:right-0 after:h-1 after:bg-[#F4511E] after:rounded-full"
              : "text-[#888888] hover:text-[#0D0D0D]"
          }`}
        >
          Why choose us
        </button>

        <button
          onClick={() => setActiveTab("team")}
          className={`px-4 sm:px-6 py-2.5 text-base sm:text-xl font-bold transition-all relative ${
            activeTab === "team"
              ? "text-[#0D0D0D] after:absolute after:-bottom-4 after:left-0 after:right-0 after:h-1 after:bg-[#F4511E] after:rounded-full"
              : "text-[#888888] hover:text-[#0D0D0D]"
          }`}
        >
          Our Team
        </button>
      </div>

      {/* TAB CONTENT PANELS */}
      <div className="max-w-5xl mx-auto">
        {/* TAB 1: WORKS HIGHLIGHTS */}
        {activeTab === "works" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { label: "Squarespace Builds Delivered", value: "700+", desc: "Across 48 countries", icon: Trophy },
                { label: "Client Satisfaction", value: "99.8%", desc: "Verified 5-star reviews", icon: Star },
                { label: "Client Revenue Generated", value: "$42M+", desc: "Tracked across e-commerce", icon: Zap },
                { label: "Average Page Speed", value: "0.6s", desc: "98+ Lighthouse scores", icon: Clock },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-xs text-center hover:border-[#F4511E] hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-[#FFF4F0] text-[#F4511E] mx-auto flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-[#0D0D0D] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#0D0D0D] mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-[#777777] mt-0.5">
                      {stat.desc}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#0D0D0D] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(244,81,30,0.2) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F4511E]">
                  Squarespace Circle Platinum Studio
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mt-1 text-white">
                  Ready to deploy your next high-converting website?
                </h3>
                <p className="text-sm text-[#AAAAAA] mt-2 max-w-xl font-normal">
                  Whether you need a custom Squarespace 7.1 build, a 7-day designer template customization, or a seamless WordPress migration, our squad delivers with speed and precision.
                </p>
              </div>
              <Link
                href="/contact"
                className="relative z-10 px-7 py-3.5 rounded-full bg-[#F4511E] hover:bg-[#D83A07] text-white text-xs sm:text-sm font-bold whitespace-nowrap shadow-lg inline-flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* TAB 2: WHY CHOOSE US */}
        {activeTab === "why" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {[
              {
                title: "100/100 Core Web Vitals Guaranteed",
                desc: "We don't use heavy pre-made themes or plugin bloat. Every asset, script, and font is hand-tuned for sub-second page loads that Google loves.",
                icon: Zap,
                badge: "Performance",
              },
              {
                title: "Conversion-First Architecture",
                desc: "Every layout, button placement, and visual hierarchy is engineered based on user testing data and real sales conversion funnels.",
                icon: Award,
                badge: "Revenue",
              },
              {
                title: "Zero In-House Technical Debt",
                desc: "Clean semantic markup, reusable sections, and full client Squarespace editing rights. You never need to hire a developer just to change a text block.",
                icon: ShieldCheck,
                badge: "Clean Code",
              },
              {
                title: "Lifetime Warranty & 30-Day Handholding",
                desc: "Every build comes with 30 days of comprehensive post-launch support, live training videos, and a 100% bug-free guarantee.",
                icon: CheckCircle2,
                badge: "Reliability",
              },
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white border border-[#E5E5E5] shadow-xs hover:border-[#F4511E] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-[#FFF4F0] text-[#F4511E] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F8F8F8] border border-[#EAEAEA] text-[#555555]">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 3: OUR TEAM */}
        {activeTab === "team" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Aria Sterling",
                  role: "Partner & Principal Squarespace Architect",
                  exp: "8+ Years · 700+ Websites",
                  specialty: "Fluid Engine 7.1, Squarespace Commerce, Custom CSS",
                  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
                },
                {
                  name: "Sabbir Ahmed",
                  role: "Head of CMS & Squarespace Engineering",
                  exp: "7+ Years · Migration Specialist",
                  specialty: "WordPress to Squarespace Migrations, Speed Optimization",
                  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
                },
                {
                  name: "Nafisa Rahman",
                  role: "Senior UI/UX & Conversion Designer",
                  exp: "6+ Years · Award Nominee",
                  specialty: "Figma Design Systems, Interactive Micro-interactions",
                  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
                },
              ].map((member, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-xs text-center flex flex-col items-center hover:border-[#F4511E] transition-all"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#F4511E]/30 p-0.5 shadow-sm">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-[#0D0D0D]">
                    {member.name}
                  </h4>
                  <div className="text-xs font-semibold text-[#F4511E] mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-[#777777] font-medium mt-1">
                    {member.exp}
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F0F0F0] text-xs text-[#555555] font-normal">
                    {member.specialty}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAEAEA] text-center max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#0D0D0D]">
                <Users className="w-4 h-4 text-[#F4511E]" />
                <span>Backed by 17 dedicated senior developers, QA engineers, and technical designers.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
