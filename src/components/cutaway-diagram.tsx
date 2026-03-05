import { Section } from '@/components/section';

const layers = [
  'Wear-Resistant Top',
  'Waterproof Shield',
  'High-Density Core',
  'Grip-Tech Base'
];

export function CutawayDiagram() {
  return (
    <Section>
      <h2 className="section-heading">Engineered for Safety, Layer by Layer.</h2>
      <div className="mt-8 grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft">
          <div className="space-y-3">
            {layers.map((layer, index) => (
              <div
                key={layer}
                className="rounded-xl border border-ink/10 px-4 py-4"
                style={{
                  backgroundColor: [
                    '#eaddcf',
                    '#d9ebe2',
                    '#f4ece2',
                    '#d3d9d6'
                  ][index]
                }}
              >
                <p className="font-medium">{layer}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">
            TODO: Replace with real 3D cutaway illustration export (transparent PNG/SVG).
          </p>
        </div>
        <ul className="space-y-3 text-sm text-muted">
          {layers.map((layer) => (
            <li key={layer} className="rounded-xl border border-ink/10 bg-linen p-4">
              {layer}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
