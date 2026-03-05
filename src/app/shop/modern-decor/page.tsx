import { Metadata } from 'next';
import { ProductGrid } from '@/components/product-grid';
import { Section } from '@/components/section';
import { getProductsByCollection } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Modern Decor Runners',
  description: 'Modern decor runner rugs with premium senior-dog safety construction.'
};

export default function ModernDecorPage() {
  const products = getProductsByCollection('modern-decor');

  return (
    <Section>
      <h1 className="section-heading">Modern Decor</h1>
      <p className="section-subheading">Geometric textures that elevate your hallway.</p>
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </Section>
  );
}
