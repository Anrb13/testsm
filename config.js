const {chromium, devices, webkit} = require('playwright');

const iPhone = 'iPhone 8';
const android = 'Pixel 2';
const headless = 'headless: false'

const suites = [
    {
        engine: chromium,
        deviceNames: [iPhone, android],
    },
    {
        engine: webkit,
        deviceNames: [iPhone],
    },

];


module.exports = {
    suites,
    headless,
};