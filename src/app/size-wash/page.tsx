import { Metadata } from 'next';
import { FAQAccordion } from '@/components/faq-accordion';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Size & Wash',
  description:
    'Find runner sizing guidance, hallway measuring tips, and cleaning instructions for Senior Dog Safety Runner.'
};

const faqItems = [
  {
    question: 'What runner size should I choose?',
    answer:
      'Choose the longest uninterrupted path your dog uses daily. Most hallways fit 2.5x8 ft or 2.5x10 ft runners.'
  },
  {
    question: 'How do I measure my hallway?',
    answer:
      'Measure from your dog’s first step point to the destination area. Add 6-12 inches at each end when possible for smoother transitions.'
  },
  {
    question: 'How should I wash the runner?',
    answer:
      'Vacuum weekly, spot clean with mild soap, and machine wash cold on gentle cycle when needed. Air dry completely before placing back.'
  },
  {
    question: 'How do I clean waterproof accidents quickly?',
    answer:
      'Blot immediately, wipe with a damp cloth and pet-safe cleaner, then allow airflow for a dry finish.'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
};

export default function SizeWashPage() {
  return (
    <Section>
      <h1 className="section-heading">Size & Wash</h1>
      <p className="section-subheading">
        Simple sizing and care guidance to keep your dog’s pathway clean, stable, and ready every day.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <article className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft">
          <h2 className="font-serif text-3xl">Size Guide</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>2.5x6 ft: Bedside to doorway transitions.</li>
            <li>2.5x8 ft: Most single hallway spans.</li>
            <li>2.5x10 ft: Extended pathways or kitchen corridors.</li>
            <li>2.5x12-14 ft: Long, uninterrupted home walkways.</li>
          </ul>
        </article>

        <article className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft">
          <h2 className="font-serif text-3xl">Care Instructions</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-muted">
            <li>Vacuum weekly to maintain traction texture.</li>
            <li>Spot clean spills promptly with mild detergent.</li>
            <li>Machine wash cold, gentle cycle, no bleach.</li>
            <li>Lay flat or hang dry fully before reuse.</li>
          </ol>
        </article>
      </div>

      <div className="mt-10">
        <h2 className="font-serif text-3xl">FAQ</h2>
        <div className="mt-5">
          <FAQAccordion items={faqItems} />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </Section>
  );
}
