# Senior Dog Safety Runner Marketing Site

Production-ready Next.js App Router + TypeScript + Tailwind marketing/eCommerce demo for a US-market, English-only brand.

## Tech stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- `next/image` for all imagery
- Local cart state (no payment integration)

## Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run locally:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Routes
- `/` Home
- `/shop` All runners
- `/shop/classic-solid`
- `/shop/modern-decor`
- `/shop/playful-pets`
- `/shop/[slug]` Product detail
- `/our-story`
- `/happy-paws`
- `/senior-dog-care` Blog index
- `/senior-dog-care/[slug]` Blog post
- `/size-wash`
- `/checkout` (stub)

## Reusable components
- Header/Nav (sticky + dropdown + CTA)
- Footer
- CTA button
- Section wrapper
- Feature grid
- Before/After comparison
- Cutaway diagram placeholder
- Collection cards
- Review grid/carousel-style section
- FAQ accordion
- Product grid/card
- Cart provider + mini-cart drawer

## Data and content
- Product mock data: `src/data/products.json`
- Reviews: `src/data/reviews.ts`
- Blog posts: `src/data/blogPosts.ts`

## SEO and analytics
- Metadata and Open Graph in `src/app/layout.tsx`
- JSON-LD:
  - Organization in layout
  - Product on product detail pages
  - FAQ on `/size-wash`
- `robots.ts` + `sitemap.ts`
- Plausible + GA placeholders in `src/components/analytics.tsx`

## Placeholder media TODOs
Replace all placeholder assets in `public/images` and add real motion assets in `public/media`:
- `public/media/hero-loop-placeholder.mp4` (5-8s muted loop hero video)
- Feature loops/GIFs for the 4 core features
- 3D cutaway illustration export
- UGC photos/videos for Happy Paws
- Final product and lifestyle photography

## Accessibility and performance notes
- Semantic HTML structure and keyboard-focus styles
- Mobile-first responsive layout
- Color contrast tuned for WCAG AA targets
- Optimized image pipeline with `next/image`

## Simple cart behavior
- Add-to-cart updates local storage cart state
- Mini-cart drawer from header cart trigger
- Checkout is intentionally a stub page ("Coming soon")
