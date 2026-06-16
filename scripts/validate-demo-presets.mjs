/**
 * Validates demo preset templates.
 * Run: node scripts/validate-demo-presets.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { demos } from './demo-presets-config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const templatesDir = path.join(root, 'templates');
const sectionsDir = path.join(root, 'sections');

const sectionTypes = new Set(
  fs.readdirSync(sectionsDir).filter((f) => f.endsWith('.liquid')).map((f) => f.replace('.liquid', ''))
);

const banned = [/replace these/i, /handle objections/i, /add your/i, /upload your/i, /lorem ipsum/i];
let errors = [];
let warnings = [];

function validateTemplate(file, data) {
  const rel = path.relative(root, file);
  if (!data.sections || !data.order) {
    errors.push(`${rel}: missing sections or order`);
    return;
  }

  const sectionIds = new Set();
  for (const id of data.order) {
    if (sectionIds.has(id)) errors.push(`${rel}: duplicate section id in order: ${id}`);
    sectionIds.add(id);
    const section = data.sections[id];
    if (!section) {
      errors.push(`${rel}: order references missing section ${id}`);
      continue;
    }
    if (!sectionTypes.has(section.type)) {
      errors.push(`${rel}: unknown section type "${section.type}" in section "${id}"`);
    }
    if (section.blocks) {
      const blockIds = new Set();
      const order = section.block_order || Object.keys(section.blocks);
      for (const bid of order) {
        if (blockIds.has(bid)) errors.push(`${rel}: duplicate block id ${bid} in ${id}`);
        blockIds.add(bid);
        if (!section.blocks[bid]) errors.push(`${rel}: block_order references missing block ${bid} in ${id}`);
      }
    }
  }

  const raw = JSON.stringify(data);
  for (const pattern of banned) {
    if (pattern.test(raw)) errors.push(`${rel}: banned copy pattern ${pattern}`);
  }
}

for (const demo of demos) {
  for (const suffix of ['index', 'product']) {
    const file = path.join(templatesDir, `${suffix}.${demo.id}.json`);
    if (!fs.existsSync(file)) {
      errors.push(`Missing template: templates/${suffix}.${demo.id}.json`);
      continue;
    }
    try {
      validateTemplate(file, JSON.parse(fs.readFileSync(file, 'utf8')));
    } catch (e) {
      errors.push(`Invalid JSON: templates/${suffix}.${demo.id}.json — ${e.message}`);
    }
  }
}

// Internal consistency check per demo
for (const demo of demos) {
  for (const suffix of ['index', 'product']) {
    const file = path.join(templatesDir, `${suffix}.${demo.id}.json`);
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const hero = data.sections['sp-hero']?.settings || {};
    const metrics = data.sections['sp-metrics']?.blocks || {};
    const ratingValues = [
      hero.social_rating_value,
      data.sections['sp-social-proof']?.settings?.heading,
      ...Object.values(metrics).map((b) => b.settings?.value),
    ]
      .filter(Boolean)
      .join(' ');
    const expected = demo.rating.includes('4.9') ? '4.9' : '4.8';
    const conflicting = demo.rating.includes('4.9') ? '4.8' : '4.9';
    if (ratingValues.includes(conflicting) && !ratingValues.includes(expected)) {
      warnings.push(`${suffix}.${demo.id}: rating inconsistency detected in hero/metrics/social`);
    }
  }
}

console.log(`Validated ${demos.length * 2} demo templates against ${sectionTypes.size} section types.\n`);

if (warnings.length) {
  console.log(`Warnings (${warnings.length}):`);
  warnings.forEach((w) => console.log(`  ⚠ ${w}`));
  console.log('');
}

if (errors.length) {
  console.log(`Errors (${errors.length}):`);
  errors.forEach((e) => console.log(`  ✗ ${e}`));
  process.exit(1);
}

console.log('All demo preset validations passed.');
