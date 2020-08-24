const {elementClick} = require('../../utils');

//Страница с подкатегориями
//div.breadcrumbs.clearfix крошки
//div.clearfix > div:nth-child(1) > div > div.td.td-top.width-33pc.pdAll-5 > a
//div.clearfix > div:nth-child(1) > div > div:nth-child(2) > h2 > a

const breadcrumbs = async (page, n = 1) => {
    const breadcrumbsSelector = 'div.breadcrumbs.clearfix > span:nth-child(' + n + ')';
    await elementClick(page, breadcrumbsSelector);
}

//клик по подкатегории (n - порядковый номер, по умолчанию = 1)
const chooseSubcategory = async (page, n = 1) => {
    const subCategorySelector = 'div.clearfix > div:nth-child(' + n + ') >> a';
    await elementClick(page, subCategorySelector);
};


module.exports = {
    breadcrumbs,
    chooseSubcategory,
};
