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

const simpleTest = (async () => {
    // await beforeEach();
    const browser = await chromium.launch({ headless: false, slowMo: 50, });
    const context = await browser.newContext({ ...devices[iPhone], deviceScaleFactor: 1, });
    const page = await context.newPage();
    await context.addCookies([ cookieA1, cookieBanner, cookieCityConfirmed ]);
    
    await page.goto(mUrl, { waitUntil: 'networkidle' });
    await sectionService(page);
    await profileFooter(page);
    await browser.close();
})();


