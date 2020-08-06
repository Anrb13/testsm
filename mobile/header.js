const assert = require('assert').strict;

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
    try {
        await page.click(burgerIcon);
    } catch (err) {
        console.error('Ошибка клика по селектору ' + burgerIcon);
    }
};

const smLogo = async (page, variant = 'new') => {
    const { smLogoIcon } = selectors[variant];
    try {
        await page.click(smLogoIcon);
    } catch (err) {
        console.error('Ошибка клика по селектору ' + smLogoIcon);
    }
};

const search = async (page, variant = 'new') => {
    const { searchIcon } = selectors[variant];
    try {
        await page.click(searchIcon);
    } catch (err) {
        console.error('Ошибка клика по селектору ' + searchIcon);
    }
};

const searchInput = async (page, variant = 'new', searchRequest) => {
    const { searchInput } = selectors[variant];
    await page.type(searchInput, searchRequest);
    await page.press(searchInput, 'Enter');
    await page.waitForResponse((res) => res.url().startsWith(searchApiUrl));
    const searchResponse = await page.innerText('esm-search-tiles > div > div:nth-child(3)');
    const textInc = searchResponse.includes(searchRequest);
    assert(textInc);
};

const clearSearch = async (page, variant = 'new') => {
    const { clearSearchIcon } = selectors[variant];
    try {
        await page.click(clearSearchIcon);
    } catch (err) {
        console.error('Ошибка клика по селектору ' + clearSearchIcon);
    }
};

const closeSearch = async (page, variant = 'new') => {
    const { closeSearchIcon } = selectors[variant];
    try {
        await page.click(closeSearchIcon);
    } catch (err) {
        console.error('Ошибка клика по селектору ' + closeSearchIcon);
    }
};

const profile = async (page, variant = 'new') => {
    const { profileIcon } = selectors[variant];
    try {
        await page.click(profileIcon);
    } catch (err) {
        console.error('Ошибка клика по селектору ' + profileIcon);
    }
};

const basket = async (page, variant = 'new') => {
    const { basketIcon } = selectors[variant];
    try {
        await page.click(basketIcon);
    } catch (err) {
        console.error('Ошибка клика по селектору ' + basketIcon);
    }
};

module.exports = {
    burger,
    smLogo,
    search,
    searchInput,
    clearSearch,
    closeSearch,
    profile,
    basket,
};