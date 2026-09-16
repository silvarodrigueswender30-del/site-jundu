import asyncio
from playwright.async_api import async_playwright

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        
        viewports = [
            {"width": 1440, "height": 900, "name": "1440px"},
            {"width": 1280, "height": 800, "name": "1280px"},
            {"width": 768, "height": 1024, "name": "768px"},
            {"width": 430, "height": 932, "name": "430px"},
            {"width": 390, "height": 844, "name": "390px"},
            {"width": 360, "height": 640, "name": "360px"},
        ]
        
        url = "http://localhost:3001/design-system"
        
        for vp in viewports:
            page = await browser.new_page(viewport={"width": vp["width"], "height": vp["height"]})
            try:
                print(f"Navigating to {url} at {vp['name']}...")
                await page.goto(url, wait_until="networkidle")
                
                # Wait a bit for fonts and images to render
                await page.wait_for_timeout(2000)
                
                screenshot_path = f"docs/qa/design-system/capture_{vp['name']}.png"
                await page.screenshot(path=screenshot_path, full_page=True)
                print(f"Saved {screenshot_path}")
            except Exception as e:
                print(f"Failed to capture {vp['name']}: {e}")
            finally:
                await page.close()
                
        await browser.close()

if __name__ == "__main__":
    asyncio.run(capture())
