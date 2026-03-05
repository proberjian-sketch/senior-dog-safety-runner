import Link from 'next/link';
import clsx from 'clsx';
import { ReactNode } from 'react';

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = 'primary',
  className
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'focus-ring inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition',
        variant === 'primary'
          ? 'bg-pine text-white hover:bg-ink'
          : 'border border-ink/20 bg-white text-ink hover:border-pine hover:text-pine',
        className
      )}
    >
      {children}
    </Link>
  );
}
