import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Web Design & Development Team",
  description: "Meet the in-house Looksbay squad building fast, strategic websites for ambitious brands worldwide.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}