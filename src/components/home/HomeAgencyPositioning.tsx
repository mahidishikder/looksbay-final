"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Layers3, Rocket, ShieldCheck } from "lucide-react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const capabilities = [
  ["01", "Strategy before pixels", "We clarify your audience, offer and conversion path before designing the interface.", Compass],
  ["02", "Design that earns trust", "Clear hierarchy, responsive systems and a visual direction built around your business.", Layers3],
  ["03", "A build your team can use", "We develop on the platform that fits your content, workflow and long-term goals.", Rocket],
  ["04", "Care beyond launch", "QA, performance foundations and a practical handover so the website keeps working for you.", ShieldCheck],
] as const;

export default function HomeAgencyPositioning() {
  return (
    <section className="bg-[#F5F6FA] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <RevealOnScroll>
          <div className="grid gap-10 rounded-[28px] border border-[#E8E4F2] bg-white p-7 shadow-[0_18px_55px_rgba(76,29,149,0.06)] sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:p-14">
            <div>
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#7C3AED]">A web agency for serious growth</p>
              <h2 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] text-[#0B0B0F] sm:text-6xl">
                We make websites people understand, trust and choose.
              </h2>
            </div>
            <div>
              <p className="max-w-lg text-base leading-7 text-[#6B6B73]">
                LOOKSBAY is a design and development partner for businesses that need more than a polished homepage. We connect strategy, design and technology into one clear digital experience.
              </p>
              <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#7C3AED] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:gap-3">
                Explore our capabilities <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {capabilities.map(([number, title, text, Icon], index) => (
            <RevealOnScroll key={number} delay={index * 70} className="h-full">
              <article className="group flex h-full min-h-[250px] gap-6 rounded-[24px] border border-[#E8E4F2] bg-white p-7 shadow-[0_12px_38px_rgba(76,29,149,0.05)] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[#C4A0FF] hover:shadow-[0_24px_60px_rgba(76,29,149,0.12)] sm:gap-8 sm:p-9">
                <span className="pt-1 text-sm font-black text-[#7C3AED]">{number}</span>
                <div className="min-w-0">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#7C3AED] shadow-[0_8px_24px_rgba(76,29,149,0.08)] transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:rotate-6">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="h-px w-8 bg-[#D8C9F2] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-14 group-hover:bg-[#7C3AED]" />
                  </div>
                  <h3 className="text-2xl font-black tracking-[-0.03em] text-[#0B0B0F] transition-colors duration-[800ms] group-hover:text-[#7C3AED]">{title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#6B6B73]">{text}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
