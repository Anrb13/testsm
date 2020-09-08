const { mUrl, engine, contextOptions, launchOptions, elementClick } = require('../utils');
const { cookieBanner, cookieCityConfirmed } = require('../cookies');
const { footerLinkBySectorClick, footerSocialNetworkClick, } = require('./actions/footer.action');
const { eGiftcard, clubCard, yandexMarket, fullVersion, androidApp, 
        iosApp, privacy, oferta, } = require('./pages/footer');

describe('Footer tests', () => {
    let browser;
    let context;
    let page;

    beforeAll( async () => {
        browser = await engine.launch(launchOptions);
        context = await browser.newContext(contextOptions);
        await context.addCookies([ cookieBanner, cookieCityConfirmed ]);
    });

    beforeEach( async () => {
        page = await context.newPage();
        await page.goto(mUrl + '/?noscript=1');
    });

    afterEach( async () => {
        await page.close();
    });
    
    afterAll( async () => {
        await browser.close();
    });

    test.each`
        nameOfLink         | section   | link  | expectedSelector              | urlContain
        ${'Profile'}       | ${1}      | ${1}  | ${'text=/Авторизация/'}       | ${'/user/session/login.do'}
        ${'Delivery'}      | ${1}      | ${2}  | ${''}                         | ${''}
        ${'Exchange'}      | ${1}      | ${3}  | ${'text=/Обмен и возврат/'}   | ${''}
        ${'Service'}       | ${1}      | ${4}  | ${'text=/сервисный центр/'}   | ${'/service/equipment'}
        ${'Warranty'}      | ${1}      | ${5}  | ${'text=/Гарантийное/'}       | ${'/warranty'}
        ${'Review'}        | ${1}      | ${6}  | ${'text=/Контактная/'}        | ${'about/contacts'}
        ${'LegalPerson'}   | ${1}      | ${7}  | ${'text=/Корпоративный/'}     | ${'/legal_person'}
        ${'AboutCompany'}  | ${2}      | ${1}  | ${'text=/О Компании/'}        | ${'/about'}
        ${'Stores'}        | ${2}      | ${2}  | ${'text=/Магазины/'}          | ${'/stores'}
        ${'Job'}           | ${2}      | ${3}  | ${'text=//'}                  | ${'/job'}
        ${'Renter'}        | ${2}      | ${4}  | ${'text=/Арендодателям/'}     | ${'/renter'}
        ${'Collaboration'} | ${2}      | ${5}  | ${'section.ar-news_container'}| ${'/collaboration'}
        ${'Zakupki'}       | ${2}      | ${6}  | ${'text=//'}                  | ${''}
        ${'Contacts'}      | ${2}      | ${7}  | ${'text=/Контактная/'}        | ${'/contacts'}
        ${'News'}          | ${2}      | ${8}  | ${'text=/Новости/'}           | ${'/news'}
        ${'Promo'}         | ${2}      | ${9}  | ${'text=/Акции/'}             | ${'/promo'}
        ${'Projects'}      | ${2}      | ${10} | ${'text=/Наши проекты/'}      | ${'/projects'}
        ${'Numbers'}       | ${3}      | ${2}  | ${''}                         | ${''}
        ${'Email'}         | ${3}      | ${4}  | ${''}                         | ${''}
        ${'Corp'}          | ${3}      | ${6}  | ${''}                         | ${''}
    `('$nameOfLink link redirect to $urlContain and display $expectedSelector', 
    async ({ section, link, expectedSelector, urlContain }) => {
        await footerLinkBySectorClick(page, section, link);
        if(expectedSelector !== '') {
            await page.waitForSelector(expectedSelector);
        };
        if(urlContain !== '') {
            expect(page.url()).toContain(urlContain);
        };
    });

    test.each`
        nameOfSocialNetwork | child
        ${'Facebook'}       | ${1}
        ${'Vkontakte'}      | ${2}
        ${'Odnoklassniki'}  | ${3}
        ${'Instagram'}      | ${4}
        ${'Youtube'}        | ${5}
    `('$nameOfSocialNetwork Link should be visible and clickable', async({ child }) => {
        await footerSocialNetworkClick(page, child);
    });

    test.each`
        nameOfLink        | selector
        ${'YandexMarket'} | ${yandexMarket}
        ${'AndroidApp'}   | ${androidApp}
        ${'Ios App'}      | ${iosApp}
    `('$nameOfLink Link should be visible and clickable', async({ selector }) => {
        await elementClick(page, selector);
    });

    test.each`
        nameOfLink       | selector       | urlContain      | expectedSelector
        ${'eGiftcard'}   | ${eGiftcard}   | ${'giftcard'}   | ${'text=/Электронная подарочная/'}
        ${'Clubcard'}    | ${clubCard}    | ${'clubpro'}    | ${'text=/клубной карты/'}
        ${'FullVersion'} | ${fullVersion} | ${'nomobile=1'} | ${'text=/Мобильная версия/'}
        ${'Privacy'}     | ${privacy}     | ${'privacy'}    | ${'text=/Пользовательское соглашение/'}
        ${'Oferta'}      | ${oferta}      | ${'oferta'}     | ${'text=/ПУБЛИЧНАЯ ОФЕРТА/'}
    `('$nameOfLink Link should redirect to $urlContain and display $expectedSelector', 
    async ({ selector, urlContain, expectedSelector }) => {
        await elementClick(page, selector);
        await page.waitForSelector(expectedSelector);
        expect(page.url()).toContain(urlContain);
    });
});
