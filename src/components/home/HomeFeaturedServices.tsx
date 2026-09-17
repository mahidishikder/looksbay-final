"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const services = [
  {
    eyebrow: "Speed & Polish",
    title: "Template Customization",
    description: "Your brand and copy seamlessly fitted into our designer templates in 7 days.",
    href: "/services",
  },
  {
    eyebrow: "Custom Architecture",
    title: "Bespoke Squarespace 7.1",
    description: "Fully bespoke visual identity, custom CSS styling, and conversion architecture.",
    href: "/services",
  },
  {
    eyebrow: "Zero Downtime",
    title: "WordPress & Wix Migration",
    description: "Flawless migration to Squarespace Fluid Engine with all SEO rankings preserved.",
    href: "/services",
  },
];

export default function HomeFeaturedServices() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-white text-[#0D0D0D] border-t border-[#E5E5E5]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4511E] mb-2">
            Studio Services
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0D0D0D]">
            Built with precision.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B6B6B]">
            From quick turnkey launches to full custom digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col justify-between p-8 bg-[#F8F8F8] border border-[#E5E5E5] hover:border-[#F4511E] hover:shadow-lg hover:shadow-orange-50 transition-all duration-300"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4511E]">
                  {service.eyebrow}
                </span>
                <h3 className="text-xl font-black text-[#0D0D0D] mt-2 mb-3 group-hover:text-[#F4511E] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-8">
                <Link
                  href={service.href}
                  className="group/link inline-flex items-center gap-1 text-xs font-bold text-[#F4511E] hover:text-[#D43D0F] transition-colors"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
