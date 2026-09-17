"use client";

import React, { useState } from "react";
import { agencyTeam, TeamMember } from "@/data/teamData";
import { Sparkles, Award, CheckCircle2 } from "lucide-react";

export default function TeamGrid({ limit }: { limit?: number }) {
  const [selectedDept, setSelectedDept] = useState<string>("All");

  const departments = [
    "All",
    "Leadership & Architecture",
    "CMS & Full-Stack",
    "SEO & Analytics",
    "Design & Motion",
    "QA & Project Delivery",
  ];

  const filteredTeam = agencyTeam.filter((member) => {
    if (selectedDept === "All") return true;
    return member.department === selectedDept;
  });

  const displayedTeam = limit ? filteredTeam.slice(0, limit) : filteredTeam;

  return (
    <div className="space-y-8">
      {/* Department Filter Tabs */}
      {!limit && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {departments.map((dept) => {
            const count =
              dept === "All"
                ? agencyTeam.length
                : agencyTeam.filter((m) => m.department === dept).length;
            const isActive = selectedDept === dept;
            return (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                  isActive
                    ? "bg-white text-zinc-950 font-semibold border-white shadow-lg shadow-white/10"
                    : "bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {dept} ({count})
              </button>
            );
          })}
        </div>
      )}

      {/* Grid of Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {displayedTeam.map((member) => (
          <div
            key={member.id}
            className="group relative rounded-2xl overflow-hidden glass-panel glass-panel-hover p-4 flex flex-col justify-between"
          >
            <div>
              {/* Member Image with subtle gradient overlay */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-zinc-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-transparent opacity-80" />

                {/* Experience Badge */}
                <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-black/60 backdrop-blur-md border border-white/10 text-sky-400">
                  {member.experience} Exp
                </div>

                {/* Department tag at bottom inside image */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-300 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                    {member.department.split("&")[0].trim()}
                  </span>
                </div>
              </div>

              {/* Text Information */}
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-white group-hover:text-sky-300 transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs text-sky-400 font-medium">{member.role}</p>
              </div>
            </div>

            {/* Specialty Footer */}
            <div className="pt-3 mt-3 border-t border-white/[0.06]">
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                <span className="text-zinc-500 font-medium">Core Focus: </span>
                {member.specialty}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
