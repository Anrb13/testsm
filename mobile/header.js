//Элементы хедера  НОВОЙ главной
const selectors = {
    new: {
        burgerIcon: '.header-icon-bg-menu',
        smLogoIcon: '.header-icon-bg-logo',
        searchIcon: '.header-icon-bg-search',
        searchInput: '#searchGoods_value',
        closeSearchIcon: '.close-search-button',
        profileIcon: '.profile-icon',
        basketIcon: '.basket-icon',
    },
    old: {
        burgerIcon: '.header-icon-bg-menu',
        smLogoIcon: '.header-icon-bg-logo',
        searchIcon: '.header-icon-bg-search',
        closeSearchIcon: '.close-search-button',
        profileIcon: '.profile-icon',
        basketIcon: '.basket-icon',
        searchInput: '#searchGoods_value',
    },
};

const burger = async (page, variant = 'new') => {
    const { burgerIcon } = selectors[variant];
    await page.click(burgerIcon);
};

const smLogo = async (page, variant = 'new') => {
    const { smLogoIcon } = selectors[variant];
    await page.click(smLogoIcon);
};

const search = async (page, variant = 'new') => {
    const { searchIcon } = selectors[variant];
    await page.click(searchIcon);
};

const searchInput = async (page, variant = 'new', request) => {
    const { searchInput } = selectors[variant];
    await page.fill(searchInput, request);
    await page.press(searchInput, 'Enter');
};

const closeSearch = async (page, variant = 'new') => {
    const { closeSearchIcon } = selectors[variant];
    await page.click(closeSearchIcon);
};

const profile = async (page, variant = 'new') => {
    const { profileIcon } = selectors[variant];
    await page.click(profileIcon);
};

const basket = async (page, variant = 'new') => {
    const { basketIcon } = selectors[variant];
    await page.click(basketIcon);
};

module.exports = {
    burger,
    smLogo,
    search,
    searchInput,
    closeSearch,
    profile,
    basket,
};