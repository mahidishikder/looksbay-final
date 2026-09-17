"use client";

import React from "react";
import { Layers, MessageSquare, Eye, Rocket } from "lucide-react";

/**
 * ⚡ How We Work Component 5: Collaboration Stack
 * Tools That Keep You in Total Control (Figma, Slack/WhatsApp, Loom, Staging)
 * Light luxury theme matching Home aesthetic
 */
export default function How5_CollaborationStack() {
  const tools = [
    {
      icon: Layers,
      title: "Figma Real-Time",
      desc: "Leave live comments directly on design frames. Watch your project evolve day by day.",
    },
    {
      icon: MessageSquare,
      title: "Slack / WhatsApp",
      desc: "Direct channel with principal architects and lead developers for rapid answers in minutes.",
    },
    {
      icon: Eye,
      title: "Async Loom Demos",
      desc: "Weekly 3-minute video walkthroughs explaining what was completed and what is up next.",
    },
    {
      icon: Rocket,
      title: "Private Staging",
      desc: "Test the fully responsive website on your actual mobile phone before DNS deployment.",
    },
  ];

  return (
    <section className="glass-surface rounded-[36px] bg-white border border-purple-100 p-8 sm:p-14 shadow-sm space-y-10">
      <div className="max-w-2xl space-y-2">
        <span className="text-xs font-black uppercase tracking-widest text-purple-700">
          The Collaboration Stack
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-[#1E0D36] tracking-tight">
          Tools That Keep You in Total Control
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
          We leverage modern asynchronous collaboration tools so you spend less time in meetings and more time seeing actual results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, i) => {
          const ToolIcon = tool.icon;
          return (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#FAF5FF] border border-purple-100 hover:border-purple-300 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs">
                <ToolIcon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-slate-900">{tool.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{tool.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
