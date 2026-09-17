"use client";

import React from "react";
import ContactForm from "./ContactForm";
import { Mail, Clock, CheckCircle2 } from "lucide-react";

export default function Contact2_IntakeChannels() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left: Contact Form Card */}
      <div className="lg:col-span-7 rounded-3xl bg-[#FAF8F5] p-8 sm:p-10 border border-[#EAEAEA] shadow-xs">
        <div className="pb-4 mb-6 border-b border-[#EAEAEA]">
          <h3 className="text-xl font-bold text-[#0D0D0D]">Project Brief</h3>
          <p className="text-xs text-[#666666] mt-1">Tell us about your brand goals &amp; desired timeline.</p>
        </div>

        <ContactForm />
      </div>

      {/* Right: Direct Contacts */}
      <div className="lg:col-span-5 space-y-4">
        <div className="rounded-3xl bg-[#FAF8F5] p-8 border border-[#EAEAEA] space-y-4 shadow-xs">
          <h4 className="text-lg font-bold text-[#0D0D0D]">Direct Channels</h4>

          <div className="space-y-3">
            <a
              href="mailto:contact@looksbay.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#EAEAEA] hover:border-[#F4511E] transition-all shadow-xs group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFF4F0] text-[#F4511E] flex items-center justify-center shrink-0 border border-[#F4511E]/15">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-[#888888]">Email Address</div>
                <div className="text-sm font-bold text-[#0D0D0D] group-hover:text-[#F4511E] transition-colors">
                  contact@looksbay.com
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#EAEAEA] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-[#888888]">Response Time</div>
                <div className="text-sm font-bold text-[#0D0D0D]">Within 24 hours (Guaranteed)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Commitment Box */}
        <div className="rounded-3xl bg-[#0D0D0D] text-white p-8 border border-[#222222] space-y-3 shadow-xl relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[200px] h-[200px] pointer-events-none rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(244,81,30,0.18) 0%, transparent 70%)",
            }}
          />
          <h4 className="text-lg font-bold text-white relative z-10">
            The Looksbay Guarantee
          </h4>

          <ul className="space-y-2.5 text-xs text-[#CCCCCC] relative z-10">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#F4511E] shrink-0 mt-0.5" />
              <span><strong className="text-white">Full Ownership:</strong> You own 100% of all Squarespace assets and custom code.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#F4511E] shrink-0 mt-0.5" />
              <span><strong className="text-white">Zero Downtime:</strong> Seamless WordPress &amp; Wix migrations with full SEO rank preservation.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#F4511E] shrink-0 mt-0.5" />
              <span><strong className="text-white">Video Handoff:</strong> Personalized Loom video walkthroughs for effortless client editing.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
