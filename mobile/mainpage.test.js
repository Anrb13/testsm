const { mUrl, engine, launchOptions, contextOptions } = require('../utils');
const { cookieBanner, cookieCityConfirmed, } = require('../cookies');
const { catalogBreadcrumbsText } = require('./pages/catalog')
const { allCatalogTabsSelector, footerMenuLinkSelectorBuilder } = require('./pages/mainpage');
const { closeMobileAppCommerc, downloadLinkMobileAppCommerc, brandMain, 
        allBrandsMain, catalogTabsMain, sportMain, nameOfSportMain, 
        allSportsMain, footerMenuSectionMain, footerMenuLinkMain, 
        bannerMainSwipe, footerMenuLinkText } = require('./actions/mainpage')

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

    // test('First brand on carousel clickable and correctly redirect', async () => {
    //     await brandMain(page, 1);
    //     await expect(await catalogBreadcrumbsText(page, 1)).toBe('Бренды');
    //     await expect(page.url()).toContain('catalog/brendy');
    // });

    // test('Third brand on carousel clickable and correctly redirect', async () => {
    //     await brandMain(page, 3);
    //     await expect(await catalogBreadcrumbsText(page, 1)).toBe('Бренды');
    //     await expect(page.url()).toContain('catalog/brendy');
    // });

    // test('All brands button on carousel clickable and correctly redirect', async () => {
    //     await allBrandsMain(page);
    //     await page.waitForSelector('text=/Поиск по брендам/');
    //     await expect(page.url()).toContain('catalog/brendy');
    // });

    // test('Womens wear tab clickable and correctly redirect to catalog page', async () => {
    //     await catalogTabsMain(page, 1);
    //     await expect(await catalogBreadcrumbsText(page)).toBe('Женская одежда');
    //     await expect(page.url()).toContain('catalog/zhenskaya_odezhda');
    // });

    // test('Womens footwear tab clickable and correctly redirect to catalog page', async () => {
    //     await page.hover(allCatalogTabsSelector);
    //     await catalogTabsMain(page, 2);
    //     await expect(await catalogBreadcrumbsText(page)).toBe('Женская обувь');
    //     await expect(page.url()).toContain('catalog/zhenskaya_obuv');
    // }); // ToDo: выпилить шерлок со страницы при этом тесте (или вообще во всех тестах)

    // test('Mens wear tab clickable and correctly redirect to catalog page', async () => {
    //     await catalogTabsMain(page, 3);
    //     await expect(await catalogBreadcrumbsText(page)).toBe('Мужская одежда');
    //     await expect(page.url()).toContain('catalog/muzhskaya_odezhda');
    // });

    // test('Mens footwear tab clickable and correctly redirect to catalog page', async () => {
    //     await page.hover(allCatalogTabsSelector);
    //     await catalogTabsMain(page, 4);
    //     await expect(await catalogBreadcrumbsText(page)).toBe('Мужская обувь');
    //     await expect(page.url()).toContain('catalog/muzhskaya_obuv');
    // });

    // test('Boys wear tab clickable and correctly redirect to catalog page', async () => {
    //     await catalogTabsMain(page, 5);
    //     await expect(await catalogBreadcrumbsText(page)).toBe('Одежда для мальчиков');
    //     await expect(page.url()).toContain('catalog/odezhda_dlya_malchikov');
    // });

    // test('Boys footwear tab clickable and correctly redirect to catalog page', async () => {
    //     await catalogTabsMain(page, 6);
    //     await expect(await catalogBreadcrumbsText(page)).toBe('Обувь для мальчиков');
    //     await expect(page.url()).toContain('catalog/obuv_dlya_malchikov');
    // });

    // test('Girls wear tab clickable and correctly redirect to catalog page', async () => {
    //     await catalogTabsMain(page, 7);
    //     await expect(await catalogBreadcrumbsText(page)).toBe('Одежда для девочек');
    //     await expect(page.url()).toContain('catalog/odezhda_dlya_devochek');
    // });

    // test('Girls footwear tab clickable and correctly redirect to catalog page', async () => {
    //     await catalogTabsMain(page, 8);
    //     await expect(await catalogBreadcrumbsText(page)).toBe('Обувь для девочек');
    //     await expect(page.url()).toContain('catalog/obuv_dlya_devochek');
    // });

    // test('Sports.Running icon correctly redirect to catalog page', async () => {
    //     const nameOfSport = await nameOfSportMain(page, 1);
    //     await sportMain(page, 1);
    //     await expect(' ' + await catalogBreadcrumbsText(page, 2)).toBe(nameOfSport);
    //     await expect(page.url()).toContain('vidy_sporta_/beg');
    // });
    
    // test('Sports.Fitness icon correctly redirect to catalog page', async () => {
    //     await sportMain(page, 2);
    //     await expect(await catalogBreadcrumbsText(page, 1)).toBe('Тренажёры и фитнес');
    //     await expect(page.url()).toContain('catalog/trenazhery_i_fitnes_');
    // });

    // test('Sports.Boxing icon correctly redirect to catalog page', async () => {
    //     const nameOfSport = await nameOfSportMain(page, 3);
    //     await sportMain(page, 3);
    //     await expect(' ' + await catalogBreadcrumbsText(page, 2)).toBe(nameOfSport);
    //     await expect(page.url()).toContain('vidy_sporta_/boks');
    // });

    // test('Sports.Swimming icon correctly redirect to catalog page', async () => {
    //     const nameOfSport = await nameOfSportMain(page, 4);
    //     await sportMain(page, 4);
    //     await expect(' ' + await catalogBreadcrumbsText(page, 2)).toBe(nameOfSport);
    //     await expect(page.url()).toContain('vidy_sporta_/plavanie');
    // });
    
    // test('Sports.Tennis icon correctly redirect to catalog page', async () => {
    //     const nameOfSport = await nameOfSportMain(page, 5);
    //     await sportMain(page, 5);
    //     await expect(' ' + await catalogBreadcrumbsText(page, 2)).toBe(nameOfSport);
    //     await expect(page.url()).toContain('vidy_sporta_/tennis');
    // });

    // test('Sports.Football icon correctly redirect to catalog page', async () => {
    //     const nameOfSport = await nameOfSportMain(page, 6);
    //     await sportMain(page, 6);
    //     await expect(' ' + await catalogBreadcrumbsText(page, 2)).toBe(nameOfSport);
    //     await expect(page.url()).toContain('vidy_sporta_/futbol');
    // });

    // test('Sports.Velosport icon correctly redirect to catalog page', async () => {
    //     const nameOfSport = await nameOfSportMain(page, 7);
    //     await sportMain(page, 7);
    //     await expect(' ' + await catalogBreadcrumbsText(page, 2)).toBe(nameOfSport);
    //     await expect(page.url()).toContain('vidy_sporta_/velosport');
    // });

    // test('ALL Sports icon correctly redirect to catalog page', async () => {
    //     await allSportsMain(page);
    //     await expect(await catalogBreadcrumbsText(page, 1)).toBe('Виды спорта');
    //     await expect(page.url()).toContain('vidy_sporta_');
    // });

    for(let n of sections) {
        for(let m of sections) {

        }
    }

    test('Footer menu link correctly redirect to catalog page', async (n, m) => {
        await footerMenuSectionMain(page, n);
        const expectedText = await footerMenuLinkText(page, n, m);
        await footerMenuLinkMain(page, n, m);
        await expect(expectedText).toBe(await catalogBreadcrumbsText(page, 1));
    });

    test('Footer menu link correctly redirect to catalog page', async () => {
        await footerMenuSectionMain(page, 1);
        const expectedText = await footerMenuLinkText(page, 1, 1);
        await footerMenuLinkMain(page, 1, 1);
        await expect(expectedText).toBe(await catalogBreadcrumbsText(page, 1));
    });
});
