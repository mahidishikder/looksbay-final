"use client";

import React from "react";
import ContactForm from "./ContactForm";
import { Mail, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

/**
 * 📩 Contact Component 2: Project Intake Form & Direct Touchpoints
 * Left: Contact Form | Right: Direct email, WhatsApp, and agency commitments
 */
export default function Contact2_IntakeChannels() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left: Contact Form Card */}
      <div className="glass-surface lg:col-span-7 rounded-[36px] bg-white p-8 sm:p-12 shadow-xl border border-purple-100">
        <div className="pb-6 mb-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-black text-slate-900">Project Intake Form</h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Tell us about your target CMS &amp; goals.</p>
          </div>

          <span className="px-3 py-1 rounded-full bg-purple-100 text-xs font-bold text-purple-900 border border-purple-200">
            ⚡ Response &lt; 2 Hours
          </span>
        </div>

        <ContactForm />
      </div>

      {/* Right: Direct Contacts */}
      <div className="lg:col-span-5 space-y-6">
        <div className="glass-surface rounded-[36px] bg-white p-8 shadow-sm border border-purple-100 space-y-5">
          <h4 className="text-lg font-black text-slate-900">Direct Touchpoints</h4>

          <div className="space-y-3">
            <a
              href="mailto:contact@looksbay.agency"
              className="flex items-center gap-4 p-4 rounded-2xl bg-purple-50/60 hover:bg-purple-100/70 border border-purple-100 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2E1065] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-purple-700 font-bold">Direct Email</div>
                <div className="text-sm font-black text-slate-900">contact@looksbay.agency</div>
              </div>
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/60 hover:bg-emerald-100/70 border border-emerald-100 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-emerald-700 font-bold">Response Guarantee</div>
                <div className="text-sm font-black text-slate-900">Monday – Saturday (24/6 Support)</div>
              </div>
            </a>
          </div>
        </div>

        {/* Commitment Box */}
        <div className="rounded-[36px] bg-gradient-to-r from-[#2E1065] to-[#4C1D95] text-white p-8 shadow-xl space-y-4">
          <h4 className="text-lg font-black flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#CCFF00]" />
            <span>The LooksBay Commitment</span>
          </h4>

          <ul className="space-y-3 text-xs text-purple-100/90 font-medium">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
              <span><strong>100% Code &amp; Asset Ownership:</strong> All admin logins and repository code belong to you.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
              <span><strong>Zero-Downtime Migration:</strong> Seamless switchover with zero impact to business traffic.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
              <span><strong>30-Day Launch Warranty:</strong> Free post-launch bug fixes and search console indexing support.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
