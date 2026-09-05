import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600 mb-2">
        404 · Page Not Found
      </span>
      <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-4">
        Lost in the Digital Ether
      </h1>
      <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto mb-8 font-medium">
        The page you are looking for has moved or does not exist. Let us guide you back to our flagship agency home.
      </p>
      <Link
        href="/"
        className="btn-neon-lime px-8 py-3.5 rounded-full text-sm font-black inline-flex items-center gap-2 shadow-md"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
