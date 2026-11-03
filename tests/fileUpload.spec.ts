import { test, expect } from '../fixtures/fileUpload.fixture';

test.describe('File Upload', () => {
  test('TC07: Upload a file', async ({ fileUploadPage }) => {

    await fileUploadPage.upload('download/bb.txt');

    await expect(fileUploadPage.uploadedFile('bb.txt')).toBeVisible();
  });
});
