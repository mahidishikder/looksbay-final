import type { MetadataRoute } from "next";
import { industryCategories } from "@/data/industryData";
import { blogArticles } from "@/data/blogData";

const primaryRoutes = [
  "",
  "/templates",
  "/services",
  "/portfolio",
  "/about",
  "/contact",
  "/how-we-work",
  "/reviews",
  "/blog",
];

const templateSlugs = [
  "hannah-lorre",
  "genevieve-studio",
  "sonora-collective",
  "vogue-storyteller",
  "petale-atelier",
  "aura-creative",
  "robins",
  "district-venture",
  "alba-editorial",
  "studio-muse",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://looksbay.com";

  const mainUrls = primaryRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.9,
  }));

  const templateUrls = templateSlugs.map((slug) => ({
    url: `${baseUrl}/templates/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const serviceUrls = industryCategories.map((category) => ({
    url: `${baseUrl}/services/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogUrls = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...mainUrls, ...templateUrls, ...serviceUrls, ...blogUrls];
}