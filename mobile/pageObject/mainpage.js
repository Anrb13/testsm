const { elementClick } = require('../../utils');


//Плашка для скачивания мобильного приложения
const closeMobileAppCommercSelector = 'span[class="smicon-close-narrow clr-gray"]';
const downloadLinkMobileAppCommercSelector = 'promoplate-android-banner__load-link';

//Карусель брендов
const brandSelectorBuilder = (n) => {
    const brandSelector = 'esm-main-page-brands >> div:nth-child(' + n + ')';
    return brandSelector;
};
const allBrandsSelector = 'esm-main-page-brands >> a';

// Steps:
const closeMobileAppCommerc = async (page) => {
    await elementClick(page, closeMobileAppCommercSelector);
};

const downloadLinkMobileAppCommerc = async (page) => {
    await elementClick(page, downloadLinkMobileAppCommercSelector);
};

const brandMain = async (page, n = 1) => {
    await elementClick(page, brandSelectorBuilder(n));
};

const allBrandsMain = async (page) => {
    elementClick(page, allBrandsSelector);
};


module.exports = {
    closeMobileAppCommerc,
    downloadLinkMobileAppCommerc,
    brandMain,
    allBrandsMain,
};
