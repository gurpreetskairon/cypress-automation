const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://jupiter.cloud.planittesting.com/#",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
