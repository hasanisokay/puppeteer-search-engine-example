import puppeteer from "puppeteer";
const browser = await puppeteer.launch({
  headless: false,
});
const page = await browser.newPage();
await page.goto("https://duckduckgo.com");
await page.waitForSelector("#searchbox_input");
await page.type("#searchbox_input", "hasan");
await page.click(`[aria-label='Search']`);
await page.waitForSelector(".react-results--main");
await page.screenshot({ path: "duckduckgo.com.png" });
const resultsHeading = await page.evaluate(() => {
  let items = Array.from(document.querySelectorAll("h2"));
  return items.map((item) => item.innerText);
});
console.log(resultsHeading)
await page.close();
await browser.close();
