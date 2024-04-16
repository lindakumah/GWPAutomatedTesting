const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // env: {
  //   MAILOSAUR_API_KEY: "x76FxhhRQhrAQwGh",
  // },
  projectId: 'm5gbvc',
  e2e: {
    pageLoadTimeout: 80000,
    defaultCommandTimeout: 50000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    retries: 0,
    requestTimeout: 50000,
    responseTimeout: 50000,
    scrollBehavior: 'center',
    chromeWebSecurity: false,
    baseUrl: 'https://complyhub-test.amalitech-dev.net/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
