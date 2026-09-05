"use client";

import React from "react";
import Link from "next/link";

/**
 * 🏠 Home Component 10: Footer
 * Sleek minimalist dark purple footer with full platform navigation & frameworks
 */
export default function Home10_Footer() {
  return (
    <footer className="border-t border-purple-900/20 bg-[#120726] text-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-black tracking-tight text-white">
              <span>LOOKSBAY</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00]" />
            </Link>
            <p className="text-xs sm:text-sm text-purple-200 leading-relaxed max-w-sm font-medium">
              High-end Web Design &amp; Full-Stack CMS Development Agency. Powered by a 20-person dedicated in-house production collective of senior engineers, designers, and SEO specialists.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
                Available for new sprints
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Platform Navigation</h4>
            <ul className="space-y-2 text-xs font-semibold text-purple-200">
              <li><Link href="/services" className="hover:text-white transition-colors">CMS &amp; SEO Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio &amp; Selected Works</Link></li>
              <li><Link href="/how-we-work" className="hover:text-white transition-colors">Our Production Process</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Verified Reviews (4.9★)</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Our 20-Person Squad</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Request a Proposal</Link></li>
            </ul>
          </div>

          {/* Col 3: CMS Specializations */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Core Frameworks</h4>
            <div className="flex flex-wrap gap-2 text-xs text-purple-200">
              {["Shopify Plus", "Webflow CMS", "WordPress ACF", "Framer", "GoHighLevel", "Next.js", "Squarespace", "Wix Studio"].map((item) => (
                <span key={item} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300">
          <p>&copy; {new Date().getFullYear()} LOOKSBAY Studio. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium text-purple-200">
            <a href="mailto:contact@looksbay.com" className="hover:text-white transition-colors">contact@looksbay.com</a>
            <span>&bull;</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <span>&bull;</span>
            <a href="https://fiverr.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Fiverr Pro</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
