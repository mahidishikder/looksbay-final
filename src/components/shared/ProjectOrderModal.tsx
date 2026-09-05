"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Zap,
  Shield,
  Layers,
  Search,
  Globe,
  DollarSign,
  Send,
  Phone,
  Mail,
  ExternalLink,
  Code2,
  Laptop,
  Check,
} from "lucide-react";

interface ProjectOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Supported platforms in the requested priority order.
const cmsPlatforms = [
  {
    id: "squarespace",
    name: "Squarespace",
  },
  {
    id: "shopify",
    name: "Shopify & Plus",
  },
  {
    id: "wix",
    name: "Wix Studio",
  },
  {
    id: "showit",
    name: "Showit",
  },
  {
    id: "godaddy",
    name: "GoDaddy Builder",
  },
  {
    id: "wordpress",
    name: "WordPress & WooCommerce",
  },
  {
    id: "webflow",
    name: "Webflow",
  },
  {
    id: "framer",
    name: "Framer",
  },
  {
    id: "ghl",
    name: "GoHighLevel (GHL)",
  },
  {
    id: "kajabi",
    name: "Kajabi",
  },
  {
    id: "nextjs",
    name: "Next.js Custom",
  },
  {
    id: "other",
    name: "Custom / Other CMS",
  },
];

// Page tiers with instant pricing
const pageTiers = [
  {
    id: "1-page",
    label: "1 Page",
    title: "Flagship Landing Page",
    desc: "High-converting single-page visual narrative built to capture leads or drive sales.",
    price: 499,
    timeline: "5 – 7 Days Delivery",
  },
  {
    id: "5-pages",
    label: "5 Pages",
    title: "Standard Business Website",
    desc: "Home, About, Services, Case Studies / Blog & Contact. Ideal for growing brands.",
    price: 1299,
    timeline: "10 – 14 Days Delivery",
  },
  {
    id: "10-pages",
    label: "10+ Pages",
    title: "Full Platform / E-Commerce Store",
    desc: "Complete multi-category architecture, checkout user flows, filtering & customer portal.",
    price: 2499,
    timeline: "2 – 3 Weeks Delivery",
  },
];

// SEO Package Options
const seoOptions = [
  {
    id: "basic",
    title: "Basic On-Page SEO",
    price: 0,
    priceLabel: "Free (Included)",
    desc: "Meta title & descriptions, XML sitemap generation, robots.txt & Google Search Console indexing setup.",
    included: true,
  },
  {
    id: "advanced-500",
    title: "Advanced Technical SEO",
    price: 500,
    priceLabel: "+$500",
    desc: "Deep Core Web Vitals 95+ tuning, JSON-LD Schema markup, keyword architecture & conversion tracking setup.",
    included: false,
  },
  {
    id: "enterprise-1500",
    title: "Enterprise SEO Domination",
    price: 1500,
    priceLabel: "+$1,500",
    desc: "Full competitor ranking audit, topic clustering, backlink architecture, technical crawl audit & 60-day roadmap.",
    included: false,
  },
];

