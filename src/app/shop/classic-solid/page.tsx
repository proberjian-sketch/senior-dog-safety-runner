import { Metadata } from 'next';
import { ProductGrid } from '@/components/product-grid';
import { Section } from '@/components/section';
import { getProductsByCollection } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Classic Solid Runners',
  description: 'Classic solid runner rugs for senior dog safety pathways.'
};

export default function ClassicSolidPage() {
  const products = getProductsByCollection('classic-solid');

  return (
    <Section>
      <h1 className="section-heading">Classic Solid</h1>
      <p className="section-subheading">Quietly blends into minimalist homes.</p>
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </Section>
  );
}
