/**
 * SP Image Experience — marks images loaded for progressive reveal and frame polish.
 * Degrades gracefully: without this script, images remain visible (no opacity: 0 trap).
 */
(function () {
  const REVEAL_ATTR = 'data-sp-image-reveal';
  const IMAGE_SELECTOR = '.sp-image';
  const LOADED_CLASS = 'sp-image-loaded';
  const FRAME_LOADED_CLASS = 'sp-media-frame--loaded';

  function markLoaded(img) {
    img.classList.add(LOADED_CLASS);
    const frame = img.closest('.sp-media-frame');
    if (frame) frame.classList.add(FRAME_LOADED_CLASS);
  }

  function bindImage(img) {
    if (img.classList.contains(LOADED_CLASS)) return;

    if (img.complete && img.naturalWidth > 0) {
      markLoaded(img);
      return;
    }

    img.addEventListener('load', () => markLoaded(img), { once: true });
    img.addEventListener('error', () => markLoaded(img), { once: true });
  }

  function scan(root) {
    root.querySelectorAll(IMAGE_SELECTOR).forEach(bindImage);
  }

  function init() {
    document.documentElement.classList.add('sp-image-ready');

    if (document.documentElement.getAttribute(REVEAL_ATTR) !== 'true') {
      scan(document);
      return;
    }

    scan(document);
    document.addEventListener('shopify:section:load', (event) => {
      if (event.target) scan(event.target);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
