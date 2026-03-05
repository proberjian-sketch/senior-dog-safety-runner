import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-sand/30 px-4 py-10 md:px-8">
      <div className="mx-auto grid w-full max-w-content gap-8 md:grid-cols-4">
        <div>
          <p className="font-serif text-lg">Senior Dog Safety Runner</p>
          <p className="mt-3 text-sm text-muted">
            A premium safe walking pathway designed for senior dogs.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted">Shop</p>
          <div className="mt-3 space-y-2 text-sm">
            <Link href="/shop">All Runners</Link>
            <Link href="/shop/classic-solid">Classic Solid</Link>
            <Link href="/shop/modern-decor">Modern Decor</Link>
            <Link href="/shop/playful-pets">Playful Pets</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted">Learn</p>
          <div className="mt-3 space-y-2 text-sm">
            <Link href="/our-story">Our Story</Link>
            <Link href="/happy-paws">Happy Paws</Link>
            <Link href="/senior-dog-care">Senior Dog Care</Link>
            <Link href="/size-wash">Size & Wash</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted">Contact</p>
          <p className="mt-3 text-sm text-muted">help@seniordogsafetyrunner.com</p>
          <p className="mt-1 text-sm text-muted">Mon-Fri, 9am-5pm ET</p>
        </div>
      </div>
    </footer>
  );
}
