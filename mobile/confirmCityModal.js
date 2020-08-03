// Модальное окно выбора города
const selectors = {
    new: {
        okButton: '.esm-modal-btn_agreed',
        cancelButton: '.close',
        anotherButton: '.esm-modal-btn_asLink',
    },
    old: {
        okButton: '',
        cancelButton: '',
        anotherButton: '',
    },
};

const confirmCity = async (page, variant = 'new') => {
    const { okButton } = selectors[variant];
    await page.click(okButton);
};

const cancelCity = async (page, variant = 'new') => {
    const { cancelButton } = selectors[variant];
    await page.click(cancelButton);
};

const anotherCity = async (page, variant = 'new') => {
    const { anotherButton } = selectors[variant];
    await page.click(anotherButton);
};

module.exports = {
    confirmCity,
    cancelCity,
    anotherCity,
};