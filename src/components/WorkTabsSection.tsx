"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Trophy, Users, Zap, ShieldCheck, Clock, Award, ArrowRight, Star, Sparkles } from "lucide-react";

export default function WorkTabsSection() {
  const [activeTab, setActiveTab] = useState<"works" | "why" | "team">("works");

  return (
    <section className="py-16 border-t border-purple-100">
      
      {/* 3-TAB SELECTOR BUTTONS (Styled like reference screenshot) */}
      <div className="flex justify-center items-center gap-2 sm:gap-6 mb-12 border-b border-slate-200/80 pb-4 max-w-xl mx-auto">
        <button
          onClick={() => setActiveTab("works")}
          className={`px-4 sm:px-6 py-2.5 text-base sm:text-2xl font-black transition-all relative ${
            activeTab === "works"
              ? "text-slate-900 after:absolute after:-bottom-4 after:left-0 after:right-0 after:h-1 after:bg-[#7C3AED] after:rounded-full"
              : "text-slate-400 hover:text-slate-700"
          }`}
        >
          Works
        </button>

        <button
          onClick={() => setActiveTab("why")}
          className={`px-4 sm:px-6 py-2.5 text-base sm:text-2xl font-black transition-all relative ${
            activeTab === "why"
              ? "text-slate-900 after:absolute after:-bottom-4 after:left-0 after:right-0 after:h-1 after:bg-[#7C3AED] after:rounded-full"
              : "text-slate-400 hover:text-slate-700"
          }`}
        >
          Why choose us
        </button>

        <button
          onClick={() => setActiveTab("team")}
          className={`px-4 sm:px-6 py-2.5 text-base sm:text-2xl font-black transition-all relative ${
            activeTab === "team"
              ? "text-slate-900 after:absolute after:-bottom-4 after:left-0 after:right-0 after:h-1 after:bg-[#7C3AED] after:rounded-full"
              : "text-slate-400 hover:text-slate-700"
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
                { label: "Global Websites Delivered", value: "700+", desc: "Across 48 countries", icon: Trophy },
                { label: "Client Satisfaction", value: "99.8%", desc: "Verified 5-star reviews", icon: Star },
                { label: "Client Revenue Generated", value: "$42M+", desc: "Tracked across e-commerce", icon: Zap },
                { label: "Average Page Speed", value: "0.6s", desc: "98+ Lighthouse scores", icon: Clock },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm text-center hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 mx-auto flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-purple-900 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {stat.desc}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-r from-[#2E1065] to-[#4C1D95] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#CCFF00]">
                  Full-Cycle Digital Agency
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mt-1">
                  Ready to deploy your next high-converting website?
                </h3>
                <p className="text-sm text-purple-200 mt-2 max-w-xl font-medium">
                  Whether you need custom Shopify Plus, Webflow Enterprise, WordPress headless, or high-velocity Framer landing pages, our squad delivers in 14 to 21 days.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-neon-lime px-6 py-3.5 rounded-full text-xs font-black whitespace-nowrap shadow-lg inline-flex items-center gap-2"
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
                desc: "Every layout, button placement, and visual hierarchy is engineered based on eye-tracking data and real sales conversion funnels.",
                icon: Award,
                badge: "Revenue",
              },
              {
                title: "Zero In-House Technical Debt",
                desc: "Clean semantic markup, reusable components, and full client CMS editing rights. You never need to hire a developer just to change a text block.",
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
                  className="p-8 rounded-3xl bg-white border border-purple-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-purple-100 text-purple-900">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
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
                  role: "Partner & Principal Technical Architect",
                  exp: "8+ Years · 700+ Websites",
                  specialty: "Shopify Plus, Webflow CMS, Enterprise Next.js",
                  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
                },
                {
                  name: "Sabbir Ahmed",
                  role: "Head of CMS & WordPress Engineering",
                  exp: "7+ Years · Headless Specialist",
                  specialty: "ACF Pro, Speed Optimization, Security Hardening",
                  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
                },
                {
                  name: "Nafisa Rahman",
                  role: "Senior UI/UX & Conversion Strategist",
                  exp: "6+ Years · Award Nominee",
                  specialty: "Figma Design Systems, 3D Web, Micro-interactions",
                  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
                },
              ].map((member, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm text-center flex flex-col items-center"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-purple-300 p-0.5 shadow-md">
                    <img loading="lazy" decoding="async"
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h4 className="text-lg font-black text-slate-900">
                    {member.name}
                  </h4>
                  <div className="text-xs font-bold text-purple-700 mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold mt-1">
                    {member.exp}
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
                    {member.specialty}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-purple-50 border border-purple-200 text-center max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-xs font-extrabold text-purple-900">
                <Users className="w-4 h-4 text-purple-600" />
                <span>Backed by 17 dedicated senior developers, QA engineers, and technical copywriters.</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
