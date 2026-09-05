"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * 👥 About Component 5: Bottom CTA Banner
 * "Book a direct sprint strategy call with our Senior Squad."
 */
export default function About5_BottomCta() {
  return (
    <section className="rounded-[32px] bg-gradient-to-r from-[#2E1065] via-[#4C1D95] to-[#581C87] p-10 sm:p-14 text-white text-center shadow-xl">
      <div className="max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-black uppercase tracking-widest text-[#CCFF00]">
          Ready To Collaborate?
        </span>
        <h2 className="text-3xl sm:text-4xl font-black">
          Book a direct sprint strategy call with our Senior Squad.
        </h2>
        <p className="text-sm text-purple-200 leading-relaxed font-medium">
          We review your current site or project wireframe and present an architectural blueprint within 24 hours.
        </p>
        <div className="pt-3">
          <Link
            href="/contact"
            className="btn-neon-lime px-8 py-3.5 rounded-full text-sm font-black inline-flex items-center gap-2 shadow-lg"
          >
            <span>Schedule Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
