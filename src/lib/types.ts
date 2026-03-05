export type Product = {
  id: string;
  name: string;
  collection: 'classic-solid' | 'modern-decor' | 'playful-pets';
  collectionName: string;
  price: string;
  sizes: string[];
  images: string[];
  keyBenefits: string[];
  care: string;
  description: string;
};
