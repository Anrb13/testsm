const cookie = {          
    domain: '.sportmaster.ru', 
    path: '/',
};

//Куки для тестрования хедера
const cookieAAB = { 
    name: 'EMPTYAABTC',
    ...cookie,
};
const cookieA1 = {
    ...cookieAAB,
    value: 'EMPTY_A1_VAR',
};
const cookieA2 = {
    ...cookieAAB,
    value: 'EMPTY_A2_VAR',
};

//Куки анонимного пользователя
// const cookieApple = {
//     name: 'apple',
//     value: 'SM01A2F5A766194ACCB701ABE3D73D8393',
//     ...cookie,
// }

//Куки большого брюса баннера
const cookieBanner = {
    name: 'FULLPAGE_BANNER_LAST_SHOWN',
    value: '1',
    ...cookie,
}

//Куки для показа выбора города
const cookieCityConfirmed = {
    name: 'chooseCityModalShow',
    value: 'true',
    ...cookie,
}

const cookieUniverse = {
    name: 'universe',
    value: 'SMFC598977B2564860AF5C5C40B30F88FA',
    ...cookie,
}

module.exports = {
    cookieA1,
    cookieA2,
    cookieBanner,
    cookieCityConfirmed,
    cookieUniverse,
};