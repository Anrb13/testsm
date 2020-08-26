const {chromium, devices} = require('playwright');
const { mUrl, engine, device } = require('../utils');
const { cookieA1, cookieBanner, cookieCityConfirmed, } = require('../cookies');

describe('MainPage tests', () => {
    let browser;
    let context;
    let page;

    beforeAll( async () => {
        browser = await engine.launch({ headless: true, });
        context = await browser.newContext({ ...device, deviceScaleFactor: 1, });
        await context.addCookies([ cookieCityConfirmed, cookieBanner, ]);
    });
    
    beforeEach( async () => {
        page = await context.newPage();
        await page.goto(mUrl + '/?noscript=1', );
    });

    afterEach( async () => {
        await page.close();
    });

    afterAll( async () => {
        await browser.close();
    });

    test('bra ', async () => {
        
    });
});