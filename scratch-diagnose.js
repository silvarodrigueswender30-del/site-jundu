const puppeteer = require('puppeteer');

async function diagnose() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3001', { waitUntil: 'domcontentloaded' });
  
  // wait for basic load
  await new Promise(r => setTimeout(r, 2000));

  const report = await page.evaluate(() => {
    const wWidth = window.innerWidth;
    const docWidth = document.documentElement.scrollWidth;
    const isOverflowing = docWidth > wWidth;
    
    let badElements = [];
    if (isOverflowing) {
      const all = document.querySelectorAll('*');
      all.forEach(el => {
        const box = el.getBoundingClientRect();
        if (box.width > wWidth || box.right > wWidth) {
          badElements.push({
            tag: el.tagName,
            className: el.className,
            width: box.width,
            right: box.right
          });
        }
      });
    }
    
    return {
      windowWidth: wWidth,
      documentWidth: docWidth,
      overflow: isOverflowing,
      badElements: badElements.slice(0, 10) // top 10
    };
  });
  
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
}
diagnose();
