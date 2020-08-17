const { devices, } = require('playwright');
const { mUrl, } = require('../url');
const { cookieA1, cookieA2, cookieBanner, cookieCityConfirmed, } = require('../cookies');
const { suites, } = require('../suites');
const { getTime, } = require('../utils');


const screenTest = async (engine, deviceName, cookie = {}) => {
    const browser = await engine.launch({ headless: false, slowMo: 100, });
    const device = devices[deviceName];
    const context = await browser.newContext({
        ...device,
        locale: 'ru-RU',
        });
    const page = await context.newPage();
    const formatedDate = await getTime();
    
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