"use client";

import React from "react";

export default function About4_ProductionPods() {
  const pods = [
    {
      num: "01",
      title: "Squarespace 7.1 & Fluid Engine",
      desc: "Senior Squarespace architects specializing in custom Fluid Engine grid builds, responsive breakpoints, and bespoke CSS injection without clutter.",
      badgeBg: "bg-[#0F0F0F]",
    },
    {
      num: "02",
      title: "UI/UX & Interactive Motion",
      desc: "Visual designers crafting smooth micro-interactions, custom typography systems, and high-converting checkout user flows.",
      badgeBg: "bg-[#FC5001]",
    },
    {
      num: "03",
      title: "Technical SEO & Speed Optimization",
      desc: "Performance engineers tuning Core Web Vitals, JSON-LD Schema structured data, dynamic XML sitemaps, and seamless 301 redirect mapping.",
      badgeBg: "bg-[#0F0F0F]",
    },
    {
      num: "04",
      title: "QA & 30-Day Launch Warranty",
      desc: "Rigorous cross-browser device testing, domain cutover oversight, and 30 days of post-launch warranty support with Loom tutorials.",
      badgeBg: "bg-[#FC5001]",
    },
  ];

  return (
    <section className="rounded-[36px] bg-[#F5F5F5] p-8 sm:p-14 border border-[#0F0F0F]/10 shadow-xs space-y-10">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FC5001] block mb-2">
          How We Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-[#0F0F0F] tracking-tight">
          Our 4 Core Production Pods
        </h2>
        <p className="mt-2 text-sm text-[#0F0F0F]/70 font-medium leading-relaxed">
          When you launch a project with Looksbay, you are assigned a dedicated pod engineered for your specific Squarespace goals:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pods.map((pod) => (
          <div
            key={pod.num}
            className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#0F0F0F]/10 hover:border-[#FC5001] transition-all space-y-3 shadow-xs"
          >
            <div className={`w-10 h-10 rounded-xl ${pod.badgeBg} text-[#FFFFFF] flex items-center justify-center font-bold text-sm`}>
              {pod.num}
            </div>
            <h4 className="text-lg font-bold text-[#0F0F0F]">{pod.title}</h4>
            <p className="text-xs text-[#0F0F0F]/65 leading-relaxed font-normal">
              {pod.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
