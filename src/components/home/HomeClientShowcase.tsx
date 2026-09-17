"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

const showcaseItems = [
  {
    title: "Infaces Media",
    niche: "Creative Studio & Production",
    metric: "+140% Qualified Inquiries",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    url: "/portfolio",
  },
  {
    title: "Verona Interiors",
    niche: "Architecture & Luxury Staging",
    metric: "10/10 Client Satisfaction",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    url: "/portfolio",
  },
  {
    title: "Soleil Atelier",
    niche: "Boutique eCommerce Brand",
    metric: "$240k Launch Revenue",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    url: "/portfolio",
  },
  {
    title: "Peak Executive",
    niche: "C-Suite Coaching Firm",
    metric: "3x Booking Velocity",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    url: "/portfolio",
  },
];

export default function HomeClientShowcase() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#F8F8F8] text-[#0D0D0D]">
      <div className="max-w-[1640px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#F4511E] font-semibold mb-3">
            Client Transformations
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0D0D0D]">
            Websites that turn visitors into dream clients.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
            Explore live Squarespace builds customized for businesses that value high design and measurable results.
          </p>
        </div>

        {/* 4-Card Showcase Grid (Matching screenshot layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseItems.map((item) => (
            <div
              key={item.title}
              className="group bg-white border border-[#E5E5E5] p-4 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-orange-50 hover:border-[#F4511E]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F0F0F0] mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white font-mono">
                  {item.metric}
                </div>
              </div>

              <div className="space-y-1 px-2 pb-2">
                <span className="text-[10px] uppercase tracking-wider text-[#F4511E] font-semibold block">
                  {item.niche}
                </span>
                <h3 className="text-xl font-bold text-[#0D0D0D]">
                  {item.title}
                </h3>
              </div>

              <div className="pt-3 px-2 border-t border-[#E5E5E5]">
                <Link
                  href={item.url}
                  className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4511E] hover:text-[#D43D0F] transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D0D0D] hover:bg-[#F4511E] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md"
          >
            <span>Explore All Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
