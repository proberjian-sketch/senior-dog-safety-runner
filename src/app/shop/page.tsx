import { Metadata } from 'next';
import { ProductGrid } from '@/components/product-grid';
import { Section } from '@/components/section';
import { getAllProducts } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Shop Runners',
  description: 'Shop all senior dog safety runners by collection and size.'
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <Section>
      <h1 className="section-heading">Shop Runners</h1>
      <p className="section-subheading">Premium runner pathways for safer daily movement.</p>
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </Section>
  );
}
