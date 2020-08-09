const assert = require('assert').strict;
const { elementClick } = require('../../utils');

//Элементы хедера главной
const searchApiUrl = 'https://m.sportmaster.ru/rest/v1/search?';
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
        closeSearchIcon: 'header > div.td.head-icon.svg-icon',
        // clearSearchIcon: '',
        // profileIcon: '',
        basketIcon: 'header > a.td.head-icon.svg-icon.relative',
    },
};

const burger = async (page, variant = 'new') => {
    const { burgerIcon } = selectors[variant];
    elementClick(page, burgerIcon);
};

const smLogo = async (page, variant = 'new') => {
    const { smLogoIcon } = selectors[variant];
    elementClick(page, smLogoIcon);
};

const search = async (page, variant = 'new') => {
    const { searchIcon } = selectors[variant];
    elementClick(page, searchIcon);
};

const clearSearch = async (page, variant = 'new') => {
    const { clearSearchIcon } = selectors[variant];
    elementClick(page, clearSearchIcon);
};

const closeSearch = async (page, variant = 'new') => {
    const { closeSearchIcon } = selectors[variant];
    elementClick(page, closeSearchIcon);
};

const profile = async (page, variant = 'new') => {
    const { profileIcon } = selectors[variant];
    elementClick(page, profileIcon);
};

const basket = async (page, variant = 'new') => {
    const { basketIcon } = selectors[variant];
    elementClick(page, basketIcon);
};

const searchInput = async (page, variant = 'new', searchRequest) => {
    const { searchInput } = selectors[variant];
    await page.fill(searchInput, searchRequest);
    await page.press(searchInput, 'Enter');
    await page.waitForResponse((res) => res.url().startsWith(searchApiUrl));
    const searchResponse = await page.innerText('esm-search-tiles > div > div:nth-child(3)');
    assert(searchResponse.includes(searchRequest));
};


module.exports = {
    burger,
    smLogo,
    search,
    clearSearch,
    closeSearch,
    profile,
    basket,
    searchInput,
};