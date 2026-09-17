"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProjectOrderModal from "@/components/shared/ProjectOrderModal";

const capabilities = [
  {
    num: "01",
    title: "Bespoke Squarespace 7.1 Design",
    desc: "Custom Figma wireframing, high-impact conversion copywriting, and bespoke CSS styling on Fluid Engine.",
  },
  {
    num: "02",
    title: "7-Day Fast-Track Template Setup",
    desc: "We take your chosen Looksbay template, integrate your brand identity, copy, and images, and launch in 7 days.",
  },
  {
    num: "03",
    title: "WordPress & Wix Platform Migration",
    desc: "Flawless transfer of all blog posts, images, and pages into Squarespace 7.1 with 100% SEO preserved.",
  },
];

export default function HomeEditorialServices() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#0F0F0F] text-[#FFFFFF] overflow-hidden">
        <div className="max-w-[1640px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Narrative & Offerings */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#FC5001] font-semibold mb-3">
                Bespoke Web Design &amp; Strategy
              </p>
              <h2 className="text-3xl sm:text-5xl lg:text-[3.8rem] font-black tracking-tight text-[#FFFFFF] leading-[1.08]">
                You have a vision.<br />We bring it to life.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#FFFFFF]/75 leading-relaxed max-w-xl">
              For ambitious brands ready for a completely custom digital home. We combine strategic conversion architecture, custom CSS micro-interactions, and Fluid Engine 7.1 power so your website commands premium authority.
            </p>

            {/* Numbered Capability Rows */}
            <div className="space-y-4 pt-2">
              {capabilities.map((item) => (
                <div
                  key={item.num}
                  className="py-4 border-b border-[#FFFFFF]/10 flex items-start gap-4 group cursor-default"
                >
                  <span className="text-xs font-mono text-[#FC5001] mt-1 shrink-0 font-bold">
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#FFFFFF] group-hover:text-[#FC5001] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#FFFFFF]/60 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#FC5001] shrink-0 mt-1 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="group px-8 py-4 bg-[#FC5001] hover:opacity-95 text-[#FFFFFF] text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center gap-2 hover:scale-[1.02] rounded-xs"
              >
                <span>Book a Custom Project</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              <Link
                href="/services"
                className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors"
              >
                Explore Services →
              </Link>
            </div>
          </div>

          {/* Right Column: Styled Mockup */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden bg-[#0F0F0F] border border-[#FFFFFF]/15 shadow-2xl aspect-[4/3] rounded-xs">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
                alt="Squarespace Studio Custom Design Preview"
                fill
                loading="lazy"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <ProjectOrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService="Bespoke Squarespace Web Design"
      />
    </>
  );
}
