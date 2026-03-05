import productsData from '@/data/products.json';
import { Product } from '@/lib/types';

const products = productsData as Product[];

export const collections = [
  {
    slug: 'classic-solid',
    name: 'Classic Solid',
    description: 'Quietly blends into minimalist homes.'
  },
  {
    slug: 'modern-decor',
    name: 'Modern Decor',
    description: 'Geometric textures that elevate your hallway.'
  },
  {
    slug: 'playful-pets',
    name: 'Playful Pets',
    description: 'Warm and charming, made for joyful corners.'
  }
] as const;

export function getAllProducts() {
  return products;
}

export function getProductsByCollection(collection: Product['collection']) {
  return products.filter((product) => product.collection === collection);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
