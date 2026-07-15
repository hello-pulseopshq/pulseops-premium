const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const messages = [];
  page.on('console', (m) => messages.push({ type: m.type(), text: m.text() }));
  await page.goto('http://127.0.0.1:9292/products/daily-vitality-complex?view=supplement', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(3000);
  const faqButton = page.locator('.sp-faq__trigger').first();
  const faqPanel = page.locator('.sp-faq__panel').first();
  const faq = {
    buttonCount: await page.locator('.sp-faq__trigger').count(),
    beforeExpanded: await faqButton.getAttribute('aria-expanded'),
    beforeHidden: await faqPanel.getAttribute('aria-hidden')
  };
  if (await faqButton.count()) await faqButton.click();
  await page.waitForTimeout(250);
  faq.afterExpanded = await faqButton.getAttribute('aria-expanded');
  faq.afterHidden = await faqPanel.getAttribute('aria-hidden');

  const stickyStates = [];
  for (const fraction of [0, 0.1, 0.25, 0.5, 0.75, 0.9]) {
    await page.evaluate((f) => scrollTo(0, (document.documentElement.scrollHeight - innerHeight) * f), fraction);
    await page.waitForTimeout(350);
    stickyStates.push({ fraction, className: await page.locator('[data-sp-sticky-atc]').getAttribute('class'), ariaHidden: await page.locator('[data-sp-sticky-atc]').getAttribute('aria-hidden') });
  }

  await page.evaluate(() => scrollTo(0, 0));
  const focusOrder = [];
  for (let i = 0; i < 28; i++) {
    await page.keyboard.press('Tab');
    focusOrder.push(await page.evaluate(() => ({ tag: document.activeElement?.tagName, text: document.activeElement?.innerText?.replace(/\s+/g, ' ').trim().slice(0, 80), aria: document.activeElement?.getAttribute('aria-label'), id: document.activeElement?.id, className: document.activeElement?.className })));
  }

  await page.evaluate(() => scrollTo(0, 0));
  const addButton = page.locator('[id^="ProductSubmitButton-"]').first();
  const addToCart = { buttonCount: await addButton.count(), beforeText: await addButton.innerText().catch(() => null) };
  if (await addButton.count()) {
    await addButton.click();
    await page.waitForTimeout(1800);
    addToCart.afterText = await addButton.innerText();
    addToCart.cartDrawerActive = await page.locator('cart-drawer.active, cart-notification.active').count();
    addToCart.error = await page.locator('.product-form__error-message-wrapper:not([hidden])').allInnerTexts();
    addToCart.cartBubble = await page.locator('#cart-icon-bubble').innerText().catch(() => null);
  }

  fs.writeFileSync(path.join(__dirname, 'interaction-evidence.json'), JSON.stringify({ faq, stickyStates, focusOrder, addToCart, messages }, null, 2));
  await browser.close();
})().catch((error) => { console.error(error); process.exit(1); });
