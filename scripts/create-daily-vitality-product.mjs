/**
 * Creates or updates the Daily Vitality Complex flagship demo product.
 * Uses Shopify CLI session token from local config.
 * Run: node scripts/create-daily-vitality-product.mjs
 */
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STORE = 'pulseops-labs.myshopify.com';
const HANDLE = 'daily-vitality-complex';
const API_VERSION = '2025-01';

function getAccessToken() {
  const configPath = path.join(
    os.homedir(),
    'AppData',
    'Roaming',
    'shopify-cli-kit-nodejs',
    'Config',
    'config.json'
  );
  const raw = fs.readFileSync(configPath, 'utf8');
  const config = JSON.parse(raw);
  const session = JSON.parse(config.sessionStore);
  const account = session['accounts.shopify.com'];
  const sessionId = config.currentSessionId;
  const identity = account[sessionId]?.identity;
  if (identity?.accessToken) return identity.accessToken;
  const apps = account[sessionId]?.applications ?? {};
  const key = Object.keys(apps).find((k) => k.includes('pulseops-labs'));
  if (!key) throw new Error('No Shopify CLI session for pulseops-labs. Run: shopify auth login');
  return apps[key].accessToken;
}

async function gql(token, query, variables = {}) {
  const res = await fetch(`https://${STORE}/admin/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': token,
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors?.length) throw new Error(JSON.stringify(json.errors, null, 2));
  return json.data;
}

const DESCRIPTION = `<p><strong>Daily Vitality Complex</strong> is a premium daily wellness supplement designed for steady energy, recovery, gut support, and focus — without the afternoon crash.</p>
<h3>Key benefits</h3>
<ul>
<li>Steady daily energy with B-vitamins and adaptogens</li>
<li>Gut-friendly 5B CFU probiotic blend with prebiotic fiber</li>
<li>Supports recovery, focus, and consistent healthy routines</li>
<li>Third-party tested · GMP-certified manufacturing</li>
</ul>
<h3>Ingredients</h3>
<p>Rhodiola extract, B-vitamin complex (B6, B12), magnesium glycinate, L-theanine, 5B CFU probiotic blend (Lactobacillus + Bifidobacterium), prebiotic fiber, vegetable cellulose capsule.</p>
<h3>How to use</h3>
<p>Take two capsules each morning with food and water. Consistent daily use delivers the best results.</p>
<p><em>These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.</em></p>`;

async function main() {
  const token = getAccessToken();
  console.log('Checking for existing product...');

  const existing = await gql(
    token,
    `query($handle: String!) {
      productByHandle(handle: $handle) { id handle title }
    }`,
    { handle: HANDLE }
  );

  let productId = existing.productByHandle?.id;

  if (productId) {
    console.log('Product exists, updating...');
    await gql(
      token,
      `mutation($input: ProductInput!) {
        productUpdate(input: $input) { product { id handle } userErrors { message } }
      }`,
      {
        input: {
          id: productId,
          title: 'Daily Vitality Complex',
          vendor: 'Daily Vitality',
          productType: 'Supplement',
          tags: ['supplement', 'wellness', 'demo', 'sp-flagship'],
          descriptionHtml: DESCRIPTION,
          templateSuffix: 'supplement',
        },
      }
    );
  } else {
    console.log('Creating product...');
    const created = await gql(
      token,
      `mutation($input: ProductInput!) {
        productCreate(input: $input) { product { id handle } userErrors { message } }
      }`,
      {
        input: {
          title: 'Daily Vitality Complex',
          handle: HANDLE,
          vendor: 'Daily Vitality',
          productType: 'Supplement',
          tags: ['supplement', 'wellness', 'demo', 'sp-flagship'],
          descriptionHtml: DESCRIPTION,
          templateSuffix: 'supplement',
          status: 'ACTIVE',
        },
      }
    );
    productId = created.productCreate.product.id;
  }

  // Set variant price $49.95
  const product = await gql(
    token,
    `query($id: ID!) {
      product(id: $id) {
        variants(first: 1) { edges { node { id } } }
      }
    }`,
    { id: productId }
  );

  const variantId = product.product.variants.edges[0]?.node?.id;
  if (variantId) {
    await gql(
      token,
      `mutation($input: ProductVariantInput!) {
        productVariantUpdate(input: $input) { productVariant { id price } userErrors { message } }
      }`,
      {
        input: {
          id: variantId,
          price: '49.95',
          compareAtPrice: null,
        },
      }
    );
    console.log('Price set to $49.95');
  }

  // Upload product image from theme asset URL (after theme push)
  const imageUrl = `https://${STORE}/cdn/shop/files/sp-supplement-daily-vitality-product.svg`;
  // Try staged upload from local file instead
  const svgPath = path.join(__dirname, '..', 'assets', 'sp-supplement-daily-vitality-product.svg');
  const svgBase64 = fs.readFileSync(svgPath).toString('base64');

  await gql(
    token,
    `mutation($input: ProductInput!) {
      productUpdate(input: $input) { product { id } userErrors { message } }
    }`,
    {
      input: {
        id: productId,
        media: [
          {
            originalSource: `data:image/svg+xml;base64,${svgBase64}`,
            mediaContentType: 'IMAGE',
            alt: 'Daily Vitality Complex supplement bottle',
          },
        ],
      },
    }
  ).catch(() => {
    console.log('Note: SVG media upload may require theme asset CDN URL after push.');
  });

  console.log(`Done: https://${STORE}/products/${HANDLE}`);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
