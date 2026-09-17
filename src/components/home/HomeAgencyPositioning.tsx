"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const capabilities = [
  ["01", "Strategy before pixels", "We clarify your audience, offer and conversion path before designing the interface."],
  ["02", "Design that earns trust", "Clear hierarchy, responsive systems and a visual direction built around your business."],
  ["03", "A build your team can use", "We develop on the platform that fits your content, workflow and long-term goals."],
  ["04", "Care beyond launch", "QA, performance foundations and a practical handover so the website keeps working for you."],
] as const;

export default function HomeAgencyPositioning() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-t border-[#E5E5E5]">
      <div className="mx-auto max-w-[1280px]">
        <RevealOnScroll>
          <div className="grid gap-10 border border-[#E5E5E5] bg-[#F8F8F8] p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:p-16">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F4511E]">Why Squarespace Studio</p>
              <h2 className="max-w-3xl text-4xl font-black leading-[1.0] tracking-tight text-[#0D0D0D] sm:text-6xl">
                We make Squarespace websites people understand, trust and choose.
              </h2>
            </div>
            <div>
              <p className="max-w-lg text-base leading-7 text-[#6B6B6B]">
                LOOKSBAY is a specialized Squarespace studio for businesses that need more than generic templates. We combine strategic conversion copywriting, custom CSS styling, and Fluid Engine 7.1 power so your team can effortlessly manage your website forever.
              </p>
              <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#F4511E] hover:text-[#D43D0F] transition-all duration-300 group">
                Explore our capabilities <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {capabilities.map(([number, title, text], index) => (
            <RevealOnScroll key={number} delay={index * 70} className="h-full">
              <article className="group flex h-full min-h-[200px] gap-8 border border-[#E5E5E5] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#F4511E] hover:shadow-md hover:shadow-orange-50 sm:p-10">
                <span className="pt-1 text-sm font-bold text-[#F4511E] shrink-0">{number}</span>
                <div className="min-w-0">
                  <h3 className="text-xl font-black tracking-tight text-[#0D0D0D] mb-3 group-hover:text-[#F4511E] transition-colors">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#6B6B6B]">{text}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
