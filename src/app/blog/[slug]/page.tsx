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
    <div className="min-h-screen overflow-x-clip bg-[#FAF8FF] text-slate-900">
      <article>
        <header className="relative overflow-hidden bg-[#17062F] px-6 pb-14 pt-36 text-white sm:px-12 lg:px-20 lg:pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_15%,rgba(157,92,255,0.42),transparent_38%),radial-gradient(circle_at_5%_100%,rgba(204,255,0,0.10),transparent_30%)]" />
          <div className="relative mx-auto max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-purple-200 transition-colors hover:text-[#CCFF00]"><ArrowLeft className="h-4 w-4" /> Back to insights</Link>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-[#CCFF00]"><span>{article.category}</span><span className="h-1 w-1 rounded-full bg-purple-300" /><span>{article.readTime}</span></div>
            <h1 className="mt-6 text-4xl font-black leading-[1.04] tracking-tight sm:text-6xl">{article.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-purple-100">{article.excerpt}</p>
            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-purple-200"><span>{article.author}</span><span className="h-1 w-1 rounded-full bg-purple-400" /><time dateTime={article.date}>{formatDate(article.date)}</time></div>
          </div>
        </header>

        <div className="mx-auto max-w-[1120px] px-6 sm:px-12 lg:px-20">
          <div className="relative -mt-8 aspect-[16/8] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_24px_70px_rgba(76,29,149,0.18)] sm:-mt-12 sm:rounded-3xl">
            <Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 1120px) 100vw, 1120px" className="object-cover" />
          </div>

          <div className="mx-auto max-w-3xl pb-20 pt-12 sm:pt-16">
            <p className="text-xl font-bold leading-relaxed text-slate-800 sm:text-2xl">{article.intro}</p>
            <div className="mt-10 space-y-10">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-black tracking-tight sm:text-3xl">{section.heading}</h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                </section>
              ))}
            </div>
            <div className="mt-14 border-t border-purple-100 pt-8"><Link href="/contact" className="btn-neon-lime inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black">Talk to the Looksbay team <ArrowRight className="h-4 w-4" /></Link></div>
          </div>
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Footer />
    </div>
  );
}
