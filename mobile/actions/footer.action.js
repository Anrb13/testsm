const {elementClick} = require('../../utils');
const { sectionBuilder, selectorBuilder, socialBuilder, } = require('../pages/footer')


// Универсальная функция клика по линкам футера
const footerLinkBySectorClick = async (page, n, m) => {
    await elementClick(page, sectionBuilder(n));
    await elementClick(page, selectorBuilder(n, m));
};

// Универсальная функция клика по ссылкам соц.сетей
const footerSocialNetworkClick = async (page, n) => {
    await elementClick(page, sectionBuilder(3));
    await elementClick(page, socialBuilder(n));
};


module.exports = {
    footerLinkBySectorClick, 
    footerSocialNetworkClick, 
};
