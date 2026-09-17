"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

interface InteractiveLeadHubProps {
  onOpenOrderModal?: () => void;
}

export default function InteractiveLeadHub({ onOpenOrderModal }: InteractiveLeadHubProps) {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-[#FFFFFF] text-[#0F0F0F]">
      <div className="max-w-[1100px] mx-auto text-center">
        <div className="p-10 sm:p-16 rounded-[36px] bg-[#F5F5F5] border border-[#0F0F0F]/10 flex flex-col items-center relative overflow-hidden shadow-xs">
          {/* Subtle warm glow */}
          <div
            className="absolute top-0 right-0 w-[350px] h-[350px] pointer-events-none rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(252,80,1,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#0F0F0F]/10 text-[#0F0F0F] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FC5001]" />
            <span>Start A Project</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F0F0F] max-w-xl leading-tight">
            Ready to build your new Squarespace?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#0F0F0F]/70 max-w-lg leading-relaxed font-medium">
            Tell us about your brand and vision. We will review your goals and reply with a tailored scope &amp; roadmap within 24 hours.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-10">
            {onOpenOrderModal ? (
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="px-8 py-3.5 rounded-full bg-[#FC5001] hover:opacity-90 text-[#FFFFFF] text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <span>Start Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-[#FC5001] hover:opacity-90 text-[#FFFFFF] text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <span>Start Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            <a
              href="mailto:contact@looksbay.com"
              className="px-7 py-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#F5F5F5] border border-[#0F0F0F]/10 text-xs sm:text-sm font-bold text-[#0F0F0F] inline-flex items-center gap-2 transition-all shadow-xs"
            >
              <Mail className="w-4 h-4 text-[#FC5001]" />
              <span>Direct Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
