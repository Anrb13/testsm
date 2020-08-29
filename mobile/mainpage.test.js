const { mUrl, engine, launchOptions, contextOptions } = require('../utils');
const { cookieBanner, cookieCityConfirmed, } = require('../cookies');
const { pageBreadcrumbsText } = require('./pageObject/catalog')
const { closeMobileAppCommerc, downloadLinkMobileAppCommerc, brandMain, 
        allBrandsMain, genderMain, sportMain, allSportsMain, 
        footerMenuSectionMain, footerMenuLinkMain, } = require('./pageObject/mainpage');

describe.skip('Fullscreen banner and ', () => {
    
});

describe('MainPage tests', () => {
    let browser;
    let context;
    let page;

    beforeAll( async () => {
        browser = await engine.launch(launchOptions);
        context = await browser.newContext(contextOptions);
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

    test('First brand on carousel clickable and correctly redirect', async () => {
        await brandMain(page, 1);
        await expect(await pageBreadcrumbsText(page, 1)).toBe('Бренды');
        await expect(page.url()).toContain('catalog/brendy');
    });

    test('Third brand on carousel clickable and correctly redirect', async () => {
        await brandMain(page, 3);
        await expect(await pageBreadcrumbsText(page, 1)).toBe('Бренды');
        await expect(page.url()).toContain('catalog/brendy');
    });

    test('All brands button on carousel clickable and correctly redirect', async () => {
        await allBrandsMain(page);
        await page.waitForSelector('text=/Поиск по брендам/');
        await expect(page.url()).toContain('catalog/brendy');
    });
});
