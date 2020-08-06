const {chromium, devices, webkit} = require('playwright');
const { mUrl } = require('../url');
const { cookieA1, cookieA2, cookieApple, cookieBanner } = require('../cookie');
const { suites, headless } = require('../config');
const { confirmCity } = require('./confirmCityModal');

const isoDate = (new Date()).toISOString();
const formatedDate = isoDate.replace(/\:/g, '-'); //":" запрещен в названии файлов windows

const screenTest = async (engine, deviceName, cookie = {}) => {
    const browser = await engine.launch({ headless });
    const device = devices[deviceName];
    const context = await browser.newContext({ ...device });
    const page = await context.newPage();
    
    await context.addCookies([cookie, cookieApple, cookieBanner]);
    await page.goto(mUrl, { waitUntil: 'networkidle', });
    if (cookie == cookieA2) {
        await confirmCity(page, 'new');
    };
    await page.screenshot({
        path: `screenshots/${engine.name()}/${formatedDate}_${deviceName}_${cookie.value}.jpeg`,
    });
    await browser.close();

    console.log(`success screen test: ${engine.name()} ${deviceName} ${cookie.value}`);
};

const test = async (engine, deviceNames = [], cookie = {}) => {
    deviceNames.forEach(async (deviceName) => {
        await screenTest(engine, deviceName, cookie);
    });
};
    
for(let suite of suites) {
    for(let cookie of [ cookieA1,  cookieA2 ]) {
        test(suite.engine, suite.deviceNames, cookie);
    };
};
