class SpVideo {
  constructor(root) {
    if (!root || root.dataset.spVideoInitialized === 'true') return;
    root.dataset.spVideoInitialized = 'true';

    this.root = root;
    this.media = root.querySelector('[data-sp-video-media]');
    if (!this.media) return;

    this.deferredMedia = this.media.querySelector('deferred-media');
    this.setState('idle');
    this.bindNativeVideos();
    this.bindDeferredMedia();
  }

  setState(state) {
    this.media.setAttribute('data-video-state', state);
    this.root.setAttribute('data-video-state', state);
  }

  bindNativeVideos() {
    this.media.querySelectorAll('video').forEach((video) => this.trackVideo(video));
  }

  trackVideo(video) {
    const sync = () => {
      if (video.ended) {
        this.setState('ended');
      } else if (!video.paused) {
        this.setState('playing');
      } else {
        this.setState('idle');
      }
    };

    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);
    video.addEventListener('ended', sync);
    sync();
  }

  bindDeferredMedia() {
    if (!this.deferredMedia) return;

    const poster = this.deferredMedia.querySelector('[id^="Deferred-Poster-"]');
    poster?.addEventListener('click', () => {
      this.setState('playing');
      window.setTimeout(() => this.bindLoadedMedia(), 150);
    });

    if (this.deferredMedia.hasAttribute('loaded')) {
      this.bindLoadedMedia();
      return;
    }

    const observer = new MutationObserver(() => {
      if (!this.deferredMedia.hasAttribute('loaded')) return;
      this.bindLoadedMedia();
      observer.disconnect();
    });

    observer.observe(this.deferredMedia, { attributes: true, attributeFilter: ['loaded'] });
  }

  bindLoadedMedia() {
    const video = this.media.querySelector('video');
    if (video) {
      this.trackVideo(video);
      return;
    }

    const iframe = this.media.querySelector('iframe');
    if (iframe) {
      this.setState('playing');
    }
  }
}

function initSpVideo(root = document) {
  root.querySelectorAll('[data-sp-video]').forEach((section) => new SpVideo(section));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initSpVideo());
} else {
  initSpVideo();
}

document.addEventListener('shopify:section:load', (event) => {
  initSpVideo(event.target);
});
