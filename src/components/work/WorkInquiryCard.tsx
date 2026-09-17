"use client";

import React, { useState } from "react";
import { CheckCircle2, MessageSquare, Mail, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function WorkInquiryCard() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>(["Bespoke Squarespace 7.1"]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$2,500 - $5,000",
    message: "",
  });

  const availableServices = [
    "Bespoke Squarespace 7.1",
    "Template Customization",
    "WordPress to Squarespace",
    "eCommerce & Acuity",
    "VIP Day Sprint",
    "SEO & Speed Audit",
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
    <section className="py-16">
      <div className="relative rounded-[36px] sm:rounded-[44px] bg-[#0D0D0D] p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-[#222222] overflow-hidden">
        {/* Ambient warm orange background glow */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(244,81,30,0.2) 0%, rgba(255,122,48,0.08) 50%, transparent 75%)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE: Pitch & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            {/* Team Lead Avatar & Availability */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-md">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80"
                    alt="LooksBay Lead Architect"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#0D0D0D]" />
              </div>

              <div>
                <div className="text-xs font-mono font-bold text-[#F4511E] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4511E] animate-pulse" />
                  AVAILABLE FOR NEW BUILDS
                </div>
                <div className="text-sm font-bold text-white">
                  Senior Squarespace Squad
                </div>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] text-white">
              Let&apos;s discuss <br />
              <span className="text-[#F4511E]">your next Squarespace.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed font-normal max-w-md">
              Have an upcoming launch or need a high-converting Squarespace overhaul? Tell us about your goals and receive a transparent project scope &amp; roadmap within 24 hours.
            </p>

            {/* Quick Contact Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:contact@looksbay.com"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-all backdrop-blur-sm"
              >
                <Mail className="w-3.5 h-3.5 text-[#F4511E]" />
                <span>contact@looksbay.com</span>
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/30 text-xs font-bold text-emerald-300 transition-all backdrop-blur-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
                <span>WhatsApp Direct Chat</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#888888] font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Client Ownership · Strict NDA &amp; Confidentiality</span>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 sm:p-10 text-[#0D0D0D] shadow-2xl border border-white/10">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D0D0D]">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-[#666666] max-w-md mx-auto">
                    Thank you! Our technical architect has received your project details and will email your preliminary scope and roadmap within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#0D0D0D] text-white text-xs font-bold hover:bg-[#F4511E] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#333333] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F8F8] border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#F4511E] text-[#0D0D0D] placeholder:text-[#999999]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#333333] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@studio.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F8F8] border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#F4511E] text-[#0D0D0D] placeholder:text-[#999999]"
                      />
                    </div>
                  </div>

                  {/* Budget Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-[#333333] mb-1.5">
                      Approximate budget range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F8F8] border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#F4511E] text-[#0D0D0D] font-medium"
                    >
                      <option>&lt; $1,500 (Template Customization / Minor Refinements)</option>
                      <option>$1,500 - $3,000 (Standard 5-Page Squarespace Build)</option>
                      <option>$3,000 - $5,000 (High-End Bespoke Build / eCommerce)</option>
                      <option>$5,000+ (Enterprise Squarespace / Complex Migration)</option>
                    </select>
                  </div>

                  {/* Services Chips */}
                  <div>
                    <label className="block text-xs font-bold text-[#333333] mb-1.5">
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
                                ? "bg-[#F4511E] text-white shadow-xs"
                                : "bg-[#F0F0F0] text-[#555555] hover:bg-[#EAEAEA]"
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
                    <label className="block text-xs font-bold text-[#333333] mb-1.5">
                      Project goals &amp; desired timeline
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your brand, current website, or desired launch date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F8F8] border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#F4511E] text-[#0D0D0D] placeholder:text-[#999999] resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#F4511E] hover:bg-[#D83A07] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-98"
                    >
                      <Sparkles className="w-4 h-4 text-white" />
                      <span>Request Free Scope &amp; Quote</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#888888] text-center pt-1 font-medium">
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
