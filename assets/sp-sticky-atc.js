class SpStickyAtc {
  constructor(root) {
    if (!root || root.dataset.spStickyAtcInitialized === 'true') return;
    root.dataset.spStickyAtcInitialized = 'true';

    this.root = root;
    this.enabled = root.dataset.enabled !== 'false';
    const rawThreshold = parseFloat(this.root.dataset.scrollThreshold);
    this.threshold = Number.isFinite(rawThreshold) ? Math.max(0, Math.min(50, rawThreshold)) : 10;
    this.hideNearFooter = root.dataset.hideNearFooter !== 'false';
    this.mobileOnly = root.dataset.mobileOnly === 'true';
    this.showPriceInButton = root.dataset.showPriceInButton === 'true';
    this.showCompareAtPrice = root.dataset.showCompareAtPrice !== 'false';
    this.moneyFormat = root.dataset.moneyFormat || '${{amount}}';
    this.currencyCodeEnabled = root.dataset.currencyCodeEnabled === 'true';

    this.productInfo = document.querySelector('product-info');
    this.mainSectionId = this.productInfo?.dataset.section;

    if (!this.enabled || this.shouldHidePage()) {
      root.setAttribute('aria-hidden', 'true');
      return;
    }

    this.anchor = this.getAnchor();
    this.stickyForm = root.querySelector('product-form');
    this.variantSelect = root.querySelector('[data-sp-sticky-variant]');
    this.priceEl = root.querySelector('[data-sp-sticky-price]');
    this.priceCompactEl = root.querySelector('[data-sp-sticky-price-compact]');
    this.priceCurrentEl = root.querySelector('[data-sp-sticky-price-current]');
    this.priceCompareEl = root.querySelector('[data-sp-sticky-price-compare]');
    this.savingsEl = root.querySelector('[data-sp-sticky-savings]');
    this.savingsDesktopEl = root.querySelector('[data-sp-sticky-savings-desktop]');
    this.imageEl = root.querySelector('[data-sp-sticky-image]');
    this.submitButton = root.querySelector('[data-sp-sticky-submit]');
    this.submitLabel = root.querySelector('[data-sp-sticky-submit-label]');
    this.liveRegion = root.querySelector('[data-sp-sticky-live]');
    this.variants = this.parseVariants();

    this.anchorVisible = true;
    this.isVisible = false;
    this.mobileQuery = window.matchMedia('(max-width: 749px)');

    this.onScroll = this.onScroll.bind(this);
    this.onStickyVariantChange = this.onStickyVariantChange.bind(this);
    this.onMainVariantChange = this.onMainVariantChange.bind(this);
    this.onViewportChange = this.onViewportChange.bind(this);
    this.updateVisibility = this.updateVisibility.bind(this);

    this.bindEvents();
    this.syncFromMain();
    this.updateVisibility();
  }

  parseVariants() {
    const node = this.root.querySelector('[data-sp-sticky-variants]');
    if (!node) return [];
    try {
      return JSON.parse(node.textContent);
    } catch {
      return [];
    }
  }

  shouldHidePage() {
    const path = window.location.pathname;
    return path.includes('/cart') || path.includes('/checkout');
  }

  getAnchor() {
    return (
      document.querySelector('product-info product-form') ||
      document.querySelector('[data-type="add-to-cart-form"]') ||
      document.querySelector('.product-form')
    );
  }

  bindEvents() {
    this.variantSelect?.addEventListener('change', this.onStickyVariantChange);
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll, { passive: true });
    this.mobileQuery.addEventListener('change', this.onViewportChange);

    if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
      this.variantUnsubscriber = subscribe(PUB_SUB_EVENTS.variantChange, this.onMainVariantChange);
    }

    if (this.anchor && 'IntersectionObserver' in window) {
      const marginTop = `-${this.threshold}vh`;
      try {
        this.intersectionObserver = new IntersectionObserver(
          (entries) => {
            this.anchorVisible = entries[0]?.isIntersecting ?? false;
            this.updateVisibility();
          },
          { root: null, threshold: 0, rootMargin: `${marginTop} 0px 0px 0px` }
        );
        this.intersectionObserver.observe(this.anchor);
      } catch {
        this.intersectionObserver = null;
      }
    }

    this.bindOverlayListeners();

    document.addEventListener('shopify:section:load', (event) => {
      if (event.target.contains(this.root)) {
        this.anchor = this.getAnchor();
        this.productInfo = document.querySelector('product-info');
        this.mainSectionId = this.productInfo?.dataset.section;
        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect();
          if (this.anchor) this.intersectionObserver.observe(this.anchor);
        }
        this.syncFromMain();
        this.updateVisibility();
      }
    });
  }

  bindOverlayListeners() {
    const cartDrawer = document.querySelector('cart-drawer');
    if (cartDrawer) {
      this.cartObserver = new MutationObserver(() => this.updateVisibility());
      this.cartObserver.observe(cartDrawer, { attributes: true, attributeFilter: ['class'] });
    }

    const cartNotification = document.querySelector('cart-notification');
    if (cartNotification) {
      const notifObserver = new MutationObserver(() => this.updateVisibility());
      notifObserver.observe(cartNotification, { attributes: true, attributeFilter: ['class', 'open'] });
    }

    document.querySelectorAll('quick-add-modal, modal-dialog').forEach((modal) => {
      const observer = new MutationObserver(() => this.updateVisibility());
      observer.observe(modal, { attributes: true, attributeFilter: ['open', 'class'] });
    });

    document.body.addEventListener('modalClosed', this.updateVisibility);
  }

  onViewportChange() {
    this.updateVisibility();
  }

  onScroll() {
    if (this.scrollTicking) return;
    this.scrollTicking = true;
    requestAnimationFrame(() => {
      if (!this.intersectionObserver) {
        this.updateAnchorVisibilityFallback();
      }
      this.updateVisibility();
      this.scrollTicking = false;
    });
  }

  updateAnchorVisibilityFallback() {
    if (!this.anchor) return;
    const thresholdPx = Number.isFinite(this.threshold)
      ? (this.threshold / 100) * window.innerHeight
      : window.innerHeight * 0.1;
    const rect = this.anchor.getBoundingClientRect();
    this.anchorVisible = rect.bottom > thresholdPx && rect.top < window.innerHeight;
  }

  isViewportAllowed() {
    if (!this.mobileOnly) return true;
    return this.mobileQuery.matches;
  }

  isOverlayOpen() {
    const cartDrawer = document.querySelector('cart-drawer');
    if (cartDrawer?.classList.contains('active')) return true;

    const cartNotification = document.querySelector('cart-notification.active, cart-notification[class*="active"]');
    if (cartNotification) return true;

    const quickAddModal = document.querySelector('quick-add-modal[open]');
    if (quickAddModal) return true;

    const modalDialog = document.querySelector('modal-dialog[open]');
    if (modalDialog && !modalDialog.contains(this.root)) return true;

    return false;
  }

  isNearFooter() {
    if (!this.hideNearFooter) return false;
    const footer = document.querySelector('footer');
    if (!footer) return false;
    return footer.getBoundingClientRect().top < window.innerHeight * 0.92;
  }

  updateVisibility() {
    if (Shopify?.designMode) {
      this.setVisible(true);
      return;
    }

    if (!this.anchor || !this.isViewportAllowed()) {
      this.setVisible(false);
      return;
    }

    if (!this.intersectionObserver) {
      this.updateAnchorVisibilityFallback();
    }

    const show = !this.anchorVisible && !this.isNearFooter() && !this.isOverlayOpen();
    this.setVisible(show);
  }

  setVisible(show) {
    if (this.isVisible === show) return;
    if (!show && this.root.contains(document.activeElement)) {
      this.returnFocusFromHiddenBar();
    }
    this.isVisible = show;
    this.root.classList.toggle('is-visible', show);
    this.root.setAttribute('aria-hidden', show ? 'false' : 'true');
    this.root.toggleAttribute('inert', !show);
  }

  returnFocusFromHiddenBar() {
    const mainButton = this.mainSectionId ? document.getElementById(`ProductSubmitButton-${this.mainSectionId}`) : null;
    if (mainButton && !mainButton.disabled && mainButton.offsetParent !== null) {
      mainButton.focus({ preventScroll: true });
      return;
    }

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  onMainVariantChange({ data }) {
    if (!data?.variant) return;
    if (this.mainSectionId && data.sectionId && data.sectionId !== this.mainSectionId) return;
    this.updateFromVariant(data.variant);
    this.syncPriceFromMain();
    this.syncButtonFromMain();
  }

  onStickyVariantChange(event) {
    const variantId = event.target.value;
    const variant = this.variants.find((item) => String(item.id) === String(variantId));
    if (!variant) return;

    this.syncVariantInput(variantId);
    this.syncMainProductVariant(variant);
    this.updateFromVariant(variant);
    this.syncButtonFromMain();
  }

  syncFromMain() {
    const currentVariant = this.getCurrentVariant();
    if (currentVariant) {
      this.updateFromVariant(currentVariant);
    }
    this.syncPriceFromMain();
    this.syncButtonFromMain();
  }

  getCurrentVariant() {
    const selectedNode = document.querySelector('variant-selects [data-selected-variant]');
    if (selectedNode?.textContent) {
      try {
        return JSON.parse(selectedNode.textContent);
      } catch {
        /* fall through */
      }
    }

    const variantId =
      this.productInfo?.querySelector('input[name="id"]')?.value ||
      this.stickyForm?.querySelector('input[name="id"]')?.value;

    if (!variantId) return null;
    return this.variants.find((item) => String(item.id) === String(variantId)) || null;
  }

  syncMainProductVariant(variant) {
    const variantSelects = document.querySelector('variant-selects');
    if (!variantSelects || !variant?.options?.length) {
      this.productInfo?.querySelectorAll('input[name="id"]').forEach((input) => {
        input.value = variant.id;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      });
      this.syncPriceFromMain();
      return;
    }

    const selects = variantSelects.querySelectorAll('select');
    if (selects.length) {
      selects.forEach((select, index) => {
        if (variant.options[index] !== undefined) {
          select.value = variant.options[index];
        }
      });
      selects[selects.length - 1].dispatchEvent(new Event('change', { bubbles: true }));
      return;
    }

    const fieldsets = variantSelects.querySelectorAll('fieldset.js');
    let lastInput = null;
    variant.options.forEach((optionValue, index) => {
      const fieldset = fieldsets[index];
      if (!fieldset) return;
      const input = Array.from(fieldset.querySelectorAll('input[type="radio"]')).find(
        (radio) => radio.value === optionValue
      );
      if (input) {
        input.checked = true;
        lastInput = input;
      }
    });

    if (lastInput) {
      lastInput.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
      this.syncPriceFromMain();
    }
  }

  updateFromVariant(variant) {
    if (!variant) return;

    if (this.variantSelect) {
      this.variantSelect.value = String(variant.id);
    }

    this.syncVariantInput(variant.id);
    this.updateImage(variant);
    this.updateCompactPrice(variant);
    this.syncPriceFromMain();
    this.announcePriceChange(variant);
  }

  syncVariantInput(variantId) {
    this.stickyForm?.querySelectorAll('input[name="id"]').forEach((input) => {
      input.value = variantId || '';
      input.disabled = !variantId;
    });
  }

  syncPriceFromMain() {
    if (!this.priceEl || !this.mainSectionId) return;
    const mainPrice = document.getElementById(`price-${this.mainSectionId}`);
    if (mainPrice && !this.mobileQuery.matches) {
      this.priceEl.innerHTML = mainPrice.innerHTML;
    }

    const variant = this.getCurrentVariant();
    if (variant) {
      this.updateCompactPrice(variant);
    }
  }

  formatMoney(cents) {
    if (window.Shopify?.formatMoney) {
      return Shopify.formatMoney(cents, this.moneyFormat);
    }

    const amount = (cents / 100).toFixed(2);
    return this.moneyFormat.replace(/\{\{\s*amount\s*\}\}/, amount);
  }

  updateCompactPrice(variant) {
    if (!this.priceCompactEl || !variant) return;

    const onSale = this.showCompareAtPrice && variant.compare_at_price > variant.price;
    const savingsPercent = onSale
      ? Math.round(((variant.compare_at_price - variant.price) * 100) / variant.compare_at_price)
      : 0;

    if (this.priceCurrentEl) {
      this.priceCurrentEl.textContent = this.formatMoney(variant.price);
    }

    if (this.priceCompareEl) {
      if (onSale) {
        this.priceCompareEl.textContent = this.formatMoney(variant.compare_at_price);
        this.priceCompareEl.hidden = false;
      } else {
        this.priceCompareEl.hidden = true;
      }
    }

    if (this.savingsEl) {
      if (onSale && savingsPercent > 0) {
        this.savingsEl.textContent = `Save ${savingsPercent}%`;
        this.savingsEl.hidden = false;
      } else {
        this.savingsEl.hidden = true;
      }
    }

    if (this.savingsDesktopEl) {
      if (onSale && savingsPercent > 0) {
        this.savingsDesktopEl.textContent = `Save ${savingsPercent}%`;
        this.savingsDesktopEl.hidden = false;
      } else {
        this.savingsDesktopEl.hidden = true;
      }
    }
  }

  announcePriceChange(variant) {
    if (!this.liveRegion || !variant) return;
    const onSale = this.showCompareAtPrice && variant.compare_at_price > variant.price;
    let message = `Price updated to ${this.formatMoney(variant.price)}`;
    if (onSale) {
      const savingsPercent = Math.round(((variant.compare_at_price - variant.price) * 100) / variant.compare_at_price);
      message += `, was ${this.formatMoney(variant.compare_at_price)}, save ${savingsPercent} percent`;
    }
    this.liveRegion.textContent = message;
  }

  syncButtonFromMain() {
    if (!this.submitButton || !this.mainSectionId) return;
    const mainButton = document.getElementById(`ProductSubmitButton-${this.mainSectionId}`);
    if (!mainButton) return;

    const isDisabled = mainButton.hasAttribute('disabled') || mainButton.getAttribute('aria-disabled') === 'true';
    this.submitButton.toggleAttribute('disabled', isDisabled);
    this.submitButton.setAttribute('aria-disabled', isDisabled ? 'true' : 'false');

    if (!this.submitLabel) return;

    const mainLabel = mainButton.querySelector('span:not(.sold-out-message)');
    const mainText = mainLabel?.textContent.trim() || '';
    const customLabel = this.root.dataset.buttonLabel?.trim();
    const unavailableText = window.variantStrings?.unavailable || 'Unavailable';
    const soldOutText = window.variantStrings?.soldOut || 'Sold out';

    let labelText = '';
    if (mainText === unavailableText || mainText === soldOutText || isDisabled) {
      labelText = mainText;
    } else if (customLabel) {
      labelText = customLabel;
    } else if (mainText) {
      labelText = mainText;
    }

    const variant = this.getCurrentVariant();
    if (this.showPriceInButton && variant && labelText && !isDisabled) {
      labelText = `${labelText} • ${this.formatMoney(variant.price)}`;
    }

    this.submitLabel.textContent = labelText;
    if (labelText) {
      const productTitle = this.root.dataset.productTitle?.trim();
      this.submitButton.setAttribute('aria-label', productTitle ? `${labelText}: ${productTitle}` : labelText);
    }
  }

  updateImage(variant) {
    if (!this.imageEl) return;

    const featured = variant?.featured_image;
    const src = featured?.src || featured?.url;

    if (src) {
      this.imageEl.src = src;
      this.imageEl.hidden = false;
      return;
    }

    const fallbackSrc = this.imageEl.dataset.fallbackSrc;
    if (fallbackSrc) {
      this.imageEl.src = fallbackSrc;
      this.imageEl.hidden = false;
    } else {
      this.imageEl.hidden = true;
    }
  }
}

function initSpStickyAtc(root = document) {
  root.querySelectorAll('[data-sp-sticky-atc]').forEach((bar) => new SpStickyAtc(bar));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initSpStickyAtc());
} else {
  initSpStickyAtc();
}

document.addEventListener('shopify:section:load', (event) => {
  initSpStickyAtc(event.target);
});
