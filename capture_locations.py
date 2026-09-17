import asyncio
import os
from playwright.async_api import async_playwright

base_dir = r"C:\Users\Teste\Downloads\Restaurante"
qa_dir = os.path.join(base_dir, "docs", "qa", "locations")
os.makedirs(qa_dir, exist_ok=True)

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        url = "http://localhost:3000/"

        page = await browser.new_page(viewport={"width": 1440, "height": 1000})
        try:
            print("Capturing balanced state at 1440px...")
            await page.goto(url, wait_until="networkidle")

            section = page.locator('[data-section="locations-accordion"]')
            await section.scroll_into_view_if_needed()
            await page.wait_for_timeout(1200)

            balanced_path = os.path.join(qa_dir, "locations-1440px-balanced.png")
            await section.screenshot(path=balanced_path)
            print(f"  Saved: {balanced_path}")

            # Hover on the second item (index 1)
            print("Capturing expanded state at 1440px...")
            buttons = section.locator("button")
            await buttons.nth(1).hover()
            await page.wait_for_timeout(1200) # wait for transition

            expanded_path = os.path.join(qa_dir, "locations-1440px-expanded.png")
            await section.screenshot(path=expanded_path)
            print(f"  Saved: {expanded_path}")

        except Exception as e:
            print(f"  FAILED: {e}")
        finally:
            await page.close()

        await browser.close()
        print("\nDone.")

if __name__ == "__main__":
    asyncio.run(capture())
