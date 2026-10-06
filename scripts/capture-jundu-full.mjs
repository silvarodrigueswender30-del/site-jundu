import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

// Uso: node scripts/capture-jundu-full.mjs [url] [sufixo]
const URL = process.argv[2] || 'https://site-jundu.vercel.app/';
const SUFFIX = process.argv[3] || 'full';
const WIDTHS = [1440, 768, 390];

async function captureAt(browser, width, outputDir) {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 900, deviceScaleFactor: width < 800 ? 2 : 1.5 });
  await page.evaluateOnNewDocument(() => sessionStorage.setItem('jundu-preloader-seen', 'true'));
  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 120000 });
  await new Promise(r => setTimeout(r, 1500));

  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y <= total; y += 450) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await new Promise(r => setTimeout(r, 120));
  }
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await new Promise(r => setTimeout(r, 1500));
  await page.evaluate(() => window.scrollTo(0, 0));

  // Força a exibição dos textos animados (reveal) para o print
  await page.evaluate(() => {
    document.querySelectorAll('main .opacity-0, main [style*="opacity: 0"]').forEach((el) => {
      el.classList.remove('opacity-0');
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  });
  await new Promise(r => setTimeout(r, 2000));

  const out = path.join(outputDir, `jundu-home-${SUFFIX}-${width}px.png`);
  await page.screenshot({ path: out, fullPage: true, type: 'png' });
  console.log('Saved', out);
  await page.close();
}

const outputDir = path.resolve(process.cwd(), 'docs/qa/captures');
fs.mkdirSync(outputDir, { recursive: true });
const browser = await puppeteer.launch({
  headless: true,
  protocolTimeout: 240000,
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  args: ['--no-sandbox', '--disable-gpu'],
});
try {
  for (const w of WIDTHS) await captureAt(browser, w, outputDir);
} finally {
  await browser.close();
}
