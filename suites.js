const {chromium, webkit} = require('playwright');

const ios = 'iPhone 8';
const android = 'Pixel 2 XL';

// const mode = 'headless: false';

const suites = [
    {
        engine: chromium,
        deviceList: [ios, android],
    },
    {
        engine: webkit,
        deviceList: [ios],
    }
];


module.exports = {
    suites,
};
