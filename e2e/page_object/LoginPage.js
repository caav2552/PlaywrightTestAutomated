const {expect, Page} = require("@playwright/test");
const {dotenv} = require("dotenv");
require('dotenv').config({
  path: `.env`
});

class LoginPage {
  constructor(page) {
    this.page = page; 
  }
  languageEnglish = '//select[@name="LanguageSelect"]'
  tittleNetflix = '//title[contains(text(),"Netflix Bolivia - Watch TV Shows Online, Watch Mov")]'
  English = '//option[@label="English"][@xpath="1"])'
  buttonSigIn = '//button[@type="submit"]';
  buttonLogin = '//a[contains(text(),"Sign In")]'
  inputUser = '//input[@id="id_userLoginId"]';
  inputPass = '//input[@id="id_password"]';
  enterProfileUser = '//div[@data-profile-guid="YHUCTRQKAFCJDPZBFYGATYGMZY"]'
  assertionMssgEnterSignIn = '//div[@data-uia="login-field+error"]'
  assertionMssgEnterPassword = '//div[@data-uia="password-field+error"]'
  selectElementPath = '[data-uia="language-picker"]'
  selectOptionPath = 'en-BO'
  assertionTittle='//a[@aria-label="Netflix"]'

   

  async wait(){
    await this.page.waitForTimeout(3000);
  }

  async gotoWebsite() {     
    await page.goto('https://www.netflix.com/bo/', { waitUntil: 'load' });

  }

  async printTittle() {     
    await page.waitForLoadState('load');
    const pageTitle = await this.page.title();
    console.log('Título de la página:', pageTitle);
}

  async maximizarVentana() {
    
    const screenSize = await this.page.evaluate(() => {
      return {
        width: window.screen.width,
        height: window.screen.height
      };
    });
    await this.page.setViewportSize(screenSize);
  }


  async changeLanguage() {
    await page.click(this.languageEnglish)
    const selectElement = await page.$(this.selectElementPath);
    await selectElement.selectOption(this.selectOptionPath)
    await this.wait();
  }

  async LoginButton(){
    await page.click(this.buttonLogin)    
    await page.waitForTimeout(3000);    
  }

  async clickSigIn(){
    await page.click(this.buttonSigIn)    
    await page.waitForTimeout(3000);   
  }
 
  async enterUsername(username = process.env.EMAIL){
    await page.fill(this.inputUser, username);
    await this.wait();
  }
  async enterInvalidUsername(username = process.env.EMAIL2){
    await page.fill(this.inputUser, username);
    await this.wait();
  }

  async enterPassword(password = process.env.PASSWORD){
    await page.fill(this.inputPass, password);      
    await this.wait();
  }

  async enterProfile(){ 
    await page.click(this.enterProfileUser) 
    await page.waitForTimeout(3000); 
  }
 
  async assertionTittleN(){
    await expect(page.locator(this.assertionTittle)).toBeVisible();
    //await expect(page.locator(this.assertionMssgEnterPassword)).toContainText('Please enter your password');
    
  }
  async assertionEnterPassword(){
    await expect(page.locator(this.assertionMssgEnterPassword)).toBeVisible();
    //await expect(page.locator(this.assertionMssgEnterPassword)).toContainText('Please enter your password');
    
  }

  async assertioninvalidmessageSingInName(){
    await expect(page.locator(this.assertionMssgEnterSignIn)).toBeVisible();
  }


}
module.exports =  {LoginPage}; 