const {chromium, devices, webkit} = require('playwright');
const { mUrl } = require('../url');
const { cookieA1, cookieA2, cookieApple } = require('../cookie');

//https://m.sportmaster.ru/rest/v1/auth/city?id=eacb5f15-1a2e-432e-904a-ca56bd635f1b Lipetsk

const checkoutTest = async (engine, deviceName, cookie = {}) => {
    const scrollButton = '.scroll-button';
    const browser = await engine.launch({ headless: false });
    const device = devices[deviceName];
    const context = await browser.newContext({ ...device });
    const page = await context.newPage();
    
    await context.addCookies([cookie, cookieApple]);
    await page.goto(mUrl, { timeout: 0 });
    await page.click(scrollButton);
    


    await browser.close();

    console.log(`success screen test: ${engine.name()} ${deviceName} ${cookie.value}`);
};