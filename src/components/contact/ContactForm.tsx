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
      <div className="rounded-2xl p-8 sm:p-10 bg-white text-center space-y-4 border border-[#E5E5E5] shadow-xs">
        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-[#0D0D0D]">
          Project Inquiry Received
        </h3>
        <p className="text-xs sm:text-sm text-[#666666] max-w-sm mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-[#0D0D0D]">{name}</span>. We will review your project details and reply at <span className="font-semibold text-[#0D0D0D]">{email}</span> within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Service Selection */}
      <div>
        <label className="text-xs font-bold text-[#0D0D0D] block mb-2">
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
                  ? "bg-[#FFF4F0] border-[#F4511E] text-[#F4511E] font-bold"
                  : "bg-white border-[#E5E5E5] text-[#555555] hover:border-[#0D0D0D]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Budget Tier */}
      <div>
        <label className="text-xs font-bold text-[#0D0D0D] block mb-2">
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
                  ? "bg-[#0D0D0D] text-white font-bold"
                  : "bg-white border border-[#E5E5E5] text-[#666666] hover:border-[#0D0D0D]"
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
          <label className="text-xs font-bold text-[#0D0D0D] block mb-1">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Steve Jobs"
            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E5E5] text-xs text-[#0D0D0D] focus:outline-none focus:border-[#F4511E] transition-colors placeholder:text-[#999999]"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-[#0D0D0D] block mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="steve@apple.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E5E5] text-xs text-[#0D0D0D] focus:outline-none focus:border-[#F4511E] transition-colors placeholder:text-[#999999]"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="text-xs font-bold text-[#0D0D0D] block mb-1">
          Project Overview (Optional)
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your timeline, reference sites, or brand goals..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E5E5] text-xs text-[#0D0D0D] focus:outline-none focus:border-[#F4511E] transition-colors resize-none placeholder:text-[#999999]"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-full bg-[#F4511E] hover:bg-[#D83A07] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.01] active:scale-98"
      >
        <span>Submit Project Inquiry</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="p-6 text-center text-xs text-[#888888]">Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
