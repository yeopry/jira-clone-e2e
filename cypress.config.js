const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
<<<<<<< HEAD
    //baseUrl: 'http://34.247.67.214:8080/',
    baseUrl: 'https://jira.ivorreic.com/project/board',
    defaultCommandTimeout: 30000,
=======
    baseUrl: 'https://jira.ivorreic.com/',
    env: {
      baseUrl: 'https://jira.ivorreic.com/',
    },
    defaultCommandTimeout: 30000,
    requestTimeout: 15000,
>>>>>>> 2da89e0741511f34c2c672a47960c6d6c3a5778c
    projectId: "2fahvq",
  },
});
