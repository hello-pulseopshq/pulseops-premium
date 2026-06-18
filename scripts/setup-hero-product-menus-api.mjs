/**
 * Sync hero-product menus via Admin GraphQL.
 * Uses SHOPIFY_ADMIN_ACCESS_TOKEN if set, otherwise Shopify CLI session (Bearer).
 *
 * Usage: node scripts/setup-hero-product-menus-api.mjs [core|supplement]
 */
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const profile = process.argv[2] || 'core';
const STORE = process.env.SHOPIFY_STORE || 'pulseops-labs.myshopify.com';
const API_VERSION = '2025-01';

function getAccessToken() {
  if (process.env.SHOPIFY_ADMIN_ACCESS_TOKEN) return process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
  const configPath = path.join(
    os.homedir(),
    'AppData',
    'Roaming',
    'shopify-cli-kit-nodejs',
    'Config',
    'config.json'
  );
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const session = JSON.parse(config.sessionStore);
  const sessionId = config.currentSessionId;
  const apps = session['accounts.shopify.com'][sessionId]?.applications ?? {};
  const key = Object.keys(apps).find((k) => k.includes('pulseops-labs'));
  if (!key) throw new Error('No Shopify CLI session. Run: shopify auth login');
  return apps[key].accessToken;
}

function loadShellMenus(profileName) {
  const shell = JSON.parse(
    fs.readFileSync(path.join(root, 'config', 'demo-shells', `${profileName}-shell.json`), 'utf8')
  );
  const load = (f) => JSON.parse(fs.readFileSync(path.join(root, 'config', 'menus', f), 'utf8'));
  return { main: load(shell.menus.main), footer: load(shell.menus.footer) };
}

async function gql(token, query, variables = {}) {
  const res = await fetch(`https://${STORE}/admin/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors?.length) throw new Error(JSON.stringify(json.errors, null, 2));
  return json.data;
}

async function getMenuId(token, handle) {
  const data = await gql(
    token,
    `query {
      menus(first: 25) {
        edges { node { id handle title } }
      }
    }`
  );
  const menu = data.menus.edges.find((e) => e.node.handle === handle)?.node;
  if (!menu) throw new Error(`Menu not found: ${handle}`);
  return menu.id;
}

function toMenuItems(items) {
  return items.map((item, index) => ({
    title: item.title,
    url: item.url,
    type: 'HTTP',
    position: index + 1,
  }));
}

async function replaceMenu(token, handle, menuDef) {
  const id = await getMenuId(token, handle);
  if (!id) throw new Error(`Menu not found: ${handle}`);

  const data = await gql(
    token,
    `mutation($id: ID!, $title: String!, $items: [MenuItemUpdateInput!]!) {
      menuUpdate(id: $id, title: $title, items: $items) {
        menu { handle }
        userErrors { field message }
      }
    }`,
    { id, title: menuDef.title, items: toMenuItems(menuDef.items) }
  );

  const errors = data.menuUpdate?.userErrors;
  if (errors?.length) throw new Error(JSON.stringify(errors, null, 2));
  console.log(`Updated menu: ${handle} (${menuDef.items.length} items)`);
}

async function main() {
  const token = getAccessToken();
  const { main, footer } = loadShellMenus(profile);
  await replaceMenu(token, main.handle, main);
  await replaceMenu(token, footer.handle, footer);
  console.log(`Profile "${profile}" menus synced.`);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
