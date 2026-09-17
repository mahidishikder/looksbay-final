"use client";

import React from "react";
import Link from "next/link";
import { cmsPlatforms } from "@/data/cmsData";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  LayoutTemplate,
  RefreshCw,
  Search,
  Zap,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Sparkles,
  LayoutTemplate,
  ArrowRightLeft: RefreshCw,
  Zap,
  TrendingUp: Search,
};

export default function ServicesSquarespacePillars() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#FFFFFF]">
      <div className="max-w-[1640px] mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F5F5] border border-[#FC5001]/20 text-[#FC5001] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FC5001]" />
            <span>Squarespace Circle Platinum Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F0F0F] tracking-tight">
            Comprehensive Squarespace Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[#0F0F0F]/70 font-medium leading-relaxed">
            From full bespoke builds to 7-day template customization and seamless WordPress migrations — we deliver high-performing websites engineered to grow your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cmsPlatforms.map((svc) => {
            const Icon = iconMap[svc.icon] || Sparkles;
            return (
              <div
                key={svc.id}
                className="rounded-3xl bg-[#FFFFFF] border border-[#0F0F0F]/10 p-8 shadow-xs hover:border-[#FC5001] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5F5F5] text-[#FC5001] flex items-center justify-center shadow-xs border border-[#0F0F0F]/10 transition-transform group-hover:scale-105">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F5F5] border border-[#0F0F0F]/10 text-[11px] font-bold text-[#0F0F0F]/70">
                      <Clock className="w-3 h-3 text-[#FC5001]" />
                      <span>{svc.turnaround}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0F0F0F] group-hover:text-[#FC5001] transition-colors">
                      {svc.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#FC5001] mt-1">{svc.tagline}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#0F0F0F]/70 leading-relaxed font-normal">
                    {svc.description}
                  </p>

                  <div className="pt-3 border-t border-[#0F0F0F]/10 space-y-2.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F0F0F]/50">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-2 text-xs text-[#0F0F0F]/80 font-medium">
                      {svc.capabilities.slice(0, 4).map((cap) => (
                        <li key={cap} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FC5001] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#0F0F0F]/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F0F0F]/50">
                    {svc.projectsDelivered}+ Shipped
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F0F0F] group-hover:text-[#FC5001] transition-colors"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FC5001] group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
