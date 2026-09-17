"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "Why should we choose Squarespace 7.1 over WordPress or Webflow?",
    a: "Squarespace 7.1 with Fluid Engine offers the ultimate balance: an award-winning drag-and-drop editor that your non-technical team can easily update, zero plugin conflicts, enterprise cloud security, and lightning fast performance without high maintenance retainers.",
  },
  {
    q: "What perks do we receive through your Circle Platinum Partner status?",
    a: "As an authorized Squarespace Circle Platinum Partner, we grant our clients exclusive perks: an extended 6-month free trial so you never pay for hosting while setting up your site, plus 20% off your first year of any annual Squarespace hosting plan.",
  },
  {
    q: "How fast can we launch with a Looksbay template?",
    a: "Within 24 hours of purchase, we send a direct contributor transfer into your Squarespace account. Most of our clients plug in their copy and imagery and launch their website in 3 to 7 days.",
  },
  {
    q: "Can you customize our template for us?",
    a: "Yes! If you want a done-for-you launch, our 7-Day Fast-Track package handles all copy placement, brand color integration, domain connection, and launch QA in just 7 business days.",
  },
  {
    q: "Can you migrate an existing website from WordPress or Wix?",
    a: "Absolutely. We migrate all your blog articles, portfolio pages, and media files into modern Squarespace 7.1 while setting up 301 redirects to ensure 100% of your Google search rankings are preserved.",
  },
  {
    q: "Will we be able to easily edit our website after launch?",
    a: "Yes. Every template and custom build includes personalized video walkthroughs. You can edit text, swap photos, add blog posts, and manage products with complete confidence and zero developer dependency.",
  },
];

export default function Home8_FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-white text-[#0D0D0D] border-t border-[#E5E5E5]">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#F4511E] font-semibold mb-3">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0D0D0D]">
            Frequently Asked Questions.
          </h2>
        </div>

        <div className="divide-y divide-[#E5E5E5]">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={faq.q} className="py-6">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                >
                  <span className="text-lg sm:text-xl font-bold text-[#0D0D0D] group-hover:text-[#F4511E] transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6B6B6B] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#F4511E]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="mt-4 text-sm sm:text-base text-[#6B6B6B] leading-relaxed pr-8 animate-fade-in">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
