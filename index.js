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
      return !!newItemElement;
    });

    if (newItemExists){
      console.log('New Item detected!');
      // Update to send notification
    }
  }

  // Checks every minute
  setInterval(checkForUpdates, 6000);

  // Stops monitoring after an hour

  setTimeout(() => {
    browser.close();
  }, 3600000);

}

monitorWebsite();