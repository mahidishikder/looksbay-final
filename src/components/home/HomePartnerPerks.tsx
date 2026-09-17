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
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#F8F8F8] text-[#0D0D0D] border-t border-[#E5E5E5]">
        <div className="max-w-[1640px] mx-auto space-y-16">

          {/* Inclusions + How It Works */}
          <div className="bg-white border border-[#E5E5E5] p-8 sm:p-14 lg:p-16">
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-xs uppercase tracking-[0.22em] text-[#F4511E] font-semibold mb-2">
                What&apos;s Included
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D0D0D]">
                Everything you need for a stress-free launch.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left: Checklist */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xl font-bold text-[#0D0D0D] pb-2 border-b border-[#E5E5E5]">
                  Included With Every Template:
                </h3>
                <ul className="space-y-3.5 pt-2">
                  {includedItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-[#3D3D3D]">
                      <span className="w-5 h-5 bg-[#F4511E] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: How It Works */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xl font-bold text-[#0D0D0D] pb-2 border-b border-[#E5E5E5]">
                  How The Process Works:
                </h3>
                <div className="space-y-5 pt-2">
                  {howItWorksSteps.map((step) => (
                    <div key={step.step} className="flex items-start gap-4 p-4 bg-[#F8F8F8] border border-[#E5E5E5] hover:border-[#F4511E] transition-colors group">
                      <span className="w-8 h-8 bg-[#F4511E] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {step.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-[#0D0D0D] group-hover:text-[#F4511E] transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-xs text-[#6B6B6B] mt-1 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Circle Platinum Banner */}
          <div className="bg-[#F4511E] text-white p-8 sm:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Background texture */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 20px)",
              }}
            />
            <div className="relative space-y-4 max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/20 text-[10px] uppercase tracking-[0.2em] text-white font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Authorized Squarespace Circle Platinum Partner</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white">
                Exclusive partner benefits for all Looksbay clients.
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl">
                As a verified Platinum Circle Studio, all of our templates and custom clients enjoy an extended 6-month free trial plus 20% off your first year of annual Squarespace hosting.
              </p>
            </div>

            <div className="relative shrink-0 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="group px-8 py-4 bg-[#0D0D0D] hover:bg-white hover:text-[#0D0D0D] text-white text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2"
              >
                <span>Book Custom Project</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              <Link
                href="/templates"
                className="px-6 py-4 bg-white/20 hover:bg-white/30 text-white text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                Shop Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProjectOrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
