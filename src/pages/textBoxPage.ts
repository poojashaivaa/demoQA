// textBoxPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class TextBoxPage {
    readonly page: Page;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly currentAddressInput: Locator;
    readonly permanentAddressInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fullNameInput = page.getByRole('textbox', { name: 'Full Name' });
        this.emailInput = page.getByRole('textbox', { name: 'name@example.com' });
        this.currentAddressInput = page.getByRole('textbox', { name: 'Current Address' });
        this.permanentAddressInput = page.locator('#permanentAddress');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async navigate() {
        await this.page.goto('https://demoqa.com/text-box');
    }

    async fillForm(name: string, email: string, currentAddress: string, permanentAddress: string) {
        await this.fullNameInput.fill(name);
        await this.emailInput.fill(email);
        await this.currentAddressInput.fill(currentAddress);
        await this.permanentAddressInput.fill(permanentAddress);
        await this.submitButton.click();
    }

    async validateOutput(name: string, email: string, currentAddress: string, permanentAddress: string) {
        await expect(this.page.getByText(`Name:${name}`)).toBeVisible();
        await expect(this.page.getByText(`Email:${email}`)).toBeVisible();
        await expect(this.page.getByText(`Current Address :${currentAddress}`)).toBeVisible();
        await expect(this.page.getByText(`Permananet Address :${permanentAddress}`)).toBeVisible();
    }
}
