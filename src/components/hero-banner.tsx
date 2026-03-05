import Image from 'next/image';
import { CTAButton } from '@/components/cta-button';
import { Section } from '@/components/section';

export function HeroBanner() {
  return (
    <Section className="pb-8 pt-8 md:pt-12">
      <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-sand/50">
        <div className="relative min-h-[420px]">
          {/* TODO: Replace with a real 5-8s muted loop video of a senior dog walking on runner over hardwood. */}
          <Image
            src="/images/hero-poster.svg"
            alt="Senior dog walking confidently on a runner rug"
            fill
            className="object-cover"
            priority
          />
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-poster.svg"
          >
            <source src="/media/hero-loop-placeholder.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/50 to-transparent" />
          <div className="relative z-10 flex min-h-[420px] items-center p-8 md:p-12">
            <div className="max-w-xl text-white">
              <h1 className="font-serif text-4xl leading-tight md:text-6xl">
                A Safe Pathway for Their Golden Years.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">
                A premium slip-resistant, waterproof runner rug designed to help senior dogs stand and walk with more confidence while reducing fear on slippery floors.
              </p>
              <CTAButton href="/shop" className="mt-8">
                Shop The Pathway
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
