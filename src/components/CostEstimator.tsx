"use client";

import React, { useState } from "react";
import { Calculator, CheckCircle2, Clock, Users, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function CostEstimator() {
  const [selectedCms, setSelectedCms] = useState("Shopify");
  const [projectType, setProjectType] = useState("full-build");
  const [seoPackage, setSeoPackage] = useState("full-seo");

  const cmsOptions = [
    { name: "Shopify", base: 1200, days: 12 },
    { name: "WordPress", base: 1000, days: 10 },
    { name: "Webflow", base: 1100, days: 10 },
    { name: "Framer", base: 900, days: 7 },
    { name: "GoHighLevel", base: 950, days: 8 },
    { name: "Squarespace", base: 750, days: 6 },
    { name: "Wix Studio", base: 800, days: 7 },
    { name: "Showit", base: 850, days: 7 },
    { name: "Kajabi", base: 950, days: 8 },
  ];

  const typeMultipliers: Record<string, { multiplier: number; label: string; extraDays: number }> = {
    "redesign": { multiplier: 0.8, label: "Redesign & Modernization", extraDays: 0 },
    "full-build": { multiplier: 1.0, label: "Full Custom Site Build", extraDays: 4 },
    "enterprise": { multiplier: 1.6, label: "Enterprise Architecture & Custom Code", extraDays: 8 },
  };

  const seoPackages: Record<string, { cost: number; label: string; speedScore: string }> = {
    "none": { cost: 0, label: "Basic Setup Only", speedScore: "Standard" },
    "technical": { cost: 450, label: "Technical SEO & 95+ PageSpeed", speedScore: "95+ Guaranteed" },
    "full-seo": { cost: 850, label: "Complete Search Dominance & Schema Suite", speedScore: "99 Core Web Vitals" },
  };

  const selectedCmsObj = cmsOptions.find((c) => c.name === selectedCms) || cmsOptions[0];
  const typeObj = typeMultipliers[projectType];
  const seoObj = seoPackages[seoPackage];

  const totalCost = Math.round(selectedCmsObj.base * typeObj.multiplier + seoObj.cost);
  const totalDays = selectedCmsObj.days + typeObj.extraDays;

  return (
    <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 shadow-2xl backdrop-blur-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 border border-sky-500/20 text-sky-400 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Live Interactive Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Calculate Your CMS + SEO Project Scope
          </h3>
          <p className="text-sm text-zinc-400 mt-1">
            Get an instant timeline and squad allocation based on your requirements.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-medium text-emerald-400">Team Ready to Start Immediately</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left Inputs (8 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Select Platform */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300 block mb-3">
              1. Choose Your Target CMS
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
              {cmsOptions.map((cms) => (
                <button
                  key={cms.name}
                  type="button"
                  onClick={() => setSelectedCms(cms.name)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-medium transition-all text-center border ${
                    selectedCms === cms.name
                      ? "bg-white text-zinc-950 font-semibold border-white shadow-lg shadow-white/10 scale-[1.02]"
                      : "bg-white/[0.02] text-zinc-400 border-white/[0.06] hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {cms.name}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Project Type */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300 block mb-3">
              2. Scope of Development
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {Object.entries(typeMultipliers).map(([key, value]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setProjectType(key)}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    projectType === key
                      ? "bg-sky-500/10 border-sky-500/40 text-white shadow-inner"
                      : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:bg-white/[0.05]"
                  }`}
                >
                  <span className="text-xs font-semibold block text-white">{value.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: SEO Architecture */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300 block mb-3">
              3. SEO & Speed Optimization Level
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {Object.entries(seoPackages).map(([key, value]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSeoPackage(key)}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    seoPackage === key
                      ? "bg-purple-500/10 border-purple-500/40 text-white shadow-inner"
                      : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:bg-white/[0.05]"
                  }`}
                >
                  <span className="text-xs font-semibold block text-white">{value.label}</span>
                  <span className="text-[11px] text-zinc-400 block mt-1">{value.speedScore}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Card (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl p-6 bg-[#090b14] border border-white/10 relative overflow-hidden">
          <div className="apple-glow -top-10 -right-10 w-40 h-40 bg-sky-500/20 pointer-events-none" />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono">Estimated Scope</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 text-sky-300 border border-sky-400/20">
                Transparent Pricing
              </span>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
                ${totalCost.toLocaleString()}
                <span className="text-xs font-normal text-zinc-400">USD (Estimated)</span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">
                Includes full design, code, responsive tests & QA by our 20-person squad.
              </p>
            </div>

            <div className="space-y-2.5 py-4 border-y border-white/[0.08] text-xs">
              <div className="flex items-center justify-between text-zinc-300">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  Estimated Turnaround:
                </span>
                <span className="font-semibold text-white">{totalDays} Business Days</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <Users className="w-3.5 h-3.5 text-indigo-400" />
                  Dedicated Team Allocation:
                </span>
                <span className="font-semibold text-white">3 Dedicated Specialists</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Quality Guarantee:
                </span>
                <span className="font-semibold text-emerald-400">95+ PageSpeed + 30d Support</span>
              </div>
            </div>

            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Pixel-perfect responsive {selectedCms} layout</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Apple-grade micro-animations & fast interactions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero code bloat & full SEO structured data</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-4">
            <a
              href={`/contact?cms=${encodeURIComponent(selectedCms)}&scope=${encodeURIComponent(projectType)}&budget=${totalCost}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            >
              <span>Lock In This Scope & Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
