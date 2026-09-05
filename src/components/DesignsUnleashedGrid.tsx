"use client";

import React, { useState } from "react";
import { Sparkles, Eye, ArrowUpRight, Maximize2, X } from "lucide-react";

interface DesignItem {
  id: string;
  title: string;
  category: string;
  image: string;
  badge: string;
  span?: string;
  accent: string;
}

const designShowcaseItems: DesignItem[] = [
  {
    id: "du-1",
    title: "Amalfi Coastal Sanctuary",
    category: "Luxury Hospitality & 3D Web",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop&q=80",
    badge: "Spatial Web",
    accent: "from-emerald-600/30",
  },
  {
    id: "du-2",
    title: "FinTech Neo Flow UI",
    category: "Interactive Design System",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    badge: "60FPS Physics",
    accent: "from-blue-600/30",
  },
  {
    id: "du-3",
    title: "Neo-Brutalism Type Experiment",
    category: "Art Direction & Posters",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    badge: "Typography",
    accent: "from-purple-600/30",
  },
  {
    id: "du-4",
    title: "Verve Kinetic Identity",
    category: "Brand Motion & 3D",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80",
    badge: "3D Brand",
    accent: "from-orange-600/30",
  },
  {
    id: "du-5",
    title: "Former Industrial Lab",
    category: "Dark Mode Web Experience",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    badge: "Dark Architecture",
    accent: "from-yellow-500/30",
  },
  {
    id: "du-6",
    title: "Torch Sensor Spatial OS",
    category: "Next-Gen Hardware UI",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    badge: "Hardware & IoT",
    accent: "from-rose-600/30",
  },
  {
    id: "du-7",
    title: "Hyper-Contrast Editorial",
    category: "Editorial & Commerce",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80",
    badge: "Editorial UI",
    accent: "from-purple-500/30",
  },
  {
    id: "du-8",
    title: "Unframed Creative Studio",
    category: "Creative Direction",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop&q=80",
    badge: "Design Lab",
    accent: "from-amber-500/30",
  },
];

export default function DesignsUnleashedGrid() {
  const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null);

  return (
    <section className="relative pt-12 pb-20">
      
      {/* SECTION HEADER (Directly inspired by screenshot) */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        
        {/* Animated Badge Icon */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-xs font-bold shadow-xs">
          <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>In-House Lab & Concept Work</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Designs <span className="text-purple-600 bg-gradient-to-r from-purple-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">Unleashed</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-medium">
          A glimpse into our visual laboratory where our 20-person squad crafts bold brand identities, 3D motion graphics, and high-velocity web interfaces.
        </p>
      </div>

      {/* BENTO VISUAL GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {designShowcaseItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-md cursor-pointer border border-slate-200/60 hover:shadow-xl hover:border-purple-300 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300`} />

            {/* Top Badge */}
            <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
              <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/10">
                {item.badge}
              </span>
            </div>

            {/* Quick action button on hover */}
            <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-7 h-7 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Bottom Details */}
            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white">
              <div className="text-[10px] sm:text-[11px] font-bold text-purple-300 uppercase tracking-wide">
                {item.category}
              </div>
              <div className="text-xs sm:text-sm font-black text-white truncate group-hover:text-[#CCFF00] transition-colors">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-950 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-white hover:text-black flex items-center justify-center transition-colors shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full bg-black">
              <img loading="lazy" decoding="async"
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4 bg-slate-900 border-t border-white/10">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {selectedItem.badge}
                </span>
                <h3 className="text-2xl font-black text-white mt-2">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-slate-400 font-medium">
                  {selectedItem.category} · Concept & Engineering Lab
                </p>
              </div>

              <a
                href="/contact"
                className="btn-neon-lime px-6 py-3 rounded-full text-xs font-black inline-flex items-center gap-2 shadow-lg"
              >
                <span>Inquire About This Style</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
