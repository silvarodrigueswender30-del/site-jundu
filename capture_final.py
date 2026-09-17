import asyncio
import os
from playwright.async_api import async_playwright

base_dir = r"C:\Users\Teste\Downloads\Restaurante"
qa_dir = os.path.join(base_dir, "docs", "qa", "final")
os.makedirs(qa_dir, exist_ok=True)

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        url = "http://localhost:3000/"

        page = await browser.new_page(viewport={"width": 1440, "height": 1000})
        try:
            print("Capturing desktop at 1440px...")
            await page.goto(url, wait_until="networkidle")

            # Scroll down to ensure everything renders
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(2000)

            # Desktop full page
            desktop_full_path = os.path.join(qa_dir, "desktop-full.png")
            await page.screenshot(path=desktop_full_path, full_page=True)
            print(f"  Saved: {desktop_full_path}")

        except Exception as e:
            print(f"  FAILED Desktop: {e}")
            
        # Mobile viewport
        try:
            print("Capturing mobile at 390px...")
            await page.set_viewport_size({"width": 390, "height": 844})
            await page.goto(url, wait_until="networkidle")
            
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(2000)
            
            mobile_full_path = os.path.join(qa_dir, "mobile-full.png")
            await page.screenshot(path=mobile_full_path, full_page=True)
            print(f"  Saved: {mobile_full_path}")
            
        except Exception as e:
            print(f"  FAILED Mobile: {e}")

        finally:
            await page.close()

        await browser.close()
        print("\nDone.")

if __name__ == "__main__":
    asyncio.run(capture())
