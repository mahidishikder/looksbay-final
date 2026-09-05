import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://looksbay.com";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Looksbay | High-Performance Web Design Agency",
    template: "%s | Looksbay",
  },
  description: "Looksbay designs and develops fast, high-converting websites for ambitious businesses across Shopify, WordPress, Webflow, Squarespace, Wix, Framer and custom platforms.",
  keywords: [
    "web design agency",
    "website development agency",
    "business website design",
    "corporate website redesign",
    "Shopify e-commerce design",
    "WordPress developer",
    "Webflow design agency",
    "Squarespace web developer",
    "Wix website redesign",
    "Framer website design",
    "Kajabi website builder",
    "advanced SEO services",
    "high performance websites",
    "conversion rate optimization",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Looksbay",
    title: "Looksbay | High-Performance Web Design Agency",
    description: "Fast, credible, high-converting websites built across the platforms ambitious brands rely on.",
    images: [{ url: "/images/hero_website_mockup.jpg", width: 1200, height: 630, alt: "Looksbay website design showcase" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Looksbay | High-Performance Web Design Agency",
    description: "Fast, credible, high-converting websites for ambitious businesses.",
    images: ["/images/hero_website_mockup.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Looksbay",
    url: siteUrl,
    logo: `${siteUrl}/images/hero_website_mockup.jpg`,
    description: "High-performance web design, development and SEO services for ambitious businesses.",
    areaServed: "Worldwide",
    serviceType: [
      "Website design",
      "Website development",
      "E-commerce development",
      "Search engine optimization",
      "Conversion rate optimization",
    ],
    sameAs: ["https://github.com/mahidishikder/looksbay-final"],
  };

  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable}`}>
      <body className="bg-white text-slate-900 min-h-screen flex flex-col antialiased selection:bg-[#9D5CFF] selection:text-white font-sans" style={{ fontFamily: "var(--font-plus-jakarta), -apple-system, BlinkMacSystemFont, sans-serif" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
