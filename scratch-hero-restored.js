const puppeteer = require('puppeteer');
const path = require('path');

async function takeScreenshots() {
  const browser = await puppeteer.launch();
  const dest = 'C:\\Users\\Teste\\.gemini\\antigravity\\brain\\4680bea1-4001-4e22-985d-2b40896d9f5f';
  
  for (const size of [1440, 1280, 768, 390, 360, 320]) {
    const page = await browser.newPage();
    await page.setViewport({ width: size, height: 900 });
    await page.goto('http://localhost:3001', { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(dest, `hero-restored-${size}.png`) });
    await page.close();
  }
  
  await browser.close();
}
takeScreenshots();
