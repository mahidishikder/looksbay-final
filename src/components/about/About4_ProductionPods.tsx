"use client";

import React from "react";

/**
 * 👥 About Component 4: 4 Core Production Pods
 * CMS & Full-Stack, UI/UX & Motion, Technical SEO & Speed, QA & Warranty Care
 */
export default function About4_ProductionPods() {
  const pods = [
    {
      num: "01",
      title: "CMS & Full-Stack",
      desc: "Senior developers for Shopify Liquid 2.0, Webflow Finsweet, and WordPress custom Gutenberg ACF. Clean code, zero unnecessary plugins.",
      bg: "bg-purple-50/50",
      border: "border-purple-100",
      badgeBg: "bg-purple-600",
    },
    {
      num: "02",
      title: "UI/UX & Motion",
      desc: "Apple-grade visual designers crafting 60fps spring animations, Lottie assets, and high-converting checkout user flows.",
      bg: "bg-sky-50/50",
      border: "border-sky-100",
      badgeBg: "bg-sky-600",
    },
    {
      num: "03",
      title: "Technical SEO & Speed",
      desc: "Speed engineers tuning Core Web Vitals, JSON-LD Schema structured data, dynamic XML sitemaps, and indexing architecture.",
      bg: "bg-emerald-50/50",
      border: "border-emerald-100",
      badgeBg: "bg-emerald-600",
    },
    {
      num: "04",
      title: "QA & Warranty Care",
      desc: "Rigorous cross-browser device testing, DNS cutover oversight, and 30 days of post-launch bug fixes and handover training.",
      bg: "bg-amber-50/50",
      border: "border-amber-100",
      badgeBg: "bg-amber-600",
    },
  ];

  return (
    <section className="rounded-[36px] bg-white p-8 sm:p-14 border border-purple-100 shadow-sm space-y-10">
      <div className="max-w-2xl">
        <span className="text-xs font-black uppercase tracking-widest text-purple-700 block mb-2">
          How We Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Our 4 Core Production Pods
        </h2>
        <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed">
          When you launch a project with LooksBay, you are assigned a battle-tested pod engineered for your specific framework:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pods.map((pod) => (
          <div key={pod.num} className={`p-6 rounded-2xl ${pod.bg} border ${pod.border} space-y-3`}>
            <div className={`w-10 h-10 rounded-xl ${pod.badgeBg} text-white flex items-center justify-center font-black`}>
              {pod.num}
            </div>
            <h4 className="text-lg font-black text-slate-900">{pod.title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {pod.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
