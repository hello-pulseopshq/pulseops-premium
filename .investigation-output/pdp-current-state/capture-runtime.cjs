const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const out = __dirname;
const url = 'http://127.0.0.1:9292/products/daily-vitality-complex?view=supplement';

async function inspectViewport(browser, name, width, height) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  const consoleMessages = [];
  const failedRequests = [];
  page.on('console', (message) => consoleMessages.push({ type: message.type(), text: message.text() }));
  page.on('pageerror', (error) => consoleMessages.push({ type: 'pageerror', text: error.message }));
  page.on('requestfailed', (request) => failedRequests.push({ url: request.url(), error: request.failure()?.errorText }));
  const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(4000);
  await page.screenshot({ path: path.join(out, `pdp-${name}-full.png`), fullPage: true });
  if (name === 'desktop-1440' || name === 'mobile-390') {
    await page.screenshot({ path: path.join(out, `pdp-${name}-above-fold.png`) });
  }

  const snapshot = await page.evaluate(() => {
    const visible = (el) => !!(el && (el.offsetWidth || el.offsetHeight || el.getClientRects().length));
    const text = (el) => el?.innerText?.replace(/\s+/g, ' ').trim() || '';
    const all = (selector) => [...document.querySelectorAll(selector)];
    const headings = all('h1,h2,h3,h4,h5,h6').map((el) => ({ level: el.tagName, text: text(el), visible: visible(el) }));
    const forms = all('form[action*="/cart/add"]').map((form) => ({ id: form.id, visible: visible(form), controls: [...form.elements].map((el) => ({ tag: el.tagName, type: el.type, name: el.name, value: el.value, disabled: el.disabled, label: el.labels ? [...el.labels].map(text) : [] })) }));
    const images = all('main img').map((img) => ({ src: img.currentSrc || img.src, alt: img.alt, width: img.naturalWidth, height: img.naturalHeight, loading: img.loading, visible: visible(img) }));
    const details = all('main details').map((el) => ({ open: el.open, summary: text(el.querySelector('summary')), visible: visible(el) }));
    const focusables = all('a[href],button,input,select,textarea,summary,[tabindex]').filter(visible).map((el) => ({ tag: el.tagName, text: text(el).slice(0, 100), aria: el.getAttribute('aria-label'), tabindex: el.getAttribute('tabindex') })).slice(0, 150);
    const main = document.querySelector('main');
    return {
      title: document.title,
      bodyClass: document.body.className,
      htmlClass: document.documentElement.className,
      pageHeight: document.documentElement.scrollHeight,
      mainText: text(main).slice(0, 12000),
      headings,
      forms,
      images,
      details,
      focusables,
      productRegion: document.querySelector('[id^="MainProduct-"]')?.id || null,
      sections: all('main .shopify-section').map((el) => ({ id: el.id, className: el.className, text: text(el).slice(0, 180) })),
      gallery: all('media-gallery').map((el) => ({ id: el.id, visible: visible(el), text: text(el).slice(0, 500) })),
      sticky: all('[data-sp-sticky-atc]').map((el) => ({ id: el.id, className: el.className, visible: visible(el), text: text(el) })),
      dynamicCheckoutVisible: all('.shopify-payment-button').some(visible),
      variantPickerVisible: all('variant-selects,variant-radios').some(visible),
      quantityVisible: all('quantity-input').some(visible),
      statusRegions: all('[role="alert"],[aria-live]').map((el) => ({ role: el.getAttribute('role'), live: el.getAttribute('aria-live'), text: text(el), hidden: el.hidden }))
    };
  });

  const interactions = {};
  const galleryButton = page.locator('media-gallery button').filter({ visible: true }).first();
  interactions.galleryButtonCount = await page.locator('media-gallery button:visible').count();
  if (await galleryButton.count()) {
    interactions.galleryFirstButtonLabel = await galleryButton.getAttribute('aria-label');
  }
  const details = page.locator('main details:visible');
  interactions.disclosureCount = await details.count();
  if (await details.count()) {
    const first = details.first();
    const before = await first.getAttribute('open');
    await first.locator('summary').click();
    interactions.disclosureToggle = { before: before !== null, after: (await first.getAttribute('open')) !== null };
  }
  const quantity = page.locator('quantity-input input:visible').first();
  if (await quantity.count()) {
    const before = await quantity.inputValue();
    const plus = page.locator('quantity-input button[name="plus"]:visible').first();
    if (await plus.count()) await plus.click();
    interactions.quantity = { before, after: await quantity.inputValue() };
  }
  await page.evaluate(() => scrollTo(0, document.documentElement.scrollHeight * 0.55));
  await page.waitForTimeout(500);
  interactions.stickyAfterScroll = await page.locator('[data-sp-sticky-atc].is-visible').count();

  return { name, width, height, status: response?.status(), consoleMessages, failedRequests, snapshot, interactions };
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  results.push(await inspectViewport(browser, 'desktop-1440', 1440, 900));
  results.push(await inspectViewport(browser, 'tablet-768', 768, 900));
  results.push(await inspectViewport(browser, 'mobile-390', 390, 844));

  const closeup = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await closeup.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await closeup.waitForTimeout(4000);
  const product = closeup.locator('[id^="MainProduct-"]').first();
  const info = product.locator('.product__info-wrapper').first();
  const gallery = product.locator('media-gallery').first();
  if (await info.count()) await info.screenshot({ path: path.join(out, 'pdp-purchase-panel-closeup.png') });
  if (await gallery.count()) await gallery.screenshot({ path: path.join(out, 'pdp-media-gallery-closeup.png') });
  await browser.close();
  fs.writeFileSync(path.join(out, 'runtime-evidence.json'), JSON.stringify({ capturedAt: new Date().toISOString(), url, results }, null, 2));
})().catch((error) => { console.error(error); process.exit(1); });
