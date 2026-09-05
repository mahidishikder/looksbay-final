"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle, ArrowRight, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: "sprints" | "speed" | "pricing" | "all";
}

const faqs: FaqItem[] = [
  {
    category: "sprints",
    q: "How does LooksBay's 20-person in-house squad operate?",
    a: "Every single sprint is directly architected by our Lead Technical Architect with a dedicated 3-4 person production pod: 1 Senior Full-Stack CMS Engineer, 1 UI/UX Motion Specialist, 1 Technical SEO Auditor, and 1 QA Engineer. You receive direct Slack/WhatsApp channel access with zero account manager middlemen.",
  },
  {
    category: "speed",
    q: "Do you guarantee a 95+ Google PageSpeed score?",
    a: "Yes, unconditionally. Every website we build is rigorously tested on Google Lighthouse. We inline critical CSS, optimize WebP assets, implement dynamic caching, eliminate render-blocking scripts, and guarantee 95+ Core Web Vitals across mobile and desktop devices.",
  },
  {
    category: "sprints",
    q: "Which CMS platforms do you engineer on?",
    a: "We develop natively on Shopify Plus, Webflow, WordPress (ACF & Custom Gutenberg), Framer, GoHighLevel (GHL), Squarespace, Wix Studio, Showit, Kajabi, and custom headless Next.js architectures.",
  },
  {
    category: "sprints",
    q: "What is your typical project delivery timeline?",
    a: "Standard full custom CMS sprints are completed in 7–14 business days. Express 5-day sprints are available for urgent campaign or product launches with our 20-person dedicated team.",
  },
  {
    category: "pricing",
    q: "What is included in the 30-day post-launch warranty?",
    a: "30 days of complimentary code maintenance, Google Search Console indexing validation, schema structured data checks, analytics verification, and complete CMS video handoff training for your internal team.",
  },
  {
    category: "pricing",
    q: "How does payment and sprint milestones work?",
    a: "We work with fixed, milestone-based pricing with zero hidden fees. Typically 50% deposit upon kickoff and 50% upon final staging approval before production domain launch. You retain 100% IP ownership.",
  },
  {
    category: "speed",
    q: "Will we own the full source code and design files?",
    a: "Yes, 100%. Upon final project handover, we transfer complete GitHub repositories, Liquid/PHP code, Figma design systems, 3D assets, and licenses directly to your organization with zero recurring proprietary fees.",
  },
  {
    category: "sprints",
    q: "How do we collaborate day-to-day during the sprint?",
    a: "We operate completely asynchronously and transparently. We set up a private Slack or WhatsApp channel with your team, share live interactive staging URLs, and send Loom video walkthroughs for every completed milestone.",
  },
];

/**
 * 🏠 Home Component 8: FAQ Accordion Section
 * - Full 1440px wide single-column stack
 * - Large high-impact question typography (text-xl sm:text-2xl)
 * - Zero mention of personal names (agency-wide collective branding)
 * - Alternating pure white background (bg-white) and py-[100px] padding
 */
export default function Home8_FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredFaqs =
    activeFilter === "all" ? faqs : faqs.filter((f) => f.category === activeFilter);

  return (
    <section className="relative bg-white text-slate-900 py-[100px] px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-slate-100">
      {/* Background Dot Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.22) 1.2px, transparent 1.2px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Floating Animated Background Dots */}
      <div
        className="absolute top-12 left-10 w-3.5 h-3.5 rounded-full bg-purple-500/70 pointer-events-none animate-pulse"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-4 h-4 rounded-full bg-amber-400/80 pointer-events-none animate-bounce"
        style={{ animationDuration: "4.5s" }}
      />
      <div
        className="absolute top-1/2 right-12 w-3 h-3 rounded-full bg-emerald-400/70 pointer-events-none animate-ping"
        style={{ animationDuration: "4s" }}
      />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-purple-50 text-purple-900 border border-purple-200 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
            <span>Straight Answers · Zero BS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1E0D36] tracking-tight leading-[1.08]">
            Still have questions? <br />
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#2563EB] bg-clip-text text-transparent">
              Here are the straight facts.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our sprints, pricing, speed guarantees, and asynchronous collaboration.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: "all", label: "All Questions" },
              { id: "sprints", label: "Sprints & Delivery" },
              { id: "speed", label: "PageSpeed & Code" },
              { id: "pricing", label: "Pricing & Warranty" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id);
                  setOpenFaq(0);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${
                  activeFilter === tab.id
                    ? "bg-[#2E1065] text-white shadow-sm ring-1 ring-[#CCFF00]"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1-Column Sequential FAQ List across FULL 1440px width */}
        <div className="w-full space-y-4 mb-14">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-[28px] border transition-all duration-300 overflow-hidden bg-white ${
                  isOpen
                    ? "border-purple-400 shadow-lg ring-1 ring-purple-300 scale-[1.002]"
                    : "border-slate-200/90 hover:border-purple-200 shadow-xs hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-8 lg:p-9 text-left flex items-center justify-between gap-6 font-black text-lg sm:text-2xl text-[#1E0D36] group"
                >
                  <span className="group-hover:text-purple-700 transition-colors leading-snug">{faq.q}</span>
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-purple-600 text-white shadow-md" : "bg-purple-50 text-purple-900 border border-purple-200/70"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 sm:px-8 lg:px-9 pb-8 text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed border-t border-slate-100 pt-5 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp / Consultation Box across FULL 1440px width */}
        <div className="w-full p-8 sm:p-10 lg:p-12 rounded-[32px] bg-gradient-to-r from-purple-50 via-white to-purple-50 border border-purple-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md p-3">
              <MessageCircle className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-[#1E0D36]">Have a custom question or urgent campaign timeline?</h4>
              <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
                Speak directly with our Lead Engineering Squad on WhatsApp or email with a 2-hour response guarantee.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-[#2E1065] text-white text-sm sm:text-base font-black hover:bg-purple-900 transition-all inline-flex items-center gap-2.5 shrink-0 shadow-sm hover:scale-105 active:scale-95"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 text-[#CCFF00]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
