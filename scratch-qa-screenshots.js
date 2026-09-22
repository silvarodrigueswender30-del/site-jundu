const puppeteer = require('puppeteer');
const path = require('path');

const url = 'http://localhost:3001';
const dest = 'C:\\Users\\Teste\\.gemini\\antigravity\\brain\\4680bea1-4001-4e22-985d-2b40896d9f5f';

async function capture() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // 1440 x 900
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 2000));
  
  await page.evaluate(() => {
    const headers = document.querySelectorAll('header, .sticky, [class*="sticky"], [class*="fixed"]');
    headers.forEach(h => h.style.position = 'absolute');
  });

  const el = await page.$('[data-section="brand-manifesto"]');
  if (el) {
    await el.screenshot({ path: path.join(dest, 'manifesto-qa-1440.png') });
  }

  // 768 x 1024
  await page.setViewport({ width: 768, height: 1024 });
  await new Promise(r => setTimeout(r, 1000));
  const el768 = await page.$('[data-section="brand-manifesto"]');
  if (el768) {
    await el768.screenshot({ path: path.join(dest, 'manifesto-qa-768.png') });
  }

  // 390 x 844
  await page.setViewport({ width: 390, height: 844 });
  await new Promise(r => setTimeout(r, 1000));
  const el390 = await page.$('[data-section="brand-manifesto"]');
  if (el390) {
    await el390.screenshot({ path: path.join(dest, 'manifesto-qa-390.png') });
  }

  // 320 x 700
  await page.setViewport({ width: 320, height: 700 });
  await new Promise(r => setTimeout(r, 1000));
  const el320 = await page.$('[data-section="brand-manifesto"]');
  if (el320) {
    await el320.screenshot({ path: path.join(dest, 'manifesto-qa-320.png') });
  }

  await browser.close();
}

capture();
