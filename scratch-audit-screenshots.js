const puppeteer = require('puppeteer');
const path = require('path');

async function autoScroll(page) {
    await page.evaluate(async () => {
        // Hide sticky headers before full page capture to prevent repeating
        const headers = document.querySelectorAll('header, .sticky, [class*="sticky"], [class*="fixed"]');
        headers.forEach(h => h.style.position = 'absolute');
        
        await new Promise((resolve) => {
            let totalHeight = 0;
            let distance = 200;
            let timer = setInterval(() => {
                let scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                if (totalHeight >= scrollHeight - window.innerHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

async function takeScreenshots() {
  const browser = await puppeteer.launch();
  const dest = 'C:\\Users\\Teste\\.gemini\\antigravity\\brain\\4680bea1-4001-4e22-985d-2b40896d9f5f';
  
  const sizes = [
    { w: 1440, h: 1000 },
    { w: 390, h: 844 }
  ];

  try {
    for (const size of sizes) {
      const page = await browser.newPage();
      await page.setViewport({ width: size.w, height: size.h });
      await page.goto('http://localhost:3001', { waitUntil: 'domcontentloaded' });
      await autoScroll(page);
      await new Promise(r => setTimeout(r, 2000));
      
      // Captura completa
      await page.screenshot({ path: path.join(dest, `audit-full-${size.w}.png`), fullPage: true });
      
      if (size.w === 1440) {
        const sections = [
          { name: 'manifesto', selector: '[data-section="brand-manifesto"]' },
          { name: 'timeline', selector: '[data-section="brand-timeline"]' },
          { name: 'gastronomia', selector: '[data-section="gastronomy-pillars"]' },
          { name: 'arquitetura', selector: '[data-section="architectural-gallery"]' },
          { name: 'eventos', selector: '[data-section="events-showcase"]' },
          { name: 'natureza', selector: '[data-section="nature-commitment"]' },
          { name: 'cta', selector: '#reserva' },
          { name: 'footer', selector: 'footer' }
        ];

        for (const sec of sections) {
          const el = await page.$(sec.selector);
          if (el) {
            await el.screenshot({ path: path.join(dest, `audit-${sec.name}-1440.png`) });
          }
        }
      }
      
      await page.close();
    }
  } catch (e) {
    console.error(e);
  }
  
  await browser.close();
}
takeScreenshots();
