class SpFaq {
  constructor(list) {
    if (list.dataset.spFaqInitialized) return;
    list.dataset.spFaqInitialized = 'true';

    this.items = Array.from(list.querySelectorAll('.sp-faq__item'));
    this.items.forEach((item) => {
      const trigger = item.querySelector('.sp-faq__trigger');
      if (!trigger) return;

      trigger.addEventListener('click', () => this.onTriggerClick(item));
      trigger.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          this.onTriggerClick(item);
        }
      });
    });
  }

  onTriggerClick(item) {
    const isOpen = item.classList.contains('is-open');
    this.items.forEach((other) => {
      if (other !== item) this.closeItem(other);
    });
    if (isOpen) {
      this.closeItem(item);
    } else {
      this.openItem(item);
    }
  }

  openItem(item) {
    const trigger = item.querySelector('.sp-faq__trigger');
    const panel = item.querySelector('.sp-faq__panel');
    if (!trigger || !panel) return;

    trigger.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');
    panel.removeAttribute('inert');
    item.classList.add('is-open');
  }

  closeItem(item) {
    const trigger = item.querySelector('.sp-faq__trigger');
    const panel = item.querySelector('.sp-faq__panel');
    if (!trigger || !panel) return;

    trigger.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
    panel.setAttribute('inert', '');
    item.classList.remove('is-open');
  }
}

function initSpFaqLists(root = document) {
  root.querySelectorAll('[data-sp-faq-list]').forEach((list) => new SpFaq(list));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initSpFaqLists());
} else {
  initSpFaqLists();
}

document.addEventListener('shopify:section:load', (event) => {
  initSpFaqLists(event.target);
});
