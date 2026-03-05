import Image from 'next/image';
import { Section } from '@/components/section';

const features = [
  {
    title: 'Slip-Resistant Surface',
    text: 'Micro-texture helps paws grip during standing and walking.',
    image: '/images/feature-slip.svg'
  },
  {
    title: '100% Waterproof',
    text: 'Spills bead up and wipe clean without soaking through.',
    image: '/images/feature-waterproof.svg'
  },
  {
    title: 'Orthopedic Support',
    text: 'A dense comfort layer supports tired joints and hips.',
    image: '/images/feature-support.svg'
  },
  {
    title: 'Stays Put',
    text: 'Grip base keeps the runner stable on hardwood or tile.',
    image: '/images/feature-grip.svg'
  }
];

export function FeatureGrid() {
  return (
    <Section className="bg-sand/40">
      <h2 className="section-heading">The 4 Core Features</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-3xl border border-ink/10 bg-white p-4 shadow-soft">
            <div className="relative mb-4 h-44 overflow-hidden rounded-2xl bg-sand">
              {/* TODO: Replace with short looping clips/GIFs */}
              <Image src={feature.image} alt={feature.title} fill className="object-cover" />
            </div>
            <h3 className="font-serif text-xl">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted">{feature.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
