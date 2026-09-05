"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

/**
 * ⚡ How We Work Component 4: Comparison Matrix
 * LooksBay Sprint Pod vs Traditional Agencies vs Solo Freelancers
 * Light luxury theme matching Home aesthetic
 */
export default function How4_ComparisonMatrix() {
  return (
    <section className="space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black uppercase tracking-widest text-purple-700">
          Engineered for Speed &amp; Quality
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-[#1E0D36] tracking-tight">
          Why Our Model Beats Traditional Agencies
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-medium">
          See why high-growth brands choose LooksBay over sluggish legacy agencies and unpredictable freelancers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* 1. LooksBay Collective (HERO CARD) */}
        <div className="rounded-3xl p-8 bg-gradient-to-b from-[#FAF5FF] via-white to-[#FAF8FF] border-2 border-purple-600 shadow-xl relative space-y-6 flex flex-col justify-between">
          <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-wider shadow-sm border border-purple-300">
            Recommended
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-purple-700">The New Standard</div>
            <h3 className="text-2xl font-black text-[#1E0D36] mt-1">LooksBay Sprint Pod</h3>
            <p className="text-xs text-slate-600 mt-2 font-medium">
              Dedicated in-house pod of 20 senior specialists directly working on your project.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {[
              "2 to 4 Week Rapid Delivery",
              "Direct Engineer Slack/WhatsApp",
              "95+ Google PageSpeed Guarantee",
              "100% In-House (Zero Outsourcing)",
              "Fixed Pricing & Milestones",
              "30-Day Hypercare Included",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs font-bold text-[#1E0D36]">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/contact"
              className="btn-neon-lime block w-full py-3.5 rounded-full text-xs font-black text-center shadow-md"
            >
              Start With LooksBay
            </Link>
          </div>
        </div>

        {/* 2. Traditional Legacy Agencies */}
        <div className="rounded-3xl p-8 bg-white border border-slate-200/80 shadow-sm space-y-6 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Legacy Model</div>
            <h3 className="text-2xl font-black text-slate-800 mt-1">Traditional Agencies</h3>
            <p className="text-xs text-slate-500 mt-2 font-medium">
              Layers of account managers, bloated billable hours, and agonizingly slow progress.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {[
              "3 to 6 Months Bloated Timelines",
              "Junior Account Managers as Bottlenecks",
              "Heavy, Slow WordPress Themes",
              "Outsourced to Unvetted Contractors",
              "Surprise Scope Creep Invoices",
              "Hourly Paid Support Contracts",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-slate-500">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <div className="text-center text-xs font-bold text-slate-400 py-3">
              High Overheads • Slow Turnaround
            </div>
          </div>
        </div>

        {/* 3. Freelancers & Marketplaces */}
        <div className="rounded-3xl p-8 bg-white border border-slate-200/80 shadow-sm space-y-6 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Freelance Model</div>
            <h3 className="text-2xl font-black text-slate-800 mt-1">Solo Freelancers</h3>
            <p className="text-xs text-slate-500 mt-2 font-medium">
              One person attempting to do design, code, SEO, and copywriting all alone.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {[
              "Unpredictable Deadlines & Delays",
              "Ghosting During Critical Phases",
              "Lacks Specialized Full-Stack Skills",
              "Zero Quality Assurance Testing",
              "No Post-Launch Warranty",
              "Messy, Undocumented Codebase",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-slate-500">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <div className="text-center text-xs font-bold text-slate-400 py-3">
              High Risk • Inconsistent Quality
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
