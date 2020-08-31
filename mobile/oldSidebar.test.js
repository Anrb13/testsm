const { mUrl, engine, contextOptions, launchOptions } = require('../utils');
const { cookieBanner, cookieCityConfirmed, cookieA1, } = require('../cookies');
const { burger } = require('./pages/header');
const { breadcrumbsSelectorBuilder } = require('./pages/catalog');
const { chooseCity, loginButton, registerButton, catalog, catalogBack,
        category, shopsLocation, proSection, clubPro, giftCard,
        payAndDelivery, legalPerson, serviceSection, newsSection, contactsSection,
        privacySection, ofertaSection, jobLink, categorySelectorBuilder 
} = require('./pages/oldSidebar');


describe('OLD sidebar tests', () => {
    let browser;
    let context;
    let page;

    beforeAll( async () => {
        browser = await engine.launch(launchOptions);
        context = await browser.newContext(contextOptions);
        await context.addCookies([ cookieBanner, cookieCityConfirmed, cookieA1, ]);
    });

    beforeEach( async () => {
        page = await context.newPage();
        await page.goto(mUrl + '/?noscript=1');
        await burger(page, 'old');
    });

    afterEach( async () => {
        await page.close();
    });
    
    afterAll( async () => {
        await browser.close();
    });

    test('City link opens modal window for changing city', async () => {
        await chooseCity(page);
        await page.waitForSelector('text=/Ваш город/');
    });

    test('Login button redirect to "login.do" and display "Авторизация"', async () => {
        await loginButton(page);
        await page.waitForSelector('text=/Авторизация/');
        await expect(page.url()).toContain('user/session/login.do');
    });
    
    test('Register button redirect to "register.do" and display "Регистрация"', async () => {
        await registerButton(page);
        await page.waitForSelector('text=/Регистрация/');
        await expect(page.url()).toContain('user/session/register.do')
    });

    test('Shops button redirect to shops page and display "Магазины"', async () => {
        await shopsLocation(page);
        await page.waitForSelector('text=/Магазины/');
        await expect(page.url()).toContain('stores');
    });

    test('Pro section button redirect to PRO page and display "специальная категория товаров"', async () => {
        await proSection(page);
        await page.waitForSelector('text=/специальная категория товаров/');
        await expect(page.url()).toContain('pro');
    });

    test('clubPro section button redirect to /clubpro/ and display "Проверить баланс"', async () => {
        await clubPro(page);
        await page.waitForSelector('text=/Проверить баланс/');
        await expect(page.url()).toContain('clubpro');
    });

    test('giftCard button redirect to giftCard page and display "Электронная подарочная"', async () => {
        await giftCard(page);
        await page.waitForSelector('text=/Электронная подарочная/');
        await expect(page.url()).toContain('giftcard');
    });

    test('Payment and delivery button redirect and display "Доставка и оплата"', async () => {
        await payAndDelivery(page);
        await page.waitForSelector('text=/Доставка и оплата/');
    });

    test('Legal person button redirect to "legal_person.do" and display "Корпоративный"', async () => {
        await legalPerson(page);
        await page.waitForSelector('text=/Корпоративный/');
        await expect(page.url()).toContain('legal_person');
    });

    test('Service section button redirect to service page and display "Сервисный центр"', async () => {
        await serviceSection(page);
        await page.waitForSelector('text=/сервисный центр/');
        await expect(page.url()).toContain('service/equipment');
    });

    test('News section button redirect to news page and display "Новости"', async () => {
        await newsSection(page);
        await page.waitForSelector('text=/Новости/');
        await expect(page.url()).toContain('news');
    });

    test('Contacts section button redirect to to contacts page and display "Контактная"', async () => {
        await contactsSection(page);
        await page.waitForSelector('text=/Контактная/');
        await expect(page.url()).toContain('contacts');
    });

    test('Privacy button redirect to privacy page and display "Пользовательское соглашение"', async () => {
        await privacySection(page);
        await page.waitForSelector('text=/Пользовательское соглашение/');
        await expect(page.url()).toContain('privacy');
    });

    test('Oferta button redirect to oferta page and display "ПУБЛИЧНАЯ ОФЕРТА"', async () => {
        await ofertaSection(page);
        await page.waitForSelector('text=/ПУБЛИЧНАЯ ОФЕРТА/');
        await expect(page.url()).toContain('oferta');
    });

    test('Job button redirect to "job.sportmaster.ru"', async () => {
        await jobLink(page);
        await expect(page.url()).toContain('job');
    });

    test('Catalog, category, category back and subcategory buttons works correctly', async () => {
        const n = 3; // >= 3
        await catalog(page);
        await category(page, n);
        await catalogBack(page);
        await category(page, n);
        await category(page, n);
        const expectedBreadcrumbs = await page.textContent(categorySelectorBuilder(n));
        await category(page, n);
        const gotBreadcrumbs = await page.textContent(breadcrumbsSelectorBuilder(2));
        await expect(gotBreadcrumbs).toBe(expectedBreadcrumbs);
    });
});
