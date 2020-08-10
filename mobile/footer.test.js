const assert = require('assert').strict;
const { devices, webkit, chromium } = require('playwright');
const { mUrl, } = require('../url');
const { cookieA1, cookieA2, cookieBanner, cookieCityConfirmed } = require('../cookies');
const { suites, formatedDate } = require('../config');
const { sectionService, profileFooter, deliveryFooter, exchangeFooter, serviceFooter,
    warrantyFooter, reviewFooter, legalPersonFooter, sectionInfo, aboutCompanyFooter,
    storesFooter, jobFooter, renterFooter, collaborationFooter, zakupkiFooter, contactsFooter,
    newsFooter, promoFooter, projectsFooter, sectionContacts, numberFooter,
    emailFooter, corpLinkFooter, facebookFooter, vkontakteFooter, odnoklassnikiFooter,
    instagramFooter, youtubeFooter, eGiftcardFooter, clubCardFooter, yandexMarketFooter,
    androidAppFooter, iosAppFooter, fullVersionFooter, newRegion } = require('./pageObject/footer')

const iPhone = 'iPhone 8';

(async () => {
    let browser;
    let page;

    const before = async () => {
        browser = await chromium.launch({ headless: false, slowMo: 200, });
        const context = await browser.newContext({ ...devices[iPhone], deviceScaleFactor: 1, });
        await context.addCookies([ cookieA1, cookieBanner, cookieCityConfirmed ]);
        page = await context.newPage();
    }

    const after = async () => {
        await browser.close();
    }

    const footerProfileLink = async () => {
        await before();
        await page.goto(mUrl, { waitUntil: 'networkidle' });

        // await sectionService(page);
        await profileFooter(page);
        await page.waitForNavigation();
        await page.waitForSelector('text=/Авторизация/');
        assert(page.url().includes('user/session/login.do'));

        await after();
    };
    
    const footerDeliveryLink = async () => {
        await before();
        await page.goto(mUrl, { waitUntil: 'networkidle' });
    
        await sectionService(page);
        await deliveryFooter(page);
        await page.waitForNavigation();
        await page.waitForSelector('text=/Доставка и оплата/');
        assert(page.url().includes('delivery_type'));

        await after();
    };

    const footerExchangeLink = async () => {
        await before();
        await page.goto(mUrl, { waitUntil: 'networkidle' });
    
        await sectionService(page);
        await exchangeFooter(page);
        await page.waitForNavigation();
        await page.waitForSelector('text=/Обмен и возврат/');
        assert(page.url().includes('returns_exchanges_type'));

        await after();
    };

    const footerServiceLink = async () => {
        await before();
        await page.goto(mUrl, { waitUntil: 'networkidle' });
    
        await sectionService(page);
        await serviceFooter(page);
        await page.waitForNavigation();
        await page.waitForSelector('text=/сервисный центр/');
        assert(page.url().includes('service/equipment'));

        await after();
    };

    const footerWarrantyLink = async () => {
        await before();
        await page.goto(mUrl, { waitUntil: 'networkidle' });
    
        await sectionService(page);
        await warrantyFooter(page);
        await page.waitForNavigation();
        await page.waitForSelector('text=/Гарантийное/');
        assert(page.url().includes('warranty'));

        await after();
    };

    const footerReviewLink = async () => {
        await before();
        await page.goto(mUrl, { waitUntil: 'networkidle' });
    
        await sectionService(page);
        await reviewFooter(page);
        await page.waitForNavigation();
        await page.waitForSelector('text=/Контактная/');
        assert(page.url().includes('about/contacts'));

        await after();
    };

    const footerLegalPersonLink = async () => {
        await before();
        await page.goto(mUrl, { waitUntil: 'networkidle' });
    
        await sectionService(page);
        await legalPersonFooter(page);
        await page.waitForNavigation();
        await page.waitForSelector('text=/Корпоративный/');
        assert(page.url().includes('legal_person'));

        await after();
    };

    const footerAboutCompanyLink = async () => {
        await before();
        await page.goto(mUrl, { waitUntil: 'networkidle' });
    
        await sectionInfo(page);
        await aboutCompanyFooter(page);
        await page.waitForNavigation();
        await page.waitForSelector('text=/О компании/');
        assert(page.url().includes('about'));

        await after();
    };

    const footerStoresLink = async () => {
        await before();
        await page.goto(mUrl, { waitUntil: 'networkidle' });
    
        await sectionInfo(page);
        await storesFooter(page);
        await page.waitForNavigation();
        await page.waitForSelector('text=/Магазины/');
        assert(page.url().includes('stores'));

        await after();
    };

    const footerJobLink = async () => {
        await before();
        await page.goto(mUrl, { waitUntil: 'networkidle' });
    
        await sectionInfo(page);
        await jobFooter(page);
        await page.waitForNavigation();
        assert(page.url().includes('job'));

        await after();
    };

    const footerRenterLink = async () => {
        await before();
        await page.goto(mUrl, { waitUntil: 'networkidle' });
    
        await sectionInfo(page);
        await renterFooter(page);
        await page.waitForNavigation();
        await page.waitForSelector('text=/Арендодателям/');
        assert(page.url().includes('renter'));

        await after();
    };

    const footerCollaborationLink = async () => {
        await before();
        await page.goto(mUrl, { waitUntil: 'networkidle' });
    
        await sectionInfo(page);
        await collaborationFooter(page);
        await page.waitForNavigation();
        assert(page.url().includes('collaboration'));

        await after();
    };

    const footerZakupkiLink = async () => {
        await before();
        await page.goto(mUrl, { waitUntil: 'networkidle' });
    
        await sectionInfo(page);
        await zakupkiFooter(page);
        await page.waitForNavigation();
        assert(page.url().includes('zakupki'));

        await after();
    };

 
    // , 
    // contactsFooter,
    // newsFooter, 
    // promoFooter, 
    // projectsFooter, 
    // sectionContacts, 
    // numberFooter,
    // emailFooter, 
    // corpLinkFooter, 
    // facebookFooter, 
    // vkontakteFooter, 
    // odnoklassnikiFooter,
    // instagramFooter, 
    // youtubeFooter, 
    // eGiftcardFooter, 
    // clubCardFooter, 
    // yandexMarketFooter,
    // androidAppFooter, 
    // iosAppFooter, 
    // fullVersionFooter,

    await footerProfileLink();
    // await footerDeliveryLink();
    // await footerExchangeLink();
    // await footerServiceLink();
    // await footerWarrantyLink();
    // await footerReviewLink();
    // await footerLegalPersonLink();

})();

