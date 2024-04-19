const puppeteer = require('puppeteer');

async function monitorWebsite(){
  const browser = await puppeteer.launch({ headless: true});
  const page = await browser.newPage();

  // Navigates to target website
  await page.goto('https://fezrecords.com/s/shop');
  // https://www.fezrecords.com/s/search?page=1&limit=30&sort_by=created_date&sort_order=desc&q=swift,%20taylor

  // checks for updates
  async function checkForUpdates() {
    const newItemExits = await page.evaluate(() => {
      // Check if specific element representing a new item exists
      const newItemElement = document.querySelector('.product-group');
      return newItemElement;
    })
  }
// If browser is closed out
  await browser.close();
