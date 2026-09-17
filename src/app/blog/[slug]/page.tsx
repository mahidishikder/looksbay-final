import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { blogArticles } from "@/data/blogData";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) return { title: "Article not found" };

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${article.slug}`,
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      images: [{ url: article.image, width: 1376, height: 768, alt: article.imageAlt }],
    },
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(`${date}T12:00:00`));
}

export default async function BlogArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://looksbay.com";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: [`${siteUrl}${article.image}`],
    datePublished: article.date,
    dateModified: article.updatedAt,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: "Looksbay", url: siteUrl },
    mainEntityOfPage: `${siteUrl}/blog/${article.slug}`,
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#0F0F0F] selection:bg-[#FC5001] selection:text-white">
      <article>
        {/* Article Header */}
        <header className="relative overflow-hidden bg-white px-6 pb-14 pt-36 sm:px-10 lg:px-16 lg:pb-20 border-b border-[#EAEAEA]">
          {/* Subtle Orange Glow */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none rounded-full"
            style={{
              background: "radial-gradient(circle at top right, rgba(244,81,30,0.12) 0%, rgba(255,122,48,0.04) 40%, transparent 70%)",
            }}
          />
          {/* Vertical Stripe Texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(90deg, #EAEAEA 0px, #EAEAEA 1px, transparent 1px, transparent 60px)",
              opacity: 0.35,
            }}
          />

          <div className="relative mx-auto max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#555555] transition-colors hover:text-[#FC5001]">
              <ArrowLeft className="h-4 w-4" /> Back to all insights
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#FC5001]">
              <span>{article.category}</span>
              <span className="h-1 w-1 rounded-full bg-[#CCCCCC]" />
              <span>{article.readTime}</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#0F0F0F]">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#555555]">
              {article.excerpt}
            </p>

            <div className="mt-8 flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#888888]">
              <span>By {article.author}</span>
              <span className="h-1 w-1 rounded-full bg-[#CCCCCC]" />
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1120px] px-6 sm:px-10 lg:px-16">
          {/* Featured Image */}
          <div className="relative -mt-8 aspect-[16/8] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E5E5E5] bg-white shadow-xl sm:-mt-12">
            <Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 1120px) 100vw, 1120px" className="object-cover" />
          </div>

          <div className="mx-auto max-w-3xl pb-20 pt-12 sm:pt-16">
            <p className="text-lg sm:text-xl font-bold leading-relaxed text-[#0F0F0F]">
              {article.intro}
            </p>

            <div className="mt-10 space-y-10">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F0F0F]">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-sm sm:text-base leading-relaxed text-[#555555]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-14 border-t border-[#EAEAEA] pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-xs sm:text-sm font-bold bg-[#0F0F0F] hover:bg-[#FC5001] text-white shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <span>Talk to the Looksbay team</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Footer />
    </div>
  );
}
