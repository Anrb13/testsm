const baseUrl = 'https://www.sportmaster.ru';
const mUrl = 'https://m.sportmaster.ru';

const getTime = () => {
    const isoDate = (new Date()).toISOString();
    const formatedDate = isoDate.replace(/\:/g, '-'); //":" запрещен в названии файлов windows
    return formatedDate;
};

const elementClick = async (page, selector) => {
    const time = getTime();
    try {
        await page.click(selector);
    } catch (err) {
        console.error(err);
        console.error('Ошибка клика по селектору ' + selector);
        // await page.screenshot({
        //     path: `mobile/errors/cant_click_element_${time}.jpeg`
        // });
    };
};


module.exports = {
    elementClick,
    getTime,
    baseUrl,
    mUrl,
};
