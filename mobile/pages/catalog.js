const {elementClick} = require('../../utils');

// Elements: cтраницы с подкатегориями
const breadcrumbsSelectorBuilder = (n) => {
    const breadcrumbsSelector = 'div.breadcrumbs.clearfix > span:nth-child(' + n + ')';
    return breadcrumbsSelector;
};
const subCategorySelectorBuilder = (n) => {
    const subCategorySelector = 'div.clearfix > div:nth-child(' + n + ') >> a';
    return subCategorySelector;
};

// Steps: взимодействие с элементами
const breadcrumbs = async (page, n = 1) => {
    await elementClick(page, breadcrumbsSelector(n));
};

const chooseSubCategory = async (page, n = 1) => {
    await elementClick(page, subCategorySelectorBuilder(n));
};


module.exports = {
    breadcrumbs,
    chooseSubCategory,
    breadcrumbsSelectorBuilder,
};
