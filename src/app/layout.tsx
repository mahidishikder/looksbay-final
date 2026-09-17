import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://looksbay.com";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Looksbay",
  category: "design",
  creator: "Looksbay Studio",
  publisher: "Looksbay Studio",
  title: {
    default: "Looksbay | Squarespace Web Design Studio & Designer Templates",
    template: "%s | Looksbay Squarespace Studio",
  },
  description: "Looksbay is an authorized Squarespace Circle Partner studio. We build bespoke Squarespace 7.1 websites, sell premium designer templates, and execute seamless WordPress/Wix migrations.",
  keywords: [
    "Squarespace web design studio",
    "Squarespace circle platinum partner",
    "Squarespace designer templates",
    "custom Squarespace web design",
    "Squarespace template customization",
    "Squarespace 7.1 Fluid Engine",
    "Squarespace migration expert",
    "Squarespace SEO specialist",
    "Squarespace eCommerce design",
    "Squarespace VIP Day",
    "high converting Squarespace website",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Looksbay",
    title: "Looksbay | Squarespace Web Design Studio & Designer Templates",
    description: "Bespoke Squarespace 7.1 websites and designer templates for visionary service businesses and brands.",
    images: [{ url: "/images/hero_website_mockup.jpg", width: 1200, height: 630, alt: "Looksbay Squarespace Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Looksbay | Squarespace Web Design Studio & Designer Templates",
    description: "Bespoke Squarespace 7.1 websites and designer templates for visionary service businesses and brands.",
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
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#organization`,
        name: "Looksbay Squarespace Studio",
        url: siteUrl,
        image: `${siteUrl}/images/hero_website_mockup.jpg`,
        description: "Premier Squarespace Web Design Studio and Designer Template Marketplace.",
        areaServed: "Worldwide",
        priceRange: "$$$",
        serviceType: [
          "Bespoke Squarespace Web Design",
          "Squarespace Template Customization",
          "Squarespace 7.1 Development",
          "Squarespace Platform Migration",
          "Squarespace SEO & Speed Audit",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          url: `${siteUrl}/contact`,
          availableLanguage: ["English", "Bengali"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Looksbay",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable} ${playfair.variable}`}>
      <body className="bg-[#FAF8F5] text-[#1E1B18] min-h-screen flex flex-col antialiased selection:bg-[#8C5238] selection:text-white font-sans" style={{ fontFamily: "var(--font-plus-jakarta), -apple-system, BlinkMacSystemFont, sans-serif" }}>
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
