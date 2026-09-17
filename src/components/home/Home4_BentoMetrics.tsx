"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

/**
 * 🏠 Home Component 4: Premium Bento Metrics Grid
 * Pixel-perfect implementation of user's custom design with LooksBay brand color accents
 */
export default function Home4_BentoMetrics() {
  return (
    <section className="relative bg-[#F8FAFC] text-[#0F172A] py-[100px] px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Floating Animated Background Dots */}
      <div className="dot dot-red" />
      <div className="dot dot-green" />
      <div className="dot dot-blue" />
      <div className="dot dot-purple" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header & Badge */}
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.03)] text-[#7C3AED] px-5 py-2 rounded-full text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            <span>Proven Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-[#0F172A] leading-[1.18] tracking-[-0.025em] mb-5">
            Driven by numbers,{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#2563EB] bg-clip-text text-transparent">
              backed by results
            </span>
          </h2>

          <p className="text-base sm:text-[18px] text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
            We build high-performing digital experiences that scale businesses. Here is a snapshot of what we have achieved together with our clients.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Review Rating with Angled Arrow Link to /reviews */}
          <div
            className="glass-surface bento-card relative bg-white border border-slate-200 rounded-[28px] p-10 sm:p-14 flex flex-col items-center justify-center text-center min-h-[330px] shadow-[0px_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0px_20px_45px_rgba(124,58,237,0.10)] transition-all duration-300 hover:-translate-y-2 group"
            style={{
              backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.22) 1.2px, transparent 1.2px)",
              backgroundSize: "20px 20px",
            }}
          >
            {/* Angled Action Button pointing to /reviews */}
            <Link
              href="/reviews"
              className="card-action-btn absolute top-6 right-6 w-12 h-12 rounded-full bg-[#F8FAFC] group-hover:bg-[#7C3AED] border border-slate-200 group-hover:border-[#7C3AED] flex items-center justify-center text-slate-900 group-hover:text-white transition-all duration-300 z-10 shadow-xs hover:scale-110"
              title="View All 52 Verified Client Reviews"
            >
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <div className="stat-number text-6xl sm:text-[68px] font-extrabold text-[#0F172A] leading-none mb-3 tracking-[-0.03em] flex items-center justify-center gap-1">
              <span>4.9</span>
              <Star className="w-8 h-8 fill-amber-400 text-amber-400 -mt-2" />
            </div>
            <div className="stat-label text-[17px] font-bold text-[#7C3AED] mb-3 lowercase tracking-wide">
              clutch rating
            </div>
            <div className="stat-subtext text-[15px] font-medium text-slate-500">
              based on 52 verified reviews
            </div>

            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-black text-[#7C3AED] group-hover:underline">
              <span>Read All Verified Reviews</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Projects Delivered */}
          <div
            className="glass-surface bento-card relative bg-white border border-slate-200 rounded-[28px] p-10 sm:p-14 flex flex-col items-center justify-center text-center min-h-[330px] shadow-[0px_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0px_20px_45px_rgba(124,58,237,0.10)] transition-all duration-300 hover:-translate-y-2 group"
            style={{
              backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.22) 1.2px, transparent 1.2px)",
              backgroundSize: "20px 20px",
            }}
          >
            <div className="stat-number text-6xl sm:text-[68px] font-extrabold text-[#0F172A] leading-none mb-3 tracking-[-0.03em]">
              672
            </div>
            <div className="stat-label text-[17px] font-bold text-[#7C3AED] mb-3 lowercase tracking-wide">
              projects delivered
            </div>
            <div className="stat-subtext text-[15px] font-medium text-slate-500">
              for 321 global clients
            </div>
          </div>

          {/* Card 3: Hours Spent */}
          <div
            className="glass-surface bento-card relative bg-white border border-slate-200 rounded-[28px] p-10 sm:p-14 flex flex-col items-center justify-center text-center min-h-[330px] shadow-[0px_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0px_20px_45px_rgba(124,58,237,0.10)] transition-all duration-300 hover:-translate-y-2 group"
            style={{
              backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.22) 1.2px, transparent 1.2px)",
              backgroundSize: "20px 20px",
            }}
          >
            <div className="stat-number text-6xl sm:text-[68px] font-extrabold text-[#0F172A] leading-none mb-3 tracking-[-0.03em]">
              154k
            </div>
            <div className="stat-label text-[17px] font-bold text-[#7C3AED] mb-3 lowercase tracking-wide">
              hours on real projects
            </div>
            <div className="stat-subtext text-[15px] font-medium text-slate-500">
              by the same squad since 2022
            </div>
          </div>

          {/* Card 4: Industry Awards */}
          <div
            className="bento-card relative bg-white border border-slate-200 rounded-[28px] p-10 sm:p-14 flex flex-col items-center justify-center text-center min-h-[330px] shadow-[0px_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0px_20px_45px_rgba(124,58,237,0.10)] transition-all duration-300 hover:-translate-y-2 group"
            style={{
              backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.22) 1.2px, transparent 1.2px)",
              backgroundSize: "20px 20px",
            }}
          >
            <div className="stat-number text-6xl sm:text-[68px] font-extrabold text-[#0F172A] leading-none mb-3 tracking-[-0.03em]">
              21
            </div>
            <div className="stat-label text-[17px] font-bold text-[#7C3AED] mb-3 lowercase tracking-wide">
              Site of the Day awards
            </div>
            <div className="stat-subtext text-[15px] font-medium text-slate-500">
              and 96 other industry awards
            </div>
          </div>

          {/* Card 5: Platform Expertise (Wide Span 2 cols) */}
          <div
            className="bento-card wide lg:col-span-2 relative bg-white border border-slate-200 rounded-[28px] p-10 sm:p-14 flex flex-col items-center justify-center text-center min-h-[330px] shadow-[0px_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0px_20px_45px_rgba(124,58,237,0.10)] transition-all duration-300 hover:-translate-y-2 group"
            style={{
              backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.22) 1.2px, transparent 1.2px)",
              backgroundSize: "20px 20px",
            }}
          >
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-6">
              Certified Experts Across Modern CMS
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-[95%]">
              <span className="px-5 py-2.5 rounded-full text-sm sm:text-base font-bold bg-[#F3E8FF] border border-[#D8B4FE] text-[#7C3AED] transition-all duration-200 group-hover:bg-[#7C3AED] group-hover:text-white">
                Webflow
              </span>
              <span className="px-5 py-2.5 rounded-full text-sm sm:text-base font-bold bg-[#F3E8FF] border border-[#D8B4FE] text-[#7C3AED] transition-all duration-200 group-hover:bg-[#7C3AED] group-hover:text-white">
                WordPress
              </span>
              <span className="px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-[#F8FAFC] border border-slate-200 text-slate-700 hover:border-slate-400 transition-colors">
                Shopify Plus
              </span>
              <span className="px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-[#F8FAFC] border border-slate-200 text-slate-700 hover:border-slate-400 transition-colors">
                Framer
              </span>
              <span className="px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-[#F8FAFC] border border-slate-200 text-slate-700 hover:border-slate-400 transition-colors">
                Squarespace
              </span>
              <span className="px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-[#F8FAFC] border border-slate-200 text-slate-700 hover:border-slate-400 transition-colors">
                Wix Studio
              </span>
              <span className="px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-[#F8FAFC] border border-slate-200 text-slate-700 hover:border-slate-400 transition-colors">
                Showit
              </span>
              <span className="px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-[#F8FAFC] border border-slate-200 text-slate-700 hover:border-slate-400 transition-colors">
                Kajabi
              </span>
              <span className="px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-[#F8FAFC] border border-slate-200 text-slate-700 hover:border-slate-400 transition-colors">
                GoHighLevel
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Small Background Dots Styles */}
      <style jsx>{`
        .dot {
          position: absolute;
          border-radius: 50%;
          z-index: 0;
          animation: floatDot 8s ease-in-out infinite alternate;
          pointer-events: none;
        }

        .dot-red {
          width: 14px;
          height: 14px;
          background-color: #FF4D4D;
          top: 8%;
          right: 18%;
          animation-duration: 7s;
        }

        .dot-green {
          width: 16px;
          height: 16px;
          background-color: #84CC16;
          top: 45%;
          left: 5%;
          animation-duration: 9s;
        }

        .dot-blue {
          width: 12px;
          height: 12px;
          background-color: #2563EB;
          bottom: 15%;
          right: 12%;
          animation-duration: 6s;
        }

        .dot-purple {
          width: 15px;
          height: 15px;
          background-color: #A855F7;
          bottom: 5%;
          left: 8%;
          animation-duration: 10s;
        }

        @keyframes floatDot {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(15px);
          }
          100% {
            transform: translateY(15px) translateX(-10px);
          }
        }
      `}</style>
    </section>
  );
}
