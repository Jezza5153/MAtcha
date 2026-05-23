import type { MetadataRoute } from "next";
import { productSlugs } from "@/lib/products";
import { guideSlugs } from "@/lib/guides";

const SITE = "https://freddomatcha.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/verhaal`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/verhaal/amersfoort`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/gidsen`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE}/verzending`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/retour`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/voorwaarden`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const productRoutes: MetadataRoute.Sitemap = productSlugs().map((slug) => ({
    url: `${SITE}/producten/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guideSlugs().map((slug) => ({
    url: `${SITE}/gidsen/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...guideRoutes];
}
