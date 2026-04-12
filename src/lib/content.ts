/**
 * src/lib/content.ts
 *
 * Typed accessor for the static CMS content written by sync-cms.js.
 *
 * During 'pnpm dev': reads the seed data in src/data/content.json.
 * During 'pnpm build': sync-cms.js overwrites content.json with live Strapi
 * data first, so this module receives fresh CMS content.
 *
 * Usage:
 *   import { content } from '../lib/content';
 *   const { home, about, contactInfo } = content;
 */

import rawContent from '../data/content.json';
import type { ContentSchema } from '../types/cms';

export const content = rawContent as ContentSchema;
