const puppeteer = require('puppeteer');
const path = require('path');
const dest = 'C:\\Users\\Teste\\.gemini\\antigravity\\brain\\4680bea1-4001-4e22-985d-2b40896d9f5f';

const viewports = [
  {w:1440,h:900,l:'1440'},
  {w:1280,h:800,l:'1280'},
  {w:768,h:1024,l:'768'},
  {w:390,h:844,l:'390'},
  {w:320,h:700,l:'320'},
];

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (const vp of viewports) {
    await page.setViewport({width: vp.w, height: vp.h});
    await page.goto('http://localhost:3001', {waitUntil: 'networkidle0', timeout: 30000});
    await new Promise(r => setTimeout(r, 2500));
    await page.evaluate(() => {
      document.querySelectorAll('[class*="sticky"],[class*="fixed"],header').forEach(h => h.style.position = 'absolute');
    });
    const bambu = await page.$('[data-section="architectural-gallery"]');
    if (bambu) await bambu.screenshot({path: path.join(dest, 'bamboo-after-' + vp.l + '.png')});
    const terr = await page.$('[data-section="brand-manifesto"]');
    if (terr) await terr.screenshot({path: path.join(dest, 'territory-reg2-' + vp.l + '.png')});
    console.log('done', vp.l);
  }
  await browser.close();
  console.log('ALL DONE');
}

run();
