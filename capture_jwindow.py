import asyncio
import os
from playwright.async_api import async_playwright

base_dir = r"C:\Users\Teste\Downloads\Restaurante"
qa_dir = os.path.join(base_dir, "docs", "qa", "jwindow")
os.makedirs(qa_dir, exist_ok=True)

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        url = "http://localhost:3000/"

        viewports = [
            {"width": 1440, "height": 1200, "name": "1440px"},
            {"width": 1280, "height": 1000, "name": "1280px"},
            {"width": 768, "height": 1024, "name": "768px"},
            {"width": 430, "height": 932, "name": "430px"},
            {"width": 390, "height": 844, "name": "390px"},
            {"width": 360, "height": 800, "name": "360px"},
        ]

        for vp in viewports:
            page = await browser.new_page(viewport={"width": vp["width"], "height": vp["height"]})
            try:
                print(f"Capturing section at {vp['name']}...")
                await page.goto(url, wait_until="networkidle")

                section = page.locator('[data-section="j-window"]')
                await section.scroll_into_view_if_needed()
                await page.wait_for_timeout(1200)

                section_path = os.path.join(qa_dir, f"jwindow-section-{vp['name']}.png")
                await section.screenshot(path=section_path)
                print(f"  Saved: {section_path}")

            except Exception as e:
                print(f"  FAILED {vp['name']}: {e}")
            finally:
                await page.close()

        await browser.close()
        print("\nDone.")

if __name__ == "__main__":
    asyncio.run(capture())
