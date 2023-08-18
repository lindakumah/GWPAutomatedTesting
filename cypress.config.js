const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // env: {
  //   MAILOSAUR_API_KEY: "x76FxhhRQhrAQwGh",
  // },
  projectId: "m5gbvc",
  e2e: {
    baseUrl: "https://gds-test.amalitech-dev.net",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
