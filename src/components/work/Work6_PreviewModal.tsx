"use client";

import React from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { PortfolioProject } from "@/data/portfolioData";

interface Work6_PreviewModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

/**
 * 💼 Work Component 6: Full-Screen Project Preview Modal
 * High-resolution interactive modal preview for individual portfolio works
 */
export default function Work6_PreviewModal({
  project,
  onClose,
}: Work6_PreviewModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0D0D0D] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F4511E] animate-pulse" />
            <div>
              <h4 className="text-sm font-bold truncate">{project.title}</h4>
              <div className="text-[11px] text-[#888888] font-mono">
                Client: {project.client} · Platform: {project.cms || "Squarespace 7.1"}
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Clean High-Resolution Image Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#F8F8F8] flex items-center justify-center">
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl bg-white border border-[#E5E5E5]">
            <img
              loading="lazy"
              decoding="async"
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[65vh]"
            />
          </div>
        </div>

        {/* Modal Footer: Metrics & CTA */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.metrics?.map((m, idx) => (
              <div key={idx} className="px-3 py-1.5 rounded-xl bg-[#FFF4F0] border border-[#F4511E]/20">
                <span className="text-xs font-bold text-[#F4511E]">{m.value}</span>{" "}
                <span className="text-[11px] font-medium text-[#555555]">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-[#0D0D0D] hover:bg-[#F4511E] text-white text-xs font-bold inline-flex items-center gap-2 transition-all shadow-sm"
            >
              <span>Request Similar Build</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
