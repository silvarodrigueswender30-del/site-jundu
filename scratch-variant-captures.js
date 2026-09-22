const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const dest = 'C:\\Users\\Teste\\.gemini\\antigravity\\brain\\4680bea1-4001-4e22-985d-2b40896d9f5f';
const manifestoPath = 'src/components/sections/brand-manifesto.tsx';
const sizes = [
  { w: 1440, h: 900 },
  { w: 1280, h: 800 },
  { w: 1024, h: 768 },
  { w: 768, h: 1024 },
  { w: 390, h: 844 },
  { w: 360, h: 800 },
  { w: 320, h: 700 }
];

async function captureVariant(browser, variant) {
  let content = fs.readFileSync(manifestoPath, 'utf8');
  if (variant === 'original') {
    content = content.replace(/<TerritoryArtwork composition="[^"]+" \/>/, '');
  } else {
    if (!content.includes('TerritoryArtwork')) {
      content = content.replace(/<div className="max-w-\[1280px\]/, `<TerritoryArtwork composition="${variant}" />\n      <div className="max-w-[1280px]`);
    } else {
      content = content.replace(/<TerritoryArtwork composition="[^"]+" \/>/, `<TerritoryArtwork composition="${variant}" />`);
    }
  }
  fs.writeFileSync(manifestoPath, content);
  
  // Wait for Turbopack to rebuild
  await new Promise(r => setTimeout(r, 4000));
  
  const page = await browser.newPage();
  
  for (const size of sizes) {
    await page.setViewport({ width: size.w, height: size.h });
    await page.goto('http://localhost:3001', { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 2000));
    
    // Hide headers
    await page.evaluate(() => {
        const headers = document.querySelectorAll('header, .sticky, [class*="sticky"], [class*="fixed"]');
        headers.forEach(h => h.style.position = 'absolute');
    });

    const el = await page.$('[data-section="brand-manifesto"]');
    if (el) {
      await el.screenshot({ path: path.join(dest, `manifesto-${variant}-${size.w}.png`) });
    }
    
    if (size.w === 1440) {
      // Capture context (Hero -> Manifesto -> Timeline)
      await page.screenshot({ path: path.join(dest, `context-${variant}-1440.png`), fullPage: true });
    }
  }
  
  await page.close();
}

async function run() {
  const browser = await puppeteer.launch();
  await captureVariant(browser, 'original');
  await captureVariant(browser, 'strong');
  await captureVariant(browser, 'soft');
  await captureVariant(browser, 'fragment');
  await browser.close();
  
  // Restore to soft
  let content = fs.readFileSync(manifestoPath, 'utf8');
  content = content.replace(/<TerritoryArtwork composition="[^"]+" \/>/, '<TerritoryArtwork composition="soft" />');
  fs.writeFileSync(manifestoPath, content);
}

run();
