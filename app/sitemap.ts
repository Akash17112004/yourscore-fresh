import type { MetadataRoute } from 'next';

const base = 'https://yourscore-fresh.vercel.app';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/approach', '/our-team', '/pricing', '/results', '/contact', '/privacy', '/terms'].map((p) => ({ url: base + p, changeFrequency: 'monthly', priority: p === '' ? 1 : 0.7 }));
}
