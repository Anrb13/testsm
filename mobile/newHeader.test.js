const { mUrl, engine, launchOptions, contextOptions } = require('../utils');
const { cookieA2, cookieBanner, cookieCityConfirmed, cookieUniverse, } = require('../cookies');
const { burger, smLogo, search, searchByRequest, clearSearch, 
        closeSearch, profile, basket, headerSelectors, } = require('./pages/header');

//Тесты на новый хедер (кука A2)
describe.skip('NEW header tests', () => {
    let browser;
    let context;
    let page;

    beforeAll( async () => {
        browser = await engine.launch(launchOptions);
        context = await browser.newContext(contextOptions);
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
        await page.waitForSelector(headerSelectors.new.searchIcon);
    });

    test('Search icon opens input, search and input icons works correctly', async () => {
        await search(page, 'new');
        await page.waitForSelector(headerSelectors.new.searchInput);
        await searchByRequest(page, 'new', 'nike air');
        await search(page, 'new');
        await clearSearch(page, 'new');
        await closeSearch(page, 'new');
        await page.waitForSelector(headerSelectors.new.burgerIcon);
    });

    //TODO: возможно дублирование при реализации тестов авторизации
    test('Profile icon opens the authorization widget and close it', async () => {
        await profile(page, 'new');
        await page.waitForSelector('text=/Войти/');
        await page.waitForSelector('text=/Регистрация/');
        await profile(page, 'new');
        await page.waitForSelector(headerSelectors.new.searchIcon);
    });

    test('Basket icon should redirect to /basket/checkout.do', async () => {
        await basket(page, 'new');
        await page.waitForSelector('text=/Корзина/');
    });

    test('SM Logo should redirect to main page', async () => {
        await page.goto(mUrl + '/catalog');
        await smLogo(page, 'new');
        await expect(page.url()).toBe(mUrl + '/');
    });
});
