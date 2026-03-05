import { Metadata } from 'next';
import { ProductGrid } from '@/components/product-grid';
import { Section } from '@/components/section';
import { getProductsByCollection } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Playful Pets Runners',
  description: 'Warm, charming runner rugs engineered as a stable pathway for senior dogs.'
};

export default function PlayfulPetsPage() {
  const products = getProductsByCollection('playful-pets');

  return (
    <Section>
      <h1 className="section-heading">Playful Pets</h1>
      <p className="section-subheading">Warm and charming, made for joyful corners.</p>
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </Section>
  );
}
