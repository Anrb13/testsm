const baseUrl = (noscript) => {
    const param = noscript ? '?noscript=1' : '';
    return `https://www.sportmaster.ru${param}`
};

const mUrl = 'https://m.sportmaster.ru?noscript=1';

module.exports = {
    baseUrl,
    mUrl,
};
