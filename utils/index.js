const { selectors } = require("playwright");

const elementClick = async (page, selector) => {
    try {
        await page.click(selector)
    } catch (err) {
        console.error('Ошибка клика по селектору ' + selector);
        await page.screenshot({
            path: `errors/cant_click_${selector}.jpeg`
        })
    }
};

module.exports = {
    elementClick,
};