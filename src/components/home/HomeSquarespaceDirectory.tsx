"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Search, Code, Sparkles, Zap, Wrench, Shield, Globe } from "lucide-react";
import ProjectOrderModal from "@/components/shared/ProjectOrderModal";

interface ServiceCategory {
  id: string;
  categoryTitle: string;
  icon: string;
  summary: string;
  intentKeywords: string[];
  features: string[];
}

const SEO_SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "photography",
    categoryTitle: "1. Photography & Videography",
    icon: "📸",
    summary: "Squarespace photography website, photographer portfolio, wedding photography, drone and videography portfolios.",
    intentKeywords: [
      "Squarespace photography website",
      "Squarespace photographer portfolio",
      "Squarespace wedding photography website",
      "Squarespace event photography site",
      "Squarespace videographer website",
      "Squarespace drone photographer site",
      "Squarespace portrait photography",
      "Squarespace photo studio site",
    ],
    features: ["Full-bleed proofing galleries", "Client image password portals", "High-resolution lazy loading"],
  },
  {
    id: "wedding",
    categoryTitle: "2. Wedding & Events",
    icon: "💍",
    summary: "Squarespace wedding websites, wedding planner sites, RSVP tracking, bridal boutiques and event venues.",
    intentKeywords: [
      "Squarespace wedding website",
      "Squarespace wedding planner site",
      "Squarespace wedding RSVP website",
      "Squarespace bridal boutique site",
      "Squarespace event venue site",
      "Squarespace party planner site",
      "Squarespace wedding coordinator",
    ],
    features: ["Custom RSVP intake forms", "Interactive itinerary timeline", "Hotel accommodation maps"],
  },
  {
    id: "portfolio",
    categoryTitle: "3. Portfolio, Creative & Design",
    icon: "🎨",
    summary: "Squarespace portfolio websites, artist sites, graphic designer portfolios, illustrators, 3D artists, and creative directors.",
    intentKeywords: [
      "Squarespace portfolio website",
      "Squarespace artist website",
      "Squarespace graphic designer portfolio",
      "Squarespace illustrator site",
      "Squarespace model portfolio",
      "Squarespace actor portfolio",
      "Squarespace 3D artist site",
      "Squarespace creative director site",
    ],
    features: ["Interactive project case studies", "Fluid grid layout", "Audio/video embed integration"],
  },
  {
    id: "fashion",
    categoryTitle: "4. Fashion, Beauty & Lifestyle",
    icon: "✨",
    summary: "Squarespace fashion websites, boutique apparel stores, jewelry brands, makeup artists, and hair salons.",
    intentKeywords: [
      "Squarespace fashion website",
      "Squarespace clothing brand site",
      "Squarespace boutique website",
      "Squarespace jewelry website",
      "Squarespace makeup artist site",
      "Squarespace hair salon website",
      "Squarespace skincare store",
      "Squarespace cosmetics site",
    ],
    features: ["Lookbook product tagging", "Instagram feed synchronization", "Acuity appointment scheduling"],
  },
  {
    id: "realestate",
    categoryTitle: "5. Real Estate & Architecture",
    icon: "🏡",
    summary: "Squarespace real estate websites, realtor sites, interior design portfolios, property management and Airbnb rentals.",
    intentKeywords: [
      "Squarespace real estate website",
      "Squarespace realtor site",
      "Squarespace interior design site",
      "Squarespace architecture portfolio",
      "Squarespace property management site",
      "Squarespace Airbnb site",
      "Squarespace construction website",
      "Squarespace home staging site",
    ],
    features: ["IDX / MLS property search sync", "3D architectural floorplans", "Interactive inquiry leads"],
  },
  {
    id: "ecommerce",
    categoryTitle: "6. E-Commerce & Retail",
    icon: "🛍️",
    summary: "Squarespace online stores, ecommerce optimization, digital downloads, subscription stores, and payment setup.",
    intentKeywords: [
      "Squarespace online store",
      "Squarespace ecommerce website",
      "Squarespace shop customization",
      "Squarespace digital products store",
      "Squarespace subscription site",
      "Squarespace merch store",
      "Squarespace product landing page",
      "Squarespace payment gateway setup",
    ],
    features: ["Stripe & PayPal 1-click checkout", "Automated shipping calculators", "Abandoned cart recovery"],
  },
  {
    id: "business",
    categoryTitle: "7. Business, Consulting & Agency",
    icon: "💼",
    summary: "Squarespace agency websites, corporate business platforms, management consulting, and startup landing pages.",
    intentKeywords: [
      "Squarespace agency website",
      "Squarespace business website",
      "Squarespace corporate website",
      "Squarespace consulting website",
      "Squarespace marketing agency site",
      "Squarespace recruitment site",
      "Squarespace startup website",
      "Squarespace financial planner site",
    ],
    features: ["High-ticket lead generation funnels", "CRM Zapier automation", "Client testimonial carousels"],
  },
  {
    id: "fitness",
    categoryTitle: "8. Fitness, Health & Wellness",
    icon: "🧘",
    summary: "Squarespace fitness websites, gym portals, yoga studios, personal trainers, pilates studios, and nutrition blogs.",
    intentKeywords: [
      "Squarespace fitness website",
      "Squarespace gym website",
      "Squarespace yoga studio site",
      "Squarespace personal trainer site",
      "Squarespace Pilates studio site",
      "Squarespace wellness blog",
      "Squarespace nutrition site",
      "Squarespace mental health site",
    ],
    features: ["Class schedule calendar integration", "Membership gating", "Automated booking waivers"],
  },
  {
    id: "medical",
    categoryTitle: "9. Medical & Professional Services",
    icon: "🩺",
    summary: "Squarespace medical practices, doctors, dental clinics, law firms, accountants, and therapy websites.",
    intentKeywords: [
      "Squarespace medical website",
      "Squarespace doctor site",
      "Squarespace dentist website",
      "Squarespace law firm website",
      "Squarespace accountant site",
      "Squarespace therapy website",
      "Squarespace clinic website",
    ],
    features: ["HIPAA-compliant form links", "Multi-practitioner bios", "Google Business Profile local SEO"],
  },
  {
    id: "hospitality",
    categoryTitle: "10. Food, Beverage & Hospitality",
    icon: "🍽️",
    summary: "Squarespace restaurant websites, cafes, bakeries, coffee shops, catering menus, and bar cocktail lounges.",
    intentKeywords: [
      "Squarespace restaurant website",
      "Squarespace cafe website",
      "Squarespace bakery website",
      "Squarespace food blog",
      "Squarespace coffee shop site",
      "Squarespace catering website",
      "Squarespace bar and lounge site",
    ],
    features: ["Digital responsive food menus", "OpenTable & Resy reservations", "Direct pickup/delivery links"],
  },
  {
    id: "coaching",
    categoryTitle: "11. Coaching, Education & Courses",
    icon: "🎓",
    summary: "Squarespace life coaches, business mentors, online course portals, educational tutoring, and workshop booking.",
    intentKeywords: [
      "Squarespace life coach website",
      "Squarespace business coach site",
      "Squarespace course website",
      "Squarespace educational site",
      "Squarespace tutoring site",
      "Squarespace workshop booking",
    ],
    features: ["Member Areas paywalls", "Video course modules", "Discovery call Acuity scheduling"],
  },
  {
    id: "entertainment",
    categoryTitle: "12. Entertainment & Media",
    icon: "🎬",
    summary: "Squarespace podcast websites, musician portfolios, bands, DJs, film trailers, and entertainment talent agencies.",
    intentKeywords: [
      "Squarespace podcast website",
      "Squarespace music website",
      "Squarespace band website",
      "Squarespace DJ website",
      "Squarespace movie site",
      "Squarespace entertainment agency",
    ],
    features: ["Spotify & Apple Podcasts feeds", "Tour date Bandsintown embeds", "Electronic press kits (EPK)"],
  },
  {
    id: "nonprofit",
    categoryTitle: "13. Non-Profit & Community",
    icon: "🤝",
    summary: "Squarespace non-profit websites, charitable organizations, NGO portals, church communities, and civic associations.",
    intentKeywords: [
      "Squarespace non profit website",
      "Squarespace charity site",
      "Squarespace NGO website",
      "Squarespace church website",
      "Squarespace community organization",
    ],
    features: ["Recurring donation checkout", "Volunteer registration workflows", "Annual report PDF downloads"],
  },
  {
    id: "technical",
    categoryTitle: "14. Custom Code & Technical Fixes",
    icon: "⚡",
    summary: "Squarespace CSS code injection, custom JavaScript plugins, bug fixes, mobile layout corrections, and speed audits.",
    intentKeywords: [
      "Fix Squarespace website bugs",
      "Squarespace custom CSS code integration",
      "Custom JavaScript for Squarespace",
      "Squarespace mobile responsive layout fix",
      "Squarespace custom plugin",
      "Squarespace bug fix",
      "Custom Squarespace website",
    ],
    features: ["Fluid Engine overlap fixes", "Custom CSS interactive animations", "Cross-browser debugging"],
  },
  {
    id: "seo",
    categoryTitle: "15. SEO, Indexing & Google Ranking",
    icon: "📈",
    summary: "Squarespace SEO expert audit, search engine optimization, Google ranking, XML sitemap indexing, and local SEO.",
    intentKeywords: [
      "Squarespace SEO expert",
      "Rank Squarespace website on Google",
      "Squarespace search engine optimization",
      "Squarespace local SEO setup",
      "Improve Squarespace Google ranking",
      "Squarespace meta tags setup",
      "Squarespace sitemap submit",
    ],
    features: ["Schema.org JSON-LD generation", "Google Search Console indexing", "Keyword architecture"],
  },
  {
    id: "templates",
    categoryTitle: "16. Template Buying, Redesign & Migration",
    icon: "💎",
    summary: "Premium Squarespace templates for sale, template installation service, 7-day fast track setup, and redesign migration.",
    intentKeywords: [
      "Premium Squarespace templates for sale",
      "Modern custom Squarespace templates",
      "Buy editable Squarespace template",
      "Squarespace template installation service",
      "Squarespace template customization",
      "Squarespace redesign service",
      "Squarespace website migration",
    ],
    features: ["24-Hour contributor delivery", "20% Annual hosting savings", "6-Month extended free trial"],
  },
];

