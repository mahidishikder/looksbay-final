"use client";

import React, { useState, Suspense } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

function ContactFormInner() {
  const [service, setService] = useState("Bespoke Squarespace 7.1");
  const [budget, setBudget] = useState("$3,000 - $5,000");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Bespoke Squarespace 7.1",
    "Template Customization",
    "WordPress/Wix Migration",
    "VIP Day Consulting",
  ];

  const budgetTiers = ["$1,500 – $3,000", "$3,000 – $5,000", "$5,000+"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl p-8 sm:p-10 bg-[#FFFFFF] text-center space-y-4 border border-[#0F0F0F]/10 shadow-xs">
        <div className="w-14 h-14 rounded-full bg-[#F5F5F5] text-[#FC5001] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-[#0F0F0F]">
          Project Inquiry Received
        </h3>
        <p className="text-xs sm:text-sm text-[#0F0F0F]/70 max-w-sm mx-auto leading-relaxed">
          Thank you, <span className="font-bold text-[#0F0F0F]">{name}</span>. We will review your project details and reply at <span className="font-bold text-[#0F0F0F]">{email}</span> within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Service Selection */}
      <div>
        <label className="text-xs font-bold text-[#0F0F0F] block mb-2">
          Select Service
        </label>
        <div className="grid grid-cols-2 gap-2">
          {services.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setService(item)}
              className={`p-2.5 rounded-xl text-xs text-left border transition-all ${
                service === item
                  ? "bg-[#F5F5F5] border-[#FC5001] text-[#FC5001] font-bold"
                  : "bg-[#FFFFFF] border-[#0F0F0F]/10 text-[#0F0F0F]/70 hover:border-[#0F0F0F]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Budget Tier */}
      <div>
        <label className="text-xs font-bold text-[#0F0F0F] block mb-2">
          Estimated Budget
        </label>
        <div className="flex flex-wrap gap-2">
          {budgetTiers.map((tier) => (
            <button
              key={tier}
              type="button"
              onClick={() => setBudget(tier)}
              className={`px-4 py-2 rounded-full text-xs transition-all ${
                budget === tier
                  ? "bg-[#0F0F0F] text-[#FFFFFF] font-bold"
                  : "bg-[#FFFFFF] border border-[#0F0F0F]/10 text-[#0F0F0F]/70 hover:border-[#0F0F0F]"
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-bold text-[#0F0F0F] block mb-1">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Steve Jobs"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#0F0F0F]/10 text-xs text-[#0F0F0F] focus:outline-none focus:border-[#FC5001] transition-colors placeholder:text-[#0F0F0F]/40"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-[#0F0F0F] block mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="steve@apple.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#0F0F0F]/10 text-xs text-[#0F0F0F] focus:outline-none focus:border-[#FC5001] transition-colors placeholder:text-[#0F0F0F]/40"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="text-xs font-bold text-[#0F0F0F] block mb-1">
          Project Overview (Optional)
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your timeline, reference sites, or brand goals..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#0F0F0F]/10 text-xs text-[#0F0F0F] focus:outline-none focus:border-[#FC5001] transition-colors resize-none placeholder:text-[#0F0F0F]/40"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-full bg-[#FC5001] hover:opacity-95 text-[#FFFFFF] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.01] active:scale-98"
      >
        <span>Submit Project Inquiry</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="p-6 text-center text-xs text-[#0F0F0F]/60">Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
