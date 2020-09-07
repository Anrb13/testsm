const { mUrl, engine, launchOptions, contextOptions } = require('../utils');
const { cookieBanner, cookieCityConfirmed, } = require('../cookies');
const { catalogBreadcrumbsText, } = require('./pages/catalog');
const { brandMain, allBrandsMain, catalogTabsMain, sportMain, nameOfSportMain,
        allSportsMain, footerMenuSectionMain, footerMenuLinkMain, footerMenuLinkText,
    } = require('./actions/mainpage.action');

describe('Main Page tests', () => {
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

    test.each(
        [1, 2, 3, 4, 5, 6, 7]
    )('Brands: %i icon clickable and correctly redirect', async (n) => {
        if (n === 7) {
            await allBrandsMain(page);
            await page.waitForSelector('text=/Поиск по брендам/');
        } else {
            await brandMain(page, n);
            await expect(await catalogBreadcrumbsText(page, 1)).toBe('Бренды');
        }
        await expect(page.url()).toContain('catalog/brendy');
    });

    test.each`
        tabNumber | categoryName         | expectedText              | urlContain
        ${1}      | ${'Womens wear'}     | ${'Женская одежда'}       | ${'catalog/zhenskaya_odezhda'}
        ${2}      | ${'Womens footwear'} | ${'Женская обувь'}        | ${'catalog/zhenskaya_obuv'}
        ${3}      | ${'Mens wear'}       | ${'Мужская одежда'}       | ${'catalog/muzhskaya_odezhda'}
        ${4}      | ${'Mens footwear'}   | ${'Мужская обувь'}        | ${'catalog/muzhskaya_obuv'}
        ${5}      | ${'Boys wear'}       | ${'Одежда для мальчиков'} | ${'catalog/odezhda_dlya_malchikov'}
        ${6}      | ${'Boys footwear'}   | ${'Обувь для мальчиков'}  | ${'catalog/obuv_dlya_malchikov'}
        ${7}      | ${'Girls wear'}      | ${'Одежда для девочек'}   | ${'catalog/odezhda_dlya_devochek'}
        ${8}      | ${'Girls footwear'}  | ${'Обувь для девочек'}    | ${'catalog/obuv_dlya_devochek'}
    `('$categoryName tab should correctly redirect to $url and contain $expectedText', 
    async ({tabNumber, expectedText, urlContain}) => {
        await catalogTabsMain(page, tabNumber);
        await expect(await catalogBreadcrumbsText(page, 1)).toBe(expectedText);
        await expect(page.url()).toContain(urlContain);
    });

    test.each`
        child | urlContain
        ${1}  | ${'vidy_sporta_/beg'}
        ${2}  | ${'catalog/trenazhery_i_fitnes_'}
        ${3}  | ${'vidy_sporta_/boks'}
        ${4}  | ${'vidy_sporta_/plavanie'}
        ${5}  | ${'vidy_sporta_/tennis'}
        ${6}  | ${'vidy_sporta_/futbol'}
        ${7}  | ${'vidy_sporta_/velosport'}
    `('Sports: $child icon should redirect to $url', async ({child, urlContain}) => {
        const nameOfSport = await nameOfSportMain(page, child);
        await sportMain(page, child);
        if (child === 2) {
            await expect(await catalogBreadcrumbsText(page, 1)).toBe('Тренажёры и фитнес');
        } else {
            await expect(' ' + await catalogBreadcrumbsText(page, 2)).toBe(nameOfSport);
        }
        await expect(page.url()).toContain(urlContain);
    });

    test('ALL Sports icon correctly redirect to catalog page', async () => {
        await allSportsMain(page);
        await expect(await catalogBreadcrumbsText(page, 1)).toBe('Виды спорта');
        await expect(page.url()).toContain('vidy_sporta_');
    });

    test.each`
        section | link  | breadlvl | urlContain
        ${1}    | ${1}  | ${1}     | ${'catalog/muzhskaya_odezhda'}
        ${1}    | ${2}  | ${1}     | ${'catalog/zhenskaya_odezhda'}
        ${1}    | ${3}  | ${1}     | ${'catalog/odezhda_dlya_malchikov'}
        ${1}    | ${4}  | ${1}     | ${'catalog/odezhda_dlya_devochek'}
        ${2}    | ${1}  | ${1}     | ${'catalog/muzhskaya_obuv'}
        ${2}    | ${2}  | ${1}     | ${'catalog/zhenskaya_obuv'}
        ${2}    | ${3}  | ${1}     | ${'catalog/obuv_dlya_malchikov'}
        ${2}    | ${4}  | ${1}     | ${'catalog/obuv_dlya_devochek'}
        ${3}    | ${1}  | ${3}     | ${'aksessuary/ryukzaki_i_sumki/ryukzaki'}
        ${3}    | ${2}  | ${3}     | ${'aksessuary/ryukzaki_i_sumki/sumki'}
        ${3}    | ${3}  | ${2}     | ${'aksessuary/solntsezashchitnye_ochki'}
        ${3}    | ${4}  | ${3}     | ${'aksessuary/golovnye_ubory/beysbolki'}
        ${4}    | ${1}  | ${3}     | ${'vidy_sporta_/velosport/velosipedy'}
        ${4}    | ${2}  | ${3}     | ${'vidy_sporta_/samokaty/samokaty'}
        ${4}    | ${3}  | ${2}     | ${'vidy_sporta_/roliki/rolikovye_konki'}
        ${4}    | ${4}  | ${2}     | ${'vidy_sporta_/skeytbording'}
    `('Footer Menu: $section section | $link link should redirect to $url', 
    async ({section, link, breadlvl, urlContain}) => {
        await footerMenuSectionMain(page, section);
        const linkText = await footerMenuLinkText(page, section, link);
        await footerMenuLinkMain(page, section, link);
        const breadcrumbs = await catalogBreadcrumbsText(page, breadlvl);
        if(section === 4 && link === 4) {
            await expect(linkText.slice(0, 9)).toBe(breadcrumbs.slice(0, 9));
        } else {
            await expect(linkText).toBe(breadcrumbs);
        }
        await expect(page.url()).toContain(urlContain);
    });
});
