import Image from 'next/image';
import { CTAButton } from '@/components/cta-button';
import { Section } from '@/components/section';

const collections = [
  {
    title: 'Classic Solid',
    description: 'Quietly blends into minimalist homes.',
    href: '/shop/classic-solid',
    cta: 'Shop Classic',
    image: '/images/collection-classic.svg'
  },
  {
    title: 'Modern Decor',
    description: 'Geometric textures that elevate your hallway.',
    href: '/shop/modern-decor',
    cta: 'Shop Modern',
    image: '/images/collection-modern.svg'
  },
  {
    title: 'Playful Pets',
    description: 'Warm and charming, made for joyful corners.',
    href: '/shop/playful-pets',
    cta: 'Shop Playful',
    image: '/images/collection-playful.svg'
  }
];

export function CollectionCards() {
  return (
    <Section id="collections" className="bg-sand/40">
      <h2 className="section-heading">Shop Collections</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {collections.map((collection) => (
          <article
            key={collection.title}
            className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft"
          >
            <div className="relative h-56">
              <Image src={collection.image} alt={collection.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl">{collection.title}</h3>
              <p className="mt-3 text-muted">{collection.description}</p>
              <CTAButton href={collection.href} variant="secondary" className="mt-5">
                {collection.cta}
              </CTAButton>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
