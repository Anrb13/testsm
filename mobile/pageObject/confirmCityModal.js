const {elementClick} = require('../../utils');

// Модальное окно выбора города
const confirmCityModalSelectors = {
    new: {
        okButton: '.esm-modal-btn_agreed',
        cancelButton: '.close',
        anotherButton: '.esm-modal-btn_asLink',
    },
    old: {
        okButton: 'div.td.width-50pc.pdRight-5 > button',
        anotherButton: 'div.td.width-50pc.pdLeft-5 > button',
    },
};

const confirmCity = async (page, variant = 'new') => {
    const { okButton } = confirmCityModalSelectors[variant];
    elementClick(page, okButton);
};

const cancelCity = async (page, variant = 'new') => {
    const { cancelButton } = confirmCityModalSelectors[variant];
    elementClick(page, cancelButton);
};

const anotherCity = async (page, variant = 'new') => {
    const { anotherButton } = confirmCityModalSelectors[variant];
    elementClick(page, anotherButton);
};

module.exports = {
    confirmCity,
    cancelCity,
    anotherCity,
};