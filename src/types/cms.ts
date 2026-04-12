// ─────────────────────────────────────────────────────────────────────────────
// CMS Type Definitions
//
// These interfaces mirror the Strapi v5 response shapes for all Single Types
// and Dynamic Zone components used by this project.
//
// Strapi v5 note: Unlike v4, fields are directly on `data` — no `.attributes`
// wrapper. Media URLs from Strapi Cloud are absolute CDN URLs.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Media ────────────────────────────────────────────────────────────────────

export interface StrapiImage {
  /** Absolute URL. For Strapi Cloud: https://media.strapiapp.com/... */
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

// ─── Dynamic Zone Block Components ────────────────────────────────────────────

/** Discriminant key added by Strapi to every Dynamic Zone entry. */
type ComponentSlug =
  | 'sections.hero'
  | 'sections.service-card'
  | 'sections.feature-list';

export interface HeroBlock {
  __component: 'sections.hero';
  id: number;
  headline: string;
  subheadline: string;
  cta_label: string;
  cta_link: string;
}

export interface ServiceCardBlock {
  __component: 'sections.service-card';
  id: number;
  title: string;
  description: string;
  /**
   * A string key matching a Lucide icon name.
   * Valid values: Search | FlaskConical | CircleDollarSign | ShieldCheck |
   *               Truck | Warehouse | FileText | Scale
   */
  icon_name: string;
}

export interface FeatureListBlock {
  __component: 'sections.feature-list';
  id: number;
  title: string;
  items: string[];
}

/** Union of all supported Dynamic Zone block types. */
export type DynamicBlock = HeroBlock | ServiceCardBlock | FeatureListBlock;

// ─── Single Type Schemas ──────────────────────────────────────────────────────

export interface HomeContent {
  headline: string;
  subheadline: string;
  cta_primary_label: string;
  cta_secondary_label: string;
  /** Ordered list of Dynamic Zone blocks. Reorderable via Strapi admin. */
  blocks: DynamicBlock[];
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  /**
   * Long text body. Separate paragraphs with a blank line (\n\n).
   * The component splits on \n\n to render individual <p> tags.
   */
  body: string;
  years_of_expertise: number;
  image: StrapiImage;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
}

// ─── Root Content Schema ──────────────────────────────────────────────────────

/** The shape written to src/data/content.json by sync-cms.js. */
export interface ContentSchema {
  home: HomeContent;
  about: AboutContent;
  contactInfo: ContactInfo;
}

// ─── Lead (form submission payload) ──────────────────────────────────────────

/** Payload POSTed to POST /api/leads */
export interface LeadPayload {
  full_name: string;
  company_name: string;
  email: string;
  phone: string;
  subject: 'sourcing' | 'logistics' | 'compliance' | 'partnership' | 'other' | '';
  message: string;
}
