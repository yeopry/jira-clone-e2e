const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: 'http://34.247.67.214:8080/',
    baseUrl: 'https://jira.ivorreic.com/project/board',
    defaultCommandTimeout: 30000,
    projectId: "2fahvq",
  },
});
