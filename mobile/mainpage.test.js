const { mUrl, engine, launchOptions, contextOptions } = require('../utils');
const { cookieBanner, cookieCityConfirmed, } = require('../cookies');
const { catalogBreadcrumbsText } = require('./pages/catalog')
const { closeMobileAppCommerc, downloadLinkMobileAppCommerc, brandMain, 
        allBrandsMain, catalogTabsMain, sportMain, allSportsMain, 
        footerMenuSectionMain, footerMenuLinkMain, } = require('./pages/mainpage');

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
        await expect(await catalogBreadcrumbsText(page, 1)).toBe('Бренды');
        await expect(page.url()).toContain('catalog/brendy');
    });

    test('Third brand on carousel clickable and correctly redirect', async () => {
        await brandMain(page, 3);
        await expect(await catalogBreadcrumbsText(page, 1)).toBe('Бренды');
        await expect(page.url()).toContain('catalog/brendy');
    });

    test('All brands button on carousel clickable and correctly redirect', async () => {
        await allBrandsMain(page);
        await page.waitForSelector('text=/Поиск по брендам/');
        await expect(page.url()).toContain('catalog/brendy');
    });

    test('Womens wear tab clickable and correctly redirect to catalog page', async () => {
        await catalogTabsMain(page, 1);
        await expect(await catalogBreadcrumbsText(page)).toBe('Женская одежда');
        await expect(page.url()).toContain('catalog/zhenskaya_odezhda');
    });

    test('Womens footwear tab clickable and correctly redirect to catalog page', async () => {
        await page.click('esm-main-page-gender-links >> a:nth-child(2)', { position: { x: 1, y: 1 } });
        await expect(await catalogBreadcrumbsText(page)).toBe('Женская обувь');
        await expect(page.url()).toContain('catalog/zhenskaya_obuv');
    }); // ToDo: выпилить шерлок со страницы при этом тесте (или вообще во всех тестах)

    test('Mens wear tab clickable and correctly redirect to catalog page', async () => {
        await catalogTabsMain(page, 3);
        await expect(await catalogBreadcrumbsText(page)).toBe('Мужская одежда');
        await expect(page.url()).toContain('catalog/muzhskaya_odezhda');
    });

    test('Mens footwear tab clickable and correctly redirect to catalog page', async () => {
        await catalogTabsMain(page, 4);
        await expect(await catalogBreadcrumbsText(page)).toBe('Мужская обувь');
        await expect(page.url()).toContain('catalog/muzhskaya_obuv');
    });

    test('Boys wear tab clickable and correctly redirect to catalog page', async () => {
        await catalogTabsMain(page, 5);
        await expect(await catalogBreadcrumbsText(page)).toBe('Одежда для мальчиков');
        await expect(page.url()).toContain('catalog/odezhda_dlya_malchikov');
    });

    test('Boys footwear tab clickable and correctly redirect to catalog page', async () => {
        await catalogTabsMain(page, 6);
        await expect(await catalogBreadcrumbsText(page)).toBe('Обувь для мальчиков');
        await expect(page.url()).toContain('catalog/obuv_dlya_malchikov');
    });

    test('Girls wear tab clickable and correctly redirect to catalog page', async () => {
        await catalogTabsMain(page, 7);
        await expect(await catalogBreadcrumbsText(page)).toBe('Одежда для девочек');
        await expect(page.url()).toContain('catalog/odezhda_dlya_devochek');
    });

    test('Girls footwear tab clickable and correctly redirect to catalog page', async () => {
        await catalogTabsMain(page, 8);
        await expect(await catalogBreadcrumbsText(page)).toBe('Обувь для девочек');
        await expect(page.url()).toContain('catalog/obuv_dlya_devochek');
    });
});
