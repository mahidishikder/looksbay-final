"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical website project take from start to finish?",
    answer:
      "Most custom landing pages and flagship corporate websites take between 2 to 4 weeks. Because we run tightly coordinated sprints with our dedicated 20-person in-house squad and eliminate bureaucratic agency layers, we deliver in weeks what traditional agencies take 4 to 6 months to ship.",
  },
  {
    question: "How do we communicate with your team during the sprint?",
    answer:
      "We keep communication ultra-fast and frictionless. You will have a dedicated private Slack or WhatsApp channel directly with your dedicated lead developers and principal architects. For progress updates, we share short, concise Loom video walkthroughs so you never have to sit through unnecessary 1-hour meetings.",
  },
  {
    question: "How do revisions work if we want changes?",
    answer:
      "We believe in collaborative transparency. At each milestone (Wireframes, Visual UI, Staging Build), you can leave point-and-click comments directly in Figma or on the staging site. We review and implement feedback within 24 to 48 hours, keeping the overall sprint on track.",
  },
  {
    question: "Do we own 100% of the code, designs, and digital assets?",
    answer:
      "Yes, 100%. Upon project completion and final launch, all intellectual property, Figma design files, source code repositories, and CMS credentials are fully transferred to your company. You are never locked into proprietary agency hosting.",
  },
  {
    question: "What happens after the website goes live?",
    answer:
      "Every project includes 30 days of comprehensive hypercare support at zero extra charge. During this window, we monitor live performance, fix any edge-case bugs, and provide step-by-step video training for your team to easily manage content updates.",
  },
];

/**
 * ⚡ How We Work Component 6: FAQ Accordion
 * Light luxury theme matching Home aesthetic
 */
export default function How6_FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <span className="text-xs font-black uppercase tracking-widest text-purple-700">
          Got Questions?
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-[#1E0D36] tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          Everything you need to know about our sprint methodology and delivery process.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return (
            <div
              key={index}
              className="rounded-2xl bg-white border border-purple-100 overflow-hidden shadow-xs transition-all hover:border-purple-200"
            >
              <button
                onClick={() => setOpenFaq(isOpen ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-base sm:text-lg font-black text-[#1E0D36]">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  isOpen ? "bg-purple-900 text-white" : "bg-purple-50 text-purple-700"
                }`}>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-purple-50 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
