"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, Phone, Mail } from "lucide-react";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [selectedCms, setSelectedCms] = useState<string>("Shopify");
  const [needsSeo, setNeedsSeo] = useState<boolean>(true);
  const [budget, setBudget] = useState<string>("$1,000 - $3,000");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const cmsParam = searchParams.get("cms");
    if (cmsParam) setSelectedCms(cmsParam);
    const budgetParam = searchParams.get("budget");
    if (budgetParam) setBudget(`$${budgetParam}`);
  }, [searchParams]);

  const cmsOptions = [
    "WordPress",
    "Shopify",
    "Webflow",
    "Framer",
    "GoHighLevel",
    "Squarespace",
    "Wix Studio",
    "Showit",
    "Kajabi",
    "GoDaddy",
    "Other CMS",
  ];

  const budgetTiers = [
    "Under $1,000",
    "$1,000 - $3,000",
    "$3,000 - $7,000",
    "$7,000+",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl p-8 sm:p-10 bg-[#FCE7F3] border border-[#FBCFE8] text-center space-y-5 animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#1E1035] text-[#F59E0B] flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-[#1E1035] tracking-tight">
            Consultation Request Received!
          </h3>
          <p className="text-sm text-[#4A3B63] max-w-md mx-auto font-medium">
            Thank you, <span className="font-bold text-[#1E1035]">{name || "Client"}</span>! Our senior {selectedCms} engineering architects are reviewing your specifications.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-[#FBCFE8] max-w-md mx-auto text-left space-y-2 text-xs text-[#1E1035]">
          <div className="flex justify-between">
            <span className="text-[#6B5E82]">Platform:</span>
            <span className="font-extrabold">{selectedCms}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6B5E82]">SEO Strategy:</span>
            <span className="font-extrabold text-[#10B981]">{needsSeo ? "Included" : "Standard"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6B5E82]">Budget Range:</span>
            <span className="font-extrabold">{budget}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6B5E82]">Response SLA:</span>
            <span className="font-extrabold text-[#1E1035]">Within 2 Business Hours</span>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-[#1E1035] bg-white border border-[#CFC5DE] hover:bg-white/80 transition-all"
          >
            Submit Another Inquiry
          </button>
          <a
            href="mailto:contact@looksbay.com"
            className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#1E1035] text-white hover:bg-[#2F1C52] transition-all shadow-md flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Send Email Directly</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* CMS Platform Selection */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-[#1E1035] block mb-2.5">
          Select Target CMS / Technology *
        </label>
        <div className="flex flex-wrap gap-2">
          {cmsOptions.map((cms) => (
            <button
              key={cms}
              type="button"
              onClick={() => setSelectedCms(cms)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                selectedCms === cms
                  ? "bg-[#1E1035] text-white border-[#1E1035] shadow-sm"
                  : "bg-[#DFD8EA]/40 text-[#52446A] border-[#CFC5DE] hover:bg-white hover:text-[#1E1035]"
              }`}
            >
              {cms}
            </button>
          ))}
        </div>
      </div>

      {/* SEO Toggle */}
      <div className="p-4 rounded-2xl bg-[#DFD8EA]/30 border border-[#CFC5DE] flex items-center justify-between gap-4">
        <div className="space-y-0.5">
          <div className="text-xs font-extrabold text-[#1E1035] flex items-center gap-2">
            <span>Include Technical SEO &amp; 95+ PageSpeed Optimization</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981]">
              Recommended
            </span>
          </div>
          <p className="text-[11px] text-[#52446A]">
            Core Web Vitals tuning, JSON-LD Schema, semantic hierarchy &amp; zero bloat.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setNeedsSeo(!needsSeo)}
          className={`w-12 h-6 rounded-full transition-colors relative shrink-0 p-0.5 ${
            needsSeo ? "bg-[#1E1035]" : "bg-zinc-300"
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white transition-transform ${
              needsSeo ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      {/* Budget Tier */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-[#1E1035] block mb-2.5">
          Approximate Budget Range
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {budgetTiers.map((tier) => (
            <button
              key={tier}
              type="button"
              onClick={() => setBudget(tier)}
              className={`p-2.5 rounded-xl text-xs font-bold transition-all text-center border ${
                budget === tier
                  ? "bg-[#1E1035] text-white border-[#1E1035] shadow-sm"
                  : "bg-[#DFD8EA]/30 text-[#52446A] border-[#CFC5DE] hover:bg-white hover:text-[#1E1035]"
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-[#1E1035] block mb-1.5">
            Your Name / Brand *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. David Vance"
            className="w-full px-4 py-3 rounded-xl bg-[#DFD8EA]/30 border border-[#CFC5DE] text-sm text-[#1E1035] placeholder:text-[#8E7FA8] focus:outline-none focus:border-[#1E1035] transition-colors"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-[#1E1035] block mb-1.5">
            Work Email *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            className="w-full px-4 py-3 rounded-xl bg-[#DFD8EA]/30 border border-[#CFC5DE] text-sm text-[#1E1035] placeholder:text-[#8E7FA8] focus:outline-none focus:border-[#1E1035] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-bold text-[#1E1035] block mb-1.5">
          WhatsApp / Phone (For Quick Direct Discussion)
        </label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+1 (555) 000-0000 or WhatsApp number"
          className="w-full px-4 py-3 rounded-xl bg-[#DFD8EA]/30 border border-[#CFC5DE] text-sm text-[#1E1035] placeholder:text-[#8E7FA8] focus:outline-none focus:border-[#1E1035] transition-colors"
        />
      </div>

      <div>
        <label className="text-xs font-bold text-[#1E1035] block mb-1.5">
          Project Details &amp; Current Website URL (Optional)
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your brand, current challenges, design preferences, or reference websites..."
          className="w-full px-4 py-3 rounded-xl bg-[#DFD8EA]/30 border border-[#CFC5DE] text-sm text-[#1E1035] placeholder:text-[#8E7FA8] focus:outline-none focus:border-[#1E1035] transition-colors"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 px-6 rounded-full text-sm font-extrabold text-white bg-[#1E1035] hover:bg-[#2F1C52] active:scale-[0.99] transition-all shadow-[0_10px_25px_rgba(30,16,53,0.2)] flex items-center justify-center gap-2"
      >
        <span>Send Proposal Request to 20-Person Squad</span>
        <Send className="w-4 h-4" />
      </button>

      <p className="text-center text-[11px] text-[#6B5E82] font-medium">
        🔒 Non-Disclosure Guarantee • No spam • Direct consultation with Senior Lead Architects.
      </p>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-[#52446A]">Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
