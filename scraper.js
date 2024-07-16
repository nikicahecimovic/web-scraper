const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// Add stealth plugin to puppeteer
puppeteer.use(StealthPlugin());

(async () => {
  // Get the URL from the command line arguments
  const url = process.argv[2];
  if (!url) {
    console.error('Please provide a URL as the first argument');
    process.exit(1);
  }

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Set user-agent and other necessary headers
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9'
  });

  try {
    // Open the URL
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Wait for necessary elements to be available
    await page.waitForSelector('#root > div > div.cG3B1 > div.XLH5_ > aside > article > section > div > div.GOIOV.fqe3L.EevEz', { timeout: 60000 });

    // Extract car details using the provided CSS selectors
    const details = await page.evaluate(() => {
      const getTextContent = (selector) => {
        const element = document.querySelector(selector);
        return element ? element.textContent.trim() : null;
      };

      return {
        makeAndModel: getTextContent('#root > div > div.cG3B1 > div.XLH5_ > aside > article > section > div > h2'),
        title: getTextContent('#root > div > div.cG3B1 > div.XLH5_ > aside > article > section > div > div.GOIOV.fqe3L.EevEz'),
        price: getTextContent('#root > div > div.cG3B1 > div.XLH5_ > aside > article > section > div > div.wNWsk > div.O9R2o > div:nth-child(1) > div'),
        km: getTextContent('#root > div > div.cG3B1 > div.XLH5_ > div > article:nth-child(2) > section > div > div > div:nth-child(1) > div > div.geJSa'),
        power: getTextContent('#root > div > div.cG3B1 > div.XLH5_ > div > article:nth-child(2) > section > div > div > div:nth-child(2) > div > div.geJSa'),
        fuelType: getTextContent('#root > div > div.cG3B1 > div.XLH5_ > div > article:nth-child(2) > section > div > div > div:nth-child(3) > div > div.geJSa'),
        transmission: getTextContent('#root > div > div.cG3B1 > div.XLH5_ > div > article:nth-child(2) > section > div > div > div:nth-child(4) > div > div.geJSa'),
        dateOfManufacturing: getTextContent('#root > div > div.cG3B1 > div.XLH5_ > div > article:nth-child(2) > section > div > div > div:nth-child(5) > div > div.geJSa'),
        co2: getTextContent('#root > div > div.cG3B1 > div.XLH5_ > div > article:nth-child(3) > section > div > div > dl > dd:nth-child(20)'),
        description: getTextContent('#root > div > div.cG3B1 > div.XLH5_ > div > article:nth-child(6) > section > div > div > div'),
      };
    });

    // Print the details
    console.log(details);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
})();
