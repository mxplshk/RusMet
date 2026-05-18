import type { MetadataRoute } from 'next';
import { categoryGroups, categories } from '@/data/categories';
import { products } from '@/data/products';
import { cities } from '@/lib/cities';

const BASE_URL = 'https://rusmet.ru';
const staticSlugs = ['catalog', 'delivery', 'about', 'payment', 'contacts'];

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Root pages ───────────────────────────────────────────────
  const rootPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/catalog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/delivery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/payment`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/contacts`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  const rootGroupPages: MetadataRoute.Sitemap = categoryGroups.map((g) => ({
    url: `${BASE_URL}/catalog/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const rootCategoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${BASE_URL}/catalog/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const rootProductPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/product/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  // ── City pages ────────────────────────────────────────────────
  const cityHomePages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const cityStaticPages: MetadataRoute.Sitemap = cities.flatMap((city) =>
    staticSlugs.map((slug) => ({
      url: `${BASE_URL}/${city.slug}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }))
  );

  const cityGroupPages: MetadataRoute.Sitemap = cities.flatMap((city) =>
    categoryGroups.map((g) => ({
      url: `${BASE_URL}/${city.slug}/catalog/${g.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  );

  const cityCategoryPages: MetadataRoute.Sitemap = cities.flatMap((city) =>
    categories.map((c) => ({
      url: `${BASE_URL}/${city.slug}/catalog/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  );

  const cityProductPages: MetadataRoute.Sitemap = cities.flatMap((city) =>
    products.map((p) => ({
      url: `${BASE_URL}/${city.slug}/product/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    }))
  );

  return [
    ...rootPages,
    ...rootGroupPages,
    ...rootCategoryPages,
    ...rootProductPages,
    ...cityHomePages,
    ...cityStaticPages,
    ...cityGroupPages,
    ...cityCategoryPages,
    ...cityProductPages,
  ];
}
