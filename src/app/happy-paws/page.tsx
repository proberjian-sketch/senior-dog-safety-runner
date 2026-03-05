import Image from 'next/image';
import { Metadata } from 'next';
import { reviews } from '@/data/reviews';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Happy Paws',
  description: 'See real homes, reviews, and UGC moments from senior dog families.'
};

export default function HappyPawsPage() {
  return (
    <Section>
      <h1 className="section-heading">Happy Paws</h1>
      <p className="section-subheading">
        Real homes, real senior dogs, and real movement confidence.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <figure
            key={i}
            className={`relative overflow-hidden rounded-3xl border border-ink/10 bg-white ${
              i % 3 === 0 ? 'md:row-span-2 md:h-[520px]' : 'h-64'
            }`}
          >
            {/* TODO: Replace with UGC photos/videos */}
            <Image
              src={`/images/ugc-${(i % 3) + 1}.svg`}
              alt={`Happy senior dog UGC placeholder ${i}`}
              fill
              className="object-cover"
            />
          </figure>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {reviews.map((review) => (
          <article key={review.name} className="rounded-2xl border border-ink/10 bg-white p-5">
            <p className="text-clay">{'★'.repeat(review.rating)}</p>
            <p className="mt-3 text-muted">“{review.quote}”</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink/70">
              {review.name}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
