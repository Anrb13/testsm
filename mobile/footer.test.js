const { devices, chromium } = require('playwright');
const { mUrl, } = require('../utils');
const { cookieBanner, cookieCityConfirmed } = require('../cookies');
const { sectionService, profileFooter, deliveryFooter, exchangeFooter, serviceFooter,
    warrantyFooter, reviewFooter, legalPersonFooter, sectionInfo, aboutCompanyFooter, 
    storesFooter, jobFooter, renterFooter, collaborationFooter, zakupkiFooter, 
    contactsFooter, newsFooter, promoFooter, projectsFooter, sectionContacts, 
    numberFooter, emailFooter, corpLinkFooter, facebookFooter, vkontakteFooter, 
    odnoklassnikiFooter, instagramFooter, youtubeFooter, eGiftcardFooter, clubCardFooter, 
    yandexMarketFooter, androidAppFooter, iosAppFooter, fullVersionFooter, privacyFooter,
    ofertaFooter, } = require('./pageObject/footer');

describe('Footer tests', () => {
    let browser;
    let context;
    let page;

    beforeAll( async () => {
        browser = await chromium.launch({ headless: true, });
        context = await browser.newContext({ ...devices['iPhone 8'] });
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

    test('Profile Link redirect to "login.do" and display "Авторизация"', async () => {
        await sectionService(page);
        await profileFooter(page);
        await page.waitForSelector('text=/Авторизация/');
        await expect(page.url()).toContain('user/session/login.do');
    });

    test('Delivery Link redirect to delivery page and display "Доставка и оплата"', async () => {
        await sectionService(page);
        await deliveryFooter(page);
        await page.waitForSelector('text=/Доставка и оплата/');
    });

    test('Exchange Link redirect to exchange page and display "Обмен и возврат"', async () => {
        await sectionService(page);
        await exchangeFooter(page);
        await page.waitForSelector('text=/Обмен и возврат/');
    });

    test('Service Link redirect to service page and display "Сервисный центр"', async () => {
        await sectionService(page);
        await serviceFooter(page);
        await page.waitForSelector('text=/сервисный центр/');
        await expect(page.url()).toContain('service/equipment');
    });

    test('Warranty Link redirect to "warranty.do" and display "Гарантийное"', async () => {
        await sectionService(page);
        await warrantyFooter(page);
        await page.waitForSelector('text=/Гарантийное/');
        await expect(page.url()).toContain('warranty');
    });

    test('Review Link redirect to contacts page and display "Контактная"', async () => {
        await sectionService(page);
        await reviewFooter(page);
        await page.waitForSelector('text=/Контактная/');
        await expect(page.url()).toContain('about/contacts');
    });

    test('Legal Person Link redirect to "legal_person.do" and display "Корпоративный"', async () => {
        await sectionService(page);
        await legalPersonFooter(page);
        await page.waitForSelector('text=/Корпоративный/');
        await expect(page.url()).toContain('legal_person');
    });

    test('About Company Link redirect to about page and display "О Компании"', async () => {
        await sectionInfo(page);
        await aboutCompanyFooter(page);
        await page.waitForSelector('text=/О Компании/');
        await expect(page.url()).toContain('about');
    });

    test('Stores Link redirect to stores page and display "Магазины"', async () => {
        await sectionInfo(page);
        await storesFooter(page);
        await page.waitForSelector('text=/Магазины/');
        await expect(page.url()).toContain('stores');
    });

    test('Job Link redirect to "job.sportmaster.ru"', async () => {
        await sectionInfo(page);
        await jobFooter(page);
        await expect(page.url()).toContain('job');
    });

    test('Renter Link redirect to renter page and display "Арендодателям"', async () => {
        await sectionInfo(page);
        await renterFooter(page);
        await page.waitForSelector('text=/Арендодателям/');
        await expect(page.url()).toContain('renter');
    });

    test('Collaboration Link redirect to collaboration page', async () => {
        await sectionInfo(page);
        await collaborationFooter(page);
        await expect(page.url()).toContain('collaboration');
    });

    test('Zakupki Link redirect to "zakupki.sportmaster.ru"', async () => {
        await sectionInfo(page);
        await zakupkiFooter(page);
    });

    test('Contacts Link redirect to contacts page and display "Контактная"', async () => {
        await sectionInfo(page);
        await contactsFooter(page);
        await page.waitForSelector('text=/Контактная/');
        await expect(page.url()).toContain('contacts');
    });

    test('News Link redirect to news page and display "Новости"', async () => {
        await sectionInfo(page);
        await newsFooter(page);
        await page.waitForSelector('text=/Новости/');
        await expect(page.url()).toContain('news');
    });

    test('Promo Link redirect to promo page and display "Акции"', async () => {
        await sectionInfo(page);
        await promoFooter(page);
        await page.waitForSelector('text=/Акции/');
        await expect(page.url()).toContain('promo');
    });

    test('Projects Link redirect to projects page and display "Наши проекты"', async () => {
        await sectionInfo(page);
        await projectsFooter(page);
        await page.waitForSelector('text=/Наши проекты/');
        await expect(page.url()).toContain('projects');
    });

    test('Number Link should be visible and clickable', async () => {
        await sectionContacts(page);
        await numberFooter(page);
    });

    test('Email Link should be visible and clickable', async () => {
        await sectionContacts(page);
        await emailFooter(page);
    });

    test('Corp Link should redirect to "sportmastercorp.com"', async () => {
        await sectionContacts(page);
        await corpLinkFooter(page);
    });

    test('Facebook Link should be visible and clickable', async () => {
        await sectionContacts(page);
        await facebookFooter(page);
    });

    test('Vkontakte Link should be visible and clickable', async () => {
        await sectionContacts(page);
        await vkontakteFooter(page);
    });

    test('Odnoklassniki Link should be visible and clickable', async () => {
        await sectionContacts(page);
        await odnoklassnikiFooter(page);
    });

    test('Instagram Link should be visible and clickable', async () => {
        await sectionContacts(page);
        await instagramFooter(page);
    });

    test('Youtube Link should be visible and clickable', async () => {
        await sectionContacts(page);
        await youtubeFooter(page);
    });

    test('eGiftcard Link redirect to giftcard page and display "Электронная подарочная"', async () => {
        await eGiftcardFooter(page);
        await page.waitForSelector('text=/Электронная подарочная/');
        await expect(page.url()).toContain('giftcard');
    });

    test('Clubcard Link redirect to "clubpro.do" and display "Клубной карты"', async () => {
        await clubCardFooter(page);
        await page.waitForSelector('text=/клубной карты/');
        await expect(page.url()).toContain('clubpro');
    });

    test('Yandex Market Link should be visible and clickable', async () => {
        await yandexMarketFooter(page);
    });

    test('Android App Link should be visible and clickable', async () => {
        await androidAppFooter(page);
    });

    test('iOs App Link be should visible and clickable', async () => {
        await iosAppFooter(page);
    });

    test('Full Version Link redirect to "sportmaster.ru/?nomobile=1"', async () => {
        await fullVersionFooter(page);
        await page.waitForSelector('text=/Мобильная версия/');
        await expect(page.url()).toContain('nomobile=1');
    });

    test('Privacy Link redirect to privacy page and display "Пользовательское соглашение"', async () => {
        await privacyFooter(page);
        await page.waitForSelector('text=/Пользовательское соглашение/');
        await expect(page.url()).toContain('privacy');
    });

    test('Oferta Link redirect to oferta page and display "ПУБЛИЧНАЯ ОФЕРТА"', async () => {
        await ofertaFooter(page);
        await page.waitForSelector('text=/ПУБЛИЧНАЯ ОФЕРТА/');
        await expect(page.url()).toContain('oferta');
    });
});
