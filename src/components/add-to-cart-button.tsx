'use client';

import { useCart } from '@/components/cart-provider';

type AddToCartButtonProps = {
  id: string;
  name: string;
  price: string;
};

export function AddToCartButton({ id, name, price }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      className="focus-ring rounded-full bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
      onClick={() => addToCart({ id, name, price })}
    >
      Add to Cart
    </button>
  );
}
