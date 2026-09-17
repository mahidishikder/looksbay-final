"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import ProjectOrderModal from "@/components/shared/ProjectOrderModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Templates", href: "/templates" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          NAVBAR — White background, clean links, black CTA
      ══════════════════════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-[#E5E5E5]"
            : "bg-white/95 backdrop-blur-sm border-b border-[#E5E5E5]/60"
        }`}
      >
        <div className="max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-12 h-16 flex items-center justify-between">

          {/* Left: Brand Logo with Orange icon */}
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Orange icon mark */}
            <span className="w-8 h-8 rounded-full bg-[#F4511E] flex items-center justify-center shadow-sm">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 7L7 13L1 7L7 1Z" fill="white" strokeWidth="0"/>
              </svg>
            </span>
            <span className="text-lg font-bold tracking-tight text-[#0D0D0D] group-hover:text-[#F4511E] transition-colors">
              Looksbay
            </span>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#3D3D3D]">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors hover:text-[#F4511E] ${
                    isActive ? "text-[#F4511E] font-semibold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA Button — Black box with arrow (matching screenshot) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#0D0D0D] hover:bg-[#F4511E] text-white text-[13px] font-semibold transition-all duration-200 rounded-md shadow-sm group"
            >
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 text-[#0D0D0D] hover:text-[#F4511E] transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Drawer */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-b border-[#E5E5E5] px-6 py-6 space-y-4 shadow-lg">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`py-2.5 px-3 rounded-md text-[13px] font-medium transition-colors ${
                      isActive
                        ? "text-[#F4511E] bg-orange-50 font-semibold"
                        : "text-[#3D3D3D] hover:text-[#F4511E] hover:bg-orange-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-[#E5E5E5]">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setIsOrderModalOpen(true);
                }}
                className="w-full py-3 bg-[#0D0D0D] hover:bg-[#F4511E] text-white text-[13px] font-semibold text-center transition-colors rounded-md flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Project Order Modal */}
      <ProjectOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </>
  );
}
