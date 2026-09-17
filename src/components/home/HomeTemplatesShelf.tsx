"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const DEFAULT_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/62b9a3b0-d8a4-4576-8090-7303341b0d4e/robins-squarespace-template-cover.jpg?format=750w";

export const showcaseTemplates = [
  { id: "template-1", name: "Hannah Lorre", slug: "hannah-lorre", image: DEFAULT_IMAGE, isSale: true },
  { id: "template-2", name: "Genevieve Studio", slug: "genevieve-studio", image: DEFAULT_IMAGE, isSale: true },
  { id: "template-3", name: "Sonora Collective", slug: "sonora-collective", image: DEFAULT_IMAGE, isSale: true },
  { id: "template-4", name: "Vogue Storyteller", slug: "vogue-storyteller", image: DEFAULT_IMAGE, isSale: true },
  { id: "template-5", name: "Petale Atelier", slug: "petale-atelier", image: DEFAULT_IMAGE, isSale: true },
  { id: "template-6", name: "Aura Creative", slug: "aura-creative", image: DEFAULT_IMAGE, isSale: true },
  { id: "template-7", name: "Robins & Co.", slug: "robins", image: DEFAULT_IMAGE, isSale: true },
  { id: "template-8", name: "District Venture", slug: "district-venture", image: DEFAULT_IMAGE, isSale: true },
  { id: "template-9", name: "Alba Editorial", slug: "alba-editorial", image: DEFAULT_IMAGE, isSale: true },
  { id: "template-10", name: "Studio Muse", slug: "studio-muse", image: DEFAULT_IMAGE, isSale: true },
];

export default function HomeTemplatesShelf() {
  return (
    <section className="bg-[#F8F8F8] text-[#0D0D0D] pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1640px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#F4511E] font-semibold mb-3">
            VERSATILE & EASY TO USE
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-[2.75rem] font-black text-[#0D0D0D] tracking-tight leading-[1.18] sm:leading-[1.15]">
            Browse Our Collection of Custom Squarespace Templates
          </h2>
        </div>

        {/* Top CTA Button */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 bg-[#0D0D0D] hover:bg-[#F4511E] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] px-8 py-3.5 transition-all duration-200 group"
          >
            Shop All Squarespace Themes
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 2-Column Grid with SALE badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {showcaseTemplates.map((tpl, index) => (
            <Link
              key={tpl.id}
              href={`/templates/${tpl.slug}`}
              className="group relative block w-full aspect-square bg-[#EDEDED] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-100 focus:outline-none border border-[#E5E5E5] hover:border-[#F4511E]"
            >
              {/* SALE Badge */}
              {tpl.isSale && (
                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-[#F4511E] text-white text-[10px] sm:text-[11px] font-bold tracking-[0.15em] px-2.5 py-1 uppercase select-none pointer-events-none">
                  SALE
                </span>
              )}
              <div className="relative w-full h-full">
                <Image
                  src={tpl.image}
                  alt={tpl.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  priority={index < 2}
                />
              </div>
              {/* Hover overlay with name */}
              <div className="absolute inset-0 bg-[#0D0D0D]/0 group-hover:bg-[#0D0D0D]/10 transition-all duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#F4511E] px-3 py-1">
                  {tpl.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 bg-[#0D0D0D] hover:bg-[#F4511E] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] px-8 py-3.5 transition-all duration-200 group"
          >
            Shop All Squarespace Themes
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
