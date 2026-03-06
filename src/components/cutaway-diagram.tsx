 'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Section } from '@/components/section';

type Layer = {
  id: string;
  title: string;
  description: string;
  startInImage: {
    xPercent: number;
    yPercent: number;
  };
};

const layers: Layer[] = [
  {
    id: 'wear-resistant-top',
    title: 'Wear-Resistant Top',
    description: 'Adds crucial paw traction. Gentle on paws, tough on scratches.',
    startInImage: { xPercent: 68, yPercent: 24 }
  },
  {
    id: 'waterproof-shield',
    title: 'Waterproof Shield',
    description:
      '100% liquid barrier. Wipes clean instantly and protects your expensive hardwood floors.',
    startInImage: { xPercent: 69, yPercent: 39 }
  },
  {
    id: 'high-density-core',
    title: 'High-Density Core',
    description:
      'Orthopedic support. Absorbs impact and relieves pressure on aging joints.',
    startInImage: { xPercent: 69, yPercent: 56 }
  },
  {
    id: 'grip-tech-base',
    title: 'Grip-Tech Base',
    description: 'Stays firmly in place. Zero shifting, zero tripping hazards.',
    startInImage: { xPercent: 69, yPercent: 73 }
  }
];

export function CutawayDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const anchorRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [svgBox, setSvgBox] = useState({ width: 0, height: 0 });
  const [lines, setLines] = useState<
    Array<{ id: string; x1: number; y1: number; x2: number; y2: number }>
  >([]);

  useEffect(() => {
    const updateLines = () => {
      if (!containerRef.current || !imageRef.current) {
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const imageRect = imageRef.current.getBoundingClientRect();

      const nextLines = layers
        .map((layer, index) => {
          const anchor = anchorRefs.current[index];
          if (!anchor) {
            return null;
          }
          const anchorRect = anchor.getBoundingClientRect();
          const x1 =
            imageRect.left -
            containerRect.left +
            (imageRect.width * layer.startInImage.xPercent) / 100;
          const x2 = anchorRect.left - containerRect.left;
          const y2 = anchorRect.top - containerRect.top;
          const y1 = y2;
          return { id: layer.id, x1, y1, x2, y2 };
        })
        .filter(
          (line): line is { id: string; x1: number; y1: number; x2: number; y2: number } =>
            line !== null
        );

      setSvgBox({ width: containerRect.width, height: containerRect.height });
      setLines(nextLines);
    };

    updateLines();
    window.addEventListener('resize', updateLines);
    return () => window.removeEventListener('resize', updateLines);
  }, []);

  return (
    <Section>
      <h2 className="section-heading">Engineered for Safety, Layer by Layer.</h2>
      <div
        ref={containerRef}
        className="relative mt-8 grid items-center gap-8 md:grid-cols-[11fr_9fr] md:gap-12"
      >
        <figure className="rounded-2xl border border-ink/10 bg-sand/40 p-4 md:p-5">
          <div
            ref={imageRef}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 bg-white"
          >
            {/* TODO: Replace with final high-resolution 3D cutaway render export. */}
            <Image
              src="/cutaway/cutaway-3d.png"
              alt="3D cutaway illustration showing runner layers from top surface to grip base"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </figure>

        <div className="space-y-3 md:space-y-4">
          {layers.map((layer, index) => (
            <article
              key={layer.id}
              className="relative rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition hover:shadow-soft"
            >
              <div
                ref={(node) => {
                  anchorRefs.current[index] = node;
                }}
                className="layer-anchor absolute left-0 top-1/2 h-0 w-0 -translate-y-1/2"
              />
              <h3 className="font-serif text-2xl">{layer.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{layer.description}</p>
            </article>
          ))}
        </div>

        {/* TODO: If we need pixel-perfect anchors later, map line endpoints from measured element bounds. */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          viewBox={`0 0 ${svgBox.width || 1} ${svgBox.height || 1}`}
          preserveAspectRatio="none"
        >
          {lines.map((line) => (
            <line
              key={line.id}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#8c8c8c"
              strokeWidth="1"
              opacity="0.35"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>
    </Section>
  );
}
