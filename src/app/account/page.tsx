import { Metadata } from 'next';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Account',
  description: 'Account features coming soon.'
};

export default function AccountPage() {
  return (
    <Section>
      <h1 className="section-heading">Account</h1>
      <p className="section-subheading">Coming soon.</p>
    </Section>
  );
}
