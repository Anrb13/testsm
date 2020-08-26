const { elementClick } = require('../../utils');

// Элементы сайдбара на старом хедере
const chooseCitySelector = 'div.td.td-full > span.dashed';
const loginButtonSelector = 'span.smicon-login';
const registerButtonSelector = 'span.smicon-register';

const catalogSelector = 'text=/Каталог/';
const catalogBackSelector = 'esm-sidebar-categories >> div.tr.bg-darkgray.level-back';
const categorySelectorBuilder = (n = 3) => {
    const categorySelector = 'esm-sidebar-categories >> div:nth-child(' + n + ')';
    return categorySelector;
};

const shopsSelector = 'button.smicon-placemarker';
const proSelector = 'button.svgicon-pro';
const openInAppSelector = 'button.smicon-mobile';
const clubProSelector = 'button.smicon-club';
const giftCardSelector = 'button.smicon-card';
const payAndDeliverySelector = 'button.smicon-delivery';
const legalPersonSelector = 'button.smicon-briefcase';
const serviceSelector = 'button.smicon-service';
const newsSelector = 'button.smicon-news';
const contactsSelector = 'button.smicon-phone';
const privacySelector = 'button.smicon-privacy';
const ofertaSelector = 'button.smicon-offer';
const jobSelector = 'button.smicon-vacancies';

// Steps:
const chooseCity = async (page) => {
    await elementClick(page, chooseCitySelector);
};

const loginButton = async (page) => {
    await elementClick(page, loginButtonSelector);
};

const registerButton = async (page) => {
    await elementClick(page, registerButtonSelector);
};

const catalog = async (page) => {
    await elementClick(page, catalogSelector);
};

const catalogBack = async (page) => {
    await elementClick(page, catalogBackSelector);
};

const category = async (page, n = 3) => {
    await elementClick(page, categorySelectorBuilder(n));
};

const shopsLocation = async (page) => {
    await elementClick(page, shopsSelector);
};

const proSection = async (page) => {
    await elementClick(page, proSelector);
};

const openInApp = async (page) => {
    await elementClick(page, openInAppSelector);
};

const clubPro = async (page) => {
    await elementClick(page, clubProSelector);
};

const giftCard = async (page) => {
    await elementClick(page, giftCardSelector);
};

const payAndDelivery = async (page) => {
    await elementClick(page, payAndDeliverySelector);
};

const legalPerson = async (page) => {
    await elementClick(page, legalPersonSelector);
};

const serviceSection = async (page) => {
    await elementClick(page, serviceSelector);
};

const newsSection = async (page) => {
    await elementClick(page, newsSelector);
};

const contactsSection = async (page) => {
    await elementClick(page, contactsSelector);
};

const privacySection = async (page) => {
    await elementClick(page, privacySelector);
};

const ofertaSection = async (page) => {
    await elementClick(page, ofertaSelector);
};

const jobLink = async (page) => {
    await elementClick(page, jobSelector);
};


module.exports = {
    chooseCity, loginButton, registerButton, catalog, catalogBack,
    category, shopsLocation, proSection, openInApp, clubPro,
    giftCard, payAndDelivery, legalPerson, serviceSection, newsSection,
    contactsSection, privacySection, ofertaSection, jobLink, categorySelectorBuilder
};
