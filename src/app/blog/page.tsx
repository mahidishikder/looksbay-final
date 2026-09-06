import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Sparkles } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { blogArticles, featuredArticle } from "@/data/blogData";

export const metadata: Metadata = {
  title: "Insights on Web Design, SEO & Digital Growth",
  description: "Practical insights from the Looksbay team on website strategy, technical SEO, Core Web Vitals, e-commerce and conversion-focused design.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Looksbay Insights | Web Design, SEO & Digital Growth",
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
    <div className="min-h-screen overflow-x-clip bg-[#FAF8FF] text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#4C1D95] via-[#581C87] to-[#3B0764] px-6 pb-20 pt-36 text-white sm:px-12 lg:px-20 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(157,92,255,0.42),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(204,255,0,0.10),transparent_30%)]" />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#CCFF00] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Looksbay Insights
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-8xl">
              Better websites start with <span className="text-[#CCFF00]">better thinking.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base font-medium leading-relaxed text-purple-100 sm:text-lg">
              Practical notes on strategy, design, performance and SEO for teams building their next important digital experience.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-2" aria-label="Article categories">
            {categories.map((category, index) => (
              <a
                key={category}
                href={index === 0 ? "#latest" : `#${category.toLowerCase()}`}
                className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors ${index === 0 ? "border-[#CCFF00] bg-[#CCFF00] text-black" : "border-white/20 text-white/75 hover:border-white/60 hover:text-white"}`}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      <main id="latest" className="mx-auto max-w-[1400px] px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
        <section aria-labelledby="featured-heading">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-700">Start here</p>
              <h2 id="featured-heading" className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">The latest thinking</h2>
            </div>
            <span className="hidden text-sm font-semibold text-slate-500 sm:block">Ideas for ambitious teams</span>
          </div>

          <article className="grid overflow-hidden rounded-[28px] border border-purple-100 bg-white shadow-[0_24px_70px_rgba(76,29,149,0.10)] lg:grid-cols-[1.08fr_0.92fr]">
            <Link href={`/blog/${featuredArticle.slug}`} className="group relative min-h-[300px] overflow-hidden lg:min-h-[520px]" aria-label={`Read ${featuredArticle.title}`}>
              <Image src={featuredArticle.image} alt={featuredArticle.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17062F]/65 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 rounded-full bg-[#CCFF00] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-black">Featured</span>
            </Link>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="flex items-center gap-3 text-xs font-black uppercase tracking-wider text-purple-700">
                <span>{featuredArticle.category}</span><span className="h-1 w-1 rounded-full bg-purple-300" /><span>{featuredArticle.readTime}</span>
              </div>
              <h3 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl">{featuredArticle.title}</h3>
              <p className="mt-5 text-base leading-relaxed text-slate-600">{featuredArticle.excerpt}</p>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-100 pt-6">
                <span className="text-xs font-bold text-slate-500">{formatDate(featuredArticle.date)}</span>
                <Link href={`/blog/${featuredArticle.slug}`} className="inline-flex items-center gap-2 text-sm font-black text-purple-800 hover:text-purple-600">Read article <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-20" aria-labelledby="all-insights-heading">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-700">Explore</p>
              <h2 id="all-insights-heading" className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">More from the studio</h2>
            </div>
            <span className="text-sm font-semibold text-slate-500">{blogArticles.length} practical guides</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supportingArticles.map((article) => (
              <article id={article.category.toLowerCase()} key={article.slug} className="group overflow-hidden rounded-2xl border border-purple-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-[0_18px_50px_rgba(76,29,149,0.12)]">
                <Link href={`/blog/${article.slug}`} className="block" aria-label={`Read ${article.title}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3 text-[11px] font-black uppercase tracking-wider text-purple-700"><span>{article.category}</span><span className="text-slate-400">{formatDate(article.date)}</span></div>
                    <h3 className="mt-4 text-xl font-black leading-tight tracking-tight group-hover:text-purple-700">{article.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
                    <div className="mt-5 flex items-center gap-2 text-xs font-black text-slate-500"><Clock3 className="h-3.5 w-3.5" />{article.readTime}</div>
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
