"use client";

import React from "react";
import ContactForm from "./ContactForm";
import { Mail, Clock, CheckCircle2 } from "lucide-react";

export default function Contact2_IntakeChannels() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left: Contact Form Card */}
      <div className="lg:col-span-7 rounded-3xl bg-[#F5F5F5] p-8 sm:p-10 border border-[#0F0F0F]/10 shadow-xs">
        <div className="pb-4 mb-6 border-b border-[#0F0F0F]/10">
          <h3 className="text-xl font-bold text-[#0F0F0F]">Project Brief</h3>
          <p className="text-xs text-[#0F0F0F]/65 mt-1">Tell us about your brand goals &amp; desired timeline.</p>
        </div>

        <ContactForm />
      </div>

      {/* Right: Direct Channels */}
      <div className="lg:col-span-5 space-y-4">
        <div className="rounded-3xl bg-[#F5F5F5] p-8 border border-[#0F0F0F]/10 space-y-4 shadow-xs">
          <h4 className="text-lg font-bold text-[#0F0F0F]">Direct Channels</h4>

          <div className="space-y-3">
            <a
              href="mailto:contact@looksbay.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFFFFF] border border-[#0F0F0F]/10 hover:border-[#FC5001] transition-all shadow-xs group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F5F5F5] text-[#FC5001] flex items-center justify-center shrink-0 border border-[#0F0F0F]/10">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-[#0F0F0F]/50">Email Address</div>
                <div className="text-sm font-bold text-[#0F0F0F] group-hover:text-[#FC5001] transition-colors">
                  contact@looksbay.com
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFFFFF] border border-[#0F0F0F]/10 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#F5F5F5] text-[#FC5001] flex items-center justify-center shrink-0 border border-[#0F0F0F]/10">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-[#0F0F0F]/50">Response Time</div>
                <div className="text-sm font-bold text-[#0F0F0F]">Within 24 hours (Guaranteed)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Commitment Box */}
        <div className="rounded-3xl bg-[#0F0F0F] text-[#FFFFFF] p-8 border border-[#FFFFFF]/10 space-y-3 shadow-xl relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[200px] h-[200px] pointer-events-none rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(252,80,1,0.18) 0%, transparent 70%)",
            }}
          />
          <h4 className="text-lg font-bold text-[#FFFFFF] relative z-10">
            The Looksbay Guarantee
          </h4>

          <ul className="space-y-2.5 text-xs text-[#FFFFFF]/70 relative z-10">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#FC5001] shrink-0 mt-0.5" />
              <span><strong className="text-[#FFFFFF]">Full Ownership:</strong> You own 100% of all Squarespace assets and custom code.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#FC5001] shrink-0 mt-0.5" />
              <span><strong className="text-[#FFFFFF]">Zero Downtime:</strong> Seamless WordPress &amp; Wix migrations with full SEO rank preservation.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#FC5001] shrink-0 mt-0.5" />
              <span><strong className="text-[#FFFFFF]">Video Handoff:</strong> Personalized Loom video walkthroughs for effortless client editing.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
