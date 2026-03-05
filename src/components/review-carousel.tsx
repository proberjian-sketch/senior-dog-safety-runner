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
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {reviews.map((review) => (
          <article key={review.name} className="rounded-2xl border border-ink/10 bg-white p-5">
            <p className="text-clay">{'★'.repeat(review.rating)}</p>
            <p className="mt-3 text-sm text-muted">“{review.quote}”</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink/70">
              {review.name}
            </p>
          </article>
        ))}
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
