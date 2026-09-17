import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Web Design & Development Work",
  description: "Browse selected Looksbay website, e-commerce and digital product work built for clarity, speed and conversion.",
  alternates: { canonical: "/work" },
};

export default function WorkLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}