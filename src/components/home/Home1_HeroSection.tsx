"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Play,
} from "lucide-react";

export default function Home1_HeroSection() {
  const videoEmbedUrl = "https://www.youtube.com/embed/k2maqlyUuVw?si=g05sLuxSE0aur-Q6";
  const [videoStarted, setVideoStarted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        { autoAlpha: 0, y: 34 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", clearProps: "transform" },
      );

      gsap.to(".hero-grid", {
        yPercent: -18,
        scale: 1.12,
        ease: "none",
        scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 },
      });

      gsap.to(".hero-stage", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1.2 },
      });

      gsap.to(".hero-video-frame", {
        yPercent: -14,
        scale: 0.94,
        ease: "none",
        scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1.4 },
      });

      ScrollTrigger.refresh();
    }, hero);

    return () => context.revert();
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const hero = heroRef.current;
    if (!hero || event.pointerType === "touch") return;
    const bounds = hero.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    gsap.to(hero.querySelectorAll(".hero-orbit"), {
      x: x * 14,
      y: y * 10,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });

    gsap.to(hero.querySelector(".hero-video-frame"), {
      rotateX: y * -1.5,
      rotateY: x * 2,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <section
      ref={heroRef}
      onPointerMove={handlePointerMove}
      className="hero-home relative pt-36 pb-[100px] px-6 sm:px-12 lg:px-20 overflow-hidden bg-gradient-to-b from-[#7B35E8] via-[#9D5CFF] to-[#6B21D0] text-white"
    >
      {/* Ambient Top Radiant Glow */}
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="hero-orbit hero-orbit-one absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-[#9D5CFF]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="hero-orbit hero-orbit-two absolute top-1/4 right-10 w-[350px] h-[350px] bg-[#CCFF00]/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="hero-stage relative z-10 max-w-[1400px] mx-auto text-center flex flex-col items-center">
        {/* Status Capsule Badge */}
        <div className="hero-reveal hero-reveal-1 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-white">
            20-Person In-House Squad · Dedicated Production Pods
          </span>
        </div>

        {/* Massive Punchy Headline */}
        <h1 className="hero-reveal hero-reveal-2 text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-white leading-[1.04] max-w-5xl">
          Clear. Credible. <br />
          <span className="text-white">High-Converting Websites</span> <br />
          <span className="inline-block mt-3 px-6 py-1 rounded-2xl bg-[#CCFF00] text-black font-black tracking-tight transform -rotate-1 shadow-[0_0_50px_rgba(204,255,0,0.4)]">
            ready to win big next.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-reveal hero-reveal-3 mt-8 text-base sm:text-xl text-purple-100 max-w-2xl font-medium leading-relaxed">
          We engineer flagship websites across Shopify Plus, Webflow, and custom CMS platforms. Zero code bloat. Guaranteed 95+ PageSpeed. Built for ambitious founders.
        </p>

        {/* Dual CTAs */}
        <div className="hero-reveal hero-reveal-4 mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-neon-lime px-9 py-4 rounded-full text-sm font-black inline-flex items-center gap-3 transition-all"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="#showcase"
            className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm backdrop-blur-md transition-all inline-flex items-center gap-2"
          >
            <span>Explore Selected Works</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>

        {/* Proof Badges Bar */}
        <div className="hero-reveal hero-reveal-5 mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold text-purple-100">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
            <span>95+ PageSpeed Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
            <span>30-Day Launch Warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
            <span>Zero-Outsourced Production</span>
          </div>
        </div>

        {/* Overlapping Hero Video Showcase (Title Hidden Clean Video Container) */}
        <div className="hero-reveal hero-reveal-6 hero-video-frame mt-14 w-full max-w-5xl relative rounded-3xl p-2.5 sm:p-3 bg-white/10 border border-white/20 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.45)] group">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black shadow-2xl">
            {videoStarted ? (
              <iframe
                className="absolute inset-0 w-full h-full border-0"
                src={videoEmbedUrl}
                title="Website Showcase Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setVideoStarted(true)}
                className="group/video absolute inset-0 flex items-center justify-center overflow-hidden text-white"
                aria-label="Play Looksbay website showcase video"
              >
                <img
                  src="https://i.ytimg.com/vi/k2maqlyUuVw/maxresdefault.jpg"
                  alt="Looksbay website showcase video preview"
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover/video:scale-105"
                />
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#CCFF00] text-black shadow-[0_0_45px_rgba(204,255,0,0.5)] transition-transform duration-300 group-hover/video:scale-110">
                  <Play className="ml-1 h-6 w-6 fill-current" />
                </span>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}