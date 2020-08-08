const assert = require('assert').strict;
const {elementClick} = require('../../utils');

// Селекторы футера которые не вошли в билдеры
const region = 'div.layout-footer__menu__section__items-container > div:nth-child(1)';
const eGiftcard = '.layout-footer__gift-card__container';
const clubCard = '.layout-footer__club-card__container';
const yandexMarket = '.layout-footer__yandex-market';
const fullVersion = '.layout-footer__full-version';
const androidApp = 'div.layout-footer__mobile-apps > div.layout-footer__image-container > a:nth-child(1)';
const iosApp = 'div.layout-footer__mobile-apps > div.layout-footer__image-container > a:nth-child(2)';

const parentSelector = ' > div.layout-footer__menu__section__items-container > ';
const sectionBuilder = (a) => {
    const sectionSelector = 'div.layout-footer__menu > div:nth-child(';
    let section = sectionSelector + a + ')';
    return section;
};
const selectorBuilder = (b, c) => {
    const linkSelector = parentSelector + 'a:nth-child(';
    let link = sectionBuilder(b) + linkSelector + c + ')';
    return link;
};
const socialBuilder = (d) => {
    const socialSelector = parentSelector + 'div.layout-footer__image-container > a:nth-child(';
    let social = sectionBuilder(3) + socialSelector + d + ')';
    return social;
};

//Секция 'Сервис и помощь'
const sectionService = async (page) => {
    elementClick(page, sectionBuilder(1));
};

const profileFooter = async (page) => {
    elementClick(page, selectorBuilder(1, 1));
};
const deliveryFooter = async (page) => {
    elementClick(page, selectorBuilder(1, 2));
};
const exchangeFooter = async (page) => {
    elementClick(page, selectorBuilder(1, 3));
};
const serviceFooter = async (page) => {
    elementClick(page, selectorBuilder(1, 4));
};
const warrantyFooter = async (page) => {
    elementClick(page, selectorBuilder(1, 5));
};
const reviewFooter = async (page) => {
    elementClick(page, selectorBuilder(1, 6));
};
const legalPersonFooter = async (page) => {
    elementClick(page, selectorBuilder(1, 7));
};

//Секция 'Информация'
const sectionInfo = async (page) => {
    elementClick(page, sectionBuilder(2));
};

const aboutCompanyFooter = async (page) => {
    elementClick(page, selectorBuilder(2, 1));
};
const storesFooter = async (page) => {
    elementClick(page, selectorBuilder(2, 2));
};
const jobFooter = async (page) => {
    elementClick(page, selectorBuilder(2, 3));
};
const renterFooter = async (page) => {
    elementClick(page, selectorBuilder(2, 4));
};
const collaborationFooter = async (page) => {
    elementClick(page, selectorBuilder(2, 5));
};
const zakupkiFooter = async (page) => {
    elementClick(page, selectorBuilder(2, 6));
};
const contactsFooter = async (page) => {
    elementClick(page, selectorBuilder(2, 7));
};
const newsFooter = async (page) => {
    elementClick(page, selectorBuilder(2, 8));
};
const promoFooter = async (page) => {
    elementClick(page, selectorBuilder(2, 9));
};
const projectsFooter = async (page) => {
    elementClick(page, selectorBuilder(2, 10));
};

//Секция 'Контакты'
const sectionContacts = async (page) => {
    elementClick(page, sectionBuilder(3));
};

const number = async (page) => {
    elementClick(page, selectorBuilder(3, 2));
};
const email = async (page) => {
    elementClick(page, selectorBuilder(3, 4));
};
const corpLink = async (page) => {
    elementClick(page, selectorBuilder(3, 6));
};

//Ссылки на соцсети
const facebook = async (page) => {
    elementClick(page, socialBuilder(1));
};
const vkontakte = async (page) => {
    elementClick(page, socialBuilder(2));
};
const odnoklassniki = async (page) => {
    elementClick(page, socialBuilder(3));
};
const instagram = async (page) => {
    elementClick(page, socialBuilder(4));
};
const youtube = async (page) => {
    elementClick(page, socialBuilder(5));
};

//Остальное
const regionFooter = async (page) => {
    elementClick(page, region);
};
const eGiftcardFooter = async (page) => {
    elementClick(page, eGiftcard);
};
const clubCardFooter = async (page) => {
    elementClick(page, clubCard);
};
const yandexMarketFooter = async (page) => {
    elementClick(page, yandexMarket);
};
const fullVersionFooter = async (page) => {
    elementClick(page, fullVersion);
};
const androidAppFooter = async (page) => {
    elementClick(page, androidApp);
};
const iosAppFooter = async (page) => {
    elementClick(page, iosApp);
};

//todo: добавить всё в экспорт, проверить все клики через симплтест.
module.exports = {
    sectionService,
    profileFooter,
};

