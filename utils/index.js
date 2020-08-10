const { formatedDate } = require('../config');

//todo: добавить тайтл теста или функции в название скриншота с ошибкой
const elementClick = async (page, selector) => {
    try {
        await page.click(selector);
    } catch (err) {
        const message = 'Ошибка клика по селектору ' + selector;
        await page.screenshot({
            path: `errors/cant_click_element_${formatedDate}.jpeg`
            });
    throw new Error(message);
    };
};

// const goTo = async (page, selector) => {
//     await elementClick(page, selector);
//     try {
//         await page.waitForNavigation()
//     } catch (err) {
//         console.error('Ошибка перехода по клику селектора ' + selector);
//     };
// };

module.exports = {
    elementClick,
};