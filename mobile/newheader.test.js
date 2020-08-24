const {chromium, devices, webkit} = require('playwright');
const { mUrl } = require('../url');
const { cookieA2, cookieBanner, cookieCityConfirmed, cookieUniverse, } = require('../cookies');
const { burger, smLogo, search, searchByRequest, clearSearch, 
        closeSearch, profile, basket, } = require('./pageObject/header');
    
//Тесты на новый хедер (кука A2)
describe('Header tests', () => {
    let browser;
    let context;
    let page;

    beforeAll( async () => {
        browser = await chromium.launch({ headless: false, slowMo: 200 });
        context = await browser.newContext({ ...devices['iPhone 8'], deviceScaleFactor: 1, });
        await context.addCookies([ cookieCityConfirmed, cookieA2, cookieBanner ]);
    });

    beforeEach( async () => {
        page = await context.newPage();
        await page.goto(mUrl + '/?noscript=1', {waitUntil: 'networkidle'});
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
    //TODO: возможно дублирование при реализации тестов авторизации
    test('Profile icon opens the authorization widget and close it', async () => {
        await profile(page, 'new');
        await page.waitForSelector('text=/Войти/');
        await page.waitForSelector('text=/Регистрация/');
        await profile(page, 'new');
        await page.waitForSelector('.header-icon-bg-search');
    });
});
