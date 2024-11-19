import {type Page, TestInfo} from '@playwright/test';
import {BasePage} from '../base-page';

export class BaseWidget extends BasePage {
    constructor(page: Page, testInfo: TestInfo) {
        super(page, testInfo);
    }
}
