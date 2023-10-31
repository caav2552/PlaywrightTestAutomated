const { Given, When, Then} = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { VideoPage } = require("../../e2e/page_object/VideoPage");

const video = new VideoPage();

/****************** Scenario: ****/
Then('A user Choose a Video', async function (){
    await video.selectSerie();
    await video.oneSerie()
});

Then('A user Reproduce the Video', async function (){
    await video.reproduceVideo();
});

Then ('A user Minimize the windows', async function () {
    await video.minimizeSizeWindows();
}); 

Then ('A user Maximize the windows', async function () {
    await video.maximizeSizeWindows();
}); 
