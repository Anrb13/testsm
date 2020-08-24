const { elementClick } = require('../../utils');

// Элементы хедера главной
const selectors = {
    new: {
        burgerIcon: '.header-icon-bg-menu',
        smLogoIcon: '.header-icon-bg-logo',
        searchIcon: '.header-icon-bg-search',
        searchInput: '#searchGoods_value',
        closeSearchIcon: '.close-search-button',
        clearSearchIcon: '.clear-search-button',
        profileIcon: '.profile-icon',
        basketIcon: '.basket-icon',
    },
    old: {
        burgerIcon: 'header > div.td.bg-menu.head-icon',
        smLogoIcon: 'header > a.td.bg-logo',
        searchIcon: 'header > div.td.head-icon.svg-icon',
        searchInput: '#searchGoods_value',
        basketIcon: 'header >> a.head-icon',
    },
};

// Steps: взаимодействие с элементами хедера
const burger = async (page, variant = 'new') => {
    const { burgerIcon } = selectors[variant];
    await elementClick(page, burgerIcon);
};

const smLogo = async (page, variant = 'new') => {
    const { smLogoIcon } = selectors[variant];
    await elementClick(page, smLogoIcon);
};

const search = async (page, variant = 'new') => {
    const { searchIcon } = selectors[variant];
    await elementClick(page, searchIcon);
};

const clearSearch = async (page, variant = 'new') => {
    const { clearSearchIcon } = selectors[variant];
    await elementClick(page, clearSearchIcon);
};

const closeSearch = async (page, variant = 'new') => {
    const { closeSearchIcon } = selectors[variant];
    await elementClick(page, closeSearchIcon);
};

const profile = async (page, variant = 'new') => {
    const { profileIcon } = selectors[variant];
    await elementClick(page, profileIcon);
};

const basket = async (page, variant = 'new') => {
    const { basketIcon } = selectors[variant];
    await elementClick(page, basketIcon);
};

const searchByRequest = async (page, variant = 'new', searchRequest) => {
    const { searchInput } = selectors[variant];
    await page.fill(searchInput, searchRequest);
    await page.press(searchInput, 'Enter');
    await page.waitForSelector('esm-search-tiles >> div:nth-child(3)');
    const searchResponse = await page.innerText('esm-search-tiles >> div:nth-child(3)');
    await expect(searchResponse).toContain(searchRequest);
};


module.exports = {
    burger, 
    smLogo, 
    search,
    clearSearch, 
    closeSearch,
    profile, 
    basket, 
    searchByRequest,
};
