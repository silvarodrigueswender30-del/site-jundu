const puppeteer = require('puppeteer');
const path = require('path');

async function takeScreenshots() {
  const browser = await puppeteer.launch();
  const dest = 'C:\\Users\\Teste\\.gemini\\antigravity\\brain\\4680bea1-4001-4e22-985d-2b40896d9f5f';
  
  const sizes = [
    { w: 1440, h: 900 },
    { w: 1280, h: 800 },
    { w: 768, h: 1024 },
    { w: 390, h: 844 },
    { w: 360, h: 800 },
    { w: 320, h: 700 }
  ];

  try {
    for (const size of sizes) {
      const page = await browser.newPage();
      await page.setViewport({ width: size.w, height: size.h });
      await page.goto('http://localhost:3001', { waitUntil: 'domcontentloaded' });
      await new Promise(r => setTimeout(r, 2000));
      await page.screenshot({ path: path.join(dest, `hero-final-${size.w}.png`) });
      await page.close();
    }
  } catch (e) {
    console.error(e);
  }
  
  await browser.close();
}
takeScreenshots();
