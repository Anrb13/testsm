const {chromium, webkit, firefox} = require('playwright');
const { baseUrl } = require('./config');

describe('test one', () => {
    const browsers = [chromium, webkit, firefox];

    for(const browserType of browsers) {
        const fastUrl = 'https://www.sportmaster.ru/oferta/?noscript=1';
        let browser;
        let page;

        beforeEach(async () => {
            browser = await browserType.launch({ headless: false });
            page = await browser.newPage();
        });

        test (`should ${browserType.name()}`, async () => {
            const timeout = 0;
            await page.goto(fastUrl, { timeout });
            await page.click('#logoImage');
            await page.waitForTimeout(2000);
        });

        afterEach(async () => {
            await browser.close();
        });
    };
});