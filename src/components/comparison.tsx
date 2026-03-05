import { Section } from '@/components/section';

export function Comparison() {
  return (
    <Section>
      <div className="mb-10">
        <h2 className="section-heading">The Runner Difference: From Fear to Confidence.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-700">Before ✕</p>
          <h3 className="mt-3 font-serif text-2xl">Hardwood Hazards</h3>
          <p className="mt-4 text-muted">
            Slick floors can cause slips, micro-tears, and fear of walking. Many senior dogs begin to hesitate at transitions and avoid movement.
          </p>
        </article>
        <article className="rounded-3xl border border-green-200 bg-green-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">After ✓</p>
          <h3 className="mt-3 font-serif text-2xl">Targeted Runners</h3>
          <p className="mt-4 text-muted">
            Place runners in hallways and transition zones to create traction, reduce slip anxiety, and help your dog regain confidence with each step.
          </p>
        </article>
      </div>
    </Section>
  );
}
