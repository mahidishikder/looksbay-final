"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    stars: 5,
    quote:
      "Looksbay completely transformed our online presence. Our Squarespace template was customized and live in 6 days, and we booked 4 new high-ticket clients within the first 48 hours.",
    name: "Elena Rostova",
    role: "Founder, Studio Rostova Interior Design",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    stars: 5,
    quote:
      "Migrating our messy WordPress blog and portfolio into Squarespace 7.1 was completely seamless. Every redirect was handled perfectly, our Google rankings went up, and editing is a joy.",
    name: "Marcus Vance",
    role: "Managing Director, Apex Advisory",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#FFFFFF] text-[#0F0F0F] border-t border-[#0F0F0F]/10">
      <div className="max-w-[1640px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#FC5001] font-semibold mb-3">
            Client Praise
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F0F0F]">
            Kind words from founders we love.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="bg-[#F5F5F5] border border-[#0F0F0F]/10 hover:border-[#FC5001] p-8 sm:p-10 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-lg rounded-xs"
            >
              <div className="flex items-center gap-1 text-[#FC5001]">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FC5001]" />
                ))}
              </div>

              <blockquote className="text-base sm:text-lg text-[#0F0F0F]/85 font-normal leading-relaxed italic">
                &ldquo;{rev.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-[#0F0F0F]/10">
                <div className="relative w-12 h-12 overflow-hidden shrink-0 border-2 border-[#FC5001]">
                  <Image src={rev.avatar} alt={rev.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F0F0F]">{rev.name}</div>
                  <div className="text-xs text-[#0F0F0F]/60">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
