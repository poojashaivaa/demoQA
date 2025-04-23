// tests/radioButtonTest.spec.ts
import { test } from '@playwright/test';
import { RadioButtonPage } from '../../pages/RadioButtonPage';

test('Radio button interaction and validation', async ({ page }) => {
    const radioButtonPage = new RadioButtonPage(page);

    await radioButtonPage.navigate();

    await radioButtonPage.selectRadio('Yes');
    await radioButtonPage.validateSelection('Yes');

    await radioButtonPage.selectRadio('Impressive');
    await radioButtonPage.validateSelection('Impressive');

    // 'No' is disabled on the demo site, so it won't trigger selection
    await radioButtonPage.selectRadio('No');
});
