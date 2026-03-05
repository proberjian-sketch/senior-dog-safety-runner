'use client';

import Link from 'next/link';
import { useCart } from '@/components/cart-provider';

export function CartDrawer() {
  const { cart, isCartOpen, toggleCart, updateQuantity } = useCart();

  return (
    <>
      {isCartOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/30"
          aria-label="Close cart"
          onClick={toggleCart}
        />
      )}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-ink/10 bg-linen p-6 shadow-xl transition-transform ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-live="polite"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button className="focus-ring rounded-full border px-3 py-1 text-sm" onClick={toggleCart}>
            Close
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {cart.length === 0 ? (
            <p className="text-muted">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="rounded-2xl border border-ink/10 bg-white p-4">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted">{item.price}</p>
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    className="focus-ring rounded-full border px-2"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="min-w-6 text-center text-sm">{item.quantity}</span>
                  <button
                    type="button"
                    className="focus-ring rounded-full border px-2"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <Link
          className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-pine px-6 py-3 text-sm font-semibold text-white"
          href="/checkout"
          onClick={toggleCart}
        >
          Checkout (Coming soon)
        </Link>
      </aside>
    </>
  );
}
