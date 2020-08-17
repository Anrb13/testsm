//Тесты на новый хедер (кука A2)
const {chromium, devices, webkit} = require('playwright');
const { mUrl } = require('../url');
const { cookieA1, cookieA2, cookieBanner, cookieCityConfirmed } = require('../cookies');
const { burger, smLogo, search, searchInput, clearSearch, 
        closeSearch, profile, basket, } = require('./pageObject/header');

const iPhone = devices['iPhone 8'];
// const pixel2 = 'Pixel 2';

describe('Header tests', () => {
    let browser;
    let context;
    let page;

    beforeAll( async () => {
        browser = await chromium.launch({ headless: false, slowMo: 300 });
        context = await browser.newContext({ ...devices[iPhone], deviceScaleFactor: 1, });
        await context.addCookies([ cookieA2, cookieBanner, cookieCityConfirmed, ]);
    });
    beforeEach( async () => {
        page = await context.newPage();
        await page.goto(mUrl);
    });
    afterEach( async () => {
        await page.close();
    });
    afterAll( async () => {
        await browser.close();
    });

    test('Burger icon opens the menu and close it', async () => {
        await burger(page, 'new');
        await page.waitForSelector('text=/Женщинам/');
        await burger(page, 'new');
        await page.waitForSelector('.header-icon-bg-search');
    });
});