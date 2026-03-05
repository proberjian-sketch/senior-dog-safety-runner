'use client';

import { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.question} className="rounded-2xl border border-ink/10 bg-white">
            <button
              type="button"
              className="focus-ring flex w-full items-center justify-between px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <span className="font-medium">{item.question}</span>
              <span aria-hidden>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-sm text-muted">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
