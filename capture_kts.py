import asyncio
import os
from playwright.async_api import async_playwright

base_dir = r"C:\Users\Teste\Downloads\Restaurante"
qa_dir = os.path.join(base_dir, "docs", "qa", "kitchen")
os.makedirs(qa_dir, exist_ok=True)

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        url = "http://localhost:3000/"

        page = await browser.new_page(viewport={"width": 1440, "height": 1000})
        try:
            print("Capturing Kitchen to Screen at 1440px...")
            await page.goto(url, wait_until="networkidle")

            section = page.locator('[data-section="kitchen-to-screen"]')
            await section.scroll_into_view_if_needed()
            await page.wait_for_timeout(2000)

            kts_path = os.path.join(qa_dir, "kts-1440px.png")
            await section.screenshot(path=kts_path)
            print(f"  Saved: {kts_path}")

        except Exception as e:
            print(f"  FAILED: {e}")
        finally:
            await page.close()

        await browser.close()
        print("\nDone.")

if __name__ == "__main__":
    asyncio.run(capture())
