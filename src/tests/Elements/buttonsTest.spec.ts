// tests/buttonsTest.spec.ts
import { test } from '@playwright/test';
import { ButtonsPage } from '../../pages/buttonsPage';

test('Double click, right click, and dynamic click', async ({ page }) => {
    const buttonsPage = new ButtonsPage(page);

    await buttonsPage.navigate();

    // Double Click
    await buttonsPage.doubleClick();
    await buttonsPage.verifyDoubleClickMessage();

    // Right Click
    await buttonsPage.rightClick();
    await buttonsPage.verifyRightClickMessage();

    // Dynamic Click
    await buttonsPage.dynamicClick();
    await buttonsPage.verifyDynamicClickMessage();
});
