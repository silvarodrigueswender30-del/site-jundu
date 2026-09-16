import asyncio
import os
from playwright.async_api import async_playwright

base_dir = r"C:\Users\Teste\Downloads\Restaurante"
qa_dir = os.path.join(base_dir, "docs", "qa", "editorial")
os.makedirs(qa_dir, exist_ok=True)

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        
        viewports = [
            {"width": 1440, "height": 1200, "name": "1440px"},
            {"width": 1280, "height": 1000, "name": "1280px"}
        ]
        
        url = "http://localhost:3001/"
        
        for vp in viewports:
            page = await browser.new_page(viewport={"width": vp["width"], "height": vp["height"]})
            try:
                print(f"Navigating to {url} at {vp['name']}...")
                await page.goto(url, wait_until="networkidle")
                
                # Scroll a bit to trigger animations
                await page.evaluate("window.scrollBy(0, 700)")
                await page.wait_for_timeout(1500)
                
                screenshot_path = os.path.join(qa_dir, f"editorial-section-{vp['name']}.png")
                
                # Capture specifically the locator as requested
                section = page.locator('[data-section="editorial-intro"]')
                await section.screenshot(path=screenshot_path)
                print(f"Saved {screenshot_path}")
            except Exception as e:
                print(f"Failed to capture {vp['name']}: {e}")
            finally:
                await page.close()
                
        await browser.close()

if __name__ == "__main__":
    asyncio.run(capture())
