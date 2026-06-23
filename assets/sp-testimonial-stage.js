/**
 * SP Testimonial Stage — 3-slot infinite virtual carousel.
 * prev | current | next — track rests at -100%, recycles content after settle.
 */
class SpTestimonialStage {
  constructor(root) {
    if (!root || root.dataset.spCarouselReady === 'true') return;

    this.root = root;
    this.viewport = root.querySelector('.sp-social-proof__stage-viewport');
    this.track = root.querySelector('[data-sp-stage-track]');
    this.dots = [...root.querySelectorAll('[data-sp-stage-dot]')];
    this.live = root.querySelector('[data-sp-stage-live]');

    if (!this.viewport || !this.track) return;

    const sourceSlides = [...this.track.querySelectorAll('[data-sp-stage-slide]')];
    if (sourceSlides.length <= 1) return;

    root.dataset.spCarouselReady = 'true';
    root.dataset.spTestimonialStageInit = 'true';

    this.slideTemplates = sourceSlides.map((slide) => slide.cloneNode(true));
    this.count = this.slideTemplates.length;
    this.interval = Math.max(5000, parseInt(root.dataset.autoRotate || '6000', 10));
    this.index = 0;
    this.timer = null;
    this.paused = false;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.dragThreshold = 50;
    this.dragAxisThreshold = 10;
    this.isPointerDown = false;
    this.isDragging = false;
    this.activePointerId = null;
    this.startX = 0;
    this.startY = 0;
    this.deltaX = 0;
    this.isAnimating = false;
    this.dragWasPaused = false;
    this.transitionFallback = null;
    this.onTransitionEnd = null;

    this.slots = {};
    this.bindDrag = this.bindDrag.bind(this);
    this.onWindowBlur = this.onWindowBlur.bind(this);
    this.onVisibilityChange = this.onVisibilityChange.bind(this);

    this.root.setAttribute('tabindex', '0');
    this.buildThreeSlotTrack();
    this.bindControls();
    this.bindDrag();
    window.addEventListener('blur', this.onWindowBlur);
    document.addEventListener('visibilitychange', this.onVisibilityChange);

    if (!this.reducedMotion) this.start();
  }

  wrap(value) {
    return ((value % this.count) + this.count) % this.count;
  }

  buildThreeSlotTrack() {
    this.track.replaceChildren();

    ['prev', 'current', 'next'].forEach((role) => {
      const slot = document.createElement('article');
      slot.className = 'sp-social-proof__stage-slide';
      slot.dataset.spStageSlot = role;
      this.track.appendChild(slot);
      this.slots[role] = slot;
    });

    this.populateSlots();
    this.setPosition(-100, 0, 'instant');
  }

  fillSlot(slot, templateIndex, isCurrent) {
    const template = this.slideTemplates[templateIndex];
    slot.innerHTML = template.innerHTML;
    if (template.id) slot.id = template.id;
    slot.classList.toggle('is-active', isCurrent);
    slot.setAttribute('aria-hidden', isCurrent ? 'false' : 'true');
  }

  populateSlots() {
    this.fillSlot(this.slots.prev, this.wrap(this.index - 1), false);
    this.fillSlot(this.slots.current, this.index, true);
    this.fillSlot(this.slots.next, this.wrap(this.index + 1), false);
    this.updateDots(false);
  }

  setPosition(percent, offsetPx, mode) {
    const settling = mode === 'settle' && !this.reducedMotion;
    this.track.classList.toggle('is-dragging', mode === 'drag');
    this.track.classList.toggle('is-settling', settling);
    this.track.style.transform = `translate3d(calc(${percent}% + ${offsetPx}px), 0, 0)`;
  }

  clearTransitionListener() {
    if (this.onTransitionEnd) {
      this.track.removeEventListener('transitionend', this.onTransitionEnd);
      this.onTransitionEnd = null;
    }
    if (this.transitionFallback) {
      window.clearTimeout(this.transitionFallback);
      this.transitionFallback = null;
    }
  }

