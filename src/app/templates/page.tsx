"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  Check,
  ArrowRight,
  Eye,
  X,
  Laptop,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Home10_Footer from "@/components/home/Home10_Footer";

const ROBINS_COVER_IMG =
  "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/62b9a3b0-d8a4-4576-8090-7303341b0d4e/robins-squarespace-template-cover.jpg?format=750w";

// The exact categories requested by the user
const filterCategories = [
  "All templates",
  "Lawyer",
  "Real Estate",
  "Non-profit",
  "Therapist",
  "Consultancy",
  "Wellness",
  "Finance",
  "Startup",
  "Interior Design",
  "Sales Pages",
  "Course Creator",
  "Coaching",
  "Blogging",
  "E-Commerce",
  "Photography",
  "Wedding",
  "Designer",
  "Social Media",
  "Expert",
  "Podcaster",
  "Marketing",
] as const;

interface ShopTemplate {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  categories: string[];
  price: number;
  salePrice: number;
  image: string;
  isSale: boolean;
  bestseller?: boolean;
  demoUrl: string;
}

const shopTemplatesList: ShopTemplate[] = [
  {
    id: "tpl-1",
    name: "Robins & Co.",
    slug: "robins",
    tagline: "Corporate Venture, Strategic Consultancy & High-Ticket B2B",
    categories: ["Consultancy", "Finance", "Startup", "Expert", "Marketing"],
    price: 299,
    salePrice: 149,
    image: ROBINS_COVER_IMG,
    isSale: true,
    bestseller: true,
    demoUrl: "https://robins-demo.squarespace.com",
  },
  {
    id: "tpl-2",
    name: "Hannah Lorre",
    slug: "hannah-lorre",
    tagline: "Vibrant Personal Brand, Content Creator & Coaching Hub",
    categories: ["Coaching", "Course Creator", "Podcaster", "Social Media", "Marketing", "Blogging"],
    price: 280,
    salePrice: 140,
    image: ROBINS_COVER_IMG,
    isSale: true,
    bestseller: true,
    demoUrl: "https://hannah-demo.squarespace.com",
  },
  {
    id: "tpl-3",
    name: "Genevieve Studio",
    slug: "genevieve-studio",
    tagline: "High-End Editorial, Luxury Wedding & Fine Art Photography",
    categories: ["Photography", "Wedding", "Designer", "Blogging"],
    price: 310,
    salePrice: 155,
    image: ROBINS_COVER_IMG,
    isSale: true,
    bestseller: true,
    demoUrl: "https://genevieve-demo.squarespace.com",
  },
  {
    id: "tpl-4",
    name: "Sonora Collective",
    slug: "sonora-collective",
    tagline: "Holistic Health, Wellness Retreat & Therapy Practice",
    categories: ["Therapist", "Wellness", "Coaching", "Non-profit"],
    price: 260,
    salePrice: 130,
    image: ROBINS_COVER_IMG,
    isSale: true,
    demoUrl: "https://sonora-demo.squarespace.com",
  },
  {
    id: "tpl-5",
    name: "Vogue Storyteller",
    slug: "vogue-storyteller",
    tagline: "Cinematic Fashion, Creative Direction & Film Portfolio",
    categories: ["Designer", "Photography", "Marketing", "Social Media"],
    price: 320,
    salePrice: 160,
    image: ROBINS_COVER_IMG,
    isSale: true,
    bestseller: true,
    demoUrl: "https://vogue-demo.squarespace.com",
  },
  {
    id: "tpl-6",
    name: "Petale Atelier",
    slug: "petale-atelier",
    tagline: "Boutique Floral, Artisan Retail & Curated Lifestyle Shop",
    categories: ["E-Commerce", "Wedding", "Non-profit", "Designer"],
    price: 290,
    salePrice: 145,
    image: ROBINS_COVER_IMG,
    isSale: true,
    demoUrl: "https://petale-demo.squarespace.com",
  },
  {
    id: "tpl-7",
    name: "Aura Creative",
    slug: "aura-creative",
    tagline: "Bold Modern Studio for Digital Strategists & Design Agencies",
    categories: ["Designer", "Marketing", "Startup", "Social Media", "Expert"],
    price: 299,
    salePrice: 149,
    image: ROBINS_COVER_IMG,
    isSale: true,
    demoUrl: "https://aura-demo.squarespace.com",
  },
  {
    id: "tpl-8",
    name: "District Legal & Venture",
    slug: "district-venture",
    tagline: "Modern Law Firm, Corporate Counsel & Executive Growth",
    categories: ["Lawyer", "Finance", "Startup", "Consultancy"],
    price: 340,
    salePrice: 170,
    image: ROBINS_COVER_IMG,
    isSale: true,
    demoUrl: "https://district-demo.squarespace.com",
  },
  {
    id: "tpl-9",
    name: "Alba Editorial",
    slug: "alba-editorial",
    tagline: "Minimalist Architecture, Interior Design & Urban Projects",
    categories: ["Interior Design", "Real Estate", "Designer"],
    price: 310,
    salePrice: 155,
    image: ROBINS_COVER_IMG,
    isSale: true,
    demoUrl: "https://alba-demo.squarespace.com",
  },
  {
    id: "tpl-10",
    name: "Studio Muse",
    slug: "studio-muse",
    tagline: "Elevated Brand Studio, Typographer & Visual Storyteller",
    categories: ["Designer", "Blogging", "Social Media", "Marketing"],
    price: 280,
    salePrice: 140,
    image: ROBINS_COVER_IMG,
    isSale: true,
    demoUrl: "https://muse-demo.squarespace.com",
  },
  {
    id: "tpl-11",
    name: "Solstice Home",
    slug: "solstice-home",
    tagline: "Luxury Real Estate, Vacation Rentals & Property Portfolio",
    categories: ["Real Estate", "Interior Design", "E-Commerce"],
    price: 330,
    salePrice: 165,
    image: ROBINS_COVER_IMG,
    isSale: true,
    demoUrl: "https://solstice-demo.squarespace.com",
  },
  {
    id: "tpl-12",
    name: "Elevate Conversion",
    slug: "elevate-consulting",
    tagline: "High-Ticket Masterminds, Funnels & Sales Page Architecture",
    categories: ["Sales Pages", "Course Creator", "Coaching", "Consultancy", "Expert"],
    price: 290,
    salePrice: 145,
    image: ROBINS_COVER_IMG,
    isSale: true,
    demoUrl: "https://elevate-demo.squarespace.com",
  },
  {
    id: "tpl-13",
    name: "Haven Impact",
    slug: "haven-impact",
    tagline: "Advocacy Initiatives, Community Foundations & Global Charities",
    categories: ["Non-profit", "Wellness", "Blogging"],
    price: 270,
    salePrice: 135,
    image: ROBINS_COVER_IMG,
    isSale: true,
    demoUrl: "https://haven-demo.squarespace.com",
  },
  {
    id: "tpl-14",
    name: "The Clinic Studio",
    slug: "clinic-studio",
    tagline: "Licensed Psychology, Relationship Therapy & Wellness Counsel",
    categories: ["Therapist", "Wellness", "Coaching"],
    price: 280,
    salePrice: 140,
    image: ROBINS_COVER_IMG,
    isSale: true,
    demoUrl: "https://clinic-demo.squarespace.com",
  },
  {
    id: "tpl-15",
    name: "Waveform Cast",
    slug: "waveform-cast",
    tagline: "Media Network, Audio Show & Thought Leadership Platform",
    categories: ["Podcaster", "Social Media", "Marketing", "Blogging"],
    price: 290,
    salePrice: 145,
    image: ROBINS_COVER_IMG,
    isSale: true,
    demoUrl: "https://waveform-demo.squarespace.com",
  },
  {
    id: "tpl-16",
    name: "Capital Wealth",
    slug: "capital-wealth",
    tagline: "Private Wealth Advisory, Investment Funds & CPA Practice",
    categories: ["Finance", "Consultancy", "Lawyer", "Expert"],
    price: 320,
    salePrice: 160,
    image: ROBINS_COVER_IMG,
    isSale: true,
    demoUrl: "https://capital-demo.squarespace.com",
  },
];

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All templates");

  // Instant filter by clicked category
  const filteredTemplates = useMemo(() => {
    if (selectedCategory === "All templates") {
      return shopTemplatesList;
    }
    return shopTemplatesList.filter((tpl) =>
      tpl.categories.some(
        (cat) => cat.toLowerCase() === selectedCategory.toLowerCase()
      )
    );
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white text-[#0D0D0D] font-sans">
      {/* ══════════════════════════════════════════════════════════
          1. HERO HEADER BANNER
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0D0D0D] text-white pt-28 pb-16 sm:pb-20 px-6 sm:px-10 lg:px-16 border-b border-white/10">
        <div className="max-w-[1640px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Designer Photo */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Squarespace Designer Studio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-stone-300">
                <span className="font-semibold text-white">Circle Platinum Partner</span>
                <p className="text-[11px] text-stone-400">Award-winning Squarespace templates</p>
              </div>
            </div>
          </div>

          {/* Center: Editorial Heading */}
          <div className="lg:col-span-6 text-center space-y-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#F4511E] font-semibold">
              Squarespace 7.1 Fluid Engine
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-[3.2rem] font-serif font-normal text-white tracking-tight leading-[1.12]">
              Premium Squarespace Templates for High-Growth Brands
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
              Elevated, editorial website templates crafted for high-ticket service businesses, consultants, and creative studios. Zero coding required.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#shop-catalog"
                className="px-8 py-3.5 bg-[#F4511E] hover:bg-[#D43D0F] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Shop All Templates</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-300">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#F4511E]" /> 6-Month Extended Free Trial
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#F4511E]" /> 20% Off Annual Squarespace Plan
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#F4511E]" /> Step-by-Step Video Setup
              </span>
            </div>
          </div>

          {/* Right: Mockup Preview */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-stone-900">
              <Image
                src={ROBINS_COVER_IMG}
                alt="Template Preview"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3 bg-black text-white text-[10px] font-bold tracking-widest px-2.5 py-0.5 uppercase">
                SALE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. TOP CATEGORY BUTTONS & LARGE PRODUCT GRID
             (No side filter - Full width, big beautiful cards!)
      ══════════════════════════════════════════════════════════ */}
      <section id="shop-catalog" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-14 max-w-[1640px] mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#F4511E] font-semibold mb-2">
            Explore By Industry
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0D0D0D] tracking-tight">
            Browse Templates by Specialty
          </h2>
        </div>

        {/* ── TOP CATEGORY BUTTONS (The exact categories requested) ── */}
        <div className="max-w-5xl mx-auto mb-14 sm:mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {filterCategories.map((categoryName) => {
              const isSelected = selectedCategory === categoryName;
              return (
                <button
                  key={categoryName}
                  onClick={() => setSelectedCategory(categoryName)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-[13px] tracking-wide transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#F4511E] text-white font-semibold shadow-sm"
                      : "bg-white hover:bg-orange-50 text-[#3D3D3D] border border-[#E5E5E5] hover:border-[#F4511E]"
                  }`}
                >
                  {categoryName}
                </button>
              );
            })}
          </div>

          {/* Active Filter Status Bar */}
          <div className="mt-8 flex items-center justify-between border-b border-[#E5E5E5] pb-3 text-xs text-[#6B6B6B]">
            <p>
              Showing <span className="font-semibold text-[#0D0D0D]">{filteredTemplates.length}</span>{" "}
              {filteredTemplates.length === 1 ? "template" : "templates"} for{" "}
              <span className="font-semibold text-[#F4511E]">&quot;{selectedCategory}&quot;</span>
            </p>

            {selectedCategory !== "All templates" && (
              <button
                onClick={() => setSelectedCategory("All templates")}
                className="text-xs font-semibold text-[#F4511E] hover:underline"
              >
                Clear Filter (View All)
              </button>
            )}
          </div>
        </div>

        {/* ── LARGE 2-COLUMN PRODUCT GRID (Big, spacious & crystal clear) ── */}
        {filteredTemplates.length === 0 ? (
          <div className="bg-white p-14 text-center border border-stone-200 space-y-4 max-w-xl mx-auto my-12">
            <Sparkles className="w-8 h-8 text-stone-400 mx-auto" />
            <h3 className="text-xl font-serif text-stone-800">No templates found for this category</h3>
            <p className="text-xs text-stone-500">
              Try selecting another category or click below to view all templates.
            </p>
            <button
              onClick={() => setSelectedCategory("All templates")}
              className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-wider font-semibold"
            >
              View All Templates
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {filteredTemplates.map((tpl, idx) => (
              <Link
                key={tpl.id}
                href={`/templates/${tpl.slug}`}
                className="group bg-white border border-[#E5E5E5] hover:border-[#F4511E] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-lg hover:shadow-orange-50 cursor-pointer"
              >
                {/* Large Mockup Card Display (Aspect Square, full size) */}
                <div className="relative aspect-square bg-[#F4ECE3] overflow-hidden">
                  {/* SALE Badge Top Right */}
                  {tpl.isSale && (
                    <span className="absolute top-3.5 right-3.5 z-20 bg-[#F4511E] text-white text-[10px] sm:text-[11px] font-bold tracking-widest px-2.5 py-0.5 sm:py-1 uppercase shadow-sm">
                      SALE
                    </span>
                  )}

                  {/* Bestseller Badge Top Left */}
                  {tpl.bestseller && (
                    <span className="absolute top-3.5 left-3.5 z-20 bg-[#0D0D0D] text-white text-[9px] sm:text-[10px] font-bold tracking-wider px-2 py-0.5 uppercase shadow-sm">
                      Bestseller
                    </span>
                  )}

                  {/* Full Size Image with smooth hover zoom */}
                  <Image
                    src={tpl.image}
                    alt={tpl.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority={idx < 3}
                  />
                </div>

                {/* Card Meta & Details */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-3.5">
                  <div>
                    {/* Categories Pill Strip */}
                    <div className="flex flex-wrap gap-1.5 mb-1.5">
                      {tpl.categories.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-orange-50 border border-[#F4511E]/20 text-[#F4511E] font-semibold"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#0D0D0D] group-hover:text-[#F4511E] transition-colors">
                      {tpl.name}
                    </h3>
                    <p className="text-xs text-[#6B6B6B] mt-1 line-clamp-2 leading-relaxed">
                      {tpl.tagline}
                    </p>
                  </div>

                  {/* Pricing & Action Links */}
                  <div className="pt-3.5 border-t border-[#E5E5E5] flex items-center justify-between">
                    <div>
                      {tpl.salePrice ? (
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xs text-stone-400 line-through font-medium">
                            ${tpl.price}
                          </span>
                          <span className="text-lg sm:text-xl font-black text-[#0D0D0D]">
                            ${tpl.salePrice}
                          </span>
                          <span className="text-[10px] text-stone-500 uppercase font-medium">USD</span>
                        </div>
                      ) : (
                        <span className="text-lg sm:text-xl font-black text-[#0D0D0D]">
                          ${tpl.price} USD
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1E1B18] group-hover:text-[#8C5238] flex items-center gap-1 transition-colors group-hover:translate-x-0.5 duration-200">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. TESTIMONIALS SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F8F8F8] py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-t border-[#E5E5E5]">
        <div className="max-w-[1640px] mx-auto space-y-14">
          {/* Testimonial Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#F4511E] font-semibold">
              Client Praise &amp; Transformations
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D0D0D] tracking-tight leading-tight">
              Loved by 450+ Visionary Founders Worldwide
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
              Hear from creative directors, consultants, and business owners who launched their dream website with our Squarespace 7.1 templates.
            </p>
          </div>

          {/* 3-Column Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Review 1 */}
            <div className="bg-white p-7 sm:p-8 rounded-none border border-stone-200 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#F4511E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F4511E]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal italic">
                  &ldquo;Launching with Looksbay saved us at least $6,000 in custom design fees. The Fluid Engine layouts were so clear that our studio launched in 48 hours and saw booking inquiries double in week one!&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full overflow-hidden relative bg-stone-200 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt="Victoria Sterling"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1E1B18]">
                    Victoria Sterling
                  </h4>
                  <p className="text-[11px] text-stone-500">Founder, Sterling PR &amp; Brand Studio</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-7 sm:p-8 rounded-none border border-stone-200 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#D4B996]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal italic">
                  &ldquo;The mobile responsiveness is truly on another level. As an architect, visual detail is everything to me, and this template gave us the editorial magazine look we always envisioned.&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full overflow-hidden relative bg-stone-200 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                    alt="Marcus Vance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1E1B18]">
                    Marcus Vance
                  </h4>
                  <p className="text-[11px] text-stone-500">Principal, Vance Architecture &amp; Interiors</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-7 sm:p-8 rounded-none border border-stone-200 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#D4B996]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal italic">
                  &ldquo;The video tutorials included with the template are gold. Even without any web design experience, I easily customized fonts, colors, and connected my Stripe account. 10/10 recommend!&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full overflow-hidden relative bg-stone-200 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
                    alt="Camille Dupont"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1E1B18]">
                    Camille Dupont
                  </h4>
                  <p className="text-[11px] text-stone-500">Creative Director, Atelier Sol Boutique</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Trust Bar */}
          <div className="pt-6 border-t border-[#E5E5E5] flex flex-wrap items-center justify-around gap-6 text-center text-xs text-[#6B6B6B]">
            <div>
              <span className="text-xl sm:text-2xl font-black text-[#0D0D0D] block">4.9 / 5.0</span>
              <span className="text-[11px] uppercase tracking-wider text-stone-500">Average Client Rating</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#1E1B18] block">450+</span>
              <span className="text-[11px] uppercase tracking-wider text-stone-500">Templates Launched</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#1E1B18] block">100%</span>
              <span className="text-[11px] uppercase tracking-wider text-stone-500">Squarespace 7.1 Fluid Engine</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#1E1B18] block">6 Months</span>
              <span className="text-[11px] uppercase tracking-wider text-stone-500">Extended Free Hosting Trial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <Home10_Footer />
    </div>
  );
}
