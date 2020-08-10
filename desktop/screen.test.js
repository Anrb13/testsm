const {chromium, webkit, firefox} = require('playwright');
const { baseUrl } = require('../url');
const { cookieA1, cookieA2, cookieCityConfirmed } = require('../cookies');
const { headless } = require('../config');

const browsers = [chromium, webkit, firefox];
const cookies = [ cookieA1,  cookieA2 ];
const isoDate = (new Date()).toISOString();
const formatedDate = isoDate.replace(/\:/g, '-'); //":" запрещен в названии файлов windows

const test = async (browserType, cookie) => {
    const browser = await browserType.launch({ headless: false, slowMo: 50 });
    const context = await browser.newContext();
    const page = await context.newPage();
    
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