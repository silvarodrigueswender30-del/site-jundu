import asyncio
from playwright.async_api import async_playwright

async def debug():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1440, "height": 1200})
        await page.goto("http://localhost:3001/", wait_until="networkidle")
        
        # Check the stories section dimensions
        section = page.locator('[data-section="vertical-stories"]')
        box = await section.bounding_box()
        print(f"Section bounding box: {box}")
        
        # Check if the desktop gallery exists
        gallery = page.locator('[data-section="vertical-stories"] .hidden.lg\\:flex')
        count = await gallery.count()
        print(f"Desktop gallery count: {count}")
        
        if count > 0:
            gbox = await gallery.bounding_box()
            print(f"Gallery bounding box: {gbox}")
            
            # Count children
            children = await gallery.locator("> div").count()
            print(f"Gallery children count: {children}")
            
            for i in range(children):
                child = gallery.locator("> div").nth(i)
                cbox = await child.bounding_box()
                opacity = await child.evaluate("el => window.getComputedStyle(el).opacity")
                display = await child.evaluate("el => window.getComputedStyle(el).display")
                print(f"  Card {i}: box={cbox}, opacity={opacity}, display={display}")
        
        # Check isVisible state
        visible_state = await page.evaluate("() => { const el = document.querySelector('[data-section=\"vertical-stories\"]'); return el ? el.getBoundingClientRect() : null; }")
        print(f"Section rect: {visible_state}")
        
        # Try scrolling and checking again
        await page.evaluate("window.scrollTo(0, 2000)")
        await page.wait_for_timeout(2000)
        
        if count > 0:
            for i in range(await gallery.locator("> div").count()):
                child = gallery.locator("> div").nth(i)
                opacity = await child.evaluate("el => window.getComputedStyle(el).opacity")
                print(f"  Card {i} after scroll: opacity={opacity}")
        
        await browser.close()

asyncio.run(debug())
