import * as fs from 'fs';
import { test, expect } from '../fixtures/downloadFile.fixture';

test.describe('Download File', () => {
  test('TC12: Download a single file', async ({ downloadPage }) => {
    // Steps 1-2: Open browser and navigate to /download (done by the fixture)

    // The Excel file name (Jpeg_with_exif.jpeg) is no longer listed on the site, so another listed file is used
    const fileName = 'SomeFile.txt';

    // Steps 3-4: Click the file link and save the downloaded file into the download folder
    const savedPath = await downloadPage.download(fileName, 'download');

    // Assertion: Verify the file exists on the local disk
    expect(fs.existsSync(savedPath)).toBe(true);
  });
});
