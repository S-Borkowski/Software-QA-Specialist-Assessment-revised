import {type Locator, type Page, TestInfo} from '@playwright/test';
import {NotesWidget} from './notes-widget';

export class NoteWidget extends NotesWidget {
    private readonly noteTitleInput: Locator;
    private readonly noteContentInput: Locator;

    constructor(page: Page, testInfo: TestInfo) {
        super(page, testInfo);
        this.noteTitleInput = page.getByPlaceholder('Title');
        this.noteContentInput = page.getByPlaceholder('Start writing or drag files here');
    }

    async typeNoteTitle(title: string) {
        await this.type(this.noteTitleInput, title);
    }

    async typeNoteContent(content: string) {
        await this.type(this.noteContentInput, content);
    }
}
