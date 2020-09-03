// Element: Плашка для скачивания мобильного приложения
const closeMobileAppCommercSelector = 'span[class="smicon-close-narrow clr-gray"]';
const downloadLinkMobileAppCommercSelector = 'promoplate-android-banner__load-link';

// Element: Баннер
const bannerMainpageSelector = 'div.main-page__carousel__image > img';

// Element: Карусель брендов
const brandSelectorBuilder = (n) => {
    return 'esm-main-page-brands >> div:nth-child(' + n + ') > img';
};
const allBrandsSelector = 'esm-main-page-brands >> a';

// Element: Табы каталога (по полу/возрасту + обувь)
const allCatalogTabsSelector = 'div.main-page__gender-links';
const catalogTabsSelectorBuilder = (n) => {
    return 'esm-main-page-gender-links >> a:nth-child(' + n + ')';
};

// Element: Карусель видов спорта
const sportSelectorBuilder = (n) => {
    return 'esm-main-page-sport-types >> div.main-page__sport-types__item:nth-child(' + n + ')';
};
const allSportsSelector = 'esm-main-page-sport-types >> a';

// Element: Футер-меню
const footerMenuSectionSelectorBuilder = (n) => {
    return 'div.main-page__footer__menu > div:nth-child(' + n + ')';
};
const footerMenuLinkSelectorBuilder = (n, m) => {
    return 'div.main-page__footer__menu > div:nth-child(' + n + ') >> a:nth-child(' + m + ')';
};


module.exports = {
    closeMobileAppCommercSelector, downloadLinkMobileAppCommercSelector, 
    bannerMainpageSelector, brandSelectorBuilder, allBrandsSelector,
    catalogTabsSelectorBuilder, sportSelectorBuilder,allSportsSelector, 
    footerMenuSectionSelectorBuilder, footerMenuLinkSelectorBuilder,
    allCatalogTabsSelector,
};
