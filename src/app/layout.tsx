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
    default: "Looksbay | Hire Squarespace Expert, Designer & Premium Templates",
    template: "%s | Looksbay Squarespace Studio",
  },
  description: "Hire certified Squarespace expert designers & developers. Custom Squarespace 7.1 web design, bug fixing, CSS/JS code, speed optimization, Acuity scheduling, SEO ranking & designer templates.",
  keywords: [
    // High-Intent & Direct Service Keywords
    "Hire Squarespace expert",
    "Best Squarespace designer near me",
    "Professional Squarespace developer",
    "Custom Squarespace website design service",
    "Squarespace website redesign company",
    "Squarespace agency for custom web design",
    "Squarespace template customization expert",
    // Niche & Industry Specific Keywords
    "Squarespace photography website designer",
    "Squarespace wedding website developer",
    "Squarespace ecommerce store design",
    "Squarespace real estate website template",
    "Squarespace website for life coach",
    "Squarespace restaurant menu and booking design",
    "Squarespace portfolio website builder",
    "Squarespace fitness and gym website setup",
    "Squarespace interior design portfolio",
    // Technical & Problem-Solving Search Terms
    "Fix Squarespace website bugs",
    "Squarespace custom CSS code integration",
    "Custom JavaScript for Squarespace",
    "Squarespace Acuity scheduling setup",
    "Squarespace mobile responsive layout fix",
    "Squarespace speed optimization service",
    "Squarespace sitemap and indexing setup",
    // SEO & Ranking Keywords
    "Squarespace SEO expert",
    "Rank Squarespace website on Google",
    "Squarespace search engine optimization",
    "Squarespace local SEO setup",
    "Improve Squarespace Google ranking",
    // Template Buying & Selling Keywords
    "Premium Squarespace templates for sale",
    "Modern custom Squarespace templates",
    "Buy editable Squarespace template",
    "Squarespace template installation service",
    // 16 Niches Keywords
    "Squarespace photography website",
    "Squarespace photographer portfolio",
    "Squarespace wedding photography website",
    "Squarespace event photography site",
    "Squarespace videographer website",
    "Squarespace drone photographer site",
    "Squarespace portrait photography",
    "Squarespace photo studio site",
    "Squarespace wedding website",
    "Squarespace wedding planner site",
    "Squarespace wedding RSVP website",
    "Squarespace bridal boutique site",
    "Squarespace event venue site",
    "Squarespace party planner site",
    "Squarespace wedding coordinator",
    "Squarespace portfolio website",
    "Squarespace artist website",
    "Squarespace graphic designer portfolio",
    "Squarespace illustrator site",
    "Squarespace model portfolio",
    "Squarespace actor portfolio",
    "Squarespace 3D artist site",
    "Squarespace creative director site",
    "Squarespace fashion website",
    "Squarespace clothing brand site",
    "Squarespace boutique website",
    "Squarespace jewelry website",
    "Squarespace makeup artist site",
    "Squarespace hair salon website",
    "Squarespace skincare store",
    "Squarespace cosmetics site",
    "Squarespace real estate website",
    "Squarespace realtor site",
    "Squarespace interior design site",
    "Squarespace architecture portfolio",
    "Squarespace property management site",
    "Squarespace Airbnb site",
    "Squarespace construction website",
    "Squarespace home staging site",
    "Squarespace online store",
    "Squarespace ecommerce website",
    "Squarespace shop customization",
    "Squarespace digital products store",
    "Squarespace subscription site",
    "Squarespace merch store",
    "Squarespace product landing page",
    "Squarespace payment gateway setup",
    "Squarespace agency website",
    "Squarespace business website",
    "Squarespace corporate website",
    "Squarespace consulting website",
    "Squarespace marketing agency site",
    "Squarespace recruitment site",
    "Squarespace startup website",
    "Squarespace financial planner site",
    "Squarespace fitness website",
    "Squarespace gym website",
    "Squarespace yoga studio site",
    "Squarespace personal trainer site",
    "Squarespace Pilates studio site",
    "Squarespace wellness blog",
    "Squarespace nutrition site",
    "Squarespace mental health site",
    "Squarespace medical website",
    "Squarespace doctor site",
    "Squarespace dentist website",
    "Squarespace law firm website",
    "Squarespace accountant site",
    "Squarespace therapy website",
    "Squarespace clinic website",
    "Squarespace restaurant website",
    "Squarespace cafe website",
    "Squarespace bakery website",
    "Squarespace food blog",
    "Squarespace coffee shop site",
    "Squarespace catering website",
    "Squarespace bar and lounge site",
    "Squarespace life coach website",
    "Squarespace business coach site",
    "Squarespace course website",
    "Squarespace educational site",
    "Squarespace tutoring site",
    "Squarespace workshop booking",
    "Squarespace podcast website",
    "Squarespace music website",
    "Squarespace band website",
    "Squarespace DJ website",
    "Squarespace movie site",
    "Squarespace entertainment agency",
    "Squarespace non profit website",
    "Squarespace charity site",
    "Squarespace NGO website",
    "Squarespace church website",
    "Squarespace community organization",
    "Custom Squarespace website",
    "Squarespace CSS code",
    "Squarespace JavaScript integration",
    "Squarespace bug fix",
    "Squarespace custom plugin",
    "Squarespace mobile layout fix",
    "Squarespace speed optimization",
    "Squarespace Google ranking",
    "Squarespace meta tags setup",
    "Squarespace sitemap submit",
    "Custom Squarespace template",
    "Squarespace template setup",
    "Squarespace redesign service",
    "Squarespace website migration",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Looksbay",
    title: "Looksbay | Hire Squarespace Expert, Designer & Premium Templates",
    description: "Custom Squarespace 7.1 websites, speed optimization, bug fixing, custom CSS/JS, and designer templates by certified Circle Platinum experts.",
    images: [{ url: "/images/hero_website_mockup.jpg", width: 1200, height: 630, alt: "Looksbay Squarespace Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Looksbay | Hire Squarespace Expert, Designer & Premium Templates",
    description: "Custom Squarespace 7.1 websites, speed optimization, bug fixing, custom CSS/JS, and designer templates by certified Circle Platinum experts.",
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
        description: "Premier Squarespace Web Design Studio, Custom Development & Designer Template Marketplace.",
        areaServed: "Worldwide",
        priceRange: "$$$",
        serviceType: [
          "Hire Squarespace Expert",
          "Custom Squarespace Website Design",
          "Squarespace Website Redesign",
          "Squarespace Template Customization",
          "Fix Squarespace Website Bugs",
          "Squarespace Custom CSS Code Integration",
          "Custom JavaScript for Squarespace",
          "Squarespace Speed Optimization Service",
          "Squarespace SEO Expert & Google Ranking",
          "Squarespace Acuity Scheduling Setup",
          "Squarespace Mobile Responsive Layout Fix",
          "Squarespace Platform Migration (WordPress, Wix)",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.98",
          reviewCount: "148",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          url: `${siteUrl}/contact`,
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Looksbay",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/services?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable} ${playfair.variable}`}>
      <body
        className="bg-[#FFFFFF] text-[#0F0F0F] min-h-screen flex flex-col antialiased selection:bg-[#FC5001] selection:text-[#FFFFFF] font-sans"
        style={{ fontFamily: "var(--font-plus-jakarta), -apple-system, BlinkMacSystemFont, sans-serif" }}
      >
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
