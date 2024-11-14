import {type Locator, type Page, TestInfo} from '@playwright/test';
import {BasePage} from './base-page';

export class MainPage extends BasePage {
    private readonly addNoteButton: Locator;

    constructor(page: Page, testInfo: TestInfo) {
        super(page, testInfo);
        this.addNoteButton = page.getByRole('button').getByText('Note');
    }

    async clickAddNoteButton() {
        const {NoteWidget} = await import('./widgets/note-widget');
        await this.clickElement(this.addNoteButton);
        return new NoteWidget(this.page, this.testInfo);
    }
}
