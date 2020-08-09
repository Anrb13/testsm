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
    androidAppFooter, iosAppFooter, fullVersionFooter, } = require('./pageObject/footer')

const iPhone = 'iPhone 8';

// const beforeEach = async () => {
//     const browser = await chromium.launch({ headless: false, slowMo: 200, });
//     const context = await browser.newContext({ ...devices[iPhone], deviceScaleFactor: 1, });
//     const page = await context.newPage();
// }

const footerProfileLink = async () => {
    // await beforeEach();
    const browser = await chromium.launch({ headless: false, slowMo: 50, });
    const context = await browser.newContext({ ...devices[iPhone], deviceScaleFactor: 1, });
    const page = await context.newPage();
    await context.addCookies([ cookieA1, cookieBanner, cookieCityConfirmed ]);
    await page.goto(mUrl, { waitUntil: 'networkidle' });

    await sectionService(page);
    await profileFooter(page);
    await page.waitForResponse('https://m.sportmaster.ru/rest/v1/navigation/page?mnemonic=login');
    const pageTitle = await page.innerText('div.content-container.pdAll-5.relative.ars_test_b > ng-view > div');
    console.log(pageTitle + ' ' + page.url());
    assert(pageTitle.includes('Авторизация'));
    assert(page.url().includes('user/session/login.do'));
    await browser.close();
};

const footerDeliveryLink = async () => {
    // await beforeEach();
    const browser = await chromium.launch({ headless: false, slowMo: 50, });
    const context = await browser.newContext({ ...devices[iPhone], deviceScaleFactor: 1, });
    const page = await context.newPage();
    await context.addCookies([ cookieA1, cookieBanner, cookieCityConfirmed ]);
    await page.goto(mUrl, { waitUntil: 'networkidle' });

    await sectionService(page);
    await deliveryFooter(page);
    await page.waitForTimeout(2000);
    const pageTitle = await page.innerText('esm-paymentdelivery > div.font-16.bold.cotext.mrBottom-10');
    console.log(pageTitle + ' ' + page.url());
    assert(pageTitle.includes('Доставка и оплата'));
    assert(page.url().includes('service/payment_delivery'));
    await browser.close();
};


footerProfileLink();
footerDeliveryLink();