export default function ProjectOrderModal({ isOpen, onClose }: ProjectOrderModalProps) {
  const [step, setStep] = useState(1);
  const [platform, setPlatform] = useState(cmsPlatforms[0].name);
  const [selectedTier, setSelectedTier] = useState(pageTiers[1]); // Default to 5 pages
  const [selectedSeo, setSelectedSeo] = useState(seoOptions[0]); // Default to Free basic

  // Client info
  const [clientName, setClientName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [referenceUrl, setReferenceUrl] = useState("");
  const [projectNotes, setProjectNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Calculate live total price
  const totalPrice = selectedTier.price + selectedSeo.price;

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !workEmail) return;
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-[32px] sm:rounded-[40px] border border-purple-200/90 shadow-[0_25px_90px_rgba(0,0,0,0.4)] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="relative z-10 px-6 sm:px-10 py-5 bg-[#FAF5FF] border-b border-purple-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E1065] text-[#CCFF00] flex items-center justify-center shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-wider text-purple-700">
                LOOKSBAY SPRINT ORDER
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#1E0D36]">
                Project Order
              </h3>
            </div>
          </div>

          {/* Live Price Tag Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E1065] text-white text-xs font-black shadow-xs">
            <span className="text-[#CCFF00]">Estimated:</span>
            <span>${totalPrice.toLocaleString()} USD</span>
          </div>

          <button
            onClick={resetAndClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-purple-100 border border-purple-200 text-slate-700 flex items-center justify-center transition-all shadow-xs cursor-pointer hover:scale-105"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="relative z-10 p-5 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-10 text-center space-y-5 animate-scale-up">
              <div className="w-18 h-18 rounded-full bg-[#CCFF00] text-black mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1E0D36]">
                Sprint Order Confirmed!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto font-medium leading-relaxed">
                Thank you, <strong>{clientName}</strong>! Your order for a <strong>{platform}</strong> build with <strong>{selectedTier.label}</strong> ({selectedSeo.title}) has been received. Our Senior Technical Lead is reviewing your specs and will connect via WhatsApp at <strong>{whatsapp || workEmail}</strong> within 2 hours with the formal statement of work.
              </p>

              {/* Order Summary Box */}
              <div className="p-5 rounded-2xl bg-[#FAF5FF] border border-purple-200/80 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between font-bold text-slate-700">
                  <span>Selected CMS:</span>
                  <span className="text-purple-900">{platform}</span>
                </div>
                <div className="flex justify-between font-bold text-slate-700">
                  <span>Scope:</span>
                  <span className="text-purple-900">{selectedTier.title} (${selectedTier.price})</span>
                </div>
                <div className="flex justify-between font-bold text-slate-700">
                  <span>SEO Tier:</span>
                  <span className="text-purple-900">{selectedSeo.title} ({selectedSeo.priceLabel})</span>
                </div>
                <div className="border-t border-purple-200 pt-2 flex justify-between font-black text-sm text-[#1E0D36]">
                  <span>Total Investment:</span>
                  <span className="text-purple-700 font-black">${totalPrice.toLocaleString()} USD</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3 rounded-full bg-[#2E1065] text-white text-xs font-black hover:bg-purple-900 transition-all shadow-md cursor-pointer"
                >
                  Close Order Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleOrderSubmit} className="space-y-6">
              {/* Stepper Tabs */}
              <div className="grid grid-cols-4 gap-2 pb-4 border-b border-purple-100">
                {[
                  { num: 1, label: "CMS Platform" },
                  { num: 2, label: "Page Scope" },
                  { num: 3, label: "SEO Plan" },
                  { num: 4, label: "Reserve Sprint" },
                ].map((s) => (
                  <button
                    key={s.num}
                    type="button"
                    onClick={() => setStep(s.num)}
                    className="flex items-center justify-center gap-2 p-2 rounded-xl text-center group transition-colors cursor-pointer"
                  >
                    <div
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[11px] font-black transition-all ${
                        step === s.num
                          ? "bg-[#2E1065] text-[#CCFF00] shadow-md ring-2 ring-purple-300 scale-105"
                          : step > s.num
                          ? "bg-purple-100 text-purple-900"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {step > s.num ? "✓" : s.num}
                    </div>
                    <span
                      className={`text-xs font-black hidden md:inline ${
                        step === s.num ? "text-[#1E0D36]" : "text-slate-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* ══════════════════════════════════════════════════════════
                STEP 1: CHOOSE CMS (Squarespace First, Clean SVG Badges)
              ══════════════════════════════════════════════════════════ */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-[#1E0D36]">
                      Choose a platform
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                    {cmsPlatforms.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setPlatform(item.name)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all relative flex flex-col justify-between ${
                          platform === item.name
                            ? "bg-[#FAF5FF] border-purple-600 ring-2 ring-purple-400 shadow-sm"
                            : "bg-white border-slate-200 hover:border-purple-300 hover:bg-slate-50/70"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-black text-[#1E0D36]">{item.name}</span>
                            {platform === item.name && (
                              <div className="w-4 h-4 rounded-full bg-purple-700 text-white flex items-center justify-center text-[10px]">
                                ✓
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-full bg-[#2E1065] text-white text-xs sm:text-sm font-black inline-flex items-center gap-2 hover:bg-purple-900 transition-all shadow-md cursor-pointer"
                    >
                      <span>Next: Select Page Scope</span>
                      <ArrowRight className="w-4 h-4 text-[#CCFF00]" />
                    </button>
                  </div>
                </div>
              )}

              {/* ══════════════════════════════════════════════════════════
                STEP 2: PAGE SCOPE & LIVE PRICING BOX
              ══════════════════════════════════════════════════════════ */}
              {step === 2 && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-[#1E0D36]">
                      Choose your page scope
                    </h4>
                  </div>

                  {/* 3 Page Tier Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {pageTiers.map((tier) => {
                      const isSelected = selectedTier.id === tier.id;
                      return (
                        <div
                          key={tier.id}
                          onClick={() => setSelectedTier(tier)}
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all text-center flex flex-col justify-between ${
                            isSelected
                              ? "bg-[#2E1065] text-white border-[#2E1065] shadow-lg scale-102"
                              : "bg-white text-slate-800 border-slate-200 hover:border-purple-300 hover:bg-purple-50/30"
                          }`}
                        >
                          <div>
                            <div className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: isSelected ? "#CCFF00" : "#7C3AED" }}>
                              {tier.label}
                            </div>
                            <div className="text-base font-black leading-tight mb-2">
                              {tier.title}
                            </div>
                            <div className={`text-xs leading-relaxed font-medium mb-3 ${isSelected ? "text-purple-200" : "text-slate-500"}`}>
                              {tier.desc}
                            </div>
                          </div>

                          <div className={`pt-3 border-t ${isSelected ? "border-white/20" : "border-slate-100"}`}>
                            <div className={`text-2xl font-black ${isSelected ? "text-[#CCFF00]" : "text-[#1E0D36]"}`}>
                              ${tier.price.toLocaleString()}
                            </div>
                            <div className={`text-[10px] font-bold ${isSelected ? "text-purple-200" : "text-slate-500"}`}>
                              {tier.timeline}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Live Selected Scope & Price Callout Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-100/70 via-[#FAF5FF] to-purple-50 border border-purple-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="text-[10px] font-black uppercase tracking-wider text-purple-700">
                        Current Page Scope Selection
                      </div>
                      <div className="text-lg font-black text-[#1E0D36]">
                        {selectedTier.title} ({selectedTier.label})
                      </div>
                      <div className="text-xs text-slate-600 font-medium">
                        Guaranteed timeline: <strong>{selectedTier.timeline}</strong> with dedicated senior pod.
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-xs font-bold text-slate-500">Base Investment</div>
                      <div className="text-3xl font-black text-purple-900">
                        ${selectedTier.price.toLocaleString()}{" "}
                        <span className="text-xs font-normal text-slate-500">USD</span>
                      </div>
                    </div>
                  </div>

                  {/* Included In Every Project Standard (No check needed) */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 space-y-2">
                    <div className="text-xs font-black uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Standard In Every LooksBay Project (Always Included Free):</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold text-slate-700">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>95+ PageSpeed</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>100% In-House Code</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>30-Day Free Warranty</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Responsive Mobile</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-full bg-[#2E1065] text-white text-xs sm:text-sm font-black inline-flex items-center gap-2 hover:bg-purple-900 transition-all shadow-md cursor-pointer"
                    >
                      <span>Next: Select SEO Plan</span>
                      <ArrowRight className="w-4 h-4 text-[#CCFF00]" />
                    </button>
                  </div>
                </div>
              )}

              {/* ══════════════════════════════════════════════════════════
                STEP 3: SEO FORM (Basic Free, Advanced $500, Enterprise $1500)
              ══════════════════════════════════════════════════════════ */}
              {step === 3 && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-[#1E0D36]">
                      Choose an SEO plan
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {seoOptions.map((opt) => {
                      const isSelected = selectedSeo.id === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedSeo(opt)}
                          className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                            isSelected
                              ? "bg-[#FAF5FF] border-purple-600 ring-2 ring-purple-400 shadow-sm"
                              : "bg-white border-slate-200 hover:border-purple-200 hover:bg-slate-50"
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2.5">
                              <span className="text-sm sm:text-base font-black text-[#1E0D36]">
                                {opt.title}
                              </span>
                              {opt.included ? (
                                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                                  Included Free
                                </span>
                              ) : (
                                <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 text-[10px] font-black">
                                  Growth Booster
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-xl">
                              {opt.desc}
                            </p>
                          </div>

                          <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                            <div className="text-right">
                              <div className="text-lg font-black text-[#1E0D36]">
                                {opt.priceLabel}
                              </div>
                            </div>
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                                isSelected
                                  ? "bg-purple-700 text-white"
                                  : "border-2 border-slate-300 bg-white"
                              }`}
                            >
                              {isSelected && "✓"}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Live Total Running Price Bar */}
                  <div className="p-4 rounded-2xl bg-[#2E1065] text-white flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-bold text-purple-200 uppercase tracking-wider">
                        Running Order Total ({platform} · {selectedTier.label})
                      </div>
                      <div className="text-xs font-semibold text-purple-100">
                        Page Tier: ${selectedTier.price} + SEO: ${selectedSeo.price}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-black text-[#CCFF00]">
                        ${totalPrice.toLocaleString()} <span className="text-xs text-white font-normal">USD</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="px-6 py-3 rounded-full bg-[#2E1065] text-white text-xs sm:text-sm font-black inline-flex items-center gap-2 hover:bg-purple-900 transition-all shadow-md cursor-pointer"
                    >
                      <span>Next: Enter Contact Info</span>
                      <ArrowRight className="w-4 h-4 text-[#CCFF00]" />
                    </button>
                  </div>
                </div>
              )}

              {/* ══════════════════════════════════════════════════════════
                STEP 4: CONTACT INFO & SPRINT BOOKING
              ══════════════════════════════════════════════════════════ */}
              {step === 4 && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-[#1E0D36]">
                      Where Should We Send Your SOW &amp; Roadmap?
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      Enter your details below. Our Lead Architect will reach out via WhatsApp/Email to lock in your sprint start date.
                    </p>
                  </div>

                  {/* Final Order Review Pill */}
                  <div className="p-4 rounded-2xl bg-[#FAF5FF] border border-purple-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="font-bold text-slate-500">Platform: </span>
                      <strong className="text-purple-900">{platform}</strong>
                    </div>
                    <div>
                      <span className="font-bold text-slate-500">Scope: </span>
                      <strong className="text-purple-900">{selectedTier.title}</strong>
                    </div>
                    <div>
                      <span className="font-bold text-slate-500">SEO: </span>
                      <strong className="text-purple-900">{selectedSeo.title}</strong>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-slate-500">Total: </span>
                      <strong className="text-base font-black text-[#1E0D36]">${totalPrice.toLocaleString()} USD</strong>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-700 flex items-center gap-1">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-700 flex items-center gap-1">
                        Work Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-700 flex items-center gap-1">
                        WhatsApp / Phone Number <span className="text-emerald-600">(Fastest Response)</span>
                      </label>
                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-700">
                        Reference Website or Wireframe URL
                      </label>
                      <input
                        type="url"
                        value={referenceUrl}
                        onChange={(e) => setReferenceUrl(e.target.value)}
                        placeholder="https://example.com or Figma link"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-700">
                      Project Notes or Specific Brand Goals
                    </label>
                    <textarea
                      rows={2}
                      value={projectNotes}
                      onChange={(e) => setProjectNotes(e.target.value)}
                      placeholder="Tell us about target launch timeline, required integrations, or design style preferences..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 resize-none"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-purple-100">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="btn-neon-lime px-8 py-3.5 rounded-full text-xs sm:text-sm font-black flex items-center gap-2 shadow-xl cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-black" />
                      <span>Submit Order &amp; Reserve Sprint (${totalPrice.toLocaleString()})</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
