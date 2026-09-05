"use client";

import React, { useState } from "react";
import { portfolioProjects, PortfolioProject } from "@/data/portfolioData";
import { ArrowUpRight, CheckCircle2, TrendingUp, Zap } from "lucide-react";

export default function PortfolioGallery({ limit }: { limit?: number }) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Shopify", "Webflow", "Framer", "WordPress", "GoHighLevel", "Squarespace"];

  const filteredProjects = portfolioProjects.filter((proj) => {
    if (activeFilter === "All") return true;
    return proj.category === activeFilter;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      {!limit && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                  isActive
                    ? "bg-white text-zinc-950 font-semibold border-white shadow-lg shadow-white/10"
                    : "bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-3xl overflow-hidden glass-panel glass-panel-hover flex flex-col justify-between"
          >
            <div>
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-transparent opacity-80" />

                {/* CMS Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  {project.cms}
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-3">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-sky-400 font-mono">
                    {project.client}
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors mt-0.5">
                    {project.title}
                  </h4>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/[0.06] bg-white/[0.01] rounded-xl px-2">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs sm:text-sm font-extrabold text-white tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-zinc-500 font-medium">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Result summary */}
            <div className="px-6 pb-6 pt-2">
              <div className="p-2.5 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 text-[11px] text-emerald-300 flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{project.results}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
