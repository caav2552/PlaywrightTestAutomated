const { Given, When, Then, After} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const {LoginPage} = require("../../e2e/page_object/LoginPage");
const { chromium } = require('playwright');


let browser;
let loginPage;

Given('A user opens Netflix',  async () =>{
try {
    browser = await chromium.launch();
    
    const context = await browser.newContext();
    const page = await context.newPage();
    loginPage = new LoginPage(page);
    
    await loginPage.gotoWebsite();
   

} catch (error) {
    console.error('Error durante la apertura de Netflix:', error);
  }
});
Then('A user will print the Tittle', async function () {
    await loginPage.printTittle()
    
}); 


Then('A user change Language to English', async function () {
    await loginPage.changeLanguage()
    
}); 

Then('A user clicks on the sign in button Home', async function () {
    await loginPage.LoginButton()
    //await loginPage.maximizarVentana()
   
}); 

Then('A user enters a username', async function () {
    await loginPage.enterUsername();
}); 
Then('A user enters a invalid username', async function () {
    await loginPage.enterInvalidUsername();
}); 

Then('A user enters a password', async function (){
    await loginPage.enterPassword();
});

When('A user clicks on the sign in button', async function () {
    await loginPage.clickSigIn();
   

});

Then('A user enters to a Profile', async function () {

    await loginPage.enterProfile();
});

Then('Validation Netflix appear on the website', async function () {

    await loginPage.assertionTittleN();
});

Then('Validation messages are displayed above of the SignIn field', async function () {

    await loginPage.assertioninvalidmessageSingInName();
});

Then('Validation messages are displayed above of the Password field', async function () {

    await loginPage.assertionEnterPassword();
});


After(async () => {
    if (browser) {
      await browser.close();
    }
  });






