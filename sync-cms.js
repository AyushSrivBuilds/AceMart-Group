/**
 * sync-cms.js — Strapi Cloud Pre-Build Content Sync
 *
 * Fetches all Single Type content from Strapi Cloud and writes it to
 * src/data/content.json before the Vite build runs.
 *
 * Run locally:  node --env-file=.env.local sync-cms.js
 * Run on CI:    node sync-cms.js  (Vercel injects env vars automatically)
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Environment validation ────────────────────────────────────────────────
const STRAPI_URL       = process.env.STRAPI_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_URL) {
  console.error('\n❌  STRAPI_URL is not set.');
  console.error('    Add it to .env.local and run: node --env-file=.env.local sync-cms.js\n');
  process.exit(1);
}
if (!STRAPI_API_TOKEN) {
  console.error('\n❌  STRAPI_API_TOKEN is not set.');
  console.error('    Create a Read-Only API Token in Strapi Cloud → Settings → API Tokens\n');
  process.exit(1);
}

// ─── Helpers ──────────────────────────────────────────────────────────────
const BASE_HEADERS = {
  Authorization: `Bearer ${STRAPI_API_TOKEN}`,
  'Content-Type': 'application/json',
};

/**
 * Fetch a Strapi v5 Single Type endpoint.
 * Strapi v5 response shape: { data: { id, documentId, ...fields }, meta: {} }
 * ?populate=deep hydrates nested relations, media fields, and Dynamic Zone blocks.
 */
async function fetchSingleType(slug) {
  const url = `${STRAPI_URL}/api/${slug}?populate=deep`;
  console.log(`  → Fetching /${slug} …`);

  const res = await fetch(url, { headers: BASE_HEADERS });

  if (!res.ok) {
    throw new Error(
      `HTTP ${res.status} ${res.statusText} while fetching /api/${slug}\n` +
      `    URL attempted: ${url}`
    );
  }

  const json = await res.json();

  // Strapi v5: fields are directly on json.data (no .attributes wrapper)
  if (!json.data) {
    throw new Error(
      `Unexpected response from /api/${slug}: "data" key is missing.\n` +
      `    Response: ${JSON.stringify(json).slice(0, 200)}`
    );
  }

  return json.data;
}

// ─── Main ──────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n🔄  Syncing content from Strapi Cloud…');
  console.log(`    Source: ${STRAPI_URL}\n`);

  let homeData, aboutData, contactInfoData;

  try {
    [homeData, aboutData, contactInfoData] = await Promise.all([
      fetchSingleType('home'),
      fetchSingleType('about'),
      fetchSingleType('contact-info'),
    ]);
  } catch (err) {
    console.error('\n❌  CMS sync failed:', err.message);
    console.error(
      '\n    Build aborted. Fix the CMS connection before deploying.\n' +
      '    If you are working locally without a live CMS, run `pnpm dev`\n' +
      '    which uses the seed data in src/data/content.json.\n'
    );
    process.exit(1);
  }

  // Build the unified ContentSchema object
  const content = {
    home:        homeData,
    about:       aboutData,
    contactInfo: contactInfoData,
  };

  // Write to src/data/content.json
  const outputDir  = join(__dirname, 'src', 'data');
  const outputPath = join(outputDir, 'content.json');

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, JSON.stringify(content, null, 2), 'utf-8');

  console.log('✅  Content synced successfully → src/data/content.json\n');
}

main();
