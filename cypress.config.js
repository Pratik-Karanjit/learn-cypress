const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    viewportHeight: 1080,
    viewportWidth: 560,
    experimentalStudio: true,
  },
});
