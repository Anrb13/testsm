const {chromium, devices, webkit} = require('playwright');
const { mUrl } = require('../url');
const { cookieA1, cookieA2, cookieApple, cookieBanner, cookieCityConfirmed } = require('../cookie');
const { confirmCity } = require('./confirmCityModal');
const { burger, smLogo, search, searchInput, clearSearch, closeSearch, profile, basket, } = require('./header')

const iPhone = devices['iPhone 8'];
// const pixel2 = 'Pixel 2';

const headerTest = async() => {
    const browser = await chromium.launch({ headless: false, slowMo: 100, });
    const context = await browser.newContext({ ...iPhone, isMobile: true, });
    const page = await context.newPage();
    await context.addCookies([cookieA2, cookieApple, cookieBanner, /*cookieCityConfirmed*/]);
    
    await page.goto(mUrl);
    await confirmCity(page, 'new');
    await burger(page, 'new');
    await burger(page, 'new');
    await search(page, 'new');
    await searchInput(page, 'new', '123123');
    await closeSearch(page, 'new');
    await basket(page, 'new');
    await smLogo(page, 'new');
    await profile(page, 'new');
    await profile(page, 'new');
    await browser.close();
};

headerTest();