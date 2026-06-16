/**
 * Generates SP Core demo preset templates from config.
 * Run: node scripts/generate-demo-presets.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { demos } from './demo-presets-config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatesDir = path.join(__dirname, '..', 'templates');

function heroBlocks(d) {
  return {
    'benefit-chip-1': { type: 'benefit_chip', settings: { benefit_text: d.chips[0] } },
    'benefit-chip-2': { type: 'benefit_chip', settings: { benefit_text: d.chips[1] } },
    'benefit-chip-3': { type: 'benefit_chip', settings: { benefit_text: d.chips[2] } },
    'cta-trust-1': { type: 'cta_trust_item', settings: { icon: 'guarantee', text: d.guarantee } },
    'cta-trust-2': { type: 'cta_trust_item', settings: { icon: 'secure', text: 'Secure checkout' } },
  };
}

function metricsBlocks(d) {
  return {
    'metric-1': { type: 'metric', settings: { value: d.customers, label: d.metricLabels[0] } },
    'metric-2': { type: 'metric', settings: { value: d.ratingStar, label: d.metricLabels[1] } },
    'metric-3': { type: 'metric', settings: { value: d.reviewShort, label: d.metricLabels[2] } },
    'metric-4': { type: 'metric', settings: { value: d.guaranteeShort, label: d.metricLabels[3] } },
  };
}

function benefitsBlocks(d) {
  return Object.fromEntries(
    d.benefits.map((b, i) => [
      `benefit-${i + 1}`,
      { type: 'benefit', settings: { icon: b.icon, title: b.title, description: `<p>${b.desc}</p>` } },
    ])
  );
}

function featuresBlocks(d) {
  return Object.fromEntries(
    d.features.map((f, i) => [
      `feature-${i + 1}`,
      {
        type: 'feature',
        settings: {
          title: f.title,
          description: `<p>${f.desc}</p>`,
          bullet_1: f.bullets[0],
          bullet_2: f.bullets[1],
          bullet_3: f.bullets[2],
        },
      },
    ])
  );
}

function proofBlocks(d) {
  return Object.fromEntries(
    d.proofs.map((p, i) => [
      `proof-${i + 1}`,
      {
        type: 'proof',
        settings: {
          statistic: p.stat,
          presentation: p.presentation || 'statistic',
          description: `<p>${p.desc}</p>`,
          icon: p.icon,
          source: p.source,
          footnote: p.footnote || '',
        },
      },
    ])
  );
}

function reviewBlocks(d) {
  return Object.fromEntries(
    d.reviews.map((r, i) => [
      `review-${i + 1}`,
      {
        type: 'review',
        settings: {
          rating: 5,
          review_text: `<p>${r.text}</p>`,
          customer_name: r.name,
          customer_title: r.location,
          verified: true,
        },
      },
    ])
  );
}

function faqBlocks(d) {
  return Object.fromEntries(
    d.faqs.map((f, i) => [
      `faq-${i + 1}`,
      { type: 'faq_item', settings: { question: f.q, answer: `<p>${f.a}</p>` } },
    ])
  );
}

function trustBlocks(d) {
  return {
    'trust-1': {
      type: 'trust_item',
      settings: { icon: 'guarantee', heading: d.guaranteeShort, text: `<p>${d.trustGuarantee}</p>` },
    },
    'trust-2': {
      type: 'trust_item',
      settings: { icon: 'truck', heading: 'Free shipping', text: `<p>${d.trustShipping}</p>` },
    },
    'trust-3': {
      type: 'trust_item',
      settings: { icon: 'lock', heading: 'Secure checkout', text: '<p>256-bit SSL encryption on every order.</p>' },
    },
  };
}

function neutralVisualSection(d) {
  if (d.visualMode !== 'neutral') return {};
  return {
    'demo-visual-treatment': {
      type: 'custom-liquid',
      settings: {
        custom_liquid: `{{ 'sp-demo-presets.css' | asset_url | stylesheet_tag }}<script>document.documentElement.classList.add('sp-demo-visual-neutral','sp-demo-${d.id}');</script>`,
        padding_top: 0,
        padding_bottom: 0,
        color_scheme: 'scheme-1',
      },
    },
  };
}

function neutralVisualOrder(d, baseOrder) {
  if (d.visualMode !== 'neutral') return baseOrder;
  return ['demo-visual-treatment', ...baseOrder];
}

function heroSettings(d) {
  const s = {
    show_announcement: true,
    announcement_text: d.announcement,
    headline: d.headline,
    headline_highlight_style: 'underline',
    subheadline: d.subheadline,
    price_source: d.productHandle ? 'product' : 'custom',
    cta_type: 'custom_link',
    cta_label: d.ctaLabel,
    cta_link: d.ctaLink,
    show_cta_trust_stack: true,
    show_social_proof: false,
    social_proof_text: '',
    show_social_rating: true,
    social_rating_value: d.rating,
    show_social_review_count: true,
    social_review_count: d.reviewsLabel,
    layout_preset: d.visualMode === 'neutral' ? 'minimal' : 'classic_split',
    show_trust_microcopy: false,
    padding_top: 0,
    padding_bottom: 0,
  };
  if (d.productHandle) s.featured_product = d.productHandle;
  if (!d.productHandle) s.price_text = d.price;
  return s;
}

function buildIndex(d) {
  const indexOrder = [
    'sp-hero',
    'sp-metrics',
    'sp-benefits',
    'sp-features',
    'sp-scientific-proof',
    'sp-social-proof',
    'sp-faq',
    'sp-cta-offer',
  ];
  return {
    sections: {
      ...neutralVisualSection(d),
      'sp-hero': {
        type: 'sp-hero',
        blocks: heroBlocks(d),
        block_order: ['benefit-chip-1', 'benefit-chip-2', 'benefit-chip-3', 'cta-trust-1', 'cta-trust-2'],
        settings: heroSettings(d),
      },
      'sp-metrics': {
        type: 'sp-metrics',
        blocks: metricsBlocks(d),
        block_order: ['metric-1', 'metric-2', 'metric-3', 'metric-4'],
        settings: {
          heading: d.metricsHeading,
          subheading: `<p>${d.metricsSub}</p>`,
          content_alignment: 'center',
          desktop_columns: '4',
          show_band: true,
          show_dividers: true,
          mobile_layout: 'swipe',
          sp_surface_style: 'alternate',
          sp_divider_style: 'line',
          padding_top: 48,
          padding_bottom: 48,
        },
      },
      'sp-benefits': {
        type: 'sp-benefits',
        blocks: benefitsBlocks(d),
        block_order: d.benefits.map((_, i) => `benefit-${i + 1}`),
        settings: {
          heading: d.benefitsHeading,
          subheading: `<p>${d.benefitsSub}</p>`,
          content_alignment: 'center',
          desktop_columns: '4',
          card_style: 'subtle',
          mobile_layout: 'swipe',
          padding_top: 64,
          padding_bottom: 64,
        },
      },
      'sp-features': {
        type: 'sp-features',
        blocks: featuresBlocks(d),
        block_order: d.features.map((_, i) => `feature-${i + 1}`),
        settings: {
          heading: d.featuresHeading,
          subheading: `<p>${d.featuresSub}</p>`,
          content_alignment: 'left',
          image_ratio: d.imageRatio || 'landscape',
          padding_top: 64,
          padding_bottom: 64,
        },
      },
      'sp-scientific-proof': {
        type: 'sp-scientific-proof',
        blocks: proofBlocks(d),
        block_order: d.proofs.map((_, i) => `proof-${i + 1}`),
        settings: {
          heading: d.proofHeading,
          subheading: `<p>${d.proofSub}</p>`,
          content_alignment: 'center',
          desktop_columns: '3',
          card_style: 'elevated',
          mobile_layout: 'swipe',
          sp_surface_style: 'default',
          sp_divider_style: 'line',
          padding_top: 64,
          padding_bottom: 48,
        },
      },
      'sp-social-proof': {
        type: 'sp-social-proof',
        blocks: reviewBlocks(d),
        block_order: d.reviews.map((_, i) => `review-${i + 1}`),
        settings: {
          heading: d.socialHeading,
          subheading: `<p>${d.socialSub}</p>`,
          content_alignment: 'center',
          desktop_columns: '3',
          mobile_layout: 'swipe',
          sp_surface_style: 'alternate',
          padding_top: 64,
          padding_bottom: 64,
        },
      },
      'sp-faq': {
        type: 'sp-faq',
        blocks: faqBlocks(d),
        block_order: d.faqs.map((_, i) => `faq-${i + 1}`),
        settings: {
          heading: d.faqHeading,
          subheading: `<p>${d.faqSub}</p>`,
          content_alignment: 'center',
          open_first_item: true,
          padding_top: 64,
          padding_bottom: 48,
        },
      },
      'sp-cta-offer': {
        type: 'sp-cta-offer',
        settings: {
          heading: d.ctaHeading,
          subheading: `<p>${d.ctaSub}</p>`,
          offer_text: `${d.price} · Free shipping included`,
          button_label: d.ctaLabel,
          button_link: d.ctaLink,
          reassurance_text: d.guarantee,
          show_badge: true,
          badge_text: d.ctaBadge,
          card_style: 'gradient',
          sp_surface_style: 'inverse',
          sp_section_emphasis: 'feature',
          padding_top: 64,
          padding_bottom: 80,
        },
      },
    },
    order: neutralVisualOrder(d, indexOrder),
  };
}

function buildProduct(d) {
  const productOrder = [
    'main',
    'sp-trust-icons',
    'sp-benefits',
    'sp-features',
    'sp-scientific-proof',
    'sp-social-proof',
    'sp-faq',
    'sp-cta-offer',
    'sp-sticky-atc',
  ];
  return {
    sections: {
      ...neutralVisualSection(d),
      main: {
        type: 'main-product',
        blocks: {
          vendor: { type: 'text', settings: { text: '{{ product.vendor }}', text_style: 'uppercase' } },
          title: { type: 'title' },
          caption: {
            type: 'text',
            settings: { text: '{{ product.metafields.descriptors.subtitle.value }}', text_style: 'subtitle' },
          },
          price: { type: 'price' },
          'variant_picker': { type: 'variant_picker', settings: { picker_type: 'button' } },
          quantity_selector: { type: 'quantity_selector' },
          buy_buttons: {
            type: 'buy_buttons',
            settings: { show_dynamic_checkout: true, show_gift_card_recipient: true },
          },
          description: { type: 'description' },
        },
        block_order: ['vendor', 'title', 'caption', 'price', 'variant_picker', 'quantity_selector', 'buy_buttons', 'description'],
        settings: {
          enable_sticky_info: true,
          gallery_layout: 'stacked',
          media_size: 'large',
          constrain_to_viewport: true,
          mobile_thumbnails: 'hide',
          hide_variants: true,
          enable_video_looping: false,
          padding_top: 36,
          padding_bottom: 8,
        },
      },
      'sp-trust-icons': {
        type: 'sp-trust-icons',
        blocks: trustBlocks(d),
        block_order: ['trust-1', 'trust-2', 'trust-3'],
        settings: {
          heading: '',
          subheading: '',
          content_alignment: 'center',
          card_style: 'minimal',
          desktop_layout: 'inline',
          desktop_columns: '3',
          mobile_layout: 'grid',
          sp_surface_style: 'default',
          padding_top: 8,
          padding_bottom: 32,
        },
      },
      'sp-benefits': {
        type: 'sp-benefits',
        blocks: benefitsBlocks(d),
        block_order: d.benefits.map((_, i) => `benefit-${i + 1}`),
        settings: {
          heading: d.benefitsHeading,
          subheading: `<p>${d.benefitsSub}</p>`,
          content_alignment: 'center',
          desktop_columns: '4',
          card_style: 'subtle',
          mobile_layout: 'swipe',
          sp_surface_style: 'alternate',
          sp_divider_style: 'line',
          padding_top: 48,
          padding_bottom: 48,
        },
      },
      'sp-features': {
        type: 'sp-features',
        blocks: featuresBlocks(d),
        block_order: d.features.map((_, i) => `feature-${i + 1}`),
        settings: {
          heading: d.featuresHeading,
          subheading: `<p>${d.featuresSub}</p>`,
          content_alignment: 'left',
          image_ratio: d.imageRatio || 'landscape',
          padding_top: 64,
          padding_bottom: 64,
        },
      },
      'sp-scientific-proof': {
        type: 'sp-scientific-proof',
        blocks: proofBlocks(d),
        block_order: d.proofs.map((_, i) => `proof-${i + 1}`),
        settings: {
          heading: d.proofHeading,
          subheading: `<p>${d.proofSub}</p>`,
          content_alignment: 'center',
          desktop_columns: '3',
          card_style: 'elevated',
          mobile_layout: 'swipe',
          sp_surface_style: 'default',
          sp_divider_style: 'line',
          padding_top: 64,
          padding_bottom: 48,
        },
      },
      'sp-social-proof': {
        type: 'sp-social-proof',
        blocks: reviewBlocks(d),
        block_order: d.reviews.map((_, i) => `review-${i + 1}`),
        settings: {
          heading: d.socialHeading,
          subheading: `<p>${d.socialSub}</p>`,
          content_alignment: 'center',
          desktop_columns: '3',
          mobile_layout: 'swipe',
          sp_surface_style: 'alternate',
          padding_top: 48,
          padding_bottom: 48,
        },
      },
      'sp-faq': {
        type: 'sp-faq',
        blocks: faqBlocks(d),
        block_order: d.faqs.map((_, i) => `faq-${i + 1}`),
        settings: {
          heading: d.faqHeading,
          subheading: `<p>${d.faqSub}</p>`,
          content_alignment: 'center',
          open_first_item: true,
          padding_top: 64,
          padding_bottom: 48,
        },
      },
      'sp-cta-offer': {
        type: 'sp-cta-offer',
        settings: {
          heading: d.ctaHeading,
          subheading: `<p>${d.ctaSub}</p>`,
          offer_text: `${d.price} · Free shipping included`,
          button_label: 'Add to cart',
          button_link: '',
          reassurance_text: d.guarantee,
          show_badge: true,
          badge_text: d.ctaBadge,
          card_style: 'gradient',
          sp_surface_style: 'inverse',
          sp_section_emphasis: 'feature',
          padding_top: 64,
          padding_bottom: 64,
        },
      },
      'sp-sticky-atc': {
        type: 'sp-sticky-atc',
        settings: {
          enable_sticky_bar: true,
          mobile_only: true,
          show_mobile_product_image: false,
          show_mobile_title: false,
          show_mobile_variant_selector: false,
          show_product_image: true,
          show_variant_selector: true,
          show_compare_at_price: true,
          button_label: 'Add to cart',
          show_price_in_button: false,
          show_buy_now_button: false,
          scroll_threshold: 10,
          hide_near_footer: true,
          background_style: 'blur',
          color_scheme: 'scheme-1',
        },
      },
    },
    order: neutralVisualOrder(d, productOrder),
  };
}

const created = [];
for (const demo of demos) {
  const indexPath = path.join(templatesDir, `index.${demo.id}.json`);
  const productPath = path.join(templatesDir, `product.${demo.id}.json`);
  fs.writeFileSync(indexPath, JSON.stringify(buildIndex(demo), null, 2) + '\n');
  fs.writeFileSync(productPath, JSON.stringify(buildProduct(demo), null, 2) + '\n');
  created.push(`index.${demo.id}.json`, `product.${demo.id}.json`);
}

console.log(`Generated ${created.length} templates:`);
created.forEach((f) => console.log(`  templates/${f}`));
