import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';
import { getAllProducts } from '@/lib/products';

const base = 'https://www.seniordogsafetyrunner.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/shop',
    '/shop/classic-solid',
    '/shop/modern-decor',
    '/shop/playful-pets',
    '/our-story',
    '/happy-paws',
    '/senior-dog-care',
    '/size-wash',
    '/checkout'
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.7
  }));

  const products = getAllProducts().map((product) => ({
    url: `${base}/shop/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }));

  const posts = blogPosts.map((post) => ({
    url: `${base}/senior-dog-care/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...products, ...posts];
}
