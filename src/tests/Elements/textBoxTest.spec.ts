import { test } from '@playwright/test';
import { TextBoxPage } from '../../pages/TextBoxPage';

test('Fill and validate text box with dynamic data', async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);

    const name = 'pooja';
    const email = 'pooja@yopmail.com';
    const currentAddress = 'bengaluru';
    const permanentAddress = 'bengaluru';

    await textBoxPage.navigate();
    await textBoxPage.fillForm(name, email, currentAddress, permanentAddress);
    await textBoxPage.validateOutput(name, email, currentAddress, permanentAddress);
});
