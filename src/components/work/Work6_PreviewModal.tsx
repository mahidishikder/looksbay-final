"use client";

import React from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { PortfolioProject } from "@/data/portfolioData";

interface Work6_PreviewModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export default function Work6_PreviewModal({
  project,
  onClose,
}: Work6_PreviewModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0F0F0F]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#FFFFFF] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0F0F0F] text-[#FFFFFF] flex items-center justify-between border-b border-[#FFFFFF]/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FC5001] animate-pulse" />
            <div>
              <h4 className="text-sm font-bold truncate">{project.title}</h4>
              <div className="text-[11px] text-[#FFFFFF]/60 font-mono">
                Client: {project.client} · Platform: {project.cms || "Squarespace 7.1"}
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/20 text-[#FFFFFF] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#F5F5F5] flex items-center justify-center">
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl bg-[#FFFFFF] border border-[#0F0F0F]/10">
            <img
              loading="lazy"
              decoding="async"
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[65vh]"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#FFFFFF] border-t border-[#0F0F0F]/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.metrics?.map((m, idx) => (
              <div key={idx} className="px-3 py-1.5 rounded-xl bg-[#F5F5F5] border border-[#FC5001]/20">
                <span className="text-xs font-bold text-[#FC5001]">{m.value}</span>{" "}
                <span className="text-[11px] font-medium text-[#0F0F0F]/70">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-[#0F0F0F] hover:bg-[#FC5001] text-[#FFFFFF] text-xs font-bold inline-flex items-center gap-2 transition-all shadow-sm"
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
