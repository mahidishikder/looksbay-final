"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface Phase {
  id: string;
  step: string;
  title: string;
  timeline: string;
  tagline: string;
  description: string;
  image: string;
  deliverables: string[];
  highlights: { label: string; value: string }[];
  color: string;
}

const phases: Phase[] = [
  {
    id: "phase-1",
    step: "01",
    title: "Discovery & Strategic Blueprinting",
    timeline: "Days 1 — 4",
    tagline: "Uncovering your moat, auditing competitors, and building the conversion roadmap.",
    description:
      "We never begin with guesswork. Our strategic pod dives deep into your business model, target audience friction points, and competitor blindspots. We define precise user journeys, conversion funnels, and technical architecture before touching a single line of code.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80",
    deliverables: [
      "Competitive Landscape & Gap Audit",
      "Customer Persona & Journey Maps",
      "Information Architecture & Sitemap",
      "Fixed Milestone Sprint Timeline",
    ],
    highlights: [
      { label: "Sprint Focus", value: "Strategy & Scope" },
      { label: "Turnaround", value: "Within 96 Hours" },
      { label: "Client Involvement", value: "1 Discovery Session" },
    ],
    color: "#7C3AED",
  },
  {
    id: "phase-2",
    step: "02",
    title: "UX Wireframing & Structural Prototyping",
    timeline: "Days 5 — 9",
    tagline: "Engineering conversion-driven page layouts and intuitive user pathways.",
    description:
      "Form follows function. We build high-conviction, low-to-medium fidelity wireframes that map out content hierarchy, visual storytelling, and CTA placement. You get to interact with a clickable prototype so you can experience the exact flow before visual design begins.",
    image:
      "https://images.unsplash.com/photo-1581291518655-9523c932edcf?w=1200&auto=format&fit=crop&q=80",
    deliverables: [
      "Full Desktop & Mobile Wireframes",
      "Interactive Figma Clickable Prototype",
      "Content Matrix & Copy Hierarchy",
      "Conversion Funnel Logic Mapping",
    ],
    highlights: [
      { label: "Deliverable", value: "Clickable Figma" },
      { label: "Feedback Cycle", value: "Asynchronous Loom" },
      { label: "Validation", value: "UX Flow Approval" },
    ],
    color: "#2563EB",
  },
  {
    id: "phase-3",
    step: "03",
    title: "World-Class Visual UI & Motion Design",
    timeline: "Days 10 — 16",
    tagline: "Crafting bespoke aesthetics, fluid micro-interactions, and magnetic brand presence.",
    description:
      "This is where your brand leaves competitors behind. We create a high-fashion, award-winning visual language featuring custom typography, 3D elements, tailored micro-animations, and dynamic lighting. Every single screen is designed to evoke trust, prestige, and desire.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
    deliverables: [
      "Bespoke High-Fidelity UI Screens",
      "Fluid Motion & Interaction Specs",
      "Complete Design Token & Component System",
      "Responsive Breakpoint Layouts",
    ],
    highlights: [
      { label: "Aesthetic Level", value: "Awwwards Standard" },
      { label: "Revisions", value: "Included in Milestone" },
      { label: "Asset Format", value: "Figma + Lottie Specs" },
    ],
    color: "#DB2777",
  },
  {
    id: "phase-4",
    step: "04",
    title: "Production CMS Engineering & Speed Optimization",
    timeline: "Days 17 — 24",
    tagline: "Writing clean, semantic, bloat-free code that guarantees 95+ Google PageSpeed.",
    description:
      "Our senior full-stack CMS engineers take over. Whether building bespoke Liquid 2.0 on Shopify Plus, Finsweet Client-First standards on Webflow, or custom ACF Gutenberg on WordPress, we write lean, semantic code that loads instantly and ranks at the top of Google.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
    deliverables: [
      "Custom CMS Theme / Block Development",
      "Schema.org JSON-LD Structured Data",
      "Full Web Vitals 95+ Optimization",
      "Cross-Browser Mobile Stress Testing",
    ],
    highlights: [
      { label: "Performance", value: "95+ PageSpeed Guaranteed" },
      { label: "Code Quality", value: "Strict Clean Standards" },
      { label: "Integrations", value: "CRM, Pixel, GA4, Stripe" },
    ],
    color: "#059669",
  },
  {
    id: "phase-5",
    step: "05",
    title: "QA Testing, DNS Launch & 30-Day Hypercare",
    timeline: "Days 25 — 28+",
    tagline: "Zero-downtime DNS deployment, team onboarding, and post-launch bug warranty.",
    description:
      "Launch day is seamless and stress-free. We handle DNS cutovers, SSL provisioning, 301 redirect mapping, and Google Search Console index submissions. Afterward, we stay with you for 30 full days to ensure zero hiccups and provide recorded handover training for your team.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    deliverables: [
      "Zero-Downtime DNS Cutover Protocol",
      "Comprehensive 301 Redirect Mapping",
      "Google Search Console & Sitemap Index",
      "30 Days of Free Warranty & Support",
    ],
    highlights: [
      { label: "Downtime Risk", value: "0% Zero Downtime" },
      { label: "Support", value: "30 Days Included" },
      { label: "Training", value: "Tailored Loom Videos" },
    ],
    color: "#7C3AED",
  },
];

