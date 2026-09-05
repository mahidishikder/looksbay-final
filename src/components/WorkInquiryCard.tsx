"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, Mail, Phone, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function WorkInquiryCard() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>(["Web Design"]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$2,500 - $5,000",
    message: "",
  });

  const availableServices = [
    "Web Design",
    "Shopify",
    "Webflow",
    "WordPress",
    "Framer",
    "Custom Next.js",
  ];

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svc));
      }
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12">
      <div className="relative rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E40AF] p-8 sm:p-12 lg:p-16 text-white shadow-[0_25px_70px_rgba(37,99,235,0.3)] overflow-hidden">
        
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-indigo-600/30 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: Pitch & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Team Lead Avatar & Availability */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/80 shadow-md">
                  <img loading="lazy" decoding="async"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80"
                    alt="LooksBay Lead Architect"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#1E40AF]" />
              </div>

              <div>
                <div className="text-xs font-mono font-bold text-emerald-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  AVAILABLE FOR NEW BUILDS
                </div>
                <div className="text-sm font-bold text-white">
                  Senior Engineering Squad
                </div>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1]">
              Let&apos;s discuss <br />
              <span className="text-[#CCFF00]">your next website.</span>
            </h2>

            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-medium max-w-md">
              Have an upcoming product launch or need a high-converting CMS overhaul? Tell us about your goals and receive a transparent project scope & timeline within 2 hours.
            </p>

            {/* Quick Contact Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:contact@looksbay.agency"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-all backdrop-blur-sm"
              >
                <Mail className="w-3.5 h-3.5 text-blue-200" />
                <span>contact@looksbay.agency</span>
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-xs font-bold text-emerald-200 transition-all backdrop-blur-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
                <span>WhatsApp Direct Chat</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-blue-200/80 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>100% Confidentiality & Strict NDA Compliance</span>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white/95 backdrop-blur-md p-6 sm:p-10 text-slate-900 shadow-2xl border border-white/20">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Proposal Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you! Our technical architect has received your project details and will email your preliminary scope and estimate within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        What&apos;s your name?
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Work or personal email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Budget Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Approximate budget range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 font-medium"
                    >
                      <option>&lt; $1,000 (Quick Audit / Minor Redesign)</option>
                      <option>$1,000 - $2,500 (Standard CMS Build)</option>
                      <option>$2,500 - $5,000 (High-End Custom E-commerce / Webflow)</option>
                      <option>$5,000+ (Enterprise Headless / Multi-Country)</option>
                    </select>
                  </div>

                  {/* Services Chips */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Services required (select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {availableServices.map((svc) => {
                        const isSelected = selectedServices.includes(svc);
                        return (
                          <button
                            type="button"
                            key={svc}
                            onClick={() => toggleService(svc)}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                              isSelected
                                ? "bg-blue-600 text-white shadow-xs"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                          >
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Tell us about your project & requirements
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="e.g., We need a lightning-fast Shopify Plus store or Webflow site with custom animations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-slate-950 font-black text-sm transition-all flex items-center justify-center gap-2 shadow-lg active:scale-98"
                    >
                      <Sparkles className="w-4 h-4 text-slate-950" />
                      <span>Request Free Scope & Quote</span>
                      <ArrowRight className="w-4 h-4 text-slate-950" />
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-1 font-medium">
                    ⚡ Fast 2-hour response · Free architecture review · No hard sales pitch
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
