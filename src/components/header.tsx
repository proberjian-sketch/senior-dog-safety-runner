'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { HeaderActions } from '@/components/header-actions';
import { SHOP_RUNNERS_MENU, StyleKey } from '@/lib/shop-runners-menu';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [activeStyle, setActiveStyle] = useState<StyleKey>('classic-solid');
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const pathname = usePathname();
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const iconTone = 'light';

  const activeMenu = useMemo(
    () => SHOP_RUNNERS_MENU.find((style) => style.styleSlug === activeStyle) ?? SHOP_RUNNERS_MENU[0],
    [activeStyle]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShopOpen(false);
        setMobileShopOpen(false);
      }
    };

    const onPointerDown = (event: MouseEvent) => {
      if (!desktopMenuRef.current) {
        return;
      }
      if (!desktopMenuRef.current.contains(event.target as Node)) {
        setShopOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, []);

  useEffect(() => {
    setShopOpen(false);
    setMobileShopOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const openShopMenu = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setShopOpen(true);
  };

  const closeShopMenuWithDelay = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = window.setTimeout(() => {
      setShopOpen(false);
    }, 120);
  };

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
          TTelephant
        </Link>

        <div className="flex items-center gap-1 md:hidden">
          <HeaderActions tone={iconTone} />
          <button
            type="button"
            className="focus-ring rounded-md border border-ink/20 px-3 py-1.5 text-sm"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>

        <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Main navigation">
          <div
            className="relative"
            ref={desktopMenuRef}
            onMouseEnter={openShopMenu}
            onMouseLeave={closeShopMenuWithDelay}
          >
            <button
              type="button"
              className="focus-ring rounded-md px-2 py-1"
              onClick={() => setShopOpen((prev) => !prev)}
              aria-expanded={shopOpen}
              aria-controls="shop-dropdown"
              aria-haspopup="menu"
            >
              Shop Runners
            </button>
            <div
              id="shop-dropdown"
              className={`absolute left-0 top-full w-[680px] rounded-3xl border border-ink/10 bg-white p-5 shadow-soft transition ${
                shopOpen ? 'visible opacity-100' : 'invisible opacity-0'
              }`}
            >
              <div className="grid grid-cols-[190px_1fr] gap-5">
                <div className="space-y-1" role="tablist" aria-label="Runner styles">
                  {SHOP_RUNNERS_MENU.map((style) => {
                    const isActive = activeStyle === style.styleSlug;
                    return (
                      <button
                        key={style.styleSlug}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`focus-ring w-full rounded-xl px-3 py-2 text-left transition ${
                          isActive ? 'bg-sand text-ink' : 'text-muted hover:bg-sand/60 hover:text-ink'
                        }`}
                        onMouseEnter={() => setActiveStyle(style.styleSlug)}
                        onFocus={() => setActiveStyle(style.styleSlug)}
                        onClick={() => setActiveStyle(style.styleSlug)}
                      >
                        {style.styleLabel}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3" role="tabpanel">
                    {activeMenu.scenes.map((scene) => (
                      <Link
                        key={scene.href}
                        href={scene.href}
                        className="focus-ring group block rounded-2xl border border-ink/10 p-2 transition hover:-translate-y-0.5 hover:shadow-soft"
                        onClick={() => setShopOpen(false)}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sand/60">
                          <Image
                            src={scene.imgSrc}
                            alt={scene.imgAlt}
                            fill
                            sizes="(max-width: 1024px) 33vw, 180px"
                            className="object-cover"
                          />
                        </div>
                        <p className="mt-2 text-sm font-medium group-hover:text-pine">{scene.label}</p>
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-ink/10 pt-4">
                    <Link
                      href="/shop"
                      className="focus-ring inline-flex w-full items-center justify-center rounded-full border border-ink/20 px-4 py-2.5 text-sm font-semibold transition hover:border-pine hover:text-pine"
                      onClick={() => setShopOpen(false)}
                    >
                      Shop All Runners
                    </Link>
                  </div>
                </div>
              </div>
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
          <HeaderActions tone={iconTone} />
        </nav>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-ink/10 px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="space-y-2 text-sm">
            <button
              type="button"
              className="focus-ring flex w-full items-center justify-between rounded-lg py-2 text-left"
              onClick={() => setMobileShopOpen((prev) => !prev)}
              aria-expanded={mobileShopOpen}
              aria-controls="mobile-shop-panel"
              aria-haspopup="menu"
            >
              <span>Shop Runners</span>
              <span aria-hidden>{mobileShopOpen ? '−' : '+'}</span>
            </button>

            {mobileShopOpen && (
              <div id="mobile-shop-panel" className="space-y-4 rounded-2xl border border-ink/10 bg-white p-3">
                <div className="grid grid-cols-3 gap-2" role="tablist" aria-label="Runner styles mobile">
                  {SHOP_RUNNERS_MENU.map((style) => {
                    const isActive = activeStyle === style.styleSlug;
                    return (
                      <button
                        key={style.styleSlug}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`focus-ring rounded-lg px-2 py-2 text-xs ${
                          isActive
                            ? 'bg-sand font-medium text-ink'
                            : 'bg-linen text-muted hover:bg-sand/70 hover:text-ink'
                        }`}
                        onClick={() => setActiveStyle(style.styleSlug)}
                      >
                        {style.styleLabel}
                      </button>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 gap-3" role="tabpanel">
                  {activeMenu.scenes.map((scene) => (
                    <Link
                      key={`mobile-${scene.href}`}
                      href={scene.href}
                      className="focus-ring block rounded-xl border border-ink/10 p-2"
                      onClick={() => {
                        setMobileShopOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sand/60">
                        <Image
                          src={scene.imgSrc}
                          alt={scene.imgAlt}
                          fill
                          sizes="90vw"
                          className="object-cover"
                        />
                      </div>
                      <p className="mt-2 text-sm font-medium">{scene.label}</p>
                    </Link>
                  ))}
                </div>

                <div className="border-t border-ink/10 pt-3">
                  <Link
                    href="/shop"
                    className="focus-ring inline-flex w-full items-center justify-center rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold"
                    onClick={() => {
                      setMobileShopOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Shop All Runners
                  </Link>
                </div>
              </div>
            )}

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
              <Link
                href="/shop"
                className="focus-ring inline-flex flex-1 items-center justify-center rounded-full bg-pine px-6 py-3 text-sm font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Shop The Pathway
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
