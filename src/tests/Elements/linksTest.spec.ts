import { test } from '@playwright/test';
import { LinksPage } from '../../pages/linksPage';


test('Verify links open in new pages and status messages', async ({ page }) => {
    const linksPage = new LinksPage(page);

    // Navigate to the initial page (add your actual URL)
    await page.goto('https://demoqa.com/links');

    // Popups
    const page2 = await linksPage.clickLinkAndWaitForPopup('Home');
    const page3 = await page2.waitForEvent('popup');
    await page2.getByRole('link', { name: 'Selenium Online Training' }).click();
    await page3; // Implicit wait

    const page4 = await linksPage.clickLinkAndWaitForPopup('HomeGof8d');
    const page5 = await page4.waitForEvent('popup');
    await page4.getByRole('link', { name: 'Selenium Online Training' }).click();
    await page5;

    // Status Links
    const statusLinks = [
        'Created',
        'No Content',
        'Moved',
        'Bad Request',
        'Unauthorized',
        'Forbidden',
        'Not Found'
    ];

    for (const link of statusLinks) {
        await linksPage.clickStatusLink(link);
        await linksPage.verifyStatusMessage();
    }
});
