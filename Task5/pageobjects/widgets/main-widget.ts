import {expect, type Locator, type Page, TestInfo} from '@playwright/test';
import {MainPage} from '../main-page';
import {NotesWidget} from './notes-widget';

export class MainWidget extends MainPage {
    private readonly loggedInLabel: Locator;
    private readonly notesButton: Locator;

    constructor(page: Page, testInfo: TestInfo) {
        super(page, testInfo);
        this.loggedInLabel = page.getByText('Your Home');
        this.notesButton = page.locator('a', { hasText: 'Notes' });
    }

    async loggedInLabelIsVisible() {
        await expect(this.loggedInLabel).toBeVisible();
    }

    async clickNotesButton() {
        await this.clickElement(this.notesButton);
        return new NotesWidget(this.page, this.testInfo);
    }
}
