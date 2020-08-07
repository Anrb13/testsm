const { devices, } = require('playwright');
const { mUrl, } = require('../url');
const { cookieA1, cookieA2, cookieBanner, cookieCityConfirmed } = require('../cookie');
const { suites, } = require('../config');

const isoDate = (new Date()).toISOString();
const formatedDate = isoDate.replace(/\:/g, '-'); //":" запрещен в названии файлов windows

const screenTest = async (engine, deviceName, cookie = {}) => {
    const browser = await engine.launch({ headless: false, slowMo: 100, });
    const device = devices[deviceName];
    const context = await browser.newContext({
        ...device,
        isMobile: true,
        hasTouch: true,
        deviceScaleFactor: 1,
        });
    const page = await context.newPage();
    
    await context.addCookies([ cookie, cookieBanner, cookieCityConfirmed ]);
    await page.goto(mUrl, { waitUntil: 'networkidle' });
    await page.screenshot({
        path: `screenshots/${engine.name()}/${formatedDate}_${deviceName}_${cookie.value}.jpeg`,
    });
    await browser.close();

    console.log(`success screen test: ${engine.name()} ${deviceName} ${cookie.value}`);
};

const test = (engine, deviceList = [], cookie = {}) => {
    deviceList.forEach((deviceName) => {
        screenTest(engine, deviceName, cookie);
    });
};
    
for(let suite of suites) {
    for(let cookie of [ cookieA1,  cookieA2 ]) {
        test(suite.engine, suite.deviceList, cookie);
    };
};