import {Page, TestInfo, test} from '@playwright/test';
import {LandingPage} from '../pageobjects/landing-page';

export class BaseTest {
    static async initialize(page: Page, testInfo: TestInfo) {
        let landingPage = new LandingPage(page, testInfo);
        console.log(`Running "${test.info().title}" in ${test.info().file.split('\\').reverse()[0]}`);
        await landingPage.goToLandingPage();
        await landingPage.clickDeclineCookies();
        await landingPage.clickLoginButton();
    }

    static async takeScreenshot(page: Page, testInfo: TestInfo) {
        let screenshot = await page.screenshot();
        await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
    }
}
