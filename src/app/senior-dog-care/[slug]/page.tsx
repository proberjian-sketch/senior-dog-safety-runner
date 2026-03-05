import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/section';
import { blogPosts } from '@/data/blogPosts';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((entry) => entry.slug === params.slug);
  return {
    title: post?.title ?? 'Article Not Found',
    description: post?.excerpt
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}{' '}
          • {post.readTime}
        </p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/90">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </Section>
  );
}
