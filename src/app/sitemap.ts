import type { MetadataRoute } from "next";
import { industryCategories } from "@/data/industryData";
import { blogArticles } from "@/data/blogData";

const routes = ["", "/about", "/services", "/work", "/portfolio", "/how-we-work", "/reviews", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://looksbay.com";
  const serviceRoutes = industryCategories.map((category) => `/services/${category.slug}`);
  const blogRoutes = ["/blog", ...blogArticles.map((article) => `/blog/${article.slug}`)];

  return [...routes, ...serviceRoutes, ...blogRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.8 : 0.7,
  }));
}