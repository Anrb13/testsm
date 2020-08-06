const {chromium, devices, webkit} = require('playwright');
const { mUrl } = require('../url');
const { cookieA1, cookieA2, cookieApple, cookieBanner } = require('../cookie');
const { confirmCity } = require('./confirmCityModal');
const { burger, smLogo, search, searchInput, clearSearch, closeSearch, profile, basket, } = require('./header')

const iPhone = devices['iPhone 8'];
// const pixel2 = 'Pixel 2';

const headerTest = async() => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({ ...iPhone });
    const page = await context.newPage();
    await context.addCookies([cookieA2, cookieApple, cookieBanner]);
    
    await page.goto(mUrl);
    await page.waitForTimeout(2000);
    await confirmCity(page, 'new');
    await page.waitForTimeout(2000);
    await burger(page, 'new');
    await page.waitForTimeout(2000);
    await burger(page, 'new');
    await page.waitForTimeout(2000);
    await search(page, 'new');
    await page.waitForTimeout(2000);
    await searchInput(page, 'new', '123123');
    await page.waitForTimeout(2000);
    await closeSearch(page, 'new');
    await page.waitForTimeout(2000);
    await basket(page, 'new');
    await page.waitForTimeout(2000);
    await smLogo(page, 'new');
    await page.waitForTimeout(2000);
    await profile(page, 'new');
    await page.waitForTimeout(2000);
    await profile(page, 'new');
};

headerTest();