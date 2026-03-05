import { CollectionCards } from '@/components/collection-cards';
import { Comparison } from '@/components/comparison';
import { CutawayDiagram } from '@/components/cutaway-diagram';
import { FeatureGrid } from '@/components/feature-grid';
import { HeroBanner } from '@/components/hero-banner';
import { ReviewCarousel } from '@/components/review-carousel';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Comparison />
      <FeatureGrid />
      <CutawayDiagram />
      <CollectionCards />
      <ReviewCarousel />
    </>
  );
}
