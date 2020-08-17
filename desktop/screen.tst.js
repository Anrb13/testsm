const {chromium, webkit, firefox} = require('playwright');
const { cookieA1, cookieA2, cookieCityConfirmed } = require('../cookies');
const { baseUrl } = require('../url');
const { getTime, } = require('../utils');

const browsers = [chromium, webkit, firefox];
const cookies = [ cookieA1,  cookieA2 ];

const test = async (browserType, cookie) => {
    const browser = await browserType.launch({ headless: false, slowMo: 50 });
    const context = await browser.newContext();
    const page = await context.newPage();
    const formatedDate = await getTime();
    
    await context.addCookies([ cookie, cookieCityConfirmed ]);
    await page.goto(baseUrl);
    await page.screenshot({
        path: `screenshots/${browserType.name()}/${formatedDate}_${browserType.name()}_${cookie.value}.jpeg`,
        // fullPage: true,
    });
    await browser.close();
};

for(let browserType of browsers) {
    for(let cookie of cookies) {
        test(browserType, cookie);
    };
};