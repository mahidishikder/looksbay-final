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
    q: "Do you offer Squarespace speed optimization and Core Web Vitals fixes?",
    a: "Yes! We specialize in comprehensive Squarespace speed optimization. We compress images, optimize custom CSS/JavaScript code integration, eliminate render-blocking assets, and ensure your site achieves high PageSpeed scores and passes Google Core Web Vitals.",
  },
  {
    q: "Can you fix Squarespace website bugs, mobile layout glitches, and custom CSS?",
    a: "Absolutely. Our professional Squarespace developers handle custom CSS code injection, bespoke JavaScript integration, mobile responsive layout fixes, Fluid Engine overlapping bugs, and third-party API connectivity.",
  },
  {
    q: "Can you set up Squarespace Acuity Scheduling and custom payment gateways?",
    a: "Yes. We configure complete Acuity Scheduling calendars, intake forms, automated reminder emails, Stripe/PayPal checkout, digital product downloads, and membership subscriptions seamlessly.",
  },
  {
    q: "What perks do we receive through your Circle Platinum Partner status?",
    a: "As an authorized Squarespace Circle Platinum Partner, we grant our clients exclusive perks: an extended 6-month free trial so you never pay for hosting while setting up your site, plus 20% off your first year of any annual Squarespace hosting plan.",
  },
  {
    q: "Can you execute a WordPress, Wix, or Shopify migration to Squarespace?",
    a: "Yes. We migrate all your blog articles, portfolio items, product catalogs, and media into modern Squarespace 7.1 while configuring 301 URL redirects to ensure 100% of your Google rankings and backlinks are preserved.",
  },
  {
    q: "How does your Squarespace SEO setup help rank my website on Google?",
    a: "Every build includes deep on-page Squarespace SEO: comprehensive XML sitemap submission, Google Search Console indexing, semantic H1-H3 tagging, custom schema markup (LocalBusiness/Organization), optimized meta descriptions, and image alt text.",
  },
  {
    q: "How fast can we launch with a Looksbay template?",
    a: "Within 24 hours of purchase, we send a direct contributor transfer into your Squarespace account. Most of our clients plug in their copy and imagery and launch their website in 3 to 7 days.",
  },
];

export default function Home8_FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#FFFFFF] text-[#0F0F0F] border-t border-[#0F0F0F]/10">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#FC5001] font-semibold mb-3">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F0F0F]">
            Frequently Asked Questions.
          </h2>
        </div>

        <div className="divide-y divide-[#0F0F0F]/10">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={faq.q} className="py-6">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F0F0F] group-hover:text-[#FC5001] transition-colors">
                    {faq.q}
                  </span>
                  <span className={`w-8 h-8 rounded-full border border-[#0F0F0F]/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#FC5001] text-[#FFFFFF] border-[#FC5001]" : "text-[#0F0F0F]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 text-xs sm:text-sm text-[#0F0F0F]/70 leading-relaxed max-w-3xl animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
