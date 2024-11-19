import {expect, type Locator, type Page, TestInfo} from '@playwright/test';
import {BaseWidget} from './base-widget';

export class NotesWidget extends BaseWidget {
    private readonly notesSection: Locator;

    constructor(page: Page, testInfo: TestInfo) {
        super(page, testInfo);
        this.notesSection = page.getByLabel('Note List');
    }

    async noteWithTitleIsPresent(title: string) {
        await expect(this.notesSection.getByText(title)).toBeVisible();
    }
}
