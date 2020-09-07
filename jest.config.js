module.exports = {
    setupFilesAfterEnv: ['./jest.setup.js', 'jest-allure/dist/setup'],
    reporters: ["default", "jest-allure"],
    // preset: "jest-playwright-preset",
};