import { PropsWithChildren } from 'react';
import clsx from 'clsx';

type SectionProps = PropsWithChildren<{
  className?: string;
  id?: string;
}>;

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={clsx('px-4 py-14 md:px-8 md:py-20', className)}>
      <div className="mx-auto w-full max-w-content">{children}</div>
    </section>
  );
}
