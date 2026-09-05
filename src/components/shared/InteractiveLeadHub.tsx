"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, MessageSquare, Send, Sparkles, Mail, ShieldCheck, Phone, Zap } from "lucide-react";

interface InteractiveLeadHubProps {
  onOpenOrderModal?: () => void;
}

export default function InteractiveLeadHub({ onOpenOrderModal }: InteractiveLeadHubProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cms, setCms] = useState("Shopify");
  const [budget, setBudget] = useState("$3k - $5k");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const budgets = ["$1k - $3k", "$3k - $5k", "$5k - $10k", "$10k+"];
  const platforms = ["Shopify Plus", "Webflow", "WordPress", "Framer", "Next.js", "GoHighLevel"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative bg-[#F8FAFC] py-[100px] px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-slate-100">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#FAF5FF] via-[#F5EEFF] to-[#FAF8FF] border border-purple-200/90 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_70px_rgba(124,58,237,0.07)] text-slate-900">
          {/* Background Dot Texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: "radial-gradient(rgba(124, 58, 237, 0.2) 1.2px, transparent 1.2px)",
              backgroundSize: "22px 22px",
            }}
          />

          {/* Floating Colorful Dots matching Sections 2 & 4 */}
          <div
            className="absolute top-8 left-10 w-3.5 h-3.5 rounded-full bg-purple-500/70 pointer-events-none animate-pulse"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute bottom-12 left-1/3 w-4 h-4 rounded-full bg-emerald-400/80 pointer-events-none animate-bounce"
            style={{ animationDuration: "5s" }}
          />
          <div
            className="absolute top-1/4 right-10 w-3 h-3 rounded-full bg-amber-400/70 pointer-events-none animate-ping"
            style={{ animationDuration: "4s" }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Online Status, Value Prop */}
            <div className="lg:col-span-5 space-y-6">
              {/* Agency Collective Status Pill */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-13 h-13 rounded-2xl bg-purple-600 p-3 text-white flex items-center justify-center shadow-md">
                    <Sparkles className="w-6 h-6 text-[#CCFF00]" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-white" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-purple-700">
                    Available For New Sprints
                  </div>
                  <div className="text-sm font-black text-[#1E0D36]">LooksBay 20-Person Squad</div>
                </div>
              </div>

              {/* Giant Punchy Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E0D36] tracking-tight leading-[1.05]">
                Let&apos;s discuss your <br />
                <span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#2563EB] bg-clip-text text-transparent">
                  next website.
                </span>
              </h2>
              <p className="text-xl sm:text-2xl font-black text-purple-900">
                Coffee on us ☕
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Fill out this quick brief with your project goals. Our lead technical architects review your requirements and reply within 2 hours with a fixed quote and sprint roadmap.
              </p>

              {/* Direct Contact & Commitments */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:contact@looksbay.com"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-purple-50 border border-purple-200 text-xs font-bold text-[#1E0D36] transition-colors shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-purple-600" />
                    <span>contact@looksbay.com</span>
                  </a>

                  {onOpenOrderModal && (
                    <button
                      type="button"
                      onClick={onOpenOrderModal}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E1065] hover:bg-purple-900 text-white text-xs font-black transition-all shadow-xs"
                    >
                      <Zap className="w-3.5 h-3.5 text-[#CCFF00]" />
                      <span>Full Project Order Form ⚡</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-600 font-bold">
                  <span className="flex items-center gap-1.5 text-purple-900">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                    Zero Outsourcing
                  </span>
                  <span className="flex items-center gap-1.5 text-purple-900">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                    95+ Speed Guarantee
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Light Pastel Interactive Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-white rounded-[32px] p-8 sm:p-12 text-slate-900 border border-purple-200 shadow-xl text-center space-y-4 animate-scale-up">
                  <div className="w-16 h-16 rounded-full bg-[#CCFF00] mx-auto flex items-center justify-center text-black font-black shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1E0D36]">Project Brief Received!</h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto font-medium">
                    Thank you, <strong>{name}</strong>! Our lead engineering pod is currently scoping your build. We will reach out via WhatsApp/Email at <strong>{email}</strong> within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-extrabold bg-[#2E1065] text-white hover:bg-purple-900 transition-colors"
                  >
                    Send Another Project
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-[32px] p-6 sm:p-10 text-slate-900 border border-purple-100 shadow-xl space-y-5"
                >
                  {/* Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-none focus:border-purple-600 focus:bg-white transition-all text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-none focus:border-purple-600 focus:bg-white transition-all text-slate-900"
                      />
                    </div>
                  </div>

                  {/* WhatsApp Number (Explicitly requested by user) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      WhatsApp Number / Phone
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000 or WhatsApp number"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-none focus:border-purple-600 focus:bg-white transition-all text-slate-900"
                      />
                    </div>
                  </div>

                  {/* Preferred Platform Pill Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Target CMS Platform
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {platforms.map((p) => (
                        <button
                          type="button"
                          key={p}
                          onClick={() => setCms(p)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                            cms === p
                              ? "bg-[#7C3AED] text-white shadow-xs"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Estimated Budget Pill Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Project Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgets.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`py-2 rounded-xl text-xs font-bold transition-all border text-center ${
                            budget === b
                              ? "bg-[#2E1065] text-[#CCFF00] border-[#2E1065] shadow-xs"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      What are you looking to build?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your brand, goals, target timeline, or share a reference URL..."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-none focus:border-purple-600 focus:bg-white transition-all text-slate-900 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-black flex items-center justify-center gap-2 cursor-pointer shadow-lg bg-[#CCFF00] hover:bg-[#b8e600] text-black active:scale-98 transition-all"
                  >
                    <span>Submit Project Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-slate-400 font-medium">
                    🔒 Strictly Confidential. Zero Spam. 100% On-Time Delivery Guarantee.
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
