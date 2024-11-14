import { test, expect } from '@playwright/test';
import {BaseTest} from "./base-test";
import {LoginPage} from "../pageobjects/login-page";
import {Users} from "../test-data/objects";

test.describe('Login', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    await BaseTest.initialize(page, testInfo)
  });

  test.afterEach(async ({ page }, testInfo) => {
    await BaseTest.takeScreenshot(page, testInfo);
  });

  test('should not login with incorrect email', async ({ page }, testInfo) => {
    let loginPage = new LoginPage(page, testInfo);
    await loginPage.typeUsername(Users.INVALID_USER.username);
    loginPage = await loginPage.clickContinueButtonAfterUsername();
    expect(await loginPage.usernameErrorMessageIsVisible()).toBeTruthy();
  });

  test('should login with correct credentials', async ({ page }, testInfo) => {
    let loginPage = new LoginPage(page, testInfo);
    await loginPage.typeUsername(Users.VALID_USER.username);
    loginPage = await loginPage.clickContinueButtonAfterUsername();
    await loginPage.typePassword(Users.VALID_USER.password);
    let mainWidget = await loginPage.clickContinueButtonAfterPassword();
    expect(await mainWidget.loggedInLabelIsVisible()).toBeTruthy();
  });
})
