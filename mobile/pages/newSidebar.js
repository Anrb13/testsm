const { elementClick } = require('../../utils');

// Сайдбар -> выбор города, адреса магазинов, список сравнения
const chooseCitySelector = 'div.choose-city';
const shopsLocationSelector = 'a.shop-location';
const compareListSelector = 'a.comparelist';

// Сайдбар -> навигация по каталогу
const categoryBackSelector = 'esm-sidebar-categories >> div.back-item';
const categorySelectorBuilder = (n) => {
    const categorySelector = 'esm-sidebar-categories >> div:nth-child(' + n + ')';
    return categorySelector;
};

// Steps: взаимодействие с элементами сайдбара
const chooseCity = async (page) => {
    await elementClick(page, chooseCitySelector);
};

const shopsLocation = async (page) => {
    await elementClick(page, shopsLocationSelector);
};

const compareList = async (page) => {
    await elementClick(page, compareListSelector);
};

const categoryBack = async (page) => {
    await elementClick(page, categoryBackSelector);
}

const categoryClick = async (page, n = 1) => {
    await elementClick(page, categorySelectorBuilder(n));
};


module.exports = {
    chooseCity,
    shopsLocation,
    compareList,
    categoryBack,
    categoryClick
};
