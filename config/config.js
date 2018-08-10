const path = require("path");
const jsonReports = process.cwd() + "/reports/json";
const Reporter = require("../support/reporter");

exports.config = {
 // seleniumAddress: "http://localhost:4444/wd/hub",
 directConnect: true,
  baseUrl: "https://www.google.com/",
  capabilities: {
    browserName: process.env.TEST_BROWSER_NAME || "chrome"
  },
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["../features/*.feature"],
  
   resultJsonOutputFile: "./reports/json/protractor_report.json",
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    require('babel-register');
    Reporter.createDirectory(jsonReports);
  },
  cucumberOpts: {
    strict: true,
    format: 'json:./reports/json/cucumber_report.json',
    require: ["../stepDefinitions/*.js", "../support/*.js"],
    tags: "@GmailSearchScenario"
  },
  onComplete: function () {
    Reporter.createHTMLReport();
  }
};