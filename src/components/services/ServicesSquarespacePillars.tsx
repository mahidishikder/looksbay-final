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
    <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white">
      <div className="max-w-[1640px] mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF4F0] border border-[#F4511E]/20 text-[#F4511E] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#F4511E]" />
            <span>Squarespace Circle Platinum Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0D0D0D] tracking-tight">
            Comprehensive Squarespace Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B] font-medium leading-relaxed">
            From full bespoke builds to 7-day template customization and seamless WordPress migrations — we deliver high-performing websites engineered to grow your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cmsPlatforms.map((svc) => {
            const Icon = iconMap[svc.icon] || Sparkles;
            return (
              <div
                key={svc.id}
                className="rounded-3xl bg-white border border-[#E5E5E5] p-8 shadow-xs hover:border-[#F4511E] hover:shadow-[0_12px_35px_rgba(244,81,30,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF4F0] text-[#F4511E] flex items-center justify-center shadow-xs border border-[#F4511E]/15 transition-transform group-hover:scale-105">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F8F8] border border-[#EAEAEA] text-[11px] font-bold text-[#555555]">
                      <Clock className="w-3 h-3 text-[#F4511E]" />
                      <span>{svc.turnaround}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0D0D0D] group-hover:text-[#F4511E] transition-colors">
                      {svc.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#F4511E] mt-1">{svc.tagline}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed font-normal">
                    {svc.description}
                  </p>

                  <div className="pt-3 border-t border-[#F0F0F0] space-y-2.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-2 text-xs text-[#333333] font-medium">
                      {svc.capabilities.slice(0, 4).map((cap) => (
                        <li key={cap} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F4511E] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0F0F0] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#8A8A8A]">
                    {svc.projectsDelivered}+ Shipped
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D0D0D] group-hover:text-[#F4511E] transition-colors"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F4511E] group-hover:translate-x-0.5 transition-transform" />
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
