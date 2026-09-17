"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

interface InteractiveLeadHubProps {
  onOpenOrderModal?: () => void;
}

export default function InteractiveLeadHub({ onOpenOrderModal }: InteractiveLeadHubProps) {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-white text-[#0D0D0D]">
      <div className="max-w-[1100px] mx-auto text-center">
        <div className="p-10 sm:p-16 rounded-[36px] bg-[#FAF8F5] border border-[#EAEAEA] flex flex-col items-center relative overflow-hidden shadow-xs">
          {/* Subtle warm glow */}
          <div
            className="absolute top-0 right-0 w-[350px] h-[350px] pointer-events-none rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(244,81,30,0.1) 0%, transparent 70%)",
            }}
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E0E0E0] text-[#0D0D0D] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F4511E]" />
            <span>Start A Project</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0D0D0D] max-w-xl leading-tight">
            Ready to build your new Squarespace?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#6B6B6B] max-w-lg leading-relaxed font-medium">
            Tell us about your brand and vision. We will review your goals and reply with a tailored scope &amp; roadmap within 24 hours.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-10">
            {onOpenOrderModal ? (
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="px-8 py-3.5 rounded-full bg-[#F4511E] hover:bg-[#D83A07] text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <span>Start Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-[#F4511E] hover:bg-[#D83A07] text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <span>Start Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            <a
              href="mailto:contact@looksbay.com"
              className="px-7 py-3.5 rounded-full bg-white hover:bg-[#F8F8F8] border border-[#E5E5E5] text-xs sm:text-sm font-bold text-[#0D0D0D] inline-flex items-center gap-2 transition-all shadow-xs"
            >
              <Mail className="w-4 h-4 text-[#F4511E]" />
              <span>contact@looksbay.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
