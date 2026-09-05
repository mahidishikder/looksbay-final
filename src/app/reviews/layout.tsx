import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews & Website Results",
  description: "Read what founders and teams say about working with Looksbay on high-converting websites and digital platforms.",
};

export default function ReviewsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}