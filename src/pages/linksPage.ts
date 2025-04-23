// pages/linksPage.ts
import { Page, expect } from '@playwright/test';

export class LinksPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickLinkAndWaitForPopup(linkName: string): Promise<Page> {
        const popupPromise = this.page.waitForEvent('popup');
        await this.page.getByRole('link', { name: linkName, exact: true }).click();
        const newPage = await popupPromise;
        await expect(newPage).not.toBeNull(); // verify popup opened
        return newPage;
    }

    async clickStatusLink(linkName: string) {
        await this.page.getByRole('link', { name: linkName }).click();
    }

    async verifyStatusMessage() {
        await expect(this.page.getByText(/Link has responded with staus/i)).toBeVisible();
    }
}
