"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

// ── Optimized Website mockup images for the auto-sliding reel
const REEL_IMAGES_ROW_1 = [
  { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=480&q=75", alt: "Squarespace Business Website" },
  { src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=480&q=75", alt: "Squarespace Interior Design Portfolio" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=480&q=75", alt: "Squarespace Architecture Portfolio" },
  { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=480&q=75", alt: "Squarespace Corporate Website" },
  { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=480&q=75", alt: "Squarespace Life Coach Website" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=480&q=75", alt: "Squarespace Wedding Website" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=480&q=75", alt: "Squarespace Photography Website" },
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=480&q=75", alt: "Squarespace Fitness and Gym Website" },
];

const REEL_IMAGES_ROW_2 = [
  { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=480&q=75", alt: "Squarespace Ecommerce Store" },
  { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=480&q=75", alt: "Squarespace Real Estate Website" },
  { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=480&q=75", alt: "Squarespace Course Website" },
  { src: "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/62b9a3b0-d8a4-4576-8090-7303341b0d4e/robins-squarespace-template-cover.jpg?format=500w", alt: "Squarespace Consulting Website" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&q=75", alt: "Squarespace Restaurant Menu Design" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=480&q=75", alt: "Squarespace Portfolio Website Builder" },
  { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=480&q=75", alt: "Squarespace Marketing Agency Site" },
  { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=480&q=75", alt: "Squarespace Realtor Website" },
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
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out", clearProps: "transform" }
      );
    }, hero);
    return () => context.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-[#FFFFFF]">

      {/* ── Seamless Left-to-Right Unified Gradient Background (Harmonized Left & Right) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(115deg, #FFFFFF 0%, #F5F5F5 30%, #FFFFFF 65%, #F5F5F5 100%)",
        }}
      />

      {/* ── Subtle Atmospheric Gradient Accents linking Left and Right */}
      <div
        className="absolute top-0 right-0 w-[55%] h-[85%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 85% 15%, rgba(252,80,1,0.14) 0%, rgba(252,80,1,0.03) 50%, transparent 75%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-[50%] h-[85%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 15% 15%, rgba(252,80,1,0.08) 0%, rgba(245,245,245,0.7) 45%, transparent 75%)",
        }}
      />

      {/* ── Vertical Texture Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, rgba(15,15,15,0.04) 0px, rgba(15,15,15,0.04) 1px, transparent 1px, transparent 60px)",
          opacity: 0.7,
        }}
      />

      {/* ── Main Content */}
      <div className="relative z-10 max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Eyebrow badge — outlined pill with orange dot */}
          <div className="hero-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0F0F0F] bg-[#FFFFFF] text-[12px] font-semibold text-[#0F0F0F] mb-7 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FC5001] animate-pulse" />
            <span>Squarespace Circle Platinum Studio</span>
          </div>

          {/* Main Heading — #0F0F0F with #FC5001 accent */}
          <h1 className="hero-reveal text-[2.8rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.6rem] font-black tracking-tight text-[#0F0F0F] leading-[1.05] mb-5">
            We Design Digital<br />
            <span className="relative inline-block">
              Experiences That
            </span>
            <br />
            <span className="text-[#FC5001]">Drive Growth.</span>
          </h1>

          {/* Floating decorative pills */}
          <div className="hidden md:block">
            <div className="absolute top-40 left-[8%] hero-reveal">
              <span className="px-4 py-2 rounded-full bg-[#FC5001] text-[#FFFFFF] text-[12px] font-bold shadow-md flex items-center gap-1.5">
                <span>●</span> Squarespace Expert
              </span>
            </div>
            <div className="absolute top-52 right-[14%] hero-reveal">
              <span className="px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#0F0F0F]/15 text-[#0F0F0F] text-[12px] font-bold shadow-sm">
                Fluid Engine 7.1
              </span>
            </div>
          </div>

          {/* Sub-description — #FC5001 accent text */}
          <p className="hero-reveal text-[13px] sm:text-[15px] text-[#FC5001] font-semibold max-w-lg leading-relaxed mb-9">
            From custom Squarespace web design to designer templates, we help ambitious companies turn visitors into clients.
          </p>

          {/* CTA Buttons */}
          <div className="hero-reveal flex flex-wrap items-center justify-center gap-4">
            {/* Primary: Orange filled button */}
            <Link
              href="/templates"
              className="group flex items-center gap-2.5 px-7 py-3.5 bg-[#FC5001] hover:opacity-95 text-[#FFFFFF] text-[14px] font-bold transition-all duration-200 rounded-md shadow-md hover:scale-[1.02]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            {/* Secondary: White outlined button */}
            <Link
              href="/portfolio"
              className="group flex items-center gap-2.5 px-7 py-3.5 bg-[#FFFFFF] border border-[#0F0F0F] hover:border-[#FC5001] text-[#0F0F0F] hover:text-[#FC5001] text-[14px] font-bold transition-all duration-200 rounded-md"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4 text-[#FC5001] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="hero-reveal mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#0F0F0F]/70 font-medium">
            <div className="text-center">
              <strong className="text-[#0F0F0F] font-black text-base block">450+</strong>
              <span>Websites Launched</span>
            </div>
            <div className="w-px h-6 bg-[#0F0F0F]/10 hidden sm:block" />
            <div className="text-center">
              <strong className="text-[#0F0F0F] font-black text-base block">6 Months</strong>
              <span>Free Squarespace Trial</span>
            </div>
            <div className="w-px h-6 bg-[#0F0F0F]/10 hidden sm:block" />
            <div className="text-center">
              <strong className="text-[#0F0F0F] font-black text-base block">20% Off</strong>
              <span>Annual Squarespace Hosting</span>
            </div>
            <div className="w-px h-6 bg-[#0F0F0F]/10 hidden sm:block" />
            <div className="text-center">
              <strong className="text-[#0F0F0F] font-black text-base block">7 Days</strong>
              <span>Fast-Track Launch</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          AUTO-SLIDING MOCKUP REEL — Dual continuous rows
      ═══════════════════════════════════════════════ */}
      <div className="relative z-10 pb-0 overflow-hidden bg-[#FFFFFF]">
        <div className="hero-reel-mask">
          {/* Row 1 → slides left */}
          <div className="mb-3 overflow-hidden">
            <div className="flex gap-3 animate-marquee-fast" style={{ width: "max-content" }}>
              {ROW1_DOUBLED.map((img, i) => (
                <Link
                  key={`r1-${i}`}
                  href="/templates"
                  className="group relative shrink-0 w-[280px] sm:w-[340px] h-[190px] sm:h-[220px] overflow-hidden bg-[#F5F5F5] border border-[#0F0F0F]/10 hover:border-[#FC5001] transition-all duration-300 cursor-pointer rounded-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 280px, 340px"
                    loading={i < 4 ? "eager" : "lazy"}
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#FFFFFF] font-semibold flex items-center gap-1">
                      View Design <ArrowRight className="w-3 h-3 text-[#FC5001]" />
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
                  className="group relative shrink-0 w-[280px] sm:w-[340px] h-[190px] sm:h-[220px] overflow-hidden bg-[#F5F5F5] border border-[#0F0F0F]/10 hover:border-[#FC5001] transition-all duration-300 cursor-pointer rounded-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 280px, 340px"
                    loading="lazy"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#FFFFFF] font-semibold flex items-center gap-1">
                      View Design <ArrowRight className="w-3 h-3 text-[#FC5001]" />
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