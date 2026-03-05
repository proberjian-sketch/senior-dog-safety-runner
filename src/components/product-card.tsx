import Image from 'next/image';
import Link from 'next/link';
import { AddToCartButton } from '@/components/add-to-cart-button';
import { Product } from '@/lib/types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft">
      <div className="relative h-64">
        <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
      </div>
      <div className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          {product.collectionName}
        </p>
        <h3 className="font-serif text-2xl">
          <Link href={`/shop/${product.id}`} className="focus-ring hover:text-pine">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-muted">{product.description}</p>
        <div className="flex items-center justify-between gap-3 pt-2">
          <p className="font-semibold">{product.price}</p>
          <AddToCartButton id={product.id} name={product.name} price={product.price} />
        </div>
      </div>
    </article>
  );
}
