/**
 * Apply hero-product demo shell to header-group.json and footer-group.json.
 * Usage: node scripts/apply-demo-shell.mjs [core|supplement]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const shellId = process.argv[2] || 'core';

const shellPath = path.join(root, 'demo-config', 'shells', `${shellId}-shell.json`);
if (!fs.existsSync(shellPath)) {
  console.error(`Unknown shell: ${shellId}`);
  process.exit(1);
}

const shell = JSON.parse(fs.readFileSync(shellPath, 'utf8'));
const headerPath = path.join(root, 'sections', 'header-group.json');
const footerPath = path.join(root, 'sections', 'footer-group.json');

const headerGroup = JSON.parse(fs.readFileSync(headerPath, 'utf8'));
headerGroup.sections['announcement-bar'].blocks['announcement-bar-0'].settings.text =
  shell.headerGroup.announcement.text;
headerGroup.sections['announcement-bar'].blocks['announcement-bar-0'].settings.link =
  shell.headerGroup.announcement.link;
headerGroup.sections.header.settings.menu = shell.headerGroup.menu;

const footerGroup = JSON.parse(fs.readFileSync(footerPath, 'utf8'));
footerGroup.sections.footer.blocks['footer-0'].settings.heading = shell.footerGroup.linkListHeading;
footerGroup.sections.footer.blocks['footer-0'].settings.menu = shell.footerGroup.menu;
footerGroup.sections.footer.blocks['footer-1'].settings.heading = shell.footerGroup.brandHeading;
footerGroup.sections.footer.blocks['footer-1'].settings.subtext = shell.footerGroup.brandText;
footerGroup.sections.footer.settings.newsletter_heading = shell.footerGroup.newsletterHeading;

fs.writeFileSync(headerPath, JSON.stringify(headerGroup, null, 2) + '\n');
fs.writeFileSync(footerPath, JSON.stringify(footerGroup, null, 2) + '\n');

console.log(`Applied ${shellId} demo shell to header-group.json and footer-group.json`);
