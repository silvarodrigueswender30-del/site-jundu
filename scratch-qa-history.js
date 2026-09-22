const puppeteer = require('puppeteer');
const path = require('path');
const dest = 'C:\\\\Users\\\\Teste\\\\.gemini\\\\antigravity\\\\brain\\\\4680bea1-4001-4e22-985d-2b40896d9f5f';

const viewports = [
  {w:1440,h:900,l:'1440'},
  {w:1280,h:800,l:'1280'},
  {w:1024,h:768,l:'1024'},
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
    await new Promise(r => setTimeout(r, 2000));
    
    // QA Hero
    if (vp.w === 1440 || vp.w === 390) {
      await page.screenshot({path: path.join(dest, 'qa-hero-' + vp.l + '.png')});
    }
    
    // Scroll to History
    await page.evaluate(() => {
      const els = Array.from(document.querySelectorAll('*'));
      const el = els.find(e => e.textContent && e.textContent.includes('Uma história que'));
      if(el) {
         const section = el.closest('section');
         if(section) section.scrollIntoView({block: 'start'});
      }
    });
    
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: path.join(dest, 'qa-history-' + vp.l + '.png')});
    
    console.log('done qa', vp.l);
  }
  await browser.close();
  console.log('ALL DONE QA');
}

run();
