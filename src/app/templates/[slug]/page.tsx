"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  Star,
  Check,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
  Lock,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import Home10_Footer from "@/components/home/Home10_Footer";

const ROBINS_COVER_IMG =
  "https://images.squarespace-cdn.com/content/v1/5e4becf684e6d079db61533d/62b9a3b0-d8a4-4576-8090-7303341b0d4e/robins-squarespace-template-cover.jpg?format=750w";

// Comprehensive catalog data for all slugs
const allTemplateDetails: Record<
  string,
  {
    name: string;
    slug: string;
    title: string;
    categories: string[];
    price: number;
    salePrice: number;
    description: string;
    demoUrl: string;
    image: string;
    gallery: string[];
    installs: string;
    reviewsCount: string;
    pagesIncluded: string[];
    features: string[];
  }
> = {
  robins: {
    name: "Robins & Co.",
    slug: "robins",
    title: "Robins & Co. – Squarespace 7.1 Fluid Engine",
    categories: ["Expert", "Consultancy", "Finance"],
    price: 225,
    salePrice: 180,
    description:
      "Robins & Co. is a flexible and user-friendly Squarespace template designed for strategic consultancies, financial advisors, and high-ticket service firms looking to create a commanding, high-converting online presence.",
    demoUrl: "https://robins-demo.squarespace.com",
    image: ROBINS_COVER_IMG,
    gallery: [ROBINS_COVER_IMG],
    installs: "2,000",
    reviewsCount: "380+",
    pagesIncluded: ["Home", "About", "Services", "Case Studies", "Blog / Insights", "Contact / Inquiry"],
    features: [
      "Drag & Drop Fluid Engine 7.1",
      "Lead Capture & Case Studies Hub",
      "Extended 6-Month Free Hosting Trial",
      "20% Off Annual Squarespace Plan",
      "Step-by-Step Video Setup Tutorials",
    ],
  },
  "hannah-lorre": {
    name: "Hannah Lorre",
    slug: "hannah-lorre",
    title: "Hannah Lorre – Squarespace 7.1 Fluid Engine",
    categories: ["Coaching", "Course Creator", "Marketing"],
    price: 225,
    salePrice: 180,
    description:
      "Hannah Lorre is an elevated personal brand template tailored for coaches, podcasters, and educators wanting a vibrant, conversion-engineered digital home.",
    demoUrl: "https://hannah-demo.squarespace.com",
    image: ROBINS_COVER_IMG,
    gallery: [ROBINS_COVER_IMG],
    installs: "1,850",
    reviewsCount: "320+",
    pagesIncluded: ["Home", "About", "Courses", "Podcast", "Blog", "Work With Me"],
    features: [
      "Drag & Drop Fluid Engine 7.1",
      "Course Sales Page Architecture",
      "Extended 6-Month Free Hosting Trial",
      "20% Off Annual Squarespace Plan",
      "Video Tutorials & Direct Transfer",
    ],
  },
  "genevieve-studio": {
    name: "Genevieve Studio",
    slug: "genevieve-studio",
    title: "Genevieve Studio – Squarespace 7.1 Fluid Engine",
    categories: ["Photography", "Wedding", "Designer"],
    price: 240,
    salePrice: 185,
    description:
      "Genevieve Studio is an editorial photography and wedding template built with cinematic image galleries, client portals, and bespoke typography.",
    demoUrl: "https://genevieve-demo.squarespace.com",
    image: ROBINS_COVER_IMG,
    gallery: [ROBINS_COVER_IMG],
    installs: "2,400",
    reviewsCount: "410+",
    pagesIncluded: ["Home", "Portfolio Galleries", "Experience", "Investment", "Inquiry Form"],
    features: [
      "Drag & Drop Fluid Engine 7.1",
      "Masonry & Fullscreen Galleries",
      "Extended 6-Month Free Hosting Trial",
      "20% Off Annual Squarespace Plan",
      "Complete Setup Documentation",
    ],
  },
  livelove: {
    name: "LiveLove",
    slug: "livelove",
    title: "LiveLove – Squarespace 7.1 Fluid Engine",
    categories: ["Expert", "Coaching", "Wellness"],
    price: 225,
    salePrice: 180,
    description:
      "LiveLove is a flexible and user-friendly Squarespace template designed for fitness trainers, holistic practitioners, and yoga studios looking to create a calm, inviting online presence.",
    demoUrl: "https://livelove-demo.squarespace.com",
    image: ROBINS_COVER_IMG,
    gallery: [ROBINS_COVER_IMG],
    installs: "2,000",
    reviewsCount: "380+",
    pagesIncluded: ["Home", "About", "Classes", "Class Page", "Blog", "Contact"],
    features: [
      "Drag & Drop Fluid Engine 7.1",
      "Class Scheduling & Service Menus",
      "Extended 6-Month Free Hosting Trial",
      "20% Off Annual Squarespace Plan",
      "Step-by-Step Video Setup Tutorials",
    ],
  },
};

