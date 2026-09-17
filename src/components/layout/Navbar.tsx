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
          NAVBAR — Pure White background, clean links, #0F0F0F CTA
      ══════════════════════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FFFFFF]/98 backdrop-blur-md shadow-xs border-b border-[#0F0F0F]/10"
            : "bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#0F0F0F]/5"
        }`}
      >
        <div className="max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-12 h-16 flex items-center justify-between">

          {/* Left: Brand Logo with Orange icon */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-full bg-[#FC5001] flex items-center justify-center shadow-xs">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 7L7 13L1 7L7 1Z" fill="#FFFFFF" strokeWidth="0"/>
              </svg>
            </span>
            <span className="text-lg font-black tracking-tight text-[#0F0F0F] group-hover:text-[#FC5001] transition-colors">
              Looksbay
            </span>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-semibold text-[#0F0F0F]/80">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors hover:text-[#FC5001] ${
                    isActive ? "text-[#FC5001] font-bold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#0F0F0F] hover:bg-[#FC5001] text-[#FFFFFF] text-[13px] font-bold transition-all duration-200 rounded-md shadow-xs group"
            >
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 text-[#0F0F0F] hover:text-[#FC5001] transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Drawer */}
        {mobileOpen && (
          <div className="md:hidden bg-[#FFFFFF] border-b border-[#0F0F0F]/10 px-6 py-6 space-y-4 shadow-lg">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`py-2.5 px-3 rounded-md text-[13px] font-semibold transition-colors ${
                      isActive
                        ? "text-[#FC5001] bg-[#F5F5F5] font-bold"
                        : "text-[#0F0F0F] hover:text-[#FC5001] hover:bg-[#F5F5F5]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-[#0F0F0F]/10">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setIsOrderModalOpen(true);
                }}
                className="w-full py-3 bg-[#0F0F0F] hover:bg-[#FC5001] text-[#FFFFFF] text-[13px] font-bold text-center transition-colors rounded-md flex items-center justify-center gap-2"
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
