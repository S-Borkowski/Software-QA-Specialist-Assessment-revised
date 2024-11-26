import {test as baseTest} from '@playwright/test';
import {Page, TestInfo} from '@playwright/test';
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

export const test = baseTest.extend<{
        beforeTest: void,
        afterTest: void
    }>({
    beforeTest: [
        async ({page}, use, testInfo) => {
            await BaseTest.initialize(page, testInfo)

            await use();
        },
        { auto: true }
    ],
    afterTest: [
        async ({page}, use, testInfo) => {
            await use();

            await BaseTest.takeScreenshot(page, testInfo)
        },
        { auto: true }
    ]
});

export {expect} from '@playwright/test';
