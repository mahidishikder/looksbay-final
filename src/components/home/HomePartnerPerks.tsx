"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import ProjectOrderModal from "@/components/shared/ProjectOrderModal";

const includedItems = [
  "Squarespace 7.1 Fluid Engine drag-and-drop flexibility",
  "Extended 6-month free trial before paying for hosting",
  "20% discount on your first year of annual Squarespace hosting",
  "Step-by-step video setup and customization tutorials",
  "Flawless mobile-first responsive architecture",
  "Pre-configured SEO meta tags, sitemap, and Google indexing",
  "Full ownership of all files, graphics, and page assets",
  "30 days of direct email support from our senior designers",
];

const howItWorksSteps = [
  {
    step: "01",
    title: "Instant Transfer to Your Account",
    desc: "Within 24 hours of purchase, we send an official Squarespace contributor invite directly to your email.",
  },
  {
    step: "02",
    title: "Effortless Customization",
    desc: "Follow our video tutorials to plug in your brand colors, fonts, copy, and photography in days.",
  },
  {
    step: "03",
    title: "Connect Domain & Launch",
    desc: "Connect your custom domain, activate your 20% hosting discount, and launch with complete pride.",
  },
];

export default function HomePartnerPerks() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#F5F5F5] text-[#0F0F0F] border-t border-[#0F0F0F]/10">
        <div className="max-w-[1640px] mx-auto space-y-16">

          {/* Inclusions + How It Works */}
          <div className="bg-[#FFFFFF] border border-[#0F0F0F]/10 p-8 sm:p-14 lg:p-16 rounded-xs">
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-xs uppercase tracking-[0.22em] text-[#FC5001] font-semibold mb-2">
                What&apos;s Included
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F0F0F]">
                Everything you need for a stress-free launch.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left: Checklist */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xl font-bold text-[#0F0F0F] pb-2 border-b border-[#0F0F0F]/10">
                  Included With Every Template:
                </h3>
                <ul className="space-y-3 pt-2">
                  {includedItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-[#0F0F0F]/80">
                      <span className="w-5 h-5 rounded-full bg-[#FC5001] flex items-center justify-center shrink-0 mt-0.5 text-[#FFFFFF]">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: How It Works */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="text-xl font-bold text-[#0F0F0F] pb-2 border-b border-[#0F0F0F]/10">
                  How It Works in 3 Steps:
                </h3>
                <div className="space-y-6 pt-2">
                  {howItWorksSteps.map((step) => (
                    <div key={step.step} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#0F0F0F] text-[#FFFFFF] font-mono text-sm font-bold flex items-center justify-center shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#0F0F0F] mb-1">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-[#0F0F0F]/65 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Circle Partner Perks Callout */}
            <div className="mt-14 pt-10 border-t border-[#0F0F0F]/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#F5F5F5] p-6 sm:p-8 rounded-xs">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#FC5001] flex items-center justify-center text-[#FFFFFF] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#0F0F0F]">
                    Exclusive Squarespace Circle Platinum Privileges
                  </h4>
                  <p className="text-xs text-[#0F0F0F]/65">
                    Save 20% on your first annual subscription + get an extended 6-month trial.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 bg-[#FC5001] hover:opacity-95 text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-all shrink-0 rounded-xs flex items-center gap-2"
              >
                <span>Claim Perks</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProjectOrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService="7-Day Squarespace Setup"
      />
    </>
  );
}
