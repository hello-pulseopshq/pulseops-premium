/**
 * Smooth-scroll anchor navigation for single-product / demo storefronts.
 */
(function () {
  const ANCHOR_IDS = ['sp-benefits', 'sp-ingredients', 'sp-science', 'sp-reviews', 'sp-faq', 'sp-cta'];
  const HEADER_OFFSET = 96;

  function getHeaderOffset() {
    const header = document.querySelector(
      '.section-header, header.shopify-section-group-header-group, .header-wrapper, header.header'
    );
    const height = header?.offsetHeight;
    const safeHeight = Number.isFinite(height) && height > 0 ? height : HEADER_OFFSET;
    return safeHeight + 12;
  }

  function ensureAnchorIds() {
    const classMap = {
      '.sp-benefits': 'sp-benefits',
      '.sp-features': 'sp-ingredients',
      '.sp-scientific-proof': 'sp-science',
      '.sp-social-proof': 'sp-reviews',
      '.sp-faq': 'sp-faq',
      '.sp-cta-offer': 'sp-cta',
    };

    Object.entries(classMap).forEach(([selector, id]) => {
      if (document.getElementById(id)) return;
      const target =
        document.querySelector(selector)?.closest('.shopify-section') ||
        document.querySelector(selector)?.closest('[id^="shopify-section"]');
      if (target) target.id = id;
    });
  }

  function resolveTarget(hash) {
    if (!hash || hash === '#') return null;
    return document.getElementById(hash.replace(/^#/, ''));
  }

  function scrollToTarget(target) {
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }

  function normalizeHref(href) {
    if (!href) return '';
    if (href.startsWith('#')) return href;
    try {
      return new URL(href, window.location.origin).hash || '';
    } catch {
      return '';
    }
  }

  function findNavLinks() {
    return [...document.querySelectorAll('.header__menu a, .header__inline-menu a')];
  }

  function setActiveNav(hash) {
    findNavLinks().forEach((link) => {
      const item = link.closest('.header__menu-item, li');
      if (!item) return;
      item.classList.add('header__menu-item--anchor');
      const linkHash = normalizeHref(link.getAttribute('href'));
      item.classList.toggle('is-active', linkHash === hash);
    });
  }

  function observeSections() {
    const sections = ANCHOR_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) return;

    const offset = getHeaderOffset();
    const topMargin = Number.isFinite(offset) ? Math.max(0, Math.round(offset)) : HEADER_OFFSET + 12;

    try {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible?.target?.id) setActiveNav(`#${visible.target.id}`);
        },
        { rootMargin: `-${topMargin}px 0px -55% 0px`, threshold: [0, 0.15, 0.4] }
      );

      sections.forEach((section) => observer.observe(section));
    } catch {
      /* Invalid rootMargin — skip active nav highlighting */
    }
  }

  function onLinkClick(event) {
    const hash = normalizeHref(event.currentTarget.getAttribute('href'));
    if (!hash) return;
    const target = resolveTarget(hash);
    if (!target) return;
    event.preventDefault();
    scrollToTarget(target);
    setActiveNav(hash);
    history.replaceState(null, '', `${window.location.pathname}${window.location.search}${hash}`);
  }

  function init() {
    ensureAnchorIds();

    findNavLinks().forEach((link) => {
      link.closest('.header__menu-item, li')?.classList.add('header__menu-item--anchor');
      link.addEventListener('click', onLinkClick);
    });

    requestAnimationFrame(() => observeSections());

    const initialHash = window.location.hash;
    if (initialHash && resolveTarget(initialHash)) {
      requestAnimationFrame(() => scrollToTarget(resolveTarget(initialHash)));
      setActiveNav(initialHash);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
