import Image from 'next/image';
import { Section } from '@/components/section';

export function Comparison() {
  return (
    <Section>
      <div className="mb-8 md:mb-10">
        <h2 className="section-heading">The Runner Difference: From Fear to Confidence.</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        <article className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft">
          <div className="relative aspect-[4/3]">
            {/* TODO: Replace with real photo at /public/comparison/before.jpg */}
            <Image
              src="/comparison/before.jpg"
              alt="Senior dog struggling for traction on slippery hardwood floor"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-6">
            <h3 className="flex items-center gap-2 text-2xl font-semibold leading-tight drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)] md:text-3xl">
              <span className="text-red-400">✕</span>
              <span>The Problem:</span>
            </h3>
            <p className="mt-2 text-base leading-snug text-white/95 drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)] md:text-lg">
              Hardwood Hazards Slippery floors cause painful falls, micro-tears in joints,
              and a growing fear of walking.
              <br />
              <br />
            </p>
          </div>
        </article>

        <article className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft">
          <div className="relative aspect-[4/3]">
            {/* TODO: Replace with real photo at /public/comparison/after.jpg */}
            <Image
              src="/comparison/after.jpg"
              alt="Senior dog confidently walking on a hallway runner"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-6">
            <h3 className="flex items-center gap-2 text-2xl font-semibold leading-tight drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)] md:text-3xl">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#4CAF50] text-xl text-white md:h-9 md:w-9">
                ✓
              </span>
              <span>The Solution:</span>
            </h3>
            <p className="mt-2 text-base leading-snug text-white/95 drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)] md:text-lg">
              Targeted Runners Place our runners in high-traffic hallways and transitions.
              Watch them regain the confidence to explore their home again.
            </p>
          </div>
        </article>
      </div>
    </Section>
  );
}
