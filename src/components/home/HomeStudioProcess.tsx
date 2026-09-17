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
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-white text-[#0D0D0D] border-t border-[#E5E5E5]">
      <div className="max-w-[1640px] mx-auto space-y-20">

        {/* 3-Column Process Steps */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-[#F4511E] font-semibold mb-3">
              The Studio Standard
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0D0D0D]">
              Crafted with intention at every step.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="group bg-[#F8F8F8] border border-[#E5E5E5] overflow-hidden hover:border-[#F4511E] hover:shadow-lg hover:shadow-orange-50 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F0F0F0]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Step number badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 bg-[#F4511E] flex items-center justify-center text-xs font-mono font-bold text-white">
                    {step.num}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0D0D0D] mb-2 group-hover:text-[#F4511E] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Banner */}
        <div className="bg-[#0D0D0D] text-white p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#F4511E] font-semibold">
              Meet Looksbay Studio
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.12]">
              Design that elevates your brand and frees up your time.
            </h2>
            <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed max-w-xl">
              We believe a website shouldn&apos;t be a source of stress. Whether using our templates or partnering on a bespoke build, you get a clean, scalable website that works for you 24/7.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#F4511E] hover:bg-[#D43D0F] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md"
              >
                <span>About Our Studio</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Looksbay Studio Team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
