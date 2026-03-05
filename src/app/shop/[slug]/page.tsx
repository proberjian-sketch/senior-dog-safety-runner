import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { AddToCartButton } from '@/components/add-to-cart-button';
import { Section } from '@/components/section';
import { getAllProducts, getProductById } from '@/lib/products';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.id }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductById(params.slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `/shop/${product.id}`
    }
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.slug);

  if (!product) {
    notFound();
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'Senior Dog Safety Runner'
    },
    category: 'Senior Dog Runner Rug',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: product.price.replace('$', ''),
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          {product.images.map((image) => (
            <div key={image} className="relative h-72 overflow-hidden rounded-3xl border border-ink/10 bg-white">
              <Image src={image} alt={product.name} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            {product.collectionName}
          </p>
          <h1 className="mt-2 font-serif text-4xl">{product.name}</h1>
          <p className="mt-4 text-muted">{product.description}</p>
          <p className="mt-4 text-xl font-semibold">{product.price}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="rounded-full border border-ink/20 bg-white px-4 py-2 text-sm"
              >
                {size}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <AddToCartButton id={product.id} name={product.name} price={product.price} />
          </div>
          <div className="mt-10 rounded-3xl border border-ink/10 bg-white p-6">
            <h2 className="font-serif text-2xl">Key Benefits</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-muted">
              {product.keyBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <h3 className="mt-6 font-serif text-xl">Care</h3>
            <p className="mt-2 text-sm text-muted">{product.care}</p>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </Section>
  );
}
