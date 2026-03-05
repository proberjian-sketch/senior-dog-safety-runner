import { Metadata } from 'next';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Checkout flow coming soon.'
};

export default function CheckoutPage() {
  return (
    <Section>
      <h1 className="section-heading">Checkout</h1>
      <p className="section-subheading">
        Coming soon. This demo includes product browsing and cart interactions.
      </p>
    </Section>
  );
}
