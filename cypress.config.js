const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.sydsvenskan.se/", // replace with your app URL
    browser: 'chrome', // Set the browser here
    supportFile: false,
    chromeWebSecurity: false,
    specPattern: [
      'cypress/e2e/*.cy.js',
      'cypress/smoke/*.cy.js',
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
