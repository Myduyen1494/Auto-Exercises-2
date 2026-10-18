import { test, expect } from '../fixtures/base';

test.describe('File Upload', () => {
    test('TC07: Upload a file', async ({ page }) => {
        await page.goto('/upload');

        const chooseFile = page.getByRole('button', { name: 'Choose File' });
        await chooseFile.setInputFiles('download/bb.txt');

        await page.getByRole('button', { name: 'Upload' }).click();

        await expect(page.getByText('bb.txt')).toBeVisible();
    });
});
