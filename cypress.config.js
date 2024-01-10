const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // env: {
  //   MAILOSAUR_API_KEY: "x76FxhhRQhrAQwGh",
  // },
  projectId: 'm5gbvc',
  e2e: {
    pageLoadTimeout: 80000,
    defaultCommandTimeout: 30000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    retries: 0,
    scrollBehavior: 'center',
    chromeWebSecurity: false,
    //baseUrl: "https://mcp.gds.amalitech-dev.net",
    baseUrl: 'https://gds-test.amalitech-dev.net/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
