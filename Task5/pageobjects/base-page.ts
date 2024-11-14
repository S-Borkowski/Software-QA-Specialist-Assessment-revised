import {Locator, Page, TestInfo} from '@playwright/test';
import {BaseTest} from '../tests/base-test';

export class BasePage {
    readonly page: Page;
    readonly testInfo: TestInfo;

    constructor(page: Page, testInfo: TestInfo) {
        this.page = page;
        this.testInfo = testInfo;
    }

    async visit(url: string) {
        await this.page.goto(url);
        await BaseTest.takeScreenshot(this.page, this.testInfo);
    }

    async clickElement(locator: Locator) {
        await locator.click();
        await BaseTest.takeScreenshot(this.page, this.testInfo);
    }

    async type(locator: Locator, text: string) {
        await locator.fill(text);
    }
}