/**
 * ⚡ How We Work Component 3: 5-Phase Interactive Sprint Roadmap
 * Light luxury theme matching Home aesthetic
 */
export default function How3_SprintRoadmap() {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <section className="space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black uppercase tracking-widest text-purple-700">
          The 5-Phase Production Cycle
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-[#1E0D36] tracking-tight">
          From First Brief to Grand Launch
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-medium">
          Click any phase below to explore exactly what happens during that stage of your sprint.
        </p>
      </div>

      {/* Phase Selector Tabs */}
      <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {phases.map((phase, idx) => (
          <button
            key={phase.id}
            onClick={() => setActivePhase(idx)}
            className={`flex items-center gap-3 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all shrink-0 border cursor-pointer ${
              activePhase === idx
                ? "bg-purple-900 text-white border-purple-900 shadow-md scale-102"
                : "bg-white border-purple-100 text-slate-600 hover:text-purple-900 hover:border-purple-200 shadow-xs"
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                activePhase === idx ? "bg-[#CCFF00] text-black" : "bg-purple-100 text-purple-800"
              }`}
            >
              {phase.step}
            </span>
            <span>{phase.title}</span>
          </button>
        ))}
      </div>

      {/* Active Phase Deep Dive Card */}
      <div className="glass-surface rounded-[32px] bg-white border border-purple-100 p-6 sm:p-10 lg:p-12 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200 text-xs font-black">
                Phase {phases[activePhase].step} · {phases[activePhase].timeline}
              </span>
              <span className="text-xs font-bold text-slate-500">Fixed Milestone</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-[#1E0D36] leading-tight">
              {phases[activePhase].title}
            </h3>

            <p className="text-sm sm:text-base font-semibold text-purple-700 italic">
              &ldquo;{phases[activePhase].tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {phases[activePhase].description}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                Tangible Deliverables You Receive:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {phases[activePhase].deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#FAF5FF] border border-purple-100 text-xs font-bold text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase Highlights Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-purple-100">
              {phases[activePhase].highlights.map((h, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {h.label}
                  </div>
                  <div className="text-xs sm:text-sm font-black text-[#1E0D36]">{h.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden border border-purple-100 shadow-xl group">
              <img loading="lazy" decoding="async"
                src={phases[activePhase].image}
                alt={phases[activePhase].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120726]/80 via-transparent to-transparent" />

              {/* Floating Corner Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="bg-black/75 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                  <span className="text-xs font-bold text-white">
                    Phase {phases[activePhase].step}: Verified Quality Standard
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
