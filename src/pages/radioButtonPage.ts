// pages/radioButtonPage.ts
import { Page, expect } from '@playwright/test';

export class RadioButtonPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://demoqa.com/radio-button');
    }

    async selectRadio(option: 'Yes' | 'Impressive' | 'No') {
        await this.page.getByText(option, { exact: true }).click();
    }

    async validateSelection(option: 'Yes' | 'Impressive') {
        await expect(this.page.getByText(`You have selected ${option}`)).toBeVisible();
    }
}
