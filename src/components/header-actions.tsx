'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useCart } from '@/components/cart-provider';

type HeaderActionsProps = {
  tone?: 'light' | 'dark';
  className?: string;
};

type MockResult = {
  href: string;
  label: string;
};

const MOCK_RESULTS: MockResult[] = [
  { href: '/shop?style=classic-solid', label: 'Classic Solid runners' },
  { href: '/shop?style=modern-decor', label: 'Modern Decor runners' },
  { href: '/shop?style=playful-pets', label: 'Playful Pets runners' },
  { href: '/shop', label: 'Shop all runners' }
];

export function HeaderActions({ tone = 'light', className = '' }: HeaderActionsProps) {
  const { toggleCart, totalItems } = useCart();
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!searchOpen) {
      return;
    }

    const previous = document.activeElement as HTMLElement | null;
    inputRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSearchOpen(false);
        return;
      }

      if (event.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );

        if (focusable.length === 0) {
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previous?.focus();
    };
  }, [searchOpen]);

  const toneClass = tone === 'dark' ? 'text-white' : 'text-ink';
  const hoverClass = tone === 'dark' ? 'hover:opacity-85' : 'hover:text-pine';

  const filteredResults = query.trim().length
    ? MOCK_RESULTS.filter((result) =>
        result.label.toLowerCase().includes(query.trim().toLowerCase())
      )
    : MOCK_RESULTS;

  const onSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={`flex items-center gap-1 ${className}`}>
        <Link
          href="/account"
          className={`focus-ring ${toneClass} ${hoverClass} inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:-translate-y-0.5`}
          aria-label="Account"
        >
          <UserIcon className="h-5 w-5" />
          <span className="sr-only">Account</span>
        </Link>

        <button
          type="button"
          className={`focus-ring ${toneClass} ${hoverClass} inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:-translate-y-0.5`}
          aria-label="Search"
          onClick={() => setSearchOpen(true)}
        >
          <SearchIcon className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </button>

        <button
          type="button"
          className={`focus-ring ${toneClass} ${hoverClass} relative inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:-translate-y-0.5`}
          aria-label={`Cart with ${totalItems} items`}
          onClick={toggleCart}
        >
          <BagIcon className="h-5 w-5" />
          <span className="sr-only">Cart</span>
          <span className="absolute right-1.5 top-1.5 inline-flex min-h-4 min-w-4 items-center justify-center rounded-full bg-pine px-1 text-[10px] font-semibold leading-none text-white">
            {totalItems}
          </span>
        </button>
      </div>

      {searchOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-24" role="dialog" aria-modal="true" aria-label="Search runners dialog">
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
          />
          <div
            ref={modalRef}
            className="relative z-10 w-full max-w-2xl rounded-3xl border border-ink/10 bg-white p-5 shadow-soft"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-serif text-2xl">Search</h2>
              <button
                type="button"
                className="focus-ring rounded-full border border-ink/20 px-3 py-1 text-sm"
                onClick={() => setSearchOpen(false)}
              >
                Close
              </button>
            </div>

            <form className="mt-4" onSubmit={onSearchSubmit}>
              <label htmlFor="header-search" className="sr-only">
                Search runners
              </label>
              <input
                id="header-search"
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search runners..."
                className="focus-ring w-full rounded-xl border border-ink/20 px-4 py-3"
              />
            </form>

            <div className="mt-5 space-y-2">
              {filteredResults.length === 0 ? (
                <p className="text-sm text-muted">No matching results yet.</p>
              ) : (
                filteredResults.map((result) => (
                  <Link
                    key={result.href}
                    href={result.href}
                    className="focus-ring block rounded-xl border border-ink/10 px-4 py-3 text-sm transition hover:border-pine hover:text-pine"
                    onClick={() => setSearchOpen(false)}
                  >
                    {result.label}
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

type IconProps = {
  className?: string;
};

function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5 19c1.1-3.2 4-4.8 7-4.8S17.9 15.8 19 19" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4.2 4.2" strokeLinecap="round" />
    </svg>
  );
}

function BagIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M6 8h12l-1 11H7L6 8Z" />
      <path d="M9 8V7a3 3 0 1 1 6 0v1" strokeLinecap="round" />
    </svg>
  );
}
