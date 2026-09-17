"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Strategy & Page Flow",
    desc: "We clarify your customer journey, positioning, and conversion goals before crafting a single section.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "02",
    title: "Fluid Engine 7.1 Craft",
    desc: "Meticulous desktop & mobile grid alignment, custom typography hierarchy, and lightweight CSS polish.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "03",
    title: "Video Handoff & Launch",
    desc: "Personalized Loom video tutorials recorded in your live account so you can update anything with ease.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
  },
];

export default function HomeStudioProcess() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#FFFFFF] text-[#0F0F0F] border-t border-[#0F0F0F]/10">
      <div className="max-w-[1640px] mx-auto space-y-20">

        {/* 3-Column Process Steps */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-[#FC5001] font-semibold mb-3">
              The Studio Standard
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F0F0F]">
              Crafted with intention at every step.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="group bg-[#F5F5F5] border border-[#0F0F0F]/10 overflow-hidden hover:border-[#FC5001] hover:shadow-lg transition-all duration-300 rounded-xs"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FFFFFF]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Step number badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 bg-[#FC5001] flex items-center justify-center text-xs font-mono font-bold text-[#FFFFFF]">
                    {step.num}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-2">
                  <h3 className="text-xl font-bold text-[#0F0F0F] group-hover:text-[#FC5001] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0F0F0F]/65 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder statement block */}
        <div className="bg-[#F5F5F5] border border-[#0F0F0F]/10 p-8 sm:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-12 rounded-xs">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 overflow-hidden border-2 border-[#FC5001]">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              alt="Lead Squarespace Designer"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <p className="text-base sm:text-xl font-bold text-[#0F0F0F] leading-snug">
              &ldquo;We don&apos;t build generic websites. Every pixel is placed with strategic intent to elevate your positioning, command premium pricing, and convert visitors automatically.&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F0F0F] hover:bg-[#FC5001] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-all rounded-xs"
              >
                <span>Meet Our Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
