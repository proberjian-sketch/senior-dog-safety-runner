import { Metadata } from 'next';
import { ProductGrid } from '@/components/product-grid';
import { Section } from '@/components/section';
import { getAllProducts } from '@/lib/products';
import {
  SceneKey,
  SHOP_RUNNERS_MENU,
  StyleKey
} from '@/lib/shop-runners-menu';

export const metadata: Metadata = {
  title: 'Shop Runners',
  description: 'Shop all senior dog safety runners by collection and size.'
};

type ShopPageProps = {
  searchParams?: {
    style?: string;
    scene?: string;
  };
};

const styleSet = new Set<StyleKey>(
  SHOP_RUNNERS_MENU.map((style) => style.styleSlug)
);
const sceneSet = new Set<SceneKey>(['entryway', 'kitchen', 'living-room']);

export default function ShopPage({ searchParams }: ShopPageProps) {
  const styleParam = searchParams?.style;
  const sceneParam = searchParams?.scene;
  const activeStyle = styleParam && styleSet.has(styleParam as StyleKey)
    ? (styleParam as StyleKey)
    : null;
  const activeScene = sceneParam && sceneSet.has(sceneParam as SceneKey)
    ? (sceneParam as SceneKey)
    : null;
  const products = activeStyle
    ? getAllProducts().filter((product) => product.collection === activeStyle)
    : getAllProducts();
  const activeStyleLabel = activeStyle
    ? SHOP_RUNNERS_MENU.find((style) => style.styleSlug === activeStyle)?.styleLabel
    : null;
  const activeSceneLabel = activeScene
    ? {
        entryway: 'Entryway',
        kitchen: 'Kitchen',
        'living-room': 'Living Room'
      }[activeScene]
    : null;

  return (
    <Section>
      <h1 className="section-heading">Shop Runners</h1>
      <p className="section-subheading">
        Premium runner pathways for safer daily movement.
      </p>
      {(activeStyleLabel || activeSceneLabel) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {activeStyleLabel && (
            <span className="rounded-full bg-sand px-3 py-1 text-xs font-medium">
              Style: {activeStyleLabel}
            </span>
          )}
          {activeSceneLabel && (
            <span className="rounded-full bg-sand px-3 py-1 text-xs font-medium">
              Scene: {activeSceneLabel}
            </span>
          )}
        </div>
      )}
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </Section>
  );
}
