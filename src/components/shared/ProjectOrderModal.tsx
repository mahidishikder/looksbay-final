"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

interface ProjectOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceOptions = [
  "Bespoke Squarespace Website",
  "Template Customization",
  "WordPress/Wix Migration",
  "VIP Day Sprint",
];

const budgetOptions = ["$1,500 – $3,000", "$3,000 – $5,000", "$5,000+"];

export default function ProjectOrderModal({ isOpen, onClose }: ProjectOrderModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const [selectedBudget, setSelectedBudget] = useState(budgetOptions[1]);
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E5E5E5] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#555555] hover:text-[#0D0D0D] flex items-center justify-center transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0D0D0D]">Inquiry Received</h3>
            <p className="text-sm text-[#666666] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-[#0D0D0D]">{name}</span>. We will review your project requirements and reply at <span className="font-semibold text-[#0D0D0D]">{email}</span> within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#0D0D0D] text-white hover:bg-[#F4511E] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4F0] border border-[#F4511E]/20 text-xs font-bold text-[#F4511E] uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4511E]" />
                <span>Start A Project</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0D0D0D] tracking-tight">
                Let&apos;s build your Squarespace.
              </h2>
              <p className="text-xs sm:text-sm text-[#666666] mt-1">
                Tell us about your brand and what you need on Squarespace 7.1.
              </p>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold text-[#0D0D0D] mb-2">
                What service do you need?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {serviceOptions.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-medium text-left border transition-all ${
                      selectedService === service
                        ? "border-[#F4511E] bg-[#FFF4F0] text-[#F4511E] font-bold"
                        : "border-[#E5E5E5] text-[#555555] hover:border-[#0D0D0D]"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#0D0D0D] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Elena Rostova"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#F8F8F8] border border-[#E5E5E5] focus:border-[#F4511E] focus:bg-white focus:outline-none transition-colors text-[#0D0D0D]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0D0D0D] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="elena@studio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#F8F8F8] border border-[#E5E5E5] focus:border-[#F4511E] focus:bg-white focus:outline-none transition-colors text-[#0D0D0D]"
                />
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-xs font-bold text-[#0D0D0D] mb-2">
                Estimated Budget
              </label>
              <div className="flex flex-wrap gap-2">
                {budgetOptions.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => setSelectedBudget(budget)}
                    className={`px-4 py-2 rounded-full text-xs transition-all ${
                      selectedBudget === budget
                        ? "bg-[#0D0D0D] text-white font-bold"
                        : "bg-[#F5F5F5] border border-[#E5E5E5] text-[#555555] hover:border-[#0D0D0D]"
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            {/* Message / Brief */}
            <div>
              <label className="block text-xs font-bold text-[#0D0D0D] mb-1">
                Project Details
              </label>
              <textarea
                rows={3}
                placeholder="Share your timeline, current website link, or brand goals..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#F8F8F8] border border-[#E5E5E5] focus:border-[#F4511E] focus:bg-white focus:outline-none transition-colors resize-none text-[#0D0D0D]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#F4511E] hover:bg-[#D83A07] active:scale-[0.99] text-white text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <span>Submit Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
