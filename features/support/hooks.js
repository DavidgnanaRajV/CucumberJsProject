var {defineSupportCode} = require('cucumber');
var reporter = require('cucumber-html-reporter');

defineSupportCode(function({Before,After}){
  Before(function(){
    return this.driver.manage().window().maximize();
  });
  After(function(){
    //return this.driver.quit();
  });
});
