"use client";

import React from "react";

export default function About3_StatsBento() {
  const stats = [
    { num: "4+", label: "Years of Leadership", sub: "Established Studio Track Record", color: "#FC5001" },
    { num: "20+", label: "Dedicated In-House Squad", sub: "Zero Junior Outsourcing", color: "#0F0F0F" },
    { num: "700+", label: "Projects Delivered", sub: "Verified Squarespace Launches", color: "#FC5001" },
    { num: "99+", label: "PageSpeed Guarantee", sub: "Certified Google Core Web Vitals", color: "#0F0F0F" },
  ];

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="rounded-3xl bg-[#FFFFFF] p-7 sm:p-8 shadow-xs border border-[#0F0F0F]/10 hover:border-[#FC5001] hover:shadow-md transition-all duration-300"
        >
          <div className="text-4xl sm:text-5xl font-black mb-2" style={{ color: stat.color }}>
            {stat.num}
          </div>
          <div className="text-sm sm:text-base font-bold text-[#0F0F0F] mb-1">{stat.label}</div>
          <div className="text-xs text-[#0F0F0F]/65 font-medium">{stat.sub}</div>
        </div>
      ))}
    </section>
  );
}
