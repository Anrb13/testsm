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
        const message = 'Ошибка клика по селектору ' + selector;
        console.log(err);
        await page.screenshot({
            path: `errors/cant_click_element_${time}.jpeg`
        });
        throw new Error(message);
    };
};


module.exports = {
    elementClick,
    getTime,
};