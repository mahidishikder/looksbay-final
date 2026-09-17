"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const showcaseTemplates = [
  { id: "template-1", name: "Hannah Lorre", slug: "hannah-lorre", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=750&q=80", isSale: true },
  { id: "template-2", name: "Genevieve Studio", slug: "genevieve-studio", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=750&q=80", isSale: true },
  { id: "template-3", name: "Sonora Collective", slug: "sonora-collective", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=750&q=80", isSale: true },
  { id: "template-4", name: "Vogue Storyteller", slug: "vogue-storyteller", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=750&q=80", isSale: true },
  { id: "template-5", name: "Petale Atelier", slug: "petale-atelier", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=750&q=80", isSale: true },
  { id: "template-6", name: "Aura Creative", slug: "aura-creative", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=750&q=80", isSale: true },
  { id: "template-7", name: "Robins & Co.", slug: "robins", image: "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/62b9a3b0-d8a4-4576-8090-7303341b0d4e/robins-squarespace-template-cover.jpg?format=750w", isSale: true },
  { id: "template-8", name: "District Venture", slug: "district-venture", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=750&q=80", isSale: true },
  { id: "template-9", name: "Alba Editorial", slug: "alba-editorial", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=750&q=80", isSale: true },
  { id: "template-10", name: "Studio Muse", slug: "studio-muse", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=750&q=80", isSale: true },
];

export default function HomeTemplatesShelf() {
  return (
    <section className="bg-[#F5F5F5] text-[#0F0F0F] pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1640px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#FC5001] font-semibold mb-3">
            VERSATILE &amp; EASY TO USE
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-[2.75rem] font-black text-[#0F0F0F] tracking-tight leading-[1.18] sm:leading-[1.15]">
            Browse Our Collection of Custom Squarespace Templates
          </h2>
        </div>

        {/* Top CTA Button */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 bg-[#0F0F0F] hover:bg-[#FC5001] text-[#FFFFFF] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] px-8 py-3.5 transition-all duration-200 group rounded-xs"
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
              className="group relative block w-full aspect-square bg-[#FFFFFF] overflow-hidden transition-all duration-300 hover:shadow-lg focus:outline-none border border-[#0F0F0F]/10 hover:border-[#FC5001]"
            >
              {/* SALE Badge */}
              {tpl.isSale && (
                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-[#FC5001] text-[#FFFFFF] text-[10px] sm:text-[11px] font-bold tracking-[0.15em] px-2.5 py-1 uppercase select-none pointer-events-none">
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
                  loading={index < 2 ? "eager" : "lazy"}
                  priority={index < 2}
                />
              </div>
              {/* Hover overlay with name */}
              <div className="absolute inset-0 bg-[#0F0F0F]/0 group-hover:bg-[#0F0F0F]/15 transition-all duration-300 flex items-end p-4">
                <span className="text-[#FFFFFF] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#FC5001] px-3 py-1">
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
            className="inline-flex items-center gap-2 bg-[#0F0F0F] hover:bg-[#FC5001] text-[#FFFFFF] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] px-8 py-3.5 transition-all duration-200 group rounded-xs"
          >
            Shop All Squarespace Themes
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
