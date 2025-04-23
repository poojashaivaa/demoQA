// pages/webTablesPage.ts
import { Page, expect } from '@playwright/test';

export class WebTablesPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://demoqa.com/webtables');
    }

    async openAddForm() {
        await this.page.getByRole('button', { name: 'Add' }).click();
    }

    async fillAndSubmitForm(data: {
        firstName: string;
        lastName: string;
        email: string;
        age: string;
        salary: string;
        department: string;
    }) {
        await this.page.getByRole('textbox', { name: 'First Name' }).fill(data.firstName);
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill(data.lastName);
        await this.page.getByRole('textbox', { name: 'name@example.com' }).fill(data.email);
        await this.page.getByRole('textbox', { name: 'Age' }).fill(data.age);
        await this.page.getByRole('textbox', { name: 'Salary' }).fill(data.salary);
        await this.page.getByRole('textbox', { name: 'Department' }).fill(data.department);
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }

    async searchAndValidate(firstName: string) {
        await this.page.getByRole('textbox', { name: 'Type to search' }).fill(firstName);
        await expect(this.page.getByRole('gridcell', { name: firstName, exact: true })).toBeVisible();
    }
}
``
