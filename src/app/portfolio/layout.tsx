import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Portfolio",
  description: "See how Looksbay turns ambitious ideas into polished, high-performing websites and digital experiences.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}