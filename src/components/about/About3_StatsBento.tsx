"use client";

import React from "react";

/**
 * 👥 About Component 3: Stats Bento Grid
 * 4 Key Agency Metrics: Leadership, Squad Size, Projects Delivered, Speed Guarantee
 */
export default function About3_StatsBento() {
  const stats = [
    { num: "4+", label: "Years of Leadership", sub: "Established Track Record", color: "#7C3AED" },
    { num: "20+", label: "Dedicated In-House Squad", sub: "Zero Junior Outsourcing", color: "#2563EB" },
    { num: "700+", label: "Projects Delivered", sub: "Across 10+ CMS Platforms", color: "#059669" },
    { num: "95+", label: "PageSpeed Guarantee", sub: "Certified Google Core Vitals", color: "#D97706" },
  ];

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="glass-surface rounded-3xl bg-white p-7 shadow-sm border border-purple-100 hover:shadow-md transition-shadow"
        >
          <div className="text-4xl sm:text-5xl font-black mb-2" style={{ color: stat.color }}>
            {stat.num}
          </div>
          <div className="text-sm sm:text-base font-black text-slate-900 mb-1">{stat.label}</div>
          <div className="text-xs text-slate-500 font-semibold">{stat.sub}</div>
        </div>
      ))}
    </section>
  );
}
