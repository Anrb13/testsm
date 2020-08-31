const { mUrl, engine, contextOptions, launchOptions } = require('../utils');
const { cookieA1, cookieBanner, cookieCityConfirmed, } = require('../cookies');
const { burger, smLogo, search, searchByRequest, basket, headerSelectors } = require('./pages/header');
    
//Тесты на старый хедер
describe('OLD header tests', () => {
    let browser;
    let context;
    let page;

    beforeAll( async () => {
        browser = await engine.launch(launchOptions);
        context = await browser.newContext(contextOptions);
        await context.addCookies([ cookieCityConfirmed, cookieBanner, cookieA1, ]);
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
    
    test('Burger icon opens sidebar and close it', async () => {
        await burger(page, 'old');
        await page.waitForSelector('text=/Каталог/');
        await burger(page, 'old');
        await page.waitForSelector(headerSelectors.old.searchIcon);
    });

    test('Search icon opens input and close it, search work correctly', async () => {
        await search(page, 'old');
        await page.waitForSelector(headerSelectors.old.searchInput);
        await searchByRequest(page, 'old', 'nike air');
        await search(page, 'old');
        //TODO: придумать проверку, что инпут закрыт
    });

    test('Basket icon should redirect to /basket/checkout.do', async () => {
        await basket(page, 'old');
        await page.waitForSelector('text=/Корзина/');
    });

    test('SM Logo redirect to main page', async () => {
        await page.goto(mUrl + '/catalog');
        await smLogo(page, 'old');
        await expect(page.url()).toBe(mUrl + '/');
    });
});
