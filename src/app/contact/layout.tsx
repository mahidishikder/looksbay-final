import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Website Project",
  description: "Tell Looksbay about your website, e-commerce or SEO project and get a clear next step from our in-house team.",
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}