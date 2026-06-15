(function () {
  document.querySelectorAll('.sp-hero__product-form-inner').forEach(function (form) {
    form.addEventListener('submit', function () {
      var button = form.querySelector('button[type="submit"]');
      if (button) button.classList.add('loading');
    });
  });

  if (!('IntersectionObserver' in window)) return;

  document.querySelectorAll('[data-sp-hero-sticky]').forEach(function (section) {
    var trigger = section.querySelector('[data-sp-hero-cta-anchor]');
    var bar = section.querySelector('[data-sp-hero-sticky-bar]');
    if (!trigger || !bar) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          bar.classList.toggle('is-visible', !entry.isIntersecting);
          bar.setAttribute('aria-hidden', entry.isIntersecting ? 'true' : 'false');
        });
      },
      { root: null, threshold: 0, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(trigger);
  });
})();
