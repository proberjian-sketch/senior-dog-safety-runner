import Image from 'next/image';
import { Metadata } from 'next';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Why we built a premium safe runner pathway for senior dogs and the families who care for them.'
};

export default function OurStoryPage() {
  return (
    <>
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="section-heading">Our Story</h1>
            <p className="section-subheading">
              We started with one aging dog, one slippery hallway, and one goal: give senior dogs a safer way to move at home.
            </p>
            <div className="mt-6 space-y-4 text-muted">
              <p>
                We watched confident dogs become cautious. The hardest moments were not dramatic falls, but the quiet hesitation before each step.
              </p>
              <p>
                Senior Dog Safety Runner was built to solve that exact moment with premium materials, practical engineering, and home-first design.
              </p>
              <p>
                Every collection is made to feel like refined home decor while delivering the traction, cushioning, and waterproof protection senior dogs need daily.
              </p>
            </div>
          </div>
          <div className="relative h-96 overflow-hidden rounded-3xl border border-ink/10 bg-white">
            <Image
              src="/images/our-story.svg"
              alt="Founder walking with senior dog on hallway runner"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
