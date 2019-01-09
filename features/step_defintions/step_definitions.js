var {defineSupportCode} = require('cucumber');
var seleniumWebdriver = require('selenium-webdriver');
var assert = require('assert');
const By = seleniumWebdriver.By
const until = seleniumWebdriver.until


 defineSupportCode(function({Given,When,Then}){


   Given('Home page of facebook', function () {
     this.driver.get("https://www.facebook.com/");

 });

 When('I enter Invalid email in user id field', function () {
  this.driver.findElement({css:"input#email"}).sendKeys('Test@gmail.com');
  console.log('Entered Username');
 });

 When('I enter Invalid password in password field', function () {
   this.driver.findElement({css:"input#pass"}).sendKeys('Incorrectpassword');
   console.log('Entered password');
 });

 When('I click on Submit button', function () {
   this.driver.findElement({css:"input[value='Log In']"}).click();
    console.log('clicked on submit');
   this.driver.sleep(20000)
 });

 Then('I verify error message', function () {
   this.driver.wait(until.elementLocated(By.xpath("//div[@class='uiContextualLayer uiContextualLayerRight']/div/div")), 5000);
   this.driver.findElement({xpath:"//div[@class='uiContextualLayer uiContextualLayerRight']/div/div"}).getText().then(function(text) {
   console.log('Error Message:',text);
   assert(text === 'The password that you\'ve entered is incorrect. Forgotten password?', "Test Failed!!!");
    });
 });
});
