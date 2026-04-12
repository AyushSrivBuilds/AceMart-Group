/**
 * BlockRenderer.tsx — Dynamic Zone Component Mapper
 *
 * Maps each Strapi Dynamic Zone block (identified by its __component slug)
 * to the corresponding pre-approved React component.
 *
 * The client can reorder blocks in Strapi Admin freely. Unknown block types
 * are silently skipped (no UI breakage).
 *
 * Usage:
 *   import { BlockRenderer } from './BlockRenderer';
 *   {content.home.blocks.map((block) => (
 *     <BlockRenderer key={block.id} block={block} />
 *   ))}
 */

import type { DynamicBlock, ServiceCardBlock } from '../types/cms';
import Services from './Services';

interface BlockRendererProps {
  block: DynamicBlock;
}

export function BlockRenderer({ block }: BlockRendererProps) {
  switch (block.__component) {
    case 'sections.service-card':
      // Renders a single service card as a one-item Services grid.
      // For full grid rendering pass the full array to <Services blocks={...} />.
      return (
        <Services blocks={[block as ServiceCardBlock]} />
      );

    case 'sections.hero':
      // Hero is handled at the page level; this case is a no-op fallback.
      return null;

    case 'sections.feature-list':
      // Future: wire up a FeatureList component here.
      return null;

    default:
      // Safety net: unknown block types are ignored, not crashed.
      return null;
  }
}
