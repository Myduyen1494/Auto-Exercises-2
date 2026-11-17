import { test, expect } from '../fixtures/fileUpload.fixture';

test.describe('File Upload', () => {
  test('TC07: Upload a file', async ({ fileUploadPage }) => {
    // Steps 1-2: Open browser and navigate to /upload (done by the fixture)

    // Steps 3-4: Attach the file download/bb.txt to the file input, then click Upload
    await fileUploadPage.upload('download/bb.txt');

    // Assertion: Verify the uploaded files list contains "bb.txt"
    await expect(fileUploadPage.uploadedFile('bb.txt')).toBeVisible();
  });
});
