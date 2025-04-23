import { test } from '@playwright/test';
import { WebTablesPage } from '../../pages/WebTablesPage';

const testData = [
    {
        firstName: 'name1',
        lastName: 'n',
        email: 'name1@yopmail.com',
        age: '12',
        salary: '12000',
        department: 'QA',
    },
    {
        firstName: 'john',
        lastName: 'doe',
        email: 'john@demo.com',
        age: '30',
        salary: '50000',
        department: 'HR',
    },
];

test.describe('Web Tables Form Submission', () => {
    for (const data of testData) {
        test(`Add and validate user: ${data.firstName}`, async ({ page }) => {
            const webTablesPage = new WebTablesPage(page);

            await webTablesPage.navigate();
            await webTablesPage.openAddForm();
            await webTablesPage.fillAndSubmitForm(data);
            await webTablesPage.searchAndValidate(data.firstName);
        });
    }
});
