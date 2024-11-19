import { test, expect } from '@playwright/test';
import {BaseTest} from './base-test';
import {LoginPage} from '../pageobjects/login-page';
import {Users} from '../test-data/objects';

test.describe('Note', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    await BaseTest.initialize(page, testInfo)
  });

  test.afterEach(async ({ page }, testInfo) => {
    await BaseTest.takeScreenshot(page, testInfo);
  });

  test('logged in user should be able to create a note', async ({ page, context }, testInfo) => {
    let loginPage = new LoginPage(page, testInfo);
    let mainWidget = await loginPage.login(Users.VALID_USER);
    let noteWidget = await mainWidget.clickAddNoteButton();
    let noteTitle = 'Test note';
    await noteWidget.typeNoteTitle(noteTitle);
    await noteWidget.typeNoteContent('Test content');
    let notesWidget = await mainWidget.clickNotesButton();
    expect(await notesWidget.noteWithTitleIsPresent(noteTitle)).toBeTruthy();

    await test.step('note should persist between sessions', async () => {
      await page.close();
      page = await context.newPage();
      await BaseTest.initialize(page, testInfo);
      loginPage = new LoginPage(page, testInfo);
      mainWidget = await loginPage.login(Users.VALID_USER);
      notesWidget = await mainWidget.clickNotesButton();
      expect(await notesWidget.noteWithTitleIsPresent(noteTitle)).toBeTruthy();
    })
  });
});
