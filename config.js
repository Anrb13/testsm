const baseUrl = (noscript) => {
    const param = noscript ? '?noscript=1' : '?noscript=0';
    return `https://www.sportmaster.ru${param}`
};

module.exports = {
    baseUrl,
};