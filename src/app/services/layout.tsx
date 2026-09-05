import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design, Development & SEO Services",
  description: "Explore Looksbay website design, e-commerce development, platform builds and advanced SEO services for growing businesses.",
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}