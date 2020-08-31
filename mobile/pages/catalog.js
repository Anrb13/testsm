const {elementClick} = require('../../utils');

// Elements: cтраницы с подкатегориями
const breadcrumbsSelectorBuilder = (n) => {
    return 'div.breadcrumbs.clearfix > span:nth-child(' + n + ')';
};
const subCategorySelectorBuilder = (n) => {
    return 'div.clearfix > div:nth-child(' + n + ') >> a';
};

// Steps: взимодействие с элементами
const breadcrumbs = async (page, n = 1) => {
    await elementClick(page, breadcrumbsSelector(n));
};

const pageBreadcrumbsText = async (page, n = 1) => {
    return await page.textContent(breadcrumbsSelectorBuilder(n));
};

const chooseSubCategory = async (page, n = 1) => {
    await elementClick(page, subCategorySelectorBuilder(n));
};


module.exports = {
    breadcrumbs,
    chooseSubCategory,
    breadcrumbsSelectorBuilder,
    pageBreadcrumbsText
};
