"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

// ── Website mockup images for the auto-sliding reel
const REEL_IMAGES_ROW_1 = [
  { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", alt: "Business Template" },
  { src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80", alt: "Interior Design Template" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", alt: "Architecture Template" },
  { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", alt: "Finance Template" },
  { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80", alt: "Coaching Template" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", alt: "Wedding Template" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80", alt: "Photography Template" },
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", alt: "Wellness Template" },
];

const REEL_IMAGES_ROW_2 = [
  { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80", alt: "E-Commerce Template" },
  { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", alt: "Law Firm Template" },
  { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", alt: "Course Creator Template" },
  { src: "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/62b9a3b0-d8a4-4576-8090-7303341b0d4e/robins-squarespace-template-cover.jpg?format=750w", alt: "Consultancy Template" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80", alt: "Advisory Template" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", alt: "Designer Template" },
  { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", alt: "Marketing Template" },
  { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", alt: "Real Estate Template" },
];

const ROW1_DOUBLED = [...REEL_IMAGES_ROW_1, ...REEL_IMAGES_ROW_1];
const ROW2_DOUBLED = [...REEL_IMAGES_ROW_2, ...REEL_IMAGES_ROW_2];

export default function Home1_HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const context = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", clearProps: "transform" }
      );
    }, hero);
    return () => context.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-white">

      {/* ── Vertical Stripe Texture (like screenshot) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #E8E8E8 0px, #E8E8E8 1px, transparent 1px, transparent 60px)",
          opacity: 0.5,
        }}
      />

      {/* ── Orange Gradient Blob — top-right (matching screenshot) */}
      <div
        className="absolute top-0 right-0 w-[45%] h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, #FF7A30 0%, #F4511E 35%, rgba(244,81,30,0.15) 70%, transparent 100%)",
          opacity: 0.85,
        }}
      />
      {/* Additional soft glow for natural look */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[700px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,110,50,0.5) 0%, rgba(244,81,30,0.2) 50%, transparent 75%)",
        }}
      />

      {/* ── Main Content */}
      <div className="relative z-10 max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Eyebrow badge — outlined pill with orange dot (matching screenshot) */}
          <div className="hero-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D0D0D] bg-white text-[12px] font-medium text-[#0D0D0D] mb-7 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F4511E] animate-pulse" />
            <span>Creative Agency</span>
          </div>

          {/* Main Heading — extra-bold black (matching screenshot style) */}
          <h1 className="hero-reveal text-[2.8rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.6rem] font-black tracking-tight text-[#0D0D0D] leading-[1.05] mb-5">
            We Design Digital<br />
            <span className="relative inline-block">
              Experiences That
            </span>
            <br />
            <span className="text-[#0D0D0D]">Drive Growth.</span>
          </h1>

          {/* Floating decorative pills (like screenshot) */}
          <div className="hidden md:block">
            <div className="absolute top-40 left-[8%] hero-reveal">
              <span className="px-4 py-2 rounded-full bg-[#F4511E] text-white text-[12px] font-bold shadow-lg shadow-orange-200 flex items-center gap-1.5">
                <span>●</span> Agency
              </span>
            </div>
            <div className="absolute top-52 right-[14%] hero-reveal">
              <span className="px-4 py-2 rounded-full bg-white border border-[#E5E5E5] text-[#0D0D0D] text-[12px] font-bold shadow-md">
                Expert
              </span>
            </div>
          </div>

          {/* Sub-description — orange accent text (matching screenshot) */}
          <p className="hero-reveal text-[13px] sm:text-[15px] text-[#F4511E] font-medium max-w-lg leading-relaxed mb-9">
            From branding to websites, we help ambitious companies turn ideas into
            measurable success.
          </p>

          {/* CTA Buttons — matching screenshot style exactly */}
          <div className="hero-reveal flex flex-wrap items-center justify-center gap-4">
            {/* Primary: Orange filled with arrow */}
            <Link
              href="/templates"
              className="group flex items-center gap-2.5 px-7 py-3.5 bg-[#F4511E] hover:bg-[#D43D0F] text-white text-[14px] font-semibold transition-all duration-200 rounded-md shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:scale-[1.02]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            {/* Secondary: Outlined with orange arrow */}
            <Link
              href="/portfolio"
              className="group flex items-center gap-2.5 px-7 py-3.5 bg-white border border-[#0D0D0D] hover:border-[#F4511E] text-[#0D0D0D] hover:text-[#F4511E] text-[14px] font-semibold transition-all duration-200 rounded-md"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4 text-[#F4511E] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="hero-reveal mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#6B6B6B] font-medium">
            <div className="text-center">
              <strong className="text-[#0D0D0D] font-black text-base block">450+</strong>
              <span>Templates Launched</span>
            </div>
            <div className="w-px h-6 bg-[#E5E5E5] hidden sm:block" />
            <div className="text-center">
              <strong className="text-[#0D0D0D] font-black text-base block">6 Months</strong>
              <span>Free Squarespace Trial</span>
            </div>
            <div className="w-px h-6 bg-[#E5E5E5] hidden sm:block" />
            <div className="text-center">
              <strong className="text-[#0D0D0D] font-black text-base block">20% Off</strong>
              <span>Annual Hosting</span>
            </div>
            <div className="w-px h-6 bg-[#E5E5E5] hidden sm:block" />
            <div className="text-center">
              <strong className="text-[#0D0D0D] font-black text-base block">7 Days</strong>
              <span>Done-For-You Launch</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          AUTO-SLIDING IMAGE REEL — Two rows
          Matching screenshot mockup slider section
      ═══════════════════════════════════════════════ */}
      <div className="relative z-10 pb-0 overflow-hidden bg-white">
        <div className="hero-reel-mask">
          {/* Row 1 → slides left */}
          <div className="mb-3 overflow-hidden">
            <div className="flex gap-3 animate-marquee-fast" style={{ width: "max-content" }}>
              {ROW1_DOUBLED.map((img, i) => (
                <Link
                  key={`r1-${i}`}
                  href="/templates"
                  className="group relative shrink-0 w-[280px] sm:w-[340px] h-[190px] sm:h-[220px] overflow-hidden bg-[#F0F0F0] border border-[#E5E5E5] hover:border-[#F4511E] transition-all duration-300 cursor-pointer rounded-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="340px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04] opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3">
                    <span className="text-[10px] uppercase tracking-widest text-white font-semibold flex items-center gap-1">
                      View Template <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Row 2 ← slides right */}
          <div className="overflow-hidden">
            <div className="flex gap-3 animate-marquee-reverse" style={{ width: "max-content" }}>
              {ROW2_DOUBLED.map((img, i) => (
                <Link
                  key={`r2-${i}`}
                  href="/templates"
                  className="group relative shrink-0 w-[280px] sm:w-[340px] h-[190px] sm:h-[220px] overflow-hidden bg-[#F0F0F0] border border-[#E5E5E5] hover:border-[#F4511E] transition-all duration-300 cursor-pointer rounded-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="340px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04] opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3">
                    <span className="text-[10px] uppercase tracking-widest text-white font-semibold flex items-center gap-1">
                      View Template <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}