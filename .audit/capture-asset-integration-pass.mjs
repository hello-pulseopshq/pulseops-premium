import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outRoot = path.join(__dirname, 'screenshots', 'asset-integration-pass');
const baseUrl = 'http://127.0.0.1:9294/?view=supplement';

const SECTIONS = [
  { name: '01-hero', selector: '.sp-hero', ancestor: true },
  { name: '02-outcomes', selector: '#sp-outcomes', ancestor: false },
  { name: '03-ingredients', selector: '#sp-ingredients', ancestor: false },
  { name: '04-scientific-narrative', selector: '#sp-quality', ancestor: false },
  { name: '05-reviews', selector: '.sp-social-proof--stage', ancestor: true },
  { name: '06-cta', selector: '.sp-cta-offer', ancestor: true },
];

async function sectionLocator(page, { selector, ancestor }) {
  const loc = page.locator(selector).first();
  if (!ancestor) return loc;
  return loc.locator('xpath=ancestor::*[contains(@class,"sp-section")]').first();
}

async function runViewport(browser, viewport, label) {
  const outDir = path.join(outRoot, label);
  await mkdir(outDir, { recursive: true });

  const page = await browser.newPage();
  await page.setViewportSize(viewport);
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForSelector('#sp-ingredients', { timeout: 90000, state: 'attached' });
  await page.waitForTimeout(2500);

  await page.screenshot({
    path: path.join(outDir, `${label}-full-page.png`),
    fullPage: true,
  });

  for (const section of SECTIONS) {
    const locator = await sectionLocator(page, section);
    await locator.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await locator.screenshot({
      path: path.join(outDir, `${label}-${section.name}.png`),
    });
  }

  await page.close();
  console.log(`Saved ${label} captures to`, outDir);
}

await mkdir(outRoot, { recursive: true });
const browser = await chromium.launch();

try {
  await runViewport(browser, { width: 1440, height: 900 }, 'desktop');
  await runViewport(browser, { width: 390, height: 844 }, 'mobile');
  console.log('Asset integration screenshots saved to', outRoot);
} finally {
  await browser.close();
}
