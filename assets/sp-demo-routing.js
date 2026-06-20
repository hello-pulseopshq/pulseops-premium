/**
 * SP Demo routing — preserve ?view= and preview_theme_id on internal navigation.
 * Loaded only on active demo verticals (e.g. supplement). Keeps merchants inside
 * the flagship demo when clicking logo, cart, footer brand, or announcement links.
 */
(function () {
  const VIEW_KEY = 'sp_demo_view';
  const PREVIEW_KEY = 'sp_demo_preview_theme_id';

  function readParams() {
    const params = new URLSearchParams(window.location.search);
    const view = params.get('view');
    const preview = params.get('preview_theme_id');
    if (view) sessionStorage.setItem(VIEW_KEY, view);
    if (preview) sessionStorage.setItem(PREVIEW_KEY, preview);
    return {
      view: view || sessionStorage.getItem(VIEW_KEY) || '',
      preview: preview || sessionStorage.getItem(PREVIEW_KEY) || '',
    };
  }

  function augmentHref(href, state) {
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return href;
    }
    let url;
    try {
      url = new URL(href, window.location.origin);
    } catch {
      return href;
    }
    if (url.origin !== window.location.origin) return href;
    if (state.view && !url.searchParams.has('view')) {
      url.searchParams.set('view', state.view);
    }
    if (state.preview && !url.searchParams.has('preview_theme_id')) {
      url.searchParams.set('preview_theme_id', state.preview);
    }
    return url.pathname + url.search + url.hash;
  }

  function patchLinks(state) {
    document.querySelectorAll('a[href]').forEach((link) => {
      const raw = link.getAttribute('href');
      if (!raw) return;
      const next = augmentHref(raw, state);
      if (next !== raw) link.setAttribute('href', next);
    });
  }

  function init() {
    const state = readParams();

    if (
      state.view &&
      window.location.pathname === '/' &&
      !new URLSearchParams(window.location.search).has('view')
    ) {
      const url = new URL(window.location.href);
      url.searchParams.set('view', state.view);
      if (state.preview) url.searchParams.set('preview_theme_id', state.preview);
      window.location.replace(url.pathname + url.search);
      return;
    }

    if (!state.view && !state.preview) return;

    patchLinks(state);

    document.addEventListener(
      'click',
      (event) => {
        const link = event.target.closest('a[href]');
        if (!link) return;
        const raw = link.getAttribute('href');
        const next = augmentHref(raw, state);
        if (next !== raw) link.setAttribute('href', next);
      },
      true
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
