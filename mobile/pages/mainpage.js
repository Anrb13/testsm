const { elementClick } = require('../../utils');

// Element: Плашка для скачивания мобильного приложения
const closeMobileAppCommercSelector = 'span[class="smicon-close-narrow clr-gray"]';
const downloadLinkMobileAppCommercSelector = 'promoplate-android-banner__load-link';

// Element: Карусель брендов
const brandSelectorBuilder = (n) => {
    return 'esm-main-page-brands >> div:nth-child(' + n + ') > img';
};
const allBrandsSelector = 'esm-main-page-brands >> a';

// Element: Табы каталога (по полу/возрасту + обувь)
const genderLinksSelectorBuilder = (n) => {
    return 'esm-main-page-gender-links >> a:nth-child(' + n + ')';
};

// Element: Карусель видов спорта
const sportSelectorBuilder = (n) => {
    return 'esm-main-page-sport-types >> div:nth-child(' + n + ')';
};
const allSportsSelector = 'esm-main-page-sport-types >> a';

// Element: Футер-меню
const footerMenuSectionSelectorBuilder = (n) => {
    return 'div.main-page__footer__menu > div:nth-child(' + n + ')';
};
const footerMenuLinkSelectorBuilder = (n, m) => {
    return 'div.main-page__footer__menu > div:nth-child(' + n + ') >> a:nth-child(' + m + ')';
};

// Actions:
const closeMobileAppCommerc = async (page) => {
    await elementClick(page, closeMobileAppCommercSelector);
};

const downloadLinkMobileAppCommerc = async (page) => {
    await elementClick(page, downloadLinkMobileAppCommercSelector);
};

const brandMain = async (page, n) => {
    await elementClick(page, brandSelectorBuilder(n));
};

const allBrandsMain = async (page) => {
    await elementClick(page, allBrandsSelector);
};

const genderMain = async (page, n = 1) => {
    await elementClick(page, genderLinksSelectorBuilder(n));
};

const sportMain = async (page, n = 1) => {
    await elementClick(page, sportSelectorBuilder(n));
};

const allSportsMain = async (page) => {
    await elementClick(page, allSportsSelector);
};

const footerMenuSectionMain = async (page, n = 1) => {
    await elementClick(page, footerMenuSectionSelectorBuilder(n));
};

const footerMenuLinkMain = async (page, n = 1, m = 1) => {
    await elementClick(page, footerMenuLinkSelectorBuilder(n, m));
};

module.exports = {
    closeMobileAppCommerc, downloadLinkMobileAppCommerc, brandMain, 
    allBrandsMain, genderMain, sportMain,
    allSportsMain, footerMenuSectionMain, footerMenuLinkMain,
};
