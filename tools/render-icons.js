// Renders the app icons from icons/icon.svg (needs Playwright + Chromium).
//   node tools/render-icons.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'icons');
const svg = fs.readFileSync(path.join(dir, 'icon.svg'), 'utf8');
const font = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap">';
// Maskable: Android may crop to a circle, so shrink the artwork into the safe zone on a yellow background.
const page = (size, maskable) => `<html><head>${font}<style>body{margin:0;width:${size}px;height:${size}px;background:#FFC83D;display:grid;place-items:center;overflow:hidden}
svg{width:${maskable ? 80 : 100}%;height:${maskable ? 80 : 100}%;display:block}</style></head><body>${svg}</body></html>`;
(async () => {
  const b = await chromium.launch();
  for (const [file, size, maskable] of [['icon-512.png', 512], ['icon-192.png', 192], ['apple-touch-icon.png', 180], ['icon-maskable-512.png', 512, true]]) {
    const p = await b.newPage({ viewport: { width: size, height: size } });
    await p.setContent(page(size, maskable));
    await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
    await p.screenshot({ path: path.join(dir, file) });
    await p.close();
  }
  await b.close();
  console.log('icons rendered');
})();
