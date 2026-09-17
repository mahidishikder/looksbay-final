"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

export default function How4_ComparisonMatrix() {
  return (
    <section className="space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FC5001]">
          Engineered for Speed &amp; Quality
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-[#0F0F0F] tracking-tight">
          Why Our Model Beats Traditional Agencies
        </h2>
        <p className="text-sm sm:text-base text-[#0F0F0F]/70 font-normal">
          See why high-growth brands choose Looksbay over sluggish legacy agencies and unpredictable freelancers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* 1. Looksbay Collective (HERO CARD) */}
        <div className="rounded-3xl p-8 bg-[#F5F5F5] border-2 border-[#FC5001] shadow-xl relative space-y-6 flex flex-col justify-between">
          <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#FC5001] text-[#FFFFFF] text-[10px] font-bold uppercase tracking-wider shadow-sm">
            Recommended
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FC5001]">The New Standard</div>
            <h3 className="text-2xl font-black text-[#0F0F0F] mt-1">Looksbay Sprint Pod</h3>
            <p className="text-xs text-[#0F0F0F]/70 mt-2 font-normal">
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
              <div key={i} className="flex items-center gap-2.5 text-xs font-bold text-[#0F0F0F]">
                <CheckCircle2 className="w-4 h-4 text-[#FC5001] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/contact"
              className="block w-full py-3.5 rounded-full text-xs font-bold text-center bg-[#0F0F0F] hover:bg-[#FC5001] text-[#FFFFFF] transition-all shadow-md"
            >
              Start With Looksbay
            </Link>
          </div>
        </div>

        {/* 2. Traditional Legacy Agencies */}
        <div className="rounded-3xl p-8 bg-[#FFFFFF] border border-[#0F0F0F]/10 shadow-xs space-y-6 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#0F0F0F]/50">Legacy Model</div>
            <h3 className="text-2xl font-bold text-[#0F0F0F] mt-1">Traditional Agencies</h3>
            <p className="text-xs text-[#0F0F0F]/65 mt-2 font-normal">
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
              <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-[#0F0F0F]/65">
                <XCircle className="w-4 h-4 text-[#0F0F0F]/40 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <div className="text-center text-xs font-semibold text-[#0F0F0F]/50 py-3">
              High Overheads • Slow Turnaround
            </div>
          </div>
        </div>

        {/* 3. Freelancers & Marketplaces */}
        <div className="rounded-3xl p-8 bg-[#FFFFFF] border border-[#0F0F0F]/10 shadow-xs space-y-6 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#0F0F0F]/50">Freelance Model</div>
            <h3 className="text-2xl font-bold text-[#0F0F0F] mt-1">Solo Freelancers</h3>
            <p className="text-xs text-[#0F0F0F]/65 mt-2 font-normal">
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
              <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-[#0F0F0F]/65">
                <AlertCircle className="w-4 h-4 text-[#0F0F0F]/40 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <div className="text-center text-xs font-semibold text-[#0F0F0F]/50 py-3">
              High Risk • Inconsistent Quality
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