export default function TemplateDetailPage() {
  const routeParams = useParams();
  const rawSlug = typeof routeParams?.slug === "string" ? routeParams.slug : "robins";
  const slugKey = rawSlug.toLowerCase();

  // Retrieve template details or generate fallback based on slug
  const template =
    allTemplateDetails[slugKey] || {
      name: rawSlug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      slug: rawSlug,
      title: `${rawSlug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())} – Squarespace 7.1 Fluid Engine`,
      categories: ["Expert", "Coaching", "Wellness"],
      price: 225,
      salePrice: 180,
      description: `${rawSlug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c: string) => c.toUpperCase())} is a flexible and user-friendly Squarespace template designed for modern brands and service studios looking to create a calm, inviting online presence.`,
      demoUrl: `https://${rawSlug}-demo.squarespace.com`,
      image: ROBINS_COVER_IMG,
      gallery: [ROBINS_COVER_IMG],
      installs: "2,000",
      reviewsCount: "380+",
      pagesIncluded: ["Home", "About", "Services", "Portfolio", "Blog", "Contact"],
      features: [
        "Drag & Drop Fluid Engine 7.1",
        "Mobile-First Responsive Layouts",
        "Extended 6-Month Free Hosting Trial",
        "20% Off Annual Squarespace Plan",
        "Step-by-Step Video Setup Tutorials",
      ],
    };

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handlePurchaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerEmail) return;
    setPurchaseSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E1B18] font-sans">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-14 pt-24 sm:pt-28 pb-20 sm:pb-28">
        
        {/* ── BREADCRUMB (Matching screenshot top navigation) ── */}
        <nav className="text-xs text-stone-500 mb-8 sm:mb-12 font-normal flex items-center gap-2">
          <Link
            href="/templates"
            className="hover:text-black transition-colors"
          >
            Custom Squarespace Templates
          </Link>
          <span className="text-stone-400">›</span>
          <span className="text-[#1E1B18] font-medium truncate">
            {template.title}
          </span>
        </nav>

        {/* ── MAIN PRODUCT SPLIT (100% Match to screenshot) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          
          {/* ──── LEFT COLUMN: LARGE MOCKUP CONTAINER WITH ARROWS ──── */}
          <div className="lg:col-span-7">
            <div className="relative aspect-square sm:aspect-[4/3.8] bg-[#F4ECE3] overflow-hidden flex items-center justify-center p-4 sm:p-8">
              
              {/* SALE Badge in Top Right Corner */}
              <span className="absolute top-4 right-4 z-20 bg-black text-white text-[11px] font-bold tracking-widest px-3 py-1 uppercase shadow-sm pointer-events-none">
                SALE
              </span>

              {/* Mockup Preview Image */}
              <div className="relative w-full h-full">
                <Image
                  src={template.image}
                  alt={template.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-contain object-center"
                  priority
                />
              </div>

              {/* Left Carousel Arrow (As in screenshot) */}
              <button
                type="button"
                aria-label="Previous view"
                onClick={() =>
                  setActiveImageIdx((prev) =>
                    prev === 0 ? template.gallery.length - 1 : prev - 1
                  )
                }
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/60 hover:bg-white text-black flex items-center justify-center transition-all shadow-xs"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Right Carousel Arrow (As in screenshot) */}
              <button
                type="button"
                aria-label="Next view"
                onClick={() =>
                  setActiveImageIdx((prev) =>
                    prev === template.gallery.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/60 hover:bg-white text-black flex items-center justify-center transition-all shadow-xs"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* ──── RIGHT COLUMN: DETAILS, PRICING, ACTION BUTTONS & REVIEWS ──── */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            
            {/* Top Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {template.categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3.5 py-1 text-xs text-stone-700 bg-white/90 border border-stone-300 rounded-full font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Main Title (Editorial Serif) */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-normal text-[#1E1B18] leading-[1.18] tracking-tight">
              {template.title}
            </h1>

            {/* Price Display */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1B18]">
                ${template.salePrice.toFixed(2)}
              </span>
              <span className="text-base sm:text-lg text-stone-400 line-through font-medium">
                ${template.price.toFixed(2)}
              </span>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-[15px] text-stone-600 font-normal leading-relaxed">
              {template.description}
            </p>

            {/* ── ACTION BUTTONS: VIEW DEMO & PURCHASE NOW (Exact Screenshot Match) ── */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* View Demo Button (Outlined) */}
              <a
                href={template.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-8 py-3.5 border border-black bg-transparent hover:bg-black hover:text-white text-black text-xs uppercase tracking-[0.14em] font-semibold text-center transition-colors flex items-center justify-center gap-2"
              >
                <span>View Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Purchase Now Button (Solid Black Box) */}
              <button
                type="button"
                onClick={() => setIsPurchaseModalOpen(true)}
                className="flex-1 px-8 py-3.5 bg-black hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.14em] font-semibold text-center transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Purchase Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* ── REVIEWS & SOCIAL PROOF (Exact Screenshot Match) ── */}
            <div className="pt-4 border-t border-stone-200/80 space-y-2">
              {/* 5 Solid Black Stars */}
              <div className="flex items-center gap-1 text-black">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-black" />
                ))}
              </div>

              {/* Text underneath stars */}
              <p className="text-xs text-stone-600 font-normal">
                {template.installs} template installs, {template.reviewsCount} customer reviews
              </p>
            </div>

            {/* Quick Guarantees & Perks */}
            <div className="pt-3 space-y-2 text-xs text-stone-600 border-t border-stone-200/80">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#8C5238]" />
                <span>Instant Squarespace transfer invite delivered via email</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#8C5238]" />
                <span>Extended 6-month free hosting trial included</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#8C5238]" />
                <span>20% discount on your first year annual Squarespace plan</span>
              </div>
            </div>

          </div>
        </div>

        {/* ── PAGES INCLUDED & SPECIFICATIONS ACCORDION ── */}
        <div className="mt-20 sm:mt-28 border-t border-stone-200 pt-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#8C5238] font-semibold">
              Ready to Launch
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1E1B18]">
              Every page your business needs to grow.
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              All pages are pre-built on modern Squarespace 7.1 Fluid Engine. Simply swap your text and imagery, connect your domain, and launch.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {template.pagesIncluded.map((p, idx) => (
              <div
                key={p}
                className="bg-white border border-stone-200 p-4 flex items-center gap-3 text-xs font-medium text-stone-800"
              >
                <span className="w-5 h-5 bg-[#FAF7F2] text-[#8C5238] border border-stone-200 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">
                  {idx + 1}
                </span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── INTERACTIVE PURCHASE MODAL ── */}
      {isPurchaseModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-lg bg-white p-6 sm:p-8 border border-stone-200 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => {
                setIsPurchaseModalOpen(false);
                setPurchaseSuccess(false);
              }}
              className="absolute top-4 right-4 text-stone-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {purchaseSuccess ? (
              <div className="text-center py-6 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#8C5238] mx-auto" />
                <h3 className="text-2xl font-serif text-[#1E1B18]">
                  Order Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Thank you! Your template invitation link for{" "}
                  <strong className="text-black">{template.name}</strong> will be sent to{" "}
                  <strong className="text-black">{buyerEmail}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => setIsPurchaseModalOpen(false)}
                  className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-wider font-semibold"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handlePurchaseSubmit} className="space-y-5">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8C5238] font-bold block">
                    Instant License
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#1E1B18] mt-1">
                    Purchase {template.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    One-time payment of ${template.salePrice.toFixed(2)} USD. Lifetime template license.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-stone-600 font-semibold block mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-stone-300 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-stone-600 font-semibold block mb-1">
                      Your Squarespace Account Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. you@yourbrand.com"
                      value={buyerEmail}
                      onChange={(e) => setBuyerEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-stone-300 focus:outline-none focus:border-black"
                    />
                    <p className="text-[10px] text-stone-400 mt-1">
                      We will transfer the template directly to this email address.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-black hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.16em] font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Complete Purchase (${template.salePrice.toFixed(2)})</span>
                  </button>
                </div>

                <p className="text-[10px] text-center text-stone-400 flex items-center justify-center gap-1.5">
                  <Check className="w-3 h-3 text-[#8C5238]" />
                  <span>Authorized Squarespace Circle Platinum Studio • 100% Secure</span>
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Luxury Footer */}
      <Home10_Footer />
    </div>
  );
}
