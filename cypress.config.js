
const { defineConfig } = require("cypress");

module.exports = defineConfig({
screenshotOnRunFailure:true,
chromeWebSecurity:false,
experimentalStudio:true,
defaultCommandTimeout:6000,
pageLoadTimeout:12000,
retries:{
  runMode:1,
},
env:{
  test:{
  url:"https://www.saucedemo.com/v1/",
  username:"standard_user",
  password:"secret_sauce",
  }
},
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners hereu

        },
      },
     });

  
