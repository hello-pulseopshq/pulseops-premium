/**
 * Create Daily Vitality Complex via Shopify Admin (Playwright).
 * Requires admin login in the opened browser if not already authenticated.
 * Run: node scripts/create-daily-vitality-product-admin.mjs
 */
import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STORE = 'pulseops-labs.myshopify.com';
const ADMIN_PRODUCTS = `https://${STORE}/admin/products/new`;

const DESCRIPTION = `Daily Vitality Complex is a premium daily wellness supplement for steady energy, recovery, gut support, and focus.

Key benefits:
• Steady daily energy with B-vitamins and adaptogens
• Gut-friendly 5B CFU probiotic blend
• Supports recovery, focus, and healthy routines
• Third-party tested · GMP-certified

Ingredients: Rhodiola extract, B-vitamin complex, magnesium glycinate, L-theanine, probiotic blend, prebiotic fiber.

Take two capsules each morning with food and water.`;

async function main() {
  const browser = await chromium.launch({ headless: false, slowMo: 80 });
  const page = await browser.newPage();

  console.log('Opening Shopify Admin product create...');
  await page.goto(ADMIN_PRODUCTS, { waitUntil: 'domcontentloaded', timeout: 120000 });

  if (page.url().includes('accounts.shopify.com')) {
    console.log('Log in to Shopify Admin in the browser window, then press Enter here...');
    await new Promise((r) => process.stdin.once('data', r));
    await page.goto(ADMIN_PRODUCTS, { waitUntil: 'domcontentloaded', timeout: 120000 });
  }

  await page.waitForTimeout(3000);

  const title = page.locator('input[name="title"], #product-title-input, [data-product-title-input]').first();
  if (await title.count()) {
    await title.fill('Daily Vitality Complex');
  }

  const desc = page.locator('[contenteditable="true"][aria-label*="Description"], .ql-editor, textarea[name="description"]').first();
  if (await desc.count()) {
    await desc.click();
    await desc.fill(DESCRIPTION);
  }

  const price = page.locator('input[name="price"], [data-price-input]').first();
  if (await price.count()) {
    await price.fill('49.95');
  }

  console.log('Complete media upload + template suffix "supplement" + save in Admin UI.');
  console.log('Handle should be: daily-vitality-complex');
  console.log('Press Enter when saved...');
  await new Promise((r) => process.stdin.once('data', r));

  await browser.close();
  console.log(`Done — verify: https://${STORE}/products/daily-vitality-complex`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
