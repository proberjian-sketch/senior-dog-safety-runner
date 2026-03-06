import Image from 'next/image';
import Link from 'next/link';
import { reviews } from '@/data/reviews';
import { Section } from '@/components/section';

export function ReviewCarousel() {
  return (
    <Section>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="section-heading">Happy Paws, Real Homes</h2>
          <p className="section-subheading">
            Premium performance, trusted by families with older dogs.
          </p>
        </div>
      </div>
      <div className="-mx-4 mt-8 overflow-x-auto px-4 pb-2 md:mx-0 md:overflow-visible md:px-0">
        <div className="flex snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 xl:grid-cols-4">
        {reviews.map((review) => (
          <article
            key={`${review.name}-${review.location}`}
            className="w-[82vw] shrink-0 snap-start rounded-2xl border border-ink/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft md:w-auto md:p-5"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={review.imageSrc}
                alt={review.imageAlt}
                fill
                sizes="(max-width: 768px) 82vw, (max-width: 1280px) 33vw, 24vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-clay">{'★'.repeat(review.rating)}</p>
            <blockquote className="mt-2 text-sm leading-relaxed text-muted">
              “{review.quote}”
            </blockquote>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink/70">
              {review.name}, {review.location}
            </p>
          </article>
        ))}
        </div>
      </div>
      <div className="mt-8">
        <Link
          href="/shop"
          className="focus-ring inline-flex rounded-full bg-pine px-6 py-3 text-sm font-semibold text-white hover:bg-ink"
        >
          Get Yours Now
        </Link>
      </div>
    </Section>
  );
}
