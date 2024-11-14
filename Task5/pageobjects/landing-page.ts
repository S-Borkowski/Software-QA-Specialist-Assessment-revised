import {type Locator, type Page, TestInfo} from '@playwright/test';
import {BasePage} from './base-page';

export class LandingPage extends BasePage {
    private readonly loginButton: Locator;
    private readonly declineCookiesButton: Locator;

    constructor(page: Page, testInfo: TestInfo) {
        super(page, testInfo);
        this.loginButton = page.getByRole('navigation').getByRole('link', { name: 'Log in' })
        this.declineCookiesButton = page.getByRole('button', { name: 'Continue without accepting' });
    }

    async goToLandingPage() {
        await this.visit('/')
    }

    async clickDeclineCookies() {
        await this.clickElement(this.declineCookiesButton)
    }

    async clickLoginButton() {
        await this.clickElement(this.loginButton);
    }
}
