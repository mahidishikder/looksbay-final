"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

/**
 * ⚡ How We Work Component 4: Comparison Matrix
 * LooksBay Sprint Pod vs Traditional Agencies vs Solo Freelancers
 */
export default function How4_ComparisonMatrix() {
  return (
    <section className="space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F4511E]">
          Engineered for Speed &amp; Quality
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-[#0D0D0D] tracking-tight">
          Why Our Model Beats Traditional Agencies
        </h2>
        <p className="text-sm sm:text-base text-[#666666] font-normal">
          See why high-growth brands choose LooksBay over sluggish legacy agencies and unpredictable freelancers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* 1. LooksBay Collective (HERO CARD) */}
        <div className="rounded-3xl p-8 bg-[#FAF8F5] border-2 border-[#F4511E] shadow-xl relative space-y-6 flex flex-col justify-between">
          <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#F4511E] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
            Recommended
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#F4511E]">The New Standard</div>
            <h3 className="text-2xl font-black text-[#0D0D0D] mt-1">LooksBay Sprint Pod</h3>
            <p className="text-xs text-[#666666] mt-2 font-normal">
              Dedicated in-house pod of 20 senior specialists directly working on your project.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {[
              "2 to 4 Week Rapid Delivery",
              "Direct Engineer Slack/WhatsApp",
              "98+ Google PageSpeed Guarantee",
              "100% In-House (Zero Outsourcing)",
              "Fixed Pricing & Milestones",
              "30-Day Hypercare Included",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs font-bold text-[#0D0D0D]">
                <CheckCircle2 className="w-4 h-4 text-[#F4511E] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/contact"
              className="block w-full py-3.5 rounded-full text-xs font-bold text-center bg-[#0D0D0D] hover:bg-[#F4511E] text-white transition-all shadow-md"
            >
              Start With LooksBay
            </Link>
          </div>
        </div>

        {/* 2. Traditional Legacy Agencies */}
        <div className="rounded-3xl p-8 bg-white border border-[#E5E5E5] shadow-xs space-y-6 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#888888]">Legacy Model</div>
            <h3 className="text-2xl font-bold text-[#333333] mt-1">Traditional Agencies</h3>
            <p className="text-xs text-[#777777] mt-2 font-normal">
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
              <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-[#777777]">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <div className="text-center text-xs font-semibold text-[#888888] py-3">
              High Overheads • Slow Turnaround
            </div>
          </div>
        </div>

        {/* 3. Freelancers & Marketplaces */}
        <div className="rounded-3xl p-8 bg-white border border-[#E5E5E5] shadow-xs space-y-6 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#888888]">Freelance Model</div>
            <h3 className="text-2xl font-bold text-[#333333] mt-1">Solo Freelancers</h3>
            <p className="text-xs text-[#777777] mt-2 font-normal">
              One person attempting to do design, code, SEO, and copywriting all alone.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {[
              "Unpredictable Deadlines & Delays",
              "Ghosting During Critical Phases",
              "Lacks Specialized Squarespace Skills",
              "Zero Quality Assurance Testing",
              "No Post-Launch Warranty",
              "Messy, Undocumented Setup",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-[#777777]">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <div className="text-center text-xs font-semibold text-[#888888] py-3">
              High Risk • Inconsistent Quality
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
