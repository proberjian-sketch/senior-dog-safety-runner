export type StyleKey = 'classic-solid' | 'modern-decor' | 'playful-pets';
export type SceneKey = 'entryway' | 'kitchen' | 'living-room';

export type ShopRunnersMenuStyle = {
  styleLabel: string;
  styleSlug: StyleKey;
  scenes: {
    label: string;
    sceneSlug: SceneKey;
    href: string;
    imgSrc: string;
    imgAlt: string;
  }[];
};

const sceneOrder: Array<{ label: string; slug: SceneKey }> = [
  { label: 'Entryway', slug: 'entryway' },
  { label: 'Kitchen', slug: 'kitchen' },
  { label: 'Living Room', slug: 'living-room' }
];

function buildScenes(styleSlug: StyleKey, styleLabel: string) {
  return sceneOrder.map((scene) => ({
    label: scene.label,
    sceneSlug: scene.slug,
    href: `/shop?style=${styleSlug}&scene=${scene.slug}`,
    imgSrc: `/nav/${styleSlug}-${scene.slug}.jpg`,
    imgAlt: `${styleLabel} runner in ${scene.label.toLowerCase()} scene`
  }));
}

export const SHOP_RUNNERS_MENU: ShopRunnersMenuStyle[] = [
  {
    styleLabel: 'Classic Solid',
    styleSlug: 'classic-solid',
    scenes: buildScenes('classic-solid', 'Classic Solid')
  },
  {
    styleLabel: 'Modern Decor',
    styleSlug: 'modern-decor',
    scenes: buildScenes('modern-decor', 'Modern Decor')
  },
  {
    styleLabel: 'Playful Pets',
    styleSlug: 'playful-pets',
    scenes: buildScenes('playful-pets', 'Playful Pets')
  }
];
