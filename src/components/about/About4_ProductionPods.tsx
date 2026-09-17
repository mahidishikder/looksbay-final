"use client";

import React from "react";

/**
 * 👥 About Component 4: 4 Core Production Pods
 * Squarespace 7.1 Architecture, UI/UX & Motion, Technical SEO & Speed, QA & Warranty Care
 */
export default function About4_ProductionPods() {
  const pods = [
    {
      num: "01",
      title: "Squarespace 7.1 & Fluid Engine",
      desc: "Senior Squarespace architects specializing in custom Fluid Engine grid builds, responsive breakpoints, and bespoke CSS injection without clutter.",
      badgeBg: "bg-[#0D0D0D]",
    },
    {
      num: "02",
      title: "UI/UX & Interactive Motion",
      desc: "Apple-grade visual designers crafting smooth spring animations, custom typography systems, and high-converting checkout user flows.",
      badgeBg: "bg-[#F4511E]",
    },
    {
      num: "03",
      title: "Technical SEO & Speed Optimization",
      desc: "Performance engineers tuning Core Web Vitals, JSON-LD Schema structured data, dynamic XML sitemaps, and seamless 301 redirect mapping.",
      badgeBg: "bg-[#0D0D0D]",
    },
    {
      num: "04",
      title: "QA & 30-Day Launch Warranty",
      desc: "Rigorous cross-browser device testing, domain cutover oversight, and 30 days of post-launch warranty support with Loom tutorials.",
      badgeBg: "bg-[#F4511E]",
    },
  ];

  return (
    <section className="rounded-[36px] bg-[#FAF8F5] p-8 sm:p-14 border border-[#EAEAEA] shadow-xs space-y-10">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F4511E] block mb-2">
          How We Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-[#0D0D0D] tracking-tight">
          Our 4 Core Production Pods
        </h2>
        <p className="mt-2 text-sm text-[#666666] font-medium leading-relaxed">
          When you launch a project with LooksBay, you are assigned a dedicated pod engineered for your specific Squarespace goals:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pods.map((pod) => (
          <div
            key={pod.num}
            className="p-6 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#F4511E] transition-all space-y-3 shadow-xs"
          >
            <div className={`w-10 h-10 rounded-xl ${pod.badgeBg} text-white flex items-center justify-center font-bold text-sm`}>
              {pod.num}
            </div>
            <h4 className="text-lg font-bold text-[#0D0D0D]">{pod.title}</h4>
            <p className="text-xs text-[#666666] leading-relaxed font-normal">
              {pod.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
