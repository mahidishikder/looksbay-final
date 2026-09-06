"use client";

import React from "react";
import Link from "next/link";

/**
 * 🏠 Home Component 10: Footer
 * Sleek minimalist dark purple footer with full platform navigation & frameworks
 */
export default function Home10_Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-purple-900/20 bg-gradient-to-br from-[#2E1065] via-[#3B0764] to-[#17062F] px-6 py-16 text-white sm:px-12 lg:px-20 lg:py-20">
      <div className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-[#9D5CFF]/20 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-48 left-1/4 h-[360px] w-[360px] rounded-full bg-[#CCFF00]/8 blur-[100px]" />
      <div className="max-w-[1440px] mx-auto">
        <div className="relative grid grid-cols-1 gap-12 border-b border-white/15 pb-14 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-5 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-black tracking-tight text-white">
              <span>LOOKSBAY</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00]" />
            </Link>
            <p className="max-w-md text-sm font-medium leading-relaxed text-purple-100 sm:text-base">
              High-performance websites for ambitious brands. Strategy, design, development and SEO delivered by one dedicated in-house team.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-5 py-3 text-sm font-black text-black shadow-[0_0_28px_rgba(204,255,0,0.22)] transition-transform hover:scale-[1.03]">
              Start a conversation <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.16em] text-[#CCFF00]">Quick links</h4>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-purple-100">
              <li><Link href="/" className="transition-colors hover:text-white">Home</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-white">About us</Link></li>
              <li><Link href="/portfolio" className="transition-colors hover:text-white">Our work</Link></li>
              <li><Link href="/how-we-work" className="transition-colors hover:text-white">How we work</Link></li>
              <li><Link href="/reviews" className="transition-colors hover:text-white">Client reviews</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-white">Insights</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.16em] text-[#CCFF00]">Services</h4>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-purple-100">
              <li><Link href="/services" className="transition-colors hover:text-white">Website design</Link></li>
              <li><Link href="/services/web-platforms-services" className="transition-colors hover:text-white">Web platforms</Link></li>
              <li><Link href="/services/award-winning-websites" className="transition-colors hover:text-white">Brand websites</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-white">E-commerce</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-white">SEO &amp; growth</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-white">Request a proposal</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.16em] text-[#CCFF00]">Built for growth</h4>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-purple-100">
              From the first strategy call to launch day and beyond, your digital experience stays fast, clear and ready to scale.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/10 px-3 py-1.5 text-xs font-bold text-[#CCFF00]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#CCFF00]" />
              Available for new sprints
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-5 pt-8 text-xs text-purple-200 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Looksbay Studio. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-medium">
            <a href="mailto:contact@looksbay.com" className="transition-colors hover:text-white">contact@looksbay.com</a>
            <Link href="/contact" className="transition-colors hover:text-white">Contact</Link>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">LinkedIn</a>
            <a href="https://fiverr.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">Fiverr Pro</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
