const {chromium, devices, webkit} = require('playwright');
const { mUrl } = require('../url');
const { cookieA2, cookieBanner, cookieCityConfirmed, cookieUniverse, } = require('../cookies');
const { chooseSubcategory, breadcrumbs } = require('./pageObject/catalog');
describe('Example of Order Test', () => {
    let browser;
    let context;
    let page;

    beforeAll( async () => {
        browser = await chromium.launch({ headless: false, slowMo: 200 });
        context = await browser.newContext({ ...devices['iPhone 8'], deviceScaleFactor: 1, });
        await context.addCookies([ cookieCityConfirmed, cookieBanner, ]);
    });
    beforeEach( async () => {
        page = await context.newPage();
    });
    afterEach( async () => {
        await page.close();
    });
    afterAll( async () => {
        await browser.close();
    });
    test('should ', async () => {
        await page.goto(mUrl + '/catalog/vidy_sporta_/badminton' + '/?noscript=1', {waitUntil: 'networkidle'});
        await chooseSubcategory(page, 12);
        await page.waitForTimeout(2000);
        await breadcrumbs(page, 2)
        await page.waitForTimeout(2000);

    });
});
