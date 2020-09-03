const {chromium, webkit, devices} = require('playwright');

const baseUrl = 'https://www.sportmaster.ru';
const mUrl = 'https://m.sportmaster.ru';

const engine = chromium;
const launchOptions = {
    headless: false,
    slowMo: 100,
};
const contextOptions = { 
    ...devices['Pixel 2 XL'],
}

const getTime = () => {
    const isoDate = (new Date()).toISOString();
    const formatedDate = isoDate.replace(/\:/g, '-'); //":" запрещен в названии файлов windows
    return formatedDate;
};

const elementClick = async (page, selector) => {
    try {
        await page.click(selector);
    } catch (err) {
        console.error(err);
        console.error('Ошибка клика по селектору: ' + selector);
    };
};

const elementSwipe = async (page, selector, x, y) => {
    try {
        await page.hover(selector);
        await page.mouse.down();
        await page.mouse.move(x, y);
        await page.mouse.up();
    } catch (err) {
        console.error(err);
        console.error('Ошибка свайпа селектора: ' + selector);
    };
};


module.exports = {
    elementClick,
    elementSwipe,
    getTime,
    baseUrl,
    mUrl,
    engine,
    contextOptions,
    launchOptions,
};