export default function HomeSquarespaceDirectory() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Custom Squarespace Web Design");

  const filteredCategories = SEO_SERVICE_CATEGORIES.filter((cat) => {
    const matchesTab = activeCategory === "all" || cat.id === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      cat.categoryTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.intentKeywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#FFFFFF] text-[#0F0F0F] border-t border-[#0F0F0F]/10">
      <div className="max-w-[1640px] mx-auto space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0F0F0F] bg-[#FFFFFF] text-[11px] font-bold text-[#0F0F0F] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#FC5001] animate-pulse" />
            <span>Squarespace Specializations &amp; High-Intent Services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F0F0F] tracking-tight leading-tight">
            Hire an Authorized Squarespace Expert for <br />
            <span className="text-[#FC5001]">Every Industry &amp; Technical Challenge.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#0F0F0F]/70 leading-relaxed max-w-2xl mx-auto">
            Whether you need custom CSS code integration, bug fixes, 7-day template customization, or industry-specific SEO ranking — our Circle Platinum studio delivers unmatched quality.
          </p>

          {/* Quick Search Input */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#0F0F0F]/50 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search keyword (e.g., bug fix, wedding, real estate, SEO)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#F5F5F5] border border-[#0F0F0F]/15 rounded-md text-xs sm:text-sm text-[#0F0F0F] placeholder-[#0F0F0F]/45 focus:outline-none focus:border-[#FC5001] transition-colors"
            />
          </div>
        </div>

        {/* 16 Niche Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((item) => (
            <div
              key={item.id}
              className="group bg-[#F5F5F5] border border-[#0F0F0F]/10 hover:border-[#FC5001] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg rounded-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[10px] font-mono font-bold text-[#FC5001] uppercase tracking-wider bg-[#FFFFFF] px-2.5 py-1 border border-[#0F0F0F]/10">
                    Squarespace 7.1
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F0F0F] group-hover:text-[#FC5001] transition-colors">
                  {item.categoryTitle}
                </h3>

                <p className="text-xs text-[#0F0F0F]/70 leading-relaxed">
                  {item.summary}
                </p>

                {/* Features */}
                <div className="space-y-1.5 pt-2 border-t border-[#0F0F0F]/10">
                  {item.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-[11px] text-[#0F0F0F]/80">
                      <Check className="w-3 h-3 text-[#FC5001] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* SEO Keywords tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.intentKeywords.slice(0, 3).map((kw) => (
                    <span
                      key={kw}
                      className="inline-block px-2 py-0.5 rounded-xs bg-[#FFFFFF] border border-[#0F0F0F]/10 text-[10px] font-medium text-[#0F0F0F]/75"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#0F0F0F]/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService(item.categoryTitle);
                    setModalOpen(true);
                  }}
                  className="text-xs font-bold text-[#FC5001] hover:opacity-80 transition-opacity flex items-center gap-1.5"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Link
                  href="/services"
                  className="text-[11px] font-semibold text-[#0F0F0F]/60 hover:text-[#0F0F0F] transition-colors"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* High-Intent Keyword Index for Google Search Engine Optimization */}
        <div className="bg-[#FFFFFF] border border-[#0F0F0F]/10 p-8 sm:p-12 rounded-xs space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#0F0F0F]/10">
            <div>
              <h4 className="text-lg font-bold text-[#0F0F0F]">
                Squarespace Search &amp; Solutions Direct Keyword Index
              </h4>
              <p className="text-xs text-[#0F0F0F]/65 mt-1">
                Explore popular Squarespace inquiries we solve daily with certified Circle Platinum expertise.
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedService("High-Intent Squarespace Consultation");
                setModalOpen(true);
              }}
              className="px-6 py-2.5 bg-[#FC5001] hover:opacity-95 text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-all rounded-xs shrink-0 flex items-center gap-2"
            >
              <span>Consult an Expert</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-[11px] text-[#0F0F0F]/75">
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Hire Squarespace expert</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Best Squarespace designer</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Professional developer</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Custom website design</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Squarespace redesign</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Agency custom web design</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Template customization</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Fix website bugs</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Custom CSS code</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Custom JavaScript</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Acuity scheduling setup</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Mobile layout fix</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Speed optimization</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Sitemap and indexing</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Squarespace SEO expert</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Rank website on Google</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Local SEO setup</span>
            <span className="p-2 bg-[#F5F5F5] rounded-xs border border-[#0F0F0F]/5 font-medium hover:border-[#FC5001] transition-colors">Premium templates sale</span>
          </div>
        </div>

      </div>

      <ProjectOrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
      />
    </section>
  );
}
