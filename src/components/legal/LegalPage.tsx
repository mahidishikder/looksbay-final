import Link from "next/link";
import type { ReactNode } from "react";
import Home10_Footer from "@/components/home/Home10_Footer";

export default function LegalPage({
  title,
  intro,
  lastUpdated,
  children,
}: {
  title: string;
  intro: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F7F4F1] text-[#0F0F0F] selection:bg-[#FC5001] selection:text-[#FFFFFF]">
      <header className="border-b border-[#0F0F0F]/10 bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1200px] px-6 py-8 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FC5001] text-sm font-black text-[#FFFFFF]">
                L
              </span>
              <span className="text-lg font-black tracking-tight text-[#0F0F0F]">Looksbay</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center text-sm font-semibold text-[#0F0F0F] transition-colors hover:text-[#FC5001]"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[920px] px-6 py-16 sm:px-10 lg:px-16">
        <div className="rounded-[30px] border border-[#0F0F0F]/10 bg-[#FFFFFF] p-6 shadow-[0_20px_80px_rgba(15,15,15,0.04)] sm:p-10 lg:p-14">
          <div className="mb-8 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FC5001]">
            <span className="h-2 w-2 rounded-full bg-[#FC5001]" />
            Legal Policy
          </div>

          <h1 className="text-3xl font-black tracking-tight text-[#0F0F0F] sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#0F0F0F]/70">{intro}</p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#0F0F0F]/50">
            Last updated: {lastUpdated}
          </p>

          <div className="mt-10 space-y-8 text-[15px] leading-8 text-[#0F0F0F]/80">{children}</div>
        </div>
      </main>

      <Home10_Footer />
    </div>
  );
}
