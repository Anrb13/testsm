module.exports = {
    launchOptions: {
      headless: false,
      slowMo: 1000,
    },
    contextOptions: {
        ignoreHTTPSErrors: true,
        deviceScaleFactor: 1,
    },
    browsers: ["chromium", "webkit"],
    devices: ["iPhone 8", ],
  }
