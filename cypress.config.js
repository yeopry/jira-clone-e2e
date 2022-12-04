const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://jira.ivorreic.com/',
    env: {
      baseUrl: 'https://jira.ivorreic.com/',
    },
    defaultCommandTimeout: 30000,
    requestTimeout: 15000,
    projectId: "2fahvq",
  },
});
