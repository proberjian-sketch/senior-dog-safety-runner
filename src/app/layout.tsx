import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/styles/globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartProvider } from '@/components/cart-provider';
import { CartDrawer } from '@/components/cart-drawer';
import { AnalyticsScripts } from '@/components/analytics';

export const metadata: Metadata = {
  title: {
    default: 'Senior Dog Safety Runner',
    template: '%s | Senior Dog Safety Runner'
  },
  description:
    'Premium waterproof slip-resistant runner rugs engineered as a safe pathway for senior dogs.',
  metadataBase: new URL('https://www.seniordogsafetyrunner.com'),
  openGraph: {
    title: 'Senior Dog Safety Runner',
    description:
      'A safe walking pathway designed for senior dogs with traction, waterproofing, and orthopedic support.',
    url: 'https://www.seniordogsafetyrunner.com',
    siteName: 'Senior Dog Safety Runner',
    locale: 'en_US',
    type: 'website'
  },
  alternates: {
    canonical: '/'
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Senior Dog Safety Runner',
  url: 'https://www.seniordogsafetyrunner.com',
  logo: 'https://www.seniordogsafetyrunner.com/images/hero-poster.svg',
  sameAs: []
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
