import { Page, expect } from '@playwright/test';

export class ButtonsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://demoqa.com/buttons');
    }

    async doubleClick() {
        const doubleClickButton = this.page.getByRole('button', { name: 'Double Click Me' });
        await doubleClickButton.dblclick();
    }

    async rightClick() {
        const rightClickButton = this.page.getByRole('button', { name: 'Right Click Me' });
        await rightClickButton.click({ button: 'right' });
    }

    async dynamicClick() {
        const dynamicClickButton = this.page.getByRole('button', { name: 'Click Me', exact: true });
        await dynamicClickButton.click();
    }

    async verifyDoubleClickMessage() {
        await expect(this.page.getByText('You have done a double click')).toBeVisible();
    }

    async verifyRightClickMessage() {
        await expect(this.page.getByText('You have done a right click')).toBeVisible();
    }

    async verifyDynamicClickMessage() {
        await expect(this.page.getByText('You have done a dynamic click')).toBeVisible();
    }
}
