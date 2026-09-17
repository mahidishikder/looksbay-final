import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Sparkles } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { blogArticles, featuredArticle } from "@/data/blogData";

export const metadata: Metadata = {
  title: "Insights on Squarespace Design, SEO & Digital Growth",
  description: "Practical insights from the Looksbay team on website strategy, technical SEO, Core Web Vitals, Squarespace eCommerce and conversion-focused design.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Looksbay Insights | Squarespace Design, SEO & Digital Growth",
    description: "Practical ideas for building faster, clearer and more effective digital experiences.",
    type: "website",
    url: "/blog",
    images: [{ url: featuredArticle.image, width: 1200, height: 896, alt: featuredArticle.imageAlt }],
  },
};

const categories = ["All insights", "Strategy", "Performance", "SEO", "E-commerce"];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(`${date}T12:00:00`));
}

export default function BlogPage() {
  const supportingArticles = blogArticles.filter((article) => article.slug !== featuredArticle.slug);

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#0F0F0F] selection:bg-[#FC5001] selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-36 sm:px-10 lg:px-16 lg:pb-24 border-b border-[#EAEAEA]">
        {/* Ambient Top Glow */}
        <div
          className="absolute top-0 right-0 w-[550px] h-[550px] pointer-events-none rounded-full"
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

        <div className="relative mx-auto max-w-[1640px]">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0F0F0F] bg-white px-4 py-1.5 text-xs font-semibold text-[#0F0F0F] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FC5001] animate-pulse" />
              <span>Looksbay Studio Journal &amp; Insights</span>
            </div>
            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl text-[#0F0F0F]">
              Better websites start with <br />
              <span className="text-[#FC5001]">better thinking.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed text-[#555555] sm:text-lg">
              Practical notes on Squarespace strategy, Fluid Engine 7.1, performance and technical SEO for teams building their next important digital experience.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2.5" aria-label="Article categories">
            {categories.map((category, index) => (
              <a
                key={category}
                href={index === 0 ? "#latest" : `#${category.toLowerCase()}`}
                className={`rounded-full border px-4 py-2 text-xs font-bold transition-all shadow-xs ${
                  index === 0
                    ? "border-[#0F0F0F] bg-[#0F0F0F] text-white"
                    : "border-[#0F0F0F]/10 bg-white text-[#555555] hover:border-[#0F0F0F] hover:text-[#0F0F0F]"
                }`}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      <main id="latest" className="mx-auto max-w-[1640px] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        {/* Featured Article */}
        <section aria-labelledby="featured-heading">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FC5001]">Featured Insight</p>
              <h2 id="featured-heading" className="mt-1 text-3xl font-black tracking-tight text-[#0F0F0F] sm:text-4xl">The latest thinking</h2>
            </div>
            <span className="hidden text-sm font-semibold text-[#888888] sm:block">Ideas for ambitious brands</span>
          </div>

          <article className="grid overflow-hidden rounded-[32px] border border-[#0F0F0F]/10 bg-white shadow-xs hover:border-[#FC5001] hover:shadow-[0_20px_50px_rgba(244,81,30,0.08)] transition-all duration-300 lg:grid-cols-[1.08fr_0.92fr]">
            <Link href={`/blog/${featuredArticle.slug}`} className="group relative min-h-[300px] overflow-hidden lg:min-h-[520px]" aria-label={`Read ${featuredArticle.title}`}>
              <Image src={featuredArticle.image} alt={featuredArticle.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 rounded-full bg-[#FC5001] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">Featured</span>
            </Link>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#FC5001]">
                <span>{featuredArticle.category}</span>
                <span className="h-1 w-1 rounded-full bg-[#CCCCCC]" />
                <span>{featuredArticle.readTime}</span>
              </div>
              <h3 className="mt-4 text-2xl font-black leading-tight tracking-tight text-[#0F0F0F] sm:text-3xl lg:text-4xl">
                {featuredArticle.title}
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#666666]">
                {featuredArticle.excerpt}
              </p>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#F0F0F0] pt-6">
                <span className="text-xs font-semibold text-[#888888]">{formatDate(featuredArticle.date)}</span>
                <Link href={`/blog/${featuredArticle.slug}`} className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F0F0F] hover:text-[#FC5001] transition-colors">
                  <span>Read full article</span>
                  <ArrowRight className="h-4 w-4 text-[#FC5001]" />
                </Link>
              </div>
            </div>
          </article>
        </section>

        {/* Supporting Articles Grid */}
        <section className="mt-20" aria-labelledby="all-insights-heading">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FC5001]">Explore Catalog</p>
              <h2 id="all-insights-heading" className="mt-1 text-3xl font-black tracking-tight text-[#0F0F0F] sm:text-4xl">More from the studio</h2>
            </div>
            <span className="text-sm font-semibold text-[#888888]">{blogArticles.length} practical guides</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supportingArticles.map((article) => (
              <article
                id={article.category.toLowerCase()}
                key={article.slug}
                className="group overflow-hidden rounded-3xl border border-[#0F0F0F]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#FC5001] hover:shadow-[0_16px_40px_rgba(244,81,30,0.08)] shadow-xs flex flex-col justify-between"
              >
                <Link href={`/blog/${article.slug}`} className="block" aria-label={`Read ${article.title}`}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F5F5]">
                    <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-wider text-[#FC5001]">
                      <span>{article.category}</span>
                      <span className="text-[#888888]">{formatDate(article.date)}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-[#0F0F0F] group-hover:text-[#FC5001] transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#666666]">
                      {article.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#888888]">
                      <Clock3 className="h-3.5 w-3.5 text-[#FC5001]" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}