  afterTransition(callback) {
    this.clearTransitionListener();

    if (this.reducedMotion) {
      callback();
      return;
    }

    this.transitionFallback = window.setTimeout(() => {
      this.clearTransitionListener();
      callback();
    }, 350);

    this.onTransitionEnd = (event) => {
      if (event.target !== this.track || event.propertyName !== 'transform') return;
      this.clearTransitionListener();
      callback();
    };

    this.track.addEventListener('transitionend', this.onTransitionEnd);
  }

  settleTo(direction) {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.clearTransitionListener();

    const targetPercent = direction === 'next' ? -200 : direction === 'prev' ? 0 : -100;

    if (direction === 'snap') {
      this.setPosition(-100, 0, 'settle');
      this.afterTransition(() => {
        this.isAnimating = false;
      });
      return;
    }

    this.setPosition(targetPercent, 0, 'settle');
    this.afterTransition(() => {
      if (direction === 'next') {
        this.index = this.wrap(this.index + 1);
      } else if (direction === 'prev') {
        this.index = this.wrap(this.index - 1);
      }

      this.populateSlots();
      this.setPosition(-100, 0, 'instant');
      this.isAnimating = false;
      if (direction !== 'snap') this.updateDots(true);
    });
  }

  goNext(animate = true) {
    if (this.isAnimating) return;
    if (animate && !this.reducedMotion) {
      this.settleTo('next');
    } else {
      this.index = this.wrap(this.index + 1);
      this.populateSlots();
      this.setPosition(-100, 0, 'instant');
    }
  }

  goPrev(animate = true) {
    if (this.isAnimating) return;
    if (animate && !this.reducedMotion) {
      this.settleTo('prev');
    } else {
      this.index = this.wrap(this.index - 1);
      this.populateSlots();
      this.setPosition(-100, 0, 'instant');
    }
  }

  goToIndex(targetIndex) {
    const nextIndex = this.wrap(targetIndex);
    if (nextIndex === this.index || this.isAnimating) return;

    this.index = nextIndex;
    this.populateSlots();
    this.setPosition(-100, 0, 'instant');
  }

  updateDots(announce) {
    this.dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === this.index;
      dot.classList.toggle('is-active', isActive);
      if (isActive) {
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.removeAttribute('aria-current');
      }
    });

    if (announce && this.live) {
      const quote = this.slots.current.querySelector('.sp-social-proof__stage-quote-text');
      if (quote) this.live.textContent = quote.textContent.trim();
    }
  }

  bindControls() {
    this.dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const target = parseInt(dot.dataset.slideIndex || '0', 10);
        this.goToIndex(target);
        if (!this.reducedMotion) this.restart();
      });
    });

    this.root.addEventListener('mouseenter', () => {
      this.paused = true;
    });

    this.root.addEventListener('mouseleave', () => {
      if (!this.isPointerDown && this.activePointerId === null) {
        this.paused = false;
      }
    });

    this.root.addEventListener('focusin', () => {
      this.paused = true;
    });

    this.root.addEventListener('focusout', (event) => {
      if (!this.root.contains(event.relatedTarget) && !this.isPointerDown && this.activePointerId === null) {
        this.paused = false;
      }
    });

    this.root.addEventListener('keydown', (event) => {
      if (this.isAnimating) return;

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        this.goPrev(true);
        if (!this.reducedMotion) this.restart();
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        this.goNext(true);
        if (!this.reducedMotion) this.restart();
      }
    });
  }

  safeReleaseCapture(pointerId) {
    if (pointerId === null) return;
    try {
      if (this.viewport.hasPointerCapture(pointerId)) {
        this.viewport.releasePointerCapture(pointerId);
      }
    } catch {
      /* already released */
    }
  }

  resetPointerState() {
    this.isPointerDown = false;
    this.isDragging = false;
    this.activePointerId = null;
    this.deltaX = 0;
    this.viewport.classList.remove('is-dragging', 'is-dragging-active');
    this.track.classList.remove('is-dragging');

    if (!this.dragWasPaused && !this.root.matches(':hover') && !this.root.contains(document.activeElement)) {
      this.paused = false;
    }
  }

  onWindowBlur() {
    if (this.activePointerId !== null) {
      this.safeReleaseCapture(this.activePointerId);
      if (this.isDragging) {
        this.settleTo('snap');
      }
      this.resetPointerState();
    }
  }

  onVisibilityChange() {
    if (document.visibilityState === 'hidden' && this.activePointerId !== null) {
      this.safeReleaseCapture(this.activePointerId);
      if (this.isDragging) {
        this.settleTo('snap');
      }
      this.resetPointerState();
    }
  }

  bindDrag() {
    const onPointerDown = (event) => {
      if (this.isAnimating) return;
      if (event.button !== 0 && event.pointerType === 'mouse') return;
      if (event.target.closest('[data-sp-stage-dot], button, a')) return;
      if (this.activePointerId !== null) return;

      this.clearTransitionListener();
      this.isPointerDown = true;
      this.isDragging = false;
      this.activePointerId = event.pointerId;
      this.startX = event.clientX;
      this.startY = event.clientY;
      this.deltaX = 0;
      this.dragWasPaused = this.paused;
      this.paused = true;

      this.viewport.classList.add('is-dragging');

      try {
        this.viewport.setPointerCapture(event.pointerId);
      } catch {
        /* ignore */
      }
    };

    const onPointerMove = (event) => {
      if (this.activePointerId !== event.pointerId) return;

      const rawDeltaX = event.clientX - this.startX;
      const deltaY = event.clientY - this.startY;
      this.deltaX = rawDeltaX;

      if (!this.isDragging) {
        if (Math.abs(rawDeltaX) < this.dragAxisThreshold) return;
        if (Math.abs(rawDeltaX) <= Math.abs(deltaY)) return;
        this.isDragging = true;
        this.viewport.classList.add('is-dragging-active');
      }

      if (this.isDragging) {
        event.preventDefault();
        this.setPosition(-100, rawDeltaX, 'drag');
      }
    };

    const finishDrag = (event) => {
      if (this.activePointerId !== event.pointerId) return;

      const pointerId = event.pointerId;
      const didDrag = this.isDragging;
      const deltaX = this.deltaX;

      this.safeReleaseCapture(pointerId);
      this.resetPointerState();

      if (!didDrag || this.isAnimating) return;

      if (deltaX <= -this.dragThreshold) {
        this.settleTo('next');
        if (!this.reducedMotion) this.restart();
        return;
      }

      if (deltaX >= this.dragThreshold) {
        this.settleTo('prev');
        if (!this.reducedMotion) this.restart();
        return;
      }

      this.settleTo('snap');
    };

    const onLostCapture = (event) => {
      if (this.activePointerId !== event.pointerId) return;
      this.resetPointerState();
    };

    this.viewport.addEventListener('pointerdown', onPointerDown);
    this.viewport.addEventListener('pointermove', onPointerMove);
    this.viewport.addEventListener('pointerup', finishDrag);
    this.viewport.addEventListener('pointercancel', finishDrag);
    this.viewport.addEventListener('lostpointercapture', onLostCapture);
  }

  start() {
    this.stop();
    this.timer = window.setInterval(() => {
      if (!this.paused && !this.isAnimating && !this.isPointerDown) {
        this.goNext(true);
      }
    }, this.interval);
  }

  restart() {
    if (this.reducedMotion) return;
    this.start();
  }

  stop() {
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }
}

function initSpTestimonialStage(root = document) {
  root.querySelectorAll('[data-sp-testimonial-stage]').forEach((section) => new SpTestimonialStage(section));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initSpTestimonialStage());
} else {
  initSpTestimonialStage();
}

document.addEventListener('shopify:section:load', (event) => {
  initSpTestimonialStage(event.target);
});

document.addEventListener('shopify:section:reorder', () => {
  initSpTestimonialStage(document);
});
