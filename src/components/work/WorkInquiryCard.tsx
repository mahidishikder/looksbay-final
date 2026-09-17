"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2, Mail, Phone, Calendar, Clock, Lock } from "lucide-react";

export default function WorkInquiryCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$3,000 - $5,000",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Bespoke Squarespace 7.1",
  ]);
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    "Bespoke Squarespace 7.1",
    "Template Customization",
    "WordPress/Wix Migration",
    "Squarespace Commerce",
    "Custom CSS / JS Code",
    "SEO & Speed Optimization",
  ];

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      setSelectedServices(selectedServices.filter((s) => s !== svc));
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20">
      <div className="rounded-[36px] bg-[#0F0F0F] text-[#FFFFFF] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl border border-[#FFFFFF]/10">
        {/* Balanced subtle ambient glows linking Left and Right */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(252,80,1,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(252,80,1,0.08) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Direct Pitch */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FC5001]">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80"
                    alt="Looksbay Lead Architect"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#FC5001] border-2 border-[#0F0F0F]" />
              </div>

              <div>
                <div className="text-xs font-mono font-bold text-[#FC5001] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FC5001] animate-pulse" />
                  AVAILABLE FOR NEW BUILDS
                </div>
                <div className="text-sm font-bold text-[#FFFFFF]">
                  Senior Squarespace Squad
                </div>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] text-[#FFFFFF]">
              Let&apos;s discuss <br />
              <span className="text-[#FC5001]">your next Squarespace.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#FFFFFF]/70 leading-relaxed font-normal max-w-md">
              Have an upcoming launch or need a high-converting Squarespace overhaul? Tell us about your goals and receive a transparent project scope &amp; roadmap within 24 hours.
            </p>

            {/* Quick Contact Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:contact@looksbay.com"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/20 border border-[#FFFFFF]/15 text-xs font-bold text-[#FFFFFF] transition-all backdrop-blur-sm"
              >
                <Mail className="w-3.5 h-3.5 text-[#FC5001]" />
                <span>contact@looksbay.com</span>
              </a>

              <a
                href="tel:+18005550199"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FFFFFF]/5 hover:bg-[#FFFFFF]/10 border border-[#FFFFFF]/10 text-xs font-bold text-[#FFFFFF]/80 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#FC5001]" />
                <span>Direct Studio Hotline</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-[#FFFFFF]/10 flex flex-wrap gap-6 text-xs text-[#FFFFFF]/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FC5001]" />
                <span>Circle Platinum 20% Discount</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#FC5001]" />
                <span>100% Confidential NDA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] text-[#0F0F0F] shadow-2xl border border-[#FFFFFF]/20">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#F5F5F5] text-[#FC5001] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0F0F0F]">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-[#0F0F0F]/70 max-w-sm mx-auto">
                    Thank you, {formData.name}. Our senior Squarespace architect will review your project requirements and email your proposal within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#0F0F0F] text-[#FFFFFF] text-xs font-bold hover:bg-[#FC5001] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F0F0F]/80 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#0F0F0F]/10 text-sm focus:outline-none focus:border-[#FC5001] text-[#0F0F0F] placeholder:text-[#0F0F0F]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F0F0F]/80 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@studio.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#0F0F0F]/10 text-sm focus:outline-none focus:border-[#FC5001] text-[#0F0F0F] placeholder:text-[#0F0F0F]/40"
                      />
                    </div>
                  </div>

                  {/* Budget Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-[#0F0F0F]/80 mb-1.5">
                      Approximate budget range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#0F0F0F]/10 text-sm focus:outline-none focus:border-[#FC5001] text-[#0F0F0F] font-medium"
                    >
                      <option>&lt; $1,500 (Template Customization / Bug Fixes)</option>
                      <option>$1,500 - $3,000 (Standard 5-Page Squarespace Build)</option>
                      <option>$3,000 - $5,000 (High-End Bespoke Build / eCommerce)</option>
                      <option>$5,000+ (Enterprise Squarespace / Complex Migration)</option>
                    </select>
                  </div>

                  {/* Services Chips */}
                  <div>
                    <label className="block text-xs font-bold text-[#0F0F0F]/80 mb-1.5">
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
                            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                              isSelected
                                ? "bg-[#FC5001] text-[#FFFFFF] shadow-xs"
                                : "bg-[#F5F5F5] text-[#0F0F0F]/70 hover:bg-[#0F0F0F]/10"
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
                    <label className="block text-xs font-bold text-[#0F0F0F]/80 mb-1.5">
                      Project goals &amp; desired timeline
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your brand, current website, or desired launch date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#0F0F0F]/10 text-sm focus:outline-none focus:border-[#FC5001] text-[#0F0F0F] placeholder:text-[#0F0F0F]/40 resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#FC5001] hover:opacity-95 text-[#FFFFFF] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-98"
                    >
                      <Sparkles className="w-4 h-4 text-[#FFFFFF]" />
                      <span>Request Free Scope &amp; Quote</span>
                      <ArrowRight className="w-4 h-4 text-[#FFFFFF]" />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#0F0F0F]/50 text-center pt-1 font-medium">
                    ⚡ 24-hour response · Free architecture review · No commitment
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
