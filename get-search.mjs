import puppeteer from "puppeteer";
const browser = await puppeteer.launch({
    headless: true
})
const page = await browser.newPage();
await page.goto("https://duckduckgo.com");
await page.waitForSelector("#searchbox_input")
await page.type("#searchbox_input", "hasan")
await page.click(`[aria-label='Search']`)
await page.waitForSelector('.react-results--main')
await page.screenshot({path:"duckduckgo.com.png"});
await page.close();
await browser.close();