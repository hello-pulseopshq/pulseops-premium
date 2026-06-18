/**
 * Restores MatchingTranslations key parity for the icon_with_text `content`
 * setting in locales/*.schema.json.
 *
 * The English source (en.default.schema.json) defines:
 *   sections.main-product.blocks.icon_with_text.settings.content.{label,info}
 * but several translated *.schema.json files are missing those keys, which makes
 * Theme Check's MatchingTranslations rule fail.
 *
 * This script adds ONLY the missing keys, using the English string as the parity
 * fallback (the same convention Dawn uses for not-yet-translated editor labels).
 * It never overwrites an existing translated value. Run from the theme root:
 *   node scripts/fix-schema-translation-parity.mjs
 */
import { readdir, readFile, writeFile } from 'fs/promises';
import path from 'path';

const LOCALES = path.join(process.cwd(), 'locales');
const SOURCE = 'en.default.schema.json';
const PATH = ['sections', 'main-product', 'blocks', 'icon_with_text', 'settings', 'content'];

function getNode(obj, keys) {
  return keys.reduce((acc, k) => (acc && typeof acc === 'object' ? acc[k] : undefined), obj);
}

const source = JSON.parse(await readFile(path.join(LOCALES, SOURCE), 'utf8'));
const sourceContent = getNode(source, PATH);
if (!sourceContent) {
  console.error(`Source key not found in ${SOURCE}; aborting.`);
  process.exit(1);
}

const files = (await readdir(LOCALES)).filter(
  (f) => f.endsWith('.schema.json') && f !== SOURCE
);

const changed = [];
for (const file of files) {
  const full = path.join(LOCALES, file);
  const json = JSON.parse(await readFile(full, 'utf8'));
  const settings = getNode(json, PATH.slice(0, -1));
  if (!settings || typeof settings !== 'object') continue;

  const content = settings.content && typeof settings.content === 'object' ? settings.content : {};
  let touched = false;
  for (const key of ['label', 'info']) {
    if (content[key] === undefined) {
      content[key] = sourceContent[key];
      touched = true;
    }
  }
  if (touched) {
    settings.content = content;
    await writeFile(full, JSON.stringify(json, null, 2) + '\n', 'utf8');
    changed.push(file);
  }
}

console.log(`Updated ${changed.length} locale file(s):`);
console.log(changed.join('\n') || '(none)');
