const {chromium, webkit} = require('playwright');

const iPhone = 'iPhone 8';
const android = 'Pixel 2 XL';

// const mode = 'headless: false';

const suites = [
    {
        engine: chromium,
        deviceList: [iPhone, android],
    },
    {
        engine: webkit,
        deviceList: [iPhone],
    }
];

const isoDate = (new Date()).toISOString();
const formatedDate = isoDate.replace(/\:/g, '-'); //":" запрещен в названии файлов windows

module.exports = {
    suites,
    formatedDate,
};