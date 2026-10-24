import { test, expect } from '../fixtures/fileUpload';

test.describe('File Upload', () => {
    test('TC07: Upload a file', async ({ page, fileUpload: { chooseFile, uploadButton } }) => {

        await chooseFile.setInputFiles('download/bb.txt');

        await uploadButton.click();

        await expect(page.getByText('bb.txt')).toBeVisible();
    });
});
