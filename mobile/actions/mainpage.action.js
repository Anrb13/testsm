const { elementClick } = require('../../utils')
const { closeMobileAppCommercSelector, downloadLinkMobileAppCommercSelector,
        bannerMainpageSelector, brandSelectorBuilder, allBrandsSelector,
        catalogTabsSelectorBuilder, sportSelectorBuilder, allSportsSelector,
        footerMenuSectionSelectorBuilder, footerMenuLinkSelectorBuilder,
        allCatalogTabsSelector,
} = require('../pages/mainpage');

// Actions:
const bannerMainSwipe = async (page) => {
    await elementSwipe(page, bannerMainpageSelector);
};

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
    await elementClick(page, allBrandsSelector);
};

const catalogTabsMain = async (page, n = 1) => {
    if (n !== 8) { await page.hover(allCatalogTabsSelector) };
    await elementClick(page, catalogTabsSelectorBuilder(n));
};

const sportMain = async (page, n = 1) => {
    await elementClick(page, (sportSelectorBuilder(n) + ' > img'));
};

const nameOfSportMain = async (page, n = 1) => {
    return await page.textContent(sportSelectorBuilder(n));
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

const footerMenuLinkText = async (page, n = 1, m = 1) => {
    return await page.textContent(footerMenuLinkSelectorBuilder(n, m));
};


module.exports = {
    closeMobileAppCommerc, downloadLinkMobileAppCommerc, brandMain, 
    allBrandsMain, catalogTabsMain, sportMain, nameOfSportMain, allSportsMain, 
    footerMenuSectionMain, footerMenuLinkMain, bannerMainSwipe, footerMenuLinkText,
};
