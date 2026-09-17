"use client";

import React from "react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const outcomes = [
  { title: "Fluid Engine 7.1", desc: "Pixel-perfect drag & drop layout system." },
  { title: "Mobile Responsive", desc: "Meticulously optimized for handheld screens." },
  { title: "Fast Page Speed", desc: "Core Web Vitals engineered for quick loading." },
  { title: "SEO Architecture", desc: "Clean schema and meta tagging built in." },
  { title: "6 Months Free Trial", desc: "Plenty of time to build before launching." },
  { title: "20% Annual Discount", desc: "Exclusive Circle Partner pricing benefits." },
];

export default function HomeOutcomeProof() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-20 sm:py-28 lg:px-20 border-t border-[#0F0F0F]/10">
      <div className="max-w-[1200px] mx-auto">
        <RevealOnScroll>
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5001] mb-2">
              The Standard
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F0F0F]">
              Quality in every detail.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {outcomes.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 40}>
              <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#0F0F0F]/10 hover:border-[#FC5001] hover:shadow-md transition-all duration-300 group">
                <h3 className="text-base sm:text-lg font-bold text-[#0F0F0F] mb-1 group-hover:text-[#FC5001] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#0F0F0F]/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
