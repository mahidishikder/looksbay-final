"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

export interface ProjectShowcaseProps {
  id: string;
  index: number;
  total: number;
  title: string;
  titleHighlight?: string; // Optional neon highlight background (e.g. TorchSensors)
  country: string;
  flag?: string;
  dateRange: string;
  statusDotColor?: string;
  ribbons: { text: string; bg?: string; textCol?: string }[];
  extraRibbonCount?: number;
  description: React.ReactNode;
  initialLikes: number;
  themeBg: string; // Rich pastel background color matching screenshot
  doodleType: "spiral" | "rockon" | "heart" | "loops";
  frontImage?: string;
  frontImageAlt?: string;
  backImage?: string;
  backImageAlt?: string;
  frontCustomContent?: React.ReactNode;
  backCustomContent?: React.ReactNode;
  liveUrl?: string;
}

export default function ProjectShowcaseCard({
  index = 0,
  total = 4,
  title,
  titleHighlight,
  country,
  flag,
  dateRange,
  statusDotColor = "#84cc16",
  ribbons,
  extraRibbonCount = 4,
  description,
  initialLikes,
  themeBg,
  doodleType,
  frontImage,
  frontImageAlt,
  backImage,
  backImageAlt,
  frontCustomContent,
  backCustomContent,
  liveUrl = "/portfolio",
}: ProjectShowcaseProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasLiked) {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  // Sticky progressive offset so cards stack beautifully on scroll
  const stickyTop = 80 + index * 24;
  const zIndex = 10 + index;

  return (
    <div
      style={{
        top: `${stickyTop}px`,
        zIndex: zIndex,
      }}
      className={`sticky w-full will-change-transform pt-8 ${index === total - 1 ? "mb-0" : "mb-6 sm:mb-8"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative rounded-[32px] sm:rounded-[44px] pt-8 sm:pt-12 px-6 sm:px-12 pb-0 border border-black/[0.08] shadow-none group transition-all duration-500 overflow-hidden min-h-[640px] lg:min-h-[680px] flex flex-col justify-between"
        style={{
          backgroundColor: themeBg,
          backgroundImage: "radial-gradient(rgba(120, 80, 180, 0.16) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      >
        {/* Ambient Top Subtle Glow */}
        <div className="absolute top-0 right-1/3 w-[500px] h-[350px] rounded-full bg-white/40 blur-[110px] pointer-events-none" />

        {/* ── CRISP WHITE HAND-DRAWN DOODLE (Spotted & Clearly Visible) ── */}
        <div className="absolute top-1/2 left-[36%] sm:left-[38%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 transition-transform duration-700 group-hover:scale-105">
          {doodleType === "rockon" && (
            <svg
              className="w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
              viewBox="0 0 240 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Index finger standing tall */}
              <path
                d="M75 145 L75 62 C75 52, 86 52, 86 62 L86 112"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Folded middle finger */}
              <path
                d="M96 118 L96 90 C96 82, 107 82, 107 90 L107 122"
                stroke="#FFFFFF"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Folded ring finger */}
              <path
                d="M117 120 L117 92 C117 84, 128 84, 128 92 L128 126"
                stroke="#FFFFFF"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Pinky finger standing tall */}
              <path
                d="M138 138 L138 68 C138 58, 149 58, 149 68 L149 148"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Thumb folded across palm */}
              <path
                d="M58 148 C52 126, 78 120, 96 126"
                stroke="#FFFFFF"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Palm & wrist base curve */}
              <path
                d="M58 148 C58 198, 158 198, 149 148"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Dynamic electric energy spark lines */}
              <path
                d="M95 36 L104 46 L97 53"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M118 32 L127 43 L120 50"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          {doodleType === "spiral" && (
            <svg
              className="w-[300px] sm:w-[360px] h-[300px] sm:h-[360px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
              viewBox="0 0 240 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 50 190 C 110 50, 135 40, 160 100 C 178 160, 120 195, 85 160 C 50 115, 95 50, 190 35"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <circle cx="195" cy="35" r="4" fill="#FFFFFF" />
            </svg>
          )}

          {doodleType === "heart" && (
            <svg
              className="w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
              viewBox="0 0 240 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 120 195 C 60 145, 25 95, 55 55 C 85 20, 115 50, 120 70 C 125 50, 155 20, 185 55 C 215 95, 180 145, 120 195 Z"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 185 45 L 195 35"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 200 60 L 210 55"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          )}

          {doodleType === "loops" && (
            <svg
              className="w-[310px] sm:w-[370px] h-[310px] sm:h-[370px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
              viewBox="0 0 240 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 35 175 Q 95 25, 155 85 T 205 165 Q 180 215, 110 165 T 60 70"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M 195 75 L 205 65"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>

        {/* ── MAIN CARD CONTENT GRID ── */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch flex-grow">
          
          {/* ──────────────── LEFT COLUMN: Project Details (Fixed Width, Spacious) ──────────────── */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2 pb-10 sm:pb-12 z-20">
            <div>
              {/* Title */}
              <h3 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#1E0D36] tracking-tight leading-[1.05] mb-4">
                {titleHighlight ? (
                  <span className="inline-block bg-[#CCFF00] text-black px-3 py-0.5 rounded-xl tracking-tight shadow-xs">
                    {title}
                  </span>
                ) : (
                  <span>{title}</span>
                )}
              </h3>

              {/* Country & Date Range Capsule */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-black/10 text-xs font-bold text-slate-800 shadow-xs mb-6">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: statusDotColor }} />
                {flag && <span>{flag}</span>}
                <span>{country}</span>
                <span className="text-slate-400 font-normal">|</span>
                <span className="text-slate-600 font-medium">{dateRange}</span>
              </div>

              {/* Award / Technology Platform Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {ribbons.map((ribbon, idx) => (
                  <div
                    key={idx}
                    className="relative min-w-[34px] w-auto px-3 py-1.5 rounded-xl flex items-center justify-center text-xs font-black tracking-wide shadow-xs transition-transform duration-300 hover:-translate-y-0.5 cursor-default whitespace-nowrap"
                    style={{
                      backgroundColor: ribbon.bg || "#F25444",
                      color: ribbon.textCol || "#FFFFFF",
                    }}
                  >
                    <span>{ribbon.text}</span>
                  </div>
                ))}

                {/* Extra Ribbon Badge (White with grey border) */}
                {extraRibbonCount > 0 && (
                  <div
                    className="relative min-w-[34px] w-auto px-2.5 py-1.5 rounded-xl flex items-center justify-center text-xs font-black text-slate-700 bg-white/95 border border-slate-300/80 shadow-xs transition-transform duration-300 hover:-translate-y-0.5 cursor-default whitespace-nowrap"
                  >
                    <span>+{extraRibbonCount}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal max-w-sm sm:max-w-md">
                {description}
              </div>
            </div>

            {/* Bottom Actions: Like Button + Explore Project + 4-Dot Card Status */}
            <div className="pt-6 flex items-center justify-between gap-4 border-t border-black/5 mt-8 sm:mt-12">
              <div className="flex items-center gap-3">
                {/* Heart Button */}
                <button
                  onClick={toggleLike}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-xs ${
                    hasLiked
                      ? "bg-white text-rose-600 border border-rose-200 scale-105"
                      : "bg-white/90 hover:bg-white text-slate-700 border border-black/10"
                  }`}
                  aria-label="Like project"
                >
                  <Heart
                    className={`w-4 h-4 transition-transform ${
                      hasLiked ? "fill-rose-500 text-rose-500 scale-110" : "text-rose-500"
                    }`}
                  />
                  <span>{likes}</span>
                </button>

                {/* Explore Project Button */}
                <Link
                  href={liveUrl}
                  className="px-5 py-2 rounded-full bg-white text-[#2563EB] hover:bg-[#2563EB] hover:text-white border border-slate-200/90 text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 shadow-xs group/btn"
                >
                  <span>Explore project</span>
                  <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white group-hover/btn:bg-white group-hover/btn:text-[#2563EB] flex items-center justify-center text-[10px] font-black transition-all">
                    ❯
                  </span>
                </Link>
              </div>

              {/* 4 Card Pagination Dots */}
              <div className="flex flex-col items-center gap-1.5 pr-2">
                {[...Array(total)].map((_, dotIdx) => (
                  <span
                    key={dotIdx}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      dotIdx === index
                        ? "bg-[#EF4444] scale-125"
                        : "bg-slate-400/40"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* ──────────────── RIGHT COLUMN: Tall Layered Website Mockups (Reaching Bottom) ──────────────── */}
          <div className="lg:col-span-7 relative flex items-end justify-center min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] overflow-visible">
            
            {/* ── BACK MOCKUP (Tilted/Offset Behind, High Res & Tall) ── */}
            <div
              className={`absolute top-0 right-0 w-[62%] sm:w-[64%] h-[94%] rounded-t-2xl sm:rounded-t-3xl overflow-hidden shadow-[0px_20px_50px_rgba(0,0,0,0.18)] border border-black/10 bg-[#FAF9F5] transition-all duration-700 z-10 ${
                isHovered ? "translate-x-2 -translate-y-2 shadow-[0px_30px_60px_rgba(0,0,0,0.25)]" : ""
              }`}
            >
              {backCustomContent ? (
                backCustomContent
              ) : (
                <img loading="lazy" decoding="async"
                  src={backImage}
                  alt={backImageAlt || "Website secondary preview"}
                  className="w-full h-full object-cover object-top"
                />
              )}
            </div>

            {/* ── FRONT MOCKUP (Tall Upright Standing Screen, Reaching Bottom Edge Flush) ── */}
            <div
              className={`absolute bottom-0 left-2 sm:left-6 w-[56%] sm:w-[58%] h-[98%] rounded-t-2xl sm:rounded-t-3xl overflow-hidden shadow-[0px_30px_70px_rgba(0,0,0,0.26)] border-[3px] border-white bg-white transition-all duration-500 z-20 ${
                isHovered ? "-translate-y-3 scale-[1.02] shadow-[0px_40px_85px_rgba(0,0,0,0.32)]" : ""
              }`}
            >
              {frontCustomContent ? (
                frontCustomContent
              ) : (
                <img loading="lazy" decoding="async"
                  src={frontImage}
                  alt={frontImageAlt || "Website main preview"}
                  className="w-full h-full object-cover object-top transition-transform duration-[4000ms] ease-linear group-hover:-translate-y-[6%]"
                />
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
