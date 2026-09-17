import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industryCategories, IndustryCategory } from "@/data/industryData";
import { Star, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import InteractiveLeadHub from "@/components/shared/InteractiveLeadHub";
import Home10_Footer from "@/components/home/Home10_Footer";

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
    title: category ? `${category.heroTitle} ${category.heroHighlight}` : "Squarespace Design Services",
    description: category?.heroDescription || "High-performance Squarespace design and development services from Looksbay.",
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
    <div className="relative min-h-screen bg-white text-[#0D0D0D] overflow-x-hidden selection:bg-[#F4511E] selection:text-white">
      {/* ══════════════════════════════════════════════════════════
          ① HERO SECTION — CLEAN WHITE + WARM ORANGE ACCENT
      ══════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 px-6 sm:px-10 lg:px-16 overflow-hidden bg-white border-b border-[#EAEAEA]">
        {/* Subtle Warm Orange Glow */}
        <div
          className="absolute top-0 right-0 w-[550px] h-[550px] pointer-events-none rounded-full"
          style={{
            background: "radial-gradient(circle at top right, rgba(244,81,30,0.15) 0%, rgba(255,122,48,0.05) 45%, transparent 70%)",
          }}
        />
        {/* Vertical Stripe Texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(90deg, #EAEAEA 0px, #EAEAEA 1px, transparent 1px, transparent 60px)",
            opacity: 0.35,
          }}
        />

        <div className="relative z-10 max-w-[1640px] mx-auto text-center flex flex-col items-center">
          {/* Top Tag Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D0D0D] bg-white backdrop-blur-md mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F4511E] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D0D0D]">
              {category.heroTag}
            </span>
          </div>

          {/* Bold Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tight text-[#0D0D0D] leading-[1.06] max-w-5xl">
            {category.heroTitle} <br />
            <span className="text-[#F4511E]">{category.heroHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-[#555555] max-w-2xl font-normal leading-relaxed">
            {category.heroDescription}
          </p>

          {/* Action Row */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
            {/* Rating Badge Card */}
            <div className="px-5 py-3 rounded-2xl bg-[#FAF8F5] border border-[#EAEAEA] flex items-center gap-3 text-left shadow-xs">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                  Squarespace Circle Partner
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F4511E] text-[#F4511E]" />
                  ))}
                  <span className="text-xs font-black text-[#0D0D0D] ml-1">4.9/5</span>
                </div>
                <div className="text-[10px] text-[#666666]">150+ Verified Client Reviews</div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#0D0D0D] hover:bg-[#F4511E] text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <span>Get a Custom Scope</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ② PROJECTS CATALOG
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 max-w-[1640px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#EAEAEA]">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F4511E] mb-2 block">
              Curated Industry Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0D0D0D] tracking-tight leading-tight">
              {category.projectsHeader}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#666666] font-normal max-w-sm">
            {category.projectsSubheader}
          </p>
        </div>

        {/* Project Cards Stacked */}
        <div className="space-y-12">
          {category.projects.map((p) => (
            <div
              key={p.id}
              className="rounded-[32px] bg-white border border-[#E5E5E5] shadow-xs hover:border-[#F4511E] hover:shadow-[0_20px_50px_rgba(244,81,30,0.08)] transition-all duration-500 overflow-hidden p-6 sm:p-10 lg:p-12 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* LEFT COLUMN: Project Details */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-[#777777]">
                    <span className="text-lg">{p.countryFlag}</span>
                    <span>{p.location}</span>
                    <span>•</span>
                    <span className="font-mono">{p.year}</span>
                  </div>

                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF4F0] text-[#F4511E] border border-[#F4511E]/20">
                    {p.categoryTag}
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0D0D0D] tracking-tight leading-tight group-hover:text-[#F4511E] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#555555] mt-1">
                      {p.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-normal">
                    {p.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAEAEA] flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#888888]">
                        Delivered Impact
                      </div>
                      <div className="text-xl font-black text-[#0D0D0D]">
                        {p.metric}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {p.techTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#0D0D0D] text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D0D0D] text-white text-xs font-bold hover:bg-[#F4511E] transition-all shadow-xs group-hover:shadow-md"
                    >
                      <span>Explore Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#F4511E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F5F5F5] shadow-lg border border-[#E5E5E5] transition-all duration-500 group-hover:scale-[1.015]">
                    <img
                      loading="lazy"
                      decoding="async"
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

        <div className="pt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0D0D] hover:text-[#F4511E] transition-colors"
          >
            <span>See All Selected Works</span>
            <ArrowRight className="w-4 h-4 text-[#F4511E]" />
          </Link>
        </div>
      </section>

      {/* ③ Lead Hub */}
      <InteractiveLeadHub />

      {/* ④ Official Looksbay Luxury Footer */}
      <Home10_Footer />
    </div>
  );
}
