class SpResults {
  constructor(root) {
    if (root.dataset.spResultsInitialized) return;
    root.dataset.spResultsInitialized = 'true';

    this.root = root;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.initProgressBars();
  }

  initProgressBars() {
    const bars = this.root.querySelectorAll('[data-sp-results-progress]');
    if (!bars.length) return;

    if (this.reducedMotion) {
      bars.forEach((bar) => {
        const fill = bar.querySelector('.sp-results__progress-fill');
        if (fill) fill.style.width = bar.dataset.spResultsProgress + '%';
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const bar = entry.target;
          const fill = bar.querySelector('.sp-results__progress-fill');
          const target = bar.dataset.spResultsProgress || '85';
          if (fill) {
            requestAnimationFrame(() => {
              fill.style.width = target + '%';
            });
          }
          observer.unobserve(bar);
        });
      },
      { threshold: 0.4 }
    );

    bars.forEach((bar) => observer.observe(bar));
  }
}

function initSpResults(root = document) {
  root.querySelectorAll('[data-sp-results]').forEach((section) => new SpResults(section));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initSpResults());
} else {
  initSpResults();
}

document.addEventListener('shopify:section:load', (event) => {
  initSpResults(event.target);
});

document.addEventListener('shopify:section:reorder', () => {
  initSpResults(document);
});
