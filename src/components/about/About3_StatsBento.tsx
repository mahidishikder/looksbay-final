"use client";

import React from "react";

/**
 * 👥 About Component 3: Stats Bento Grid
 * 4 Key Agency Metrics: Leadership, Squad Size, Projects Delivered, Speed Guarantee
 */
export default function About3_StatsBento() {
  const stats = [
    { num: "4+", label: "Years of Leadership", sub: "Established Studio Track Record", color: "#F4511E" },
    { num: "20+", label: "Dedicated In-House Squad", sub: "Zero Junior Outsourcing", color: "#0D0D0D" },
    { num: "700+", label: "Projects Delivered", sub: "Verified Squarespace Launches", color: "#F4511E" },
    { num: "99+", label: "PageSpeed Guarantee", sub: "Certified Google Core Web Vitals", color: "#0D0D0D" },
  ];

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="rounded-3xl bg-white p-7 sm:p-8 shadow-xs border border-[#E5E5E5] hover:border-[#F4511E] hover:shadow-md transition-all duration-300"
        >
          <div className="text-4xl sm:text-5xl font-black mb-2" style={{ color: stat.color }}>
            {stat.num}
          </div>
          <div className="text-sm sm:text-base font-bold text-[#0D0D0D] mb-1">{stat.label}</div>
          <div className="text-xs text-[#6B6B6B] font-medium">{stat.sub}</div>
        </div>
      ))}
    </section>
  );
}
