import Link from 'next/link';
import { Metadata } from 'next';
import { Section } from '@/components/section';
import { blogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Senior Dog Care',
  description:
    'Helpful articles on safer home movement, flooring support, and daily routines for senior dogs.'
};

export default function SeniorDogCarePage() {
  return (
    <Section>
      <h1 className="section-heading">Senior Dog Care</h1>
      <p className="section-subheading">
        Practical, home-focused guidance for helping older dogs move confidently.
      </p>
      <div className="mt-8 grid gap-5">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}{' '}
              • {post.readTime}
            </p>
            <h2 className="mt-3 font-serif text-3xl">
              <Link href={`/senior-dog-care/${post.slug}`} className="focus-ring hover:text-pine">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-muted">{post.excerpt}</p>
            <Link
              href={`/senior-dog-care/${post.slug}`}
              className="focus-ring mt-4 inline-block text-sm font-semibold text-pine"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
