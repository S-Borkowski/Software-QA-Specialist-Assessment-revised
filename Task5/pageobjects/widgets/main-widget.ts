import {expect, type Locator, type Page, TestInfo} from '@playwright/test';
import {BaseWidget} from './base-widget';
import {NotesWidget} from './notes-widget';
import {NoteWidget} from './note-widget';

export class MainWidget extends BaseWidget {
    private readonly loggedInLabel: Locator;
    private readonly notesButton: Locator;
    private readonly addNoteButton: Locator;

    constructor(page: Page, testInfo: TestInfo) {
        super(page, testInfo);
        this.loggedInLabel = page.getByText('Your Home');
        this.notesButton = page.locator('a', { hasText: 'Notes' });
        this.addNoteButton = page.getByRole('button').getByText('Note');
    }

    async loggedInLabelIsVisible() {
        await expect(this.loggedInLabel).toBeVisible();
    }

    async clickNotesButton() {
        await this.clickElement(this.notesButton);
        return new NotesWidget(this.page, this.testInfo);
    }

    async clickAddNoteButton() {
        await this.clickElement(this.addNoteButton);
        return new NoteWidget(this.page, this.testInfo);
    }
}
