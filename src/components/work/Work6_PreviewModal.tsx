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
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <h4 className="text-sm font-black truncate">{project.title}</h4>
              <div className="text-[11px] text-slate-400 font-mono">
                Client: {project.client} · CMS: {project.cms}
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Clean High-Resolution Image Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-100 flex items-center justify-center">
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200">
            <img loading="lazy" decoding="async"
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[65vh]"
            />
          </div>
        </div>

        {/* Modal Footer: Metrics & CTA */}
        <div className="p-4 sm:p-6 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-100">
                <span className="text-xs font-black text-purple-950">{m.value}</span>{" "}
                <span className="text-[11px] font-semibold text-purple-700">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-neon-lime px-5 py-2.5 rounded-full text-xs font-black inline-flex items-center gap-2 shadow-md"
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
