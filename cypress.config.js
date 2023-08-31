const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'http://magento-ce-2.4.5-p1.com/',
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
});
