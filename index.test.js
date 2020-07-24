const {chromium, webkit, firefox} = require('playwright');
const { baseUrl } = require('./config');

describe('test one', () => {
    const isoDate = (new Date()).toISOString();
    const formatedDate = isoDate.replace(/\:/g, '-');
    
    for(const browserType of [chromium, webkit, firefox]) {
        test(`should ${browserType.name()}`, async (done) => {
            const browser = await browserType.launch({ headless: true });
            const page = await browser.newPage();
            const url = baseUrl(true); //true if noscript=1

            await page.goto(url, {timeout: 0});
            await page.screenshot({
                path: `screen/${formatedDate}_${browserType.name()}.jpeg`,
                // fullPage: true,
            });
            await browser.close();

            console.log('success ' + browserType.name());
        });
    }
});
