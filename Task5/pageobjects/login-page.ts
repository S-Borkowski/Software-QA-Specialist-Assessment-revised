import {expect, type Locator, type Page, TestInfo} from '@playwright/test';
import {BasePage} from './base-page';
import {User} from '../test-data/objects';
import {MainWidget} from './widgets/main-widget';

export class LoginPage extends BasePage {
    private readonly usernameInput: Locator;
    private readonly usernameErrorMessage: Locator;
    private readonly continueButton: Locator;
    private readonly passwordInput: Locator;

    constructor(page: Page, testInfo: TestInfo) {
        super(page, testInfo);
        this.usernameInput = page.getByPlaceholder('Email address or Username');
        this.usernameErrorMessage = page.getByText('The email or username you entered does not match any account.');
        this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });
        this.passwordInput = page.getByPlaceholder('Password');
    }

    async typeUsername(username: string) {
        await this.type(this.usernameInput, username);
    }

    async clickContinueButtonAfterUsername() {
        await this.clickElement(this.continueButton);
        return new LoginPage(this.page, this.testInfo);
    }

    async usernameErrorMessageIsVisible() {
        await expect(this.usernameErrorMessage).toBeVisible();
    }

    async typePassword(password: string) {
        await this.type(this.passwordInput, password);
    }

    async clickContinueButtonAfterPassword() {
        await this.clickElement(this.continueButton);
        return new MainWidget(this.page, this.testInfo);
    }

    async login(user: User) {
        await this.typeUsername(user.username);
        await this.clickContinueButtonAfterUsername();
        await this.typePassword(user.password);
        return await this.clickContinueButtonAfterPassword();
    }
}
