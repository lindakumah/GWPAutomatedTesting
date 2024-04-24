const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'GWP Cypress Automation Report',
    reportTitle: 'GWP Cypress Automation Report',
    inlineAssets: true,
    html: false,
    json: true,
  },
  projectId: 'm5gbvc',
  e2e: {
    pageLoadTimeout: 80000,
    defaultCommandTimeout: 50000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    retries: 0,
    requestTimeout: 100000,
    responseTimeout: 100000,
    scrollBehavior: 'center',
    chromeWebSecurity: false,
    baseUrl: 'https://complyhub-test.amalitech-dev.net/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
