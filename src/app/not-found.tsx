import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-[#FFFFFF]">
      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FC5001] mb-2">
        404 · Page Not Found
      </span>
      <h1 className="text-4xl sm:text-6xl font-black text-[#0F0F0F] tracking-tight mb-4">
        Lost in the Digital Ether
      </h1>
      <p className="text-sm sm:text-base text-[#0F0F0F]/60 max-w-md mx-auto mb-8 font-medium">
        The page you are looking for has moved or does not exist. Let us guide you back to our flagship agency home.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 rounded-full text-sm font-black inline-flex items-center gap-2 shadow-md bg-[#0F0F0F] text-[#FFFFFF] hover:bg-[#FC5001] transition-all hover:scale-105 active:scale-95"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
