/**
 * Sync hero-product navigation menus (wrapper).
 * Requires SHOPIFY_ADMIN_ACCESS_TOKEN with write_online_store_navigation.
 *
 * Usage: node scripts/setup-hero-product-menus.mjs [core|supplement]
 */
import { spawnSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const profile = process.argv[2] || 'core';

const result = spawnSync(process.execPath, [path.join(__dirname, 'setup-hero-product-menus-api.mjs'), profile], {
  stdio: 'inherit',
  env: process.env,
});

if (result.status !== 0) {
  console.error('\nMenu sync failed. Options:');
  console.error('  1. Create a custom app with write_online_store_navigation → set SHOPIFY_ADMIN_ACCESS_TOKEN');
  console.error('  2. Update Online Store → Navigation manually from config/menus/');
  console.error('  3. node .audit/setup-hero-product-menus-playwright.mjs', profile);
  process.exit(result.status || 1);
}
