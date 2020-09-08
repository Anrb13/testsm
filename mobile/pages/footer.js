//Селекторы футера, которые не вошли в билдеры
const region = 'div.layout-footer__menu__section__items-container > div:nth-child(1)';
const eGiftcard = '.layout-footer__gift-card__image';
const clubCard = '.layout-footer__club-card__image';
const yandexMarket = '.layout-footer__yandex-market';
const fullVersion = 'esm-footer > div > div.layout-footer__full-version > a';
const androidApp = 'div.layout-footer__mobile-apps > div.layout-footer__image-container > a:nth-child(1)';
const iosApp = 'div.layout-footer__mobile-apps > div.layout-footer__image-container > a:nth-child(2)';
const privacy = 'div.layout-footer__copyright > a:nth-child(2)';
const oferta = 'div.layout-footer__copyright > a:nth-child(3)';

//Билдер для селекторов футера
const parentSelector = ' > div.layout-footer__menu__section__items-container > ';
const sectionBuilder = (a) => {
    return 'div.layout-footer__menu > div:nth-child(' + a + ')';
};
const selectorBuilder = (a, b) => {
    return sectionBuilder(a) + parentSelector + 'a:nth-child(' + b + ')';
};
const socialBuilder = (a) => {
    return sectionBuilder(3) + parentSelector + 'div.layout-footer__image-container > a:nth-child(' + a + ')';
};


module.exports = {
    region, eGiftcard, clubCard, yandexMarket, fullVersion, 
    androidApp, iosApp, privacy, oferta, sectionBuilder, 
    selectorBuilder, socialBuilder,
};
