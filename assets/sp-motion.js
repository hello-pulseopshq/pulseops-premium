/**
 * SP Motion System — IntersectionObserver reveals + stagger indices.
 */
(function () {
  const REVEAL_SELECTOR = '.sp-reveal, [data-sp-reveal]';
  const STAGGER_SELECTOR = '[data-sp-stagger], .sp-stagger';
  const STAGGER_ITEM_SELECTOR = ':scope > .sp-stagger__item, :scope > [data-sp-stagger-item]';
  const REVEALED_CLASS = 'is-revealed';
  const REDUCED_CLASS = 'sp-motion-reduced';

  let observer = null;

  function getMotionMode() {
    return document.documentElement.getAttribute('data-sp-motion') || 'balanced';
  }

  function isMotionActive() {
    if (getMotionMode() === 'disabled') return false;
    if (!document.documentElement.classList.contains('sp-motion-active')) return false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return true;
  }

  function revealElement(el) {
    el.classList.add(REVEALED_CLASS);
    el.style.willChange = 'auto';
    if (observer) observer.unobserve(el);
  }

  function revealAll(root) {
    root.querySelectorAll(REVEAL_SELECTOR).forEach(revealElement);
  }

  function revealInViewport(root) {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    root.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      if (el.classList.contains(REVEALED_CLASS)) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportHeight * 0.92 && rect.bottom > 0) {
        revealElement(el);
      }
    });
  }

  function assignStaggerIndices(container) {
    const items = container.querySelectorAll(STAGGER_ITEM_SELECTOR);
    items.forEach((item, index) => {
      item.style.setProperty('--sp-motion-stagger-index', String(index));
    });
  }

  function prepareStaggerContainers(root) {
    root.querySelectorAll(STAGGER_SELECTOR).forEach(assignStaggerIndices);
  }

  function onIntersect(entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      revealElement(entry.target);
    });
  }

  function createObserver() {
    if (observer) return observer;
    observer = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.12,
    });
    return observer;
  }

  function observeReveals(root) {
    const io = createObserver();
    root.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      if (el.classList.contains(REVEALED_CLASS)) return;
      io.observe(el);
    });
  }

  function initMotion(root = document) {
    if (!root || !root.querySelectorAll) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.remove('sp-motion-active');
      document.documentElement.classList.add(REDUCED_CLASS);
      revealAll(root);
      return;
    }

    if (getMotionMode() === 'disabled') {
      document.documentElement.classList.remove('sp-motion-active');
      revealAll(root);
      return;
    }

    document.documentElement.classList.add('sp-motion-active');
    prepareStaggerContainers(root);

    if (typeof Shopify !== 'undefined' && Shopify.designMode) {
      revealAll(root);
      return;
    }

    revealInViewport(root);
    observeReveals(root);
  }

  function onReducedMotionChange(event) {
    document.documentElement.classList.toggle(REDUCED_CLASS, event.matches);
    if (event.matches) {
      document.documentElement.classList.remove('sp-motion-active');
      revealAll(document);
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    } else if (getMotionMode() !== 'disabled') {
      document.documentElement.classList.add('sp-motion-active');
      initMotion(document);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initMotion(document));
  } else {
    initMotion(document);
  }

  document.addEventListener('shopify:section:load', (event) => {
    initMotion(event.target);
  });

  document.addEventListener('shopify:section:reorder', () => {
    initMotion(document);
  });

  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', onReducedMotionChange);

  window.SpMotion = {
    init: initMotion,
    reveal: revealElement,
    isActive: isMotionActive,
  };
})();
