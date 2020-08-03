const {chromium, webkit, firefox} = require('playwright');
const { baseUrl } = require('./url');
const { cookieA1, cookieA2 } = require('./cookie');

describe('screenshot tests', () => {
    const isoDate = (new Date()).toISOString();
    const formatedDate = isoDate.replace(/\:/g, '-'); //":" запрещен в названии файлов windows
    const browsers = [chromium, webkit, firefox];


    
    for(let ABcookie of [ cookieA1,  cookieA2 ]) {
        for(let browserType of browsers) {
            test(`should ${browserType.name()}`, async () => {
                const browser = await browserType.launch({ 
                    headless: false,
                });
                const context = await browser.newContext();
                const page = await context.newPage();
                const url = baseUrl(true); //true if noscript=1
                const confirmDefaultCity = '[data-selenium="confirm_default_city"]';
                const confirmApiUrl = 'https://www.sportmaster.ru/user/profile/city_confirm.do';
                
                await context.addCookies([ ABcookie ]);
                await page.goto(url, {timeout: 0});
                await page.click(confirmDefaultCity);
                await page.waitForResponse((res) => res.url().startsWith(confirmApiUrl));
                await page.screenshot({
                    path: `screenshots/${browserType.name()}/${formatedDate}_${browserType.name()}_${ABcookie.value}.jpeg`,
                    fullPage: true,
                });
                await browser.close();
            });
        };
    };
});

