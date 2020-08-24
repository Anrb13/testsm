const getTime = async() => {
    const isoDate = (new Date()).toISOString();
    const formatedDate = isoDate.replace(/\:/g, '-'); //":" запрещен в названии файлов windows
    return formatedDate;
};

const elementClick = async (page, selector) => {
    const time = await getTime();
    try {
        await page.click(selector);
    } catch (err) {
        console.error('Ошибка клика по селектору ' + selector);
        console.error(err);
        await page.screenshot({
            path: `mobile/errors/cant_click_element_${time}.jpeg`
        });
    };
};


module.exports = {
    elementClick,
    getTime,
};
