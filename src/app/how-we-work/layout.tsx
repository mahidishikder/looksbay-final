import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Our Website Design Process Works",
  description: "A clear, collaborative sprint process for strategy, design, development, launch and ongoing website growth.",
};

export default function HowWeWorkLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}