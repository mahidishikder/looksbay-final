import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industryCategories, IndustryCategory } from "@/data/industryData";
import { Star, ArrowRight, ArrowUpRight, CheckCircle2, Trophy, Globe, Zap } from "lucide-react";
import InteractiveLeadHub from "@/components/shared/InteractiveLeadHub";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return industryCategories.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = industryCategories.find((item) => item.slug === slug);

  return {
    title: category ? `${category.heroTitle} ${category.heroHighlight}` : "Website Design Services",
    description: category?.heroDescription || "High-performance website design and development services from Looksbay.",
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function IndustryCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = industryCategories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#FAF8FF] text-slate-900 overflow-x-hidden selection:bg-[#CCFF00] selection:text-black">
      
      {/* ══════════════════════════════════════════════════════════
          ① HERO SECTION — ELECTRIC VIOLET + NEON LIME ACCENT (MATCHES SCREENSHOT)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 sm:pt-36 sm:pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden bg-gradient-to-b from-[#4C1D95] via-[#581C87] to-[#3B0764] text-white">
        {/* Radiant Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#7C3AED]/35 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#CCFF00]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto text-center flex flex-col items-center">
          
          {/* Top Tag Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              {category.heroTag}
            </span>
          </div>

          {/* Giant Bold Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black tracking-tight text-white leading-[1.05] max-w-5xl">
            {category.heroTitle} <br />
            <span className="text-[#CCFF00]">{category.heroHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-base sm:text-xl text-purple-100 max-w-2xl font-medium leading-relaxed">
            {category.heroDescription}
          </p>

          {/* Action Row matching screenshot: Clutch Card + Neon Button */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {/* Clutch Verified Badge Card */}
            <div className="px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3 text-left shadow-sm">
              <div>
                <div className="text-[11px] font-black uppercase tracking-wider text-zinc-300">
                  Clutch Verified
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#CCFF00] text-[#CCFF00]" />
                  ))}
                  <span className="text-xs font-black text-white ml-1">4.9/5</span>
                </div>
                <div className="text-[10px] text-purple-200">150+ Global Client Reviews</div>
              </div>
            </div>

            {/* Neon Lime CTA */}
            <Link
              href="/contact"
              className="btn-neon-lime px-10 py-4 rounded-full text-sm font-black inline-flex items-center gap-2 shadow-[0_0_40px_rgba(204,255,0,0.35)] active:scale-95 transition-transform"
            >
              <span>Get an Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ② PROJECTS CATALOG — MATCHES SCREENSHOT (5 CURATED WEBSITES)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-slate-200/80">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-purple-700 mb-2 block">
              Curated Industry Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1E0D36] tracking-tight leading-tight">
              {category.projectsHeader}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-sm">
            {category.projectsSubheader}
          </p>
        </div>

        {/* 5 Distinct Project Cards Stacked (Exact visual layout from screenshot) */}
        <div className="space-y-12">
          {category.projects.map((p, idx) => (
            <div
              key={p.id}
              className="glass-surface rounded-[36px] bg-white border border-purple-100/90 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(124,58,237,0.1)] hover:border-purple-300 transition-all duration-500 overflow-hidden p-6 sm:p-10 lg:p-12 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* LEFT COLUMN: Project Details */}
                <div className="lg:col-span-5 space-y-5">
                  {/* Country Flag & Year meta */}
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-500">
                    <span className="text-lg">{p.countryFlag}</span>
                    <span>{p.location}</span>
                    <span>•</span>
                    <span className="font-mono">{p.year}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-800 border border-purple-200/60">
                    {p.categoryTag}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E0D36] tracking-tight leading-tight group-hover:text-purple-700 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm font-bold text-slate-700 mt-1">
                      {p.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {p.description}
                  </p>

                  {/* Metric Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Delivered Impact
                      </div>
                      <div className="text-xl font-black text-purple-950">
                        {p.metric}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {p.techTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-900 text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button matching screenshot: "Explore project ↗" */}
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E0D36] text-white text-xs font-black hover:bg-purple-900 transition-all shadow-md group-hover:shadow-lg active:scale-95"
                    >
                      <span>Explore project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* RIGHT COLUMN: Clean Single Image Showcase (No coded mockups) */}
                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-200/80 transition-all duration-500 group-hover:scale-[1.015]">
                    <img loading="lazy" decoding="async"
                      src={p.laptopImage}
                      alt={`${p.title} website`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link: "See All Works ➔" */}
        <div className="pt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-black text-purple-700 hover:text-purple-900 transition-colors"
          >
            <span>See All Works</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ③ THE ROYAL BLUE INTERACTIVE LEAD HUB (MATCHES SCREENSHOT!)
      ══════════════════════════════════════════════════════════ */}
      <InteractiveLeadHub />

      {/* ══════════════════════════════════════════════════════════
          ④ FOOTER WITH QUICK LINKS TO ALL 10 CATEGORIES
      ══════════════════════════════════════════════════════════ */}
      <footer className="border-t border-purple-900/20 bg-[#120726] text-white py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
            {/* Col 1: Brand */}
            <div className="md:col-span-4 space-y-4">
              <Link href="/" className="inline-flex items-center gap-2 text-2xl font-black tracking-tight text-white">
                <span>LOOKSBAY</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00]" />
              </Link>
              <p className="text-xs sm:text-sm text-purple-200 leading-relaxed max-w-sm font-medium">
                High-end Web Design &amp; Full-Stack CMS Development Agency. Powered by a 20-person dedicated in-house production collective of senior engineers, designers, and SEO specialists.
              </p>
            </div>

            {/* Col 2: Categories (1-5) */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">Platform Specialties</h4>
              <ul className="space-y-2 text-xs font-semibold text-purple-200">
                {industryCategories.slice(0, 5).map((cat) => (
                  <li key={cat.slug}>
                    <Link href={`/services/${cat.slug}`} className="hover:text-[#CCFF00] transition-colors">
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Categories (6-10) */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">Industry Verticals</h4>
              <ul className="space-y-2 text-xs font-semibold text-purple-200">
                {industryCategories.slice(5).map((cat) => (
                  <li key={cat.slug}>
                    <Link href={`/services/${cat.slug}`} className="hover:text-[#CCFF00] transition-colors">
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300">
            <p>&copy; {new Date().getFullYear()} LOOKSBAY Studio. All rights reserved.</p>
            <div className="flex items-center gap-6 font-medium text-purple-200">
              <a href="mailto:contact@looksbay.com" className="hover:text-white transition-colors">contact@looksbay.com</a>
              <span>•</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
