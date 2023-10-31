const {expect, Page} = require("@playwright/test");
const {dotenv} = require("dotenv");

require('dotenv').config({
  path: `.env`
});


class VideoPage {
  selectSerieOption = '//a[contains(text(),"Series")]'
  oneSerieOption = '//a[@aria-label="Élite"]//div[@class="boxart-size-16x9 boxart-container boxart-rounded"]'
  btnReproducir = ' //a[@class="primary-button playLink isToolkit"]//button[@type="button"]'
  
  async wait(){
    await page.waitForTimeout(5000);
  }
  async selectSerie(){
    await page.click(this.selectSerieOption);
  }  

  async oneSerie(){
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight); 
    });
    await page.click(this.oneSerieOption);
  }
 
  async reproduceVideo() {
    await page.locator(this.btnReproducir).click();
    await this.wait();
  }

  async minimizeSizeWindows(){
    await page.setViewportSize({ width: 800, height: 600 });
    await this.wait();
  }

 
  async maximizeSizeWindows(){
  
    await page.setViewportSize({ width: 1920, height: 1080 });
    await this.wait();
  }

  async viewProfilePatient(){
    await expect(page.locator(this.txtPatientTitle)).toContainText('Patient');
    await this.wait();
  }

  
  async viewPatientDiagnosis(){
    await expect(page.locator(this.diagnosisText)).toContainText('Diagnosis');
    await this.wait(1000);
  }
  
  // async viewPatientDiagnosisform(){
  //   await expect(page.locator(this.newDiagnosisForm.diagnosisText)).toBeVisible();
  //   await expect(page.locator(this.newDiagnosisForm.diagnosisDateText)).toBeVisible();
  //   await expect(page.locator(this.newDiagnosisForm.usageText)).toBeVisible();
  //   await expect(page.locator(this.newDiagnosisForm.providerText)).toBeVisible();
  //   await expect(page.locator(this.newDiagnosisForm.ProvideNPIText)).toBeVisible();
  //   await this.wait(1000);
  // }
  
}
module.exports = { VideoPage }