// Модальное окно выбора города
const selectors = {
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
    const { okButton } = selectors[variant];
    try {
        await page.click(okButton);
    } catch (err) {
        console.error('Ошибка клика по селектору ' + okButton);
    }
};

const cancelCity = async (page, variant = 'new') => {
    const { cancelButton } = selectors[variant];
    try {
        await page.click(cancelButton);
    } catch (err) {
        console.error('Ошибка клика по селектору ' + cancelButton);
    }
};

const anotherCity = async (page, variant = 'new') => {
    const { anotherButton } = selectors[variant];
    try {
        await page.click(anotherButton);
    } catch (err) {
        console.error('Ошибка клика по селектору ' + anotherButton);
    }
};

module.exports = {
    confirmCity,
    cancelCity,
    anotherCity,
};