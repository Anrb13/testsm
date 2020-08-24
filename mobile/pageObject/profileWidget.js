const { elementClick } = require('../../utils');

// виджет авторизации / авторизованного пользователя на новом хедере
const loginInputSelector = 'input#new-profile-token';
const passwordInputSelector = 'input#new-profile-password';
const forgotPasswordSelector = '.user-profile__last-password';
const submitLoginSelector = 'button.user-profile__login-btn';
const registrationButtonSelector = 'a.user-profile__reg-btn';

// Steps: взаимодействие с элементами виджета
const loginInput = async (page, login) => {
    await page.fill(loginInputSelector, login);
};

const passwordInput = async (page, pass) => {
    await page.fill(passwordInputSelector, pass);
};

const forgotPassword = async (page) => {
    await elementClick(page, forgotPasswordSelector);
};

const submitLoginForm = async (page) => {
    await elementClick(page, submitLoginSelector)
};

const registrationButton = async (page) => {
    await elementClick(page, registrationButtonSelector);
};

module.exports = {
    loginInput, 
    passwordInput,
    forgotPassword, 
    submitLoginForm, 
    registrationButton,
};
