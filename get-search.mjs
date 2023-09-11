import puppeteer from "puppeteer";
const browser = await puppeteer.launch()
const page = await browser.newPage();
await page.goto("https://duckduckgo.com");
await page.screenshot({path:"duckduckgo.com.png"});
await page.close();
await browser.close();