'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CTAButton } from '@/components/cta-button';
import { useCart } from '@/components/cart-provider';

const shopLinks = [
  { href: '/shop/classic-solid', label: 'Classic Solid' },
  { href: '/shop/modern-decor', label: 'Modern Decor' },
  { href: '/shop/playful-pets', label: 'Playful Pets' }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${
        scrolled
          ? 'border-ink/10 bg-linen/95 shadow-sm backdrop-blur'
          : 'border-transparent bg-linen/80'
      }`}
    >
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="focus-ring font-serif text-lg tracking-wide">
          Senior Dog Safety Runner
        </Link>

        <button
          type="button"
          className="focus-ring rounded-md border border-ink/20 px-3 py-1.5 text-sm md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Main navigation">
          <div className="group relative">
            <button
              type="button"
              className="focus-ring rounded-md px-2 py-1"
              onClick={() => setShopOpen((prev) => !prev)}
              aria-expanded={shopOpen}
              aria-controls="shop-dropdown"
            >
              Shop Runners
            </button>
            <div
              id="shop-dropdown"
              className={`absolute left-0 mt-2 min-w-52 rounded-2xl border border-ink/10 bg-white p-2 shadow-soft ${
                shopOpen ? 'block' : 'hidden group-hover:block'
              }`}
            >
              {shopLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="focus-ring block rounded-xl px-4 py-2 hover:bg-sand"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/our-story" className="focus-ring rounded-md px-2 py-1 hover:text-pine">
            Our Story
          </Link>
          <Link href="/happy-paws" className="focus-ring rounded-md px-2 py-1 hover:text-pine">
            Happy Paws
          </Link>
          <Link
            href="/senior-dog-care"
            className="focus-ring rounded-md px-2 py-1 hover:text-pine"
          >
            Senior Dog Care
          </Link>
          <Link href="/size-wash" className="focus-ring rounded-md px-2 py-1 hover:text-pine">
            Size & Wash
          </Link>
          <CTAButton href="/shop">Shop The Pathway</CTAButton>
          <button
            type="button"
            onClick={toggleCart}
            className="focus-ring rounded-full border border-ink/20 px-3 py-2"
            aria-label={`Open cart with ${totalItems} items`}
          >
            Cart ({totalItems})
          </button>
        </nav>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="border-t border-ink/10 px-4 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="space-y-2 text-sm">
            <Link className="block py-2" href="/shop" onClick={() => setMenuOpen(false)}>
              Shop Runners
            </Link>
            {shopLinks.map((link) => (
              <Link
                key={link.href}
                className="block pl-3 text-muted"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link className="block py-2" href="/our-story" onClick={() => setMenuOpen(false)}>
              Our Story
            </Link>
            <Link className="block py-2" href="/happy-paws" onClick={() => setMenuOpen(false)}>
              Happy Paws
            </Link>
            <Link className="block py-2" href="/senior-dog-care" onClick={() => setMenuOpen(false)}>
              Senior Dog Care
            </Link>
            <Link className="block py-2" href="/size-wash" onClick={() => setMenuOpen(false)}>
              Size & Wash
            </Link>
            <div className="flex items-center gap-3 pt-2">
              <CTAButton href="/shop" className="flex-1">
                Shop The Pathway
              </CTAButton>
              <button
                type="button"
                onClick={toggleCart}
                className="focus-ring rounded-full border border-ink/20 px-4 py-3 text-xs"
              >
                Cart ({totalItems})
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
