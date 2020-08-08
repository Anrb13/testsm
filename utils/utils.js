const { selectors } = require("playwright");
const { formatedDate } = require('../config');

//todo: добавить тайтл теста или функции название скриншота с ошибкой
const elementClick = async (page, selector) => {
    try {
        await page.click(selector)
    } catch (err) {
        console.error('Ошибка клика по селектору ' + selector);
        await page.screenshot({
            path: `errors/cant_click_element_${formatedDate}.jpeg`
        })
    }
};

module.exports = {
    elementClick,
};