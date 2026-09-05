"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ChevronDown, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import ProjectOrderModal from "@/components/shared/ProjectOrderModal";

const digitalExperiences = [
  { name: "Award-Winning Websites", slug: "award-winning-websites" },
  { name: "Web Platforms & Services", slug: "web-platforms-services" },
  { name: "Landing Page", slug: "landing-page" },
  { name: "Corporate Website", slug: "corporate-website" },
  { name: "Tech & Data", slug: "tech-data" },
];

const industryVerticals = [
  { name: "Real Estate", slug: "real-estate" },
  { name: "Healthcare & Medical", slug: "healthcare-medical" },
  { name: "Logistics & Fulfillment", slug: "logistics-fulfillment" },
  { name: "Automotive", slug: "automotive" },
  { name: "Non-profit", slug: "non-profit" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [bottomServicesOpen, setBottomServicesOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [bottomChatOpen, setBottomChatOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const bottomTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setServicesOpen(false);
    setBottomServicesOpen(false);
    setMobileOpen(false);
    setChatOpen(false);
    setBottomChatOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;
      // Triggers when scrolled ~25-30% of page OR scrollY > 280px
      const isPast = scrollPercent >= 0.25 || scrollY > 280;
      setScrolledPastThreshold(isPast);
      setIsScrolled(scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if the current page top has dark hero or light background
  const isDarkHeroPage = pathname.startsWith("/services/") && pathname !== "/services";
  const isLight = !isDarkHeroPage || isScrolled;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  const handleBottomMouseEnter = () => {
    if (bottomTimeoutRef.current) clearTimeout(bottomTimeoutRef.current);
    setBottomServicesOpen(true);
  };

  const handleBottomMouseLeave = () => {
    bottomTimeoutRef.current = setTimeout(() => {
      setBottomServicesOpen(false);
    }, 200);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-4 sm:px-12 lg:px-20 pointer-events-none transition-all duration-500 ease-in-out ${scrolledPastThreshold
          ? "md:-translate-y-full md:opacity-0 md:pointer-events-none translate-y-0 opacity-100"
          : "translate-y-0 opacity-100"
          }`}
      >
        <div className="max-w-[1500px] mx-auto flex items-center justify-between pointer-events-auto">

          {/* Left: Brand Logo (Always #ffffff pure white) */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-2xl sm:text-[26px] font-black tracking-tight transition-all duration-300 hover:opacity-85 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
            style={{ color: "#ffffff" }}
          >
            <span className="text-white font-black" style={{ color: "#ffffff" }}>LOOKSBAY</span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-pulse"></span>
          </Link>

          {/* Center: Nav Capsule */}
          <div className="relative hidden md:block">
            <nav className="nav-glass flex items-center gap-1.5 px-3.5 py-1.5 rounded-full">
              {/* Services Trigger - ONLY THIS OPENS THE MEGA MENU */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/services"
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 group ${pathname.startsWith("/services") || servicesOpen
                    ? "text-white font-black bg-white/15 shadow-xs"
                    : "text-zinc-300 hover:text-white hover:bg-white/10"
                    }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-[#CCFF00]" : "text-zinc-400"
                      }`}
                  />
                </Link>
              </div>

              <Link
                href="/how-we-work"
                onMouseEnter={() => setServicesOpen(false)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${pathname === "/how-we-work"
                  ? "text-white font-black bg-white/15 shadow-xs"
                  : "text-zinc-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                How We Work
              </Link>

              <Link
                href="/about"
                onMouseEnter={() => setServicesOpen(false)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${pathname === "/about"
                  ? "text-white font-black bg-white/15 shadow-xs"
                  : "text-zinc-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                About Us
              </Link>

              <Link
                href="/portfolio"
                onMouseEnter={() => setServicesOpen(false)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${pathname === "/portfolio" || pathname === "/work"
                  ? "text-white font-black bg-white/15 shadow-xs"
                  : "text-zinc-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                Works
              </Link>

              <Link
                href="/contact"
                onMouseEnter={() => setServicesOpen(false)}
                className={`ml-1 px-5 py-2 rounded-full text-xs sm:text-sm font-black transition-all shadow-sm active:scale-95 flex items-center gap-1.5 ${pathname === "/contact"
                  ? "bg-[#CCFF00] text-black font-black shadow-[0_0_20px_rgba(204,255,0,0.4)]"
                  : "bg-white text-black hover:bg-[#CCFF00] transition-colors"
                  }`}
              >
                <span>Let&apos;s Talk</span>
              </Link>
            </nav>

            {/* ══════════════════════════════════════════════════════════
              CLEAN WHITE MINIMALIST MEGA MENU (10 CATEGORIES ONLY)
          ══════════════════════════════════════════════════════════ */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 pt-2 w-[660px] max-w-[95vw] transition-all duration-200 pointer-events-auto ${servicesOpen
                ? "opacity-100 translate-y-0 visible pointer-events-auto"
                : "opacity-0 -translate-y-2 invisible pointer-events-none"
                }`}
            >
              <div className="rounded-[24px] bg-white border border-slate-200/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.16)] text-slate-900">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {[
                    { name: "Award-Winning Websites", slug: "award-winning-websites" },
                    { name: "Web Platforms & Services", slug: "web-platforms-services" },
                    { name: "Real Estate", slug: "real-estate" },
                    { name: "Landing Page", slug: "landing-page" },
                    { name: "Corporate Website", slug: "corporate-website" },
                    { name: "Non-profit", slug: "non-profit" },
                    { name: "Tech & Data", slug: "tech-data" },
                    { name: "Logistics & Fulfillment", slug: "logistics-fulfillment" },
                    { name: "Healthcare & Medical", slug: "healthcare-medical" },
                    { name: "Automotive", slug: "automotive" },
                  ].map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services/${item.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-purple-50/80 transition-all group border border-transparent hover:border-purple-100"
                    >
                      <span className="text-sm font-bold text-slate-800 group-hover:text-purple-700 transition-colors">
                        {item.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: WhatsApp + Messenger Icons + Order Website Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Website Order Popup Trigger Button */}
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#CCFF00] hover:bg-[#d8ff33] text-black text-xs sm:text-sm font-black flex items-center gap-1.5 sm:gap-2 shadow-[0_0_25px_rgba(204,255,0,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-black fill-black" />
              <span>Order Website</span>
            </button>

            <div className="relative hidden sm:block">
              <button
                onClick={() => setChatOpen(!chatOpen)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg border ${chatOpen
                  ? "bg-[#CCFF00] text-black border-[#CCFF00] rotate-12 shadow-[0_0_28px_rgba(204,255,0,0.55)]"
                  : "bg-[#241044]/90 text-[#CCFF00] border-[#CCFF00]/45 hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] hover:shadow-[0_0_28px_rgba(204,255,0,0.5)] backdrop-blur-md"
                  }`}
                aria-label="Chat with us"
              >
                {chatOpen ? <X className="w-4 h-4" strokeWidth={2.5} /> : <MessageCircle className="w-4 h-4" strokeWidth={2.5} />}
              </button>

              {/* Popout: WhatsApp + Messenger */}
              <div
                className={`absolute top-full right-0 mt-3 flex flex-col items-end gap-2.5 transition-all duration-300 ${chatOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
              >
                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801XXXXXXXXX"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2.5 pr-3 pl-1 py-1 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-xl hover:scale-105 transition-transform"
                >
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.842L.057 23.854l6.181-1.461A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.575-.487-5.079-1.339l-.364-.217-3.668.866.93-3.575-.237-.378A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                  </span>
                  <span>WhatsApp</span>
                </a>

                {/* Messenger */}
                <a
                  href="https://m.me/looksbay"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2.5 pr-3 pl-1 py-1 rounded-full bg-[#0084FF] text-white text-xs font-bold shadow-xl hover:scale-105 transition-transform"
                >
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                      <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.465 3.443.465 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.6l3.131 3.26L19.752 8.6l-6.561 6.363z" />
                    </svg>
                  </span>
                  <span>Messenger</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2.5 rounded-full shadow-sm border transition-colors ${isLight
                ? "bg-white text-slate-900 border-slate-300 hover:bg-slate-100"
                : "bg-black/60 text-white border-white/20 hover:bg-black/80"
                }`}
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
          MOBILE MENU DRAWER
      ══════════════════════════════════════════════════════════ */}
        {mobileOpen && (
          <div className="md:hidden mt-3 mx-auto max-w-sm rounded-3xl bg-white border border-slate-200 p-6 shadow-2xl pointer-events-auto space-y-4 animate-in fade-in slide-in-from-top-3 duration-200 text-slate-900 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1.5">
              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full px-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:text-black hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180 text-purple-700" : ""
                      }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-2 border-l border-slate-200 ml-4 mt-1">
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Digital Experiences</div>
                    {digitalExperiences.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="block px-2 py-1 text-xs font-semibold text-slate-700 hover:text-purple-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 pt-2">Industry Verticals</div>
                    {industryVerticals.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="block px-2 py-1 text-xs font-semibold text-slate-700 hover:text-purple-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/how-we-work"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${pathname === "/how-we-work"
                  ? "bg-purple-100 text-purple-950 font-black"
                  : "text-slate-700 hover:text-black hover:bg-slate-50"
                  }`}
              >
                How We Work
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${pathname === "/about"
                  ? "bg-purple-100 text-purple-950 font-black"
                  : "text-slate-700 hover:text-black hover:bg-slate-50"
                  }`}
              >
                About Us
              </Link>

              <Link
                href="/portfolio"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${pathname === "/portfolio" || pathname === "/work"
                  ? "bg-purple-100 text-purple-950 font-black"
                  : "text-slate-700 hover:text-black hover:bg-slate-50"
                  }`}
              >
                Selected Works
              </Link>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  setIsOrderModalOpen(true);
                }}
                className="mt-2 w-full py-3 rounded-full text-xs font-black bg-[#CCFF00] text-black text-center shadow-lg flex items-center justify-center gap-2 hover:bg-[#d8ff33] cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-black fill-black" />
                <span>Order Website</span>
              </button>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full py-2.5 rounded-full text-xs font-bold border border-slate-200 text-slate-800 text-center block hover:bg-slate-50"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ══════════════════════════════════════════════════════════
        FLOATING BOTTOM MENU DOCK (Active when scrolled past ~30%)
    ══════════════════════════════════════════════════════════ */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out max-w-[95vw] hidden md:block ${scrolledPastThreshold
          ? "translate-y-0 opacity-100 pointer-events-auto scale-100"
          : "translate-y-20 opacity-0 pointer-events-none scale-95"
          }`}
      >
        <div className="relative">
          {/* Bottom Mega Menu (pops UPWARDS) */}
          <div
            onMouseEnter={handleBottomMouseEnter}
            onMouseLeave={handleBottomMouseLeave}
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 pb-2 w-[660px] max-w-[95vw] transition-all duration-200 pointer-events-auto ${bottomServicesOpen
              ? "opacity-100 translate-y-0 visible pointer-events-auto"
              : "opacity-0 translate-y-2 invisible pointer-events-none"
              }`}
          >
            <div className="rounded-[24px] bg-white border border-slate-200/90 p-6 shadow-[0_-20px_60px_rgba(0,0,0,0.25)] text-slate-900 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  { name: "Award-Winning Websites", slug: "award-winning-websites" },
                  { name: "Web Platforms & Services", slug: "web-platforms-services" },
                  { name: "Real Estate", slug: "real-estate" },
                  { name: "Landing Page", slug: "landing-page" },
                  { name: "Corporate Website", slug: "corporate-website" },
                  { name: "Non-profit", slug: "non-profit" },
                  { name: "Tech & Data", slug: "tech-data" },
                  { name: "Logistics & Fulfillment", slug: "logistics-fulfillment" },
                  { name: "Healthcare & Medical", slug: "healthcare-medical" },
                  { name: "Automotive", slug: "automotive" },
                ].map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    onClick={() => setBottomServicesOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-purple-50/80 transition-all group border border-transparent hover:border-purple-100"
                  >
                    <span className="text-sm font-bold text-slate-800 group-hover:text-purple-700 transition-colors">
                      {item.name}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Nav Capsule matching top navbar dimensions & styling */}
          <nav className="flex items-center gap-1.5 bg-black/75 backdrop-blur-2xl px-3.5 py-1.5 rounded-full border border-white/20 shadow-[0_15px_50px_rgba(0,0,0,0.55)]">
            {/* Brand Link */}
            <Link
              href="/"
              onMouseEnter={() => setBottomServicesOpen(false)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-black tracking-tight text-white hover:text-[#CCFF00] transition-colors"
            >
              <span>LOOKSBAY</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-pulse" />
            </Link>

            <div className="w-px h-4 bg-white/20 hidden sm:block mx-0.5" />

            {/* Services Trigger with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={handleBottomMouseEnter}
              onMouseLeave={handleBottomMouseLeave}
            >
              <Link
                href="/services"
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 group ${pathname.startsWith("/services") || bottomServicesOpen
                  ? "text-white font-black bg-white/15 shadow-xs"
                  : "text-zinc-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${bottomServicesOpen ? "rotate-180 text-[#CCFF00]" : "text-zinc-400"
                    }`}
                />
              </Link>
            </div>

            <Link
              href="/how-we-work"
              onMouseEnter={() => setBottomServicesOpen(false)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${pathname === "/how-we-work"
                ? "text-white font-black bg-white/15 shadow-xs"
                : "text-zinc-300 hover:text-white hover:bg-white/10"
                }`}
            >
              How We Work
            </Link>

            <Link
              href="/about"
              onMouseEnter={() => setBottomServicesOpen(false)}
              className={`hidden sm:inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${pathname === "/about"
                ? "text-white font-black bg-white/15 shadow-xs"
                : "text-zinc-300 hover:text-white hover:bg-white/10"
                }`}
            >
              About Us
            </Link>

            <Link
              href="/portfolio"
              onMouseEnter={() => setBottomServicesOpen(false)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${pathname === "/portfolio" || pathname === "/work"
                ? "text-white font-black bg-white/15 shadow-xs"
                : "text-zinc-300 hover:text-white hover:bg-white/10"
                }`}
            >
              Works
            </Link>

            {/* CTA Button */}
            <Link
              href="/contact"
              onMouseEnter={() => setBottomServicesOpen(false)}
              className={`ml-1 px-5 py-2 rounded-full text-xs sm:text-sm font-black transition-all shadow-sm active:scale-95 flex items-center gap-1.5 ${pathname === "/contact"
                ? "bg-[#CCFF00] text-black font-black shadow-[0_0_20px_rgba(204,255,0,0.4)]"
                : "bg-white text-black hover:bg-[#CCFF00] transition-colors"
                }`}
            >
              <span>Let&apos;s Talk</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
        FLOATING BOTTOM-RIGHT CHAT TRIGGER (Active when scrolled)
    ══════════════════════════════════════════════════════════ */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${scrolledPastThreshold
          ? "translate-y-0 opacity-100 pointer-events-auto scale-100"
          : "translate-y-20 opacity-0 pointer-events-none scale-95"
          }`}
      >
        <div className="relative">
          {/* Popout menu appearing right above the button */}
          <div
            className={`absolute bottom-full right-0 mb-3 flex flex-col items-end gap-2.5 transition-all duration-300 ${bottomChatOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-2 pointer-events-none"
              }`}
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2.5 pr-3 pl-1 py-1 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-2xl hover:scale-105 transition-transform"
            >
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.842L.057 23.854l6.181-1.461A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.575-.487-5.079-1.339l-.364-.217-3.668.866.93-3.575-.237-.378A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </span>
              <span>WhatsApp</span>
            </a>

            {/* Messenger */}
            <a
              href="https://m.me/looksbay"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2.5 pr-3 pl-1 py-1 rounded-full bg-[#0084FF] text-white text-xs font-bold shadow-2xl hover:scale-105 transition-transform"
            >
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.465 3.443.465 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.6l3.131 3.26L19.752 8.6l-6.561 6.363z" />
                </svg>
              </span>
              <span>Messenger</span>
            </a>
          </div>

          {/* Trigger Button */}
          <button
            onClick={() => setBottomChatOpen(!bottomChatOpen)}
            className="flex items-center justify-center p-3 rounded-full bg-[#241044]/95 hover:bg-[#CCFF00] border border-[#CCFF00]/55 text-[#CCFF00] hover:text-black shadow-[0_0_28px_rgba(204,255,0,0.32)] backdrop-blur-2xl transition-all hover:scale-105 active:scale-95 group"
            aria-label="Chat with LooksBay"
          >
            {bottomChatOpen ? <X className="w-5 h-5" strokeWidth={2.5} /> : <MessageCircle className="w-5 h-5" strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Interactive Project Order Modal */}
      <ProjectOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </>
  );
}
