import * as fs from 'fs';
import { test, expect } from '../fixtures/downloadFiles.fixture';

test.describe('Download File', () => {
  test('TC13: Download multiple files', async ({ downloadPage }) => {
    // Steps 1-2: Open browser and navigate to /download (done by the fixture)

    // The Excel file doc.txt is no longer listed on the site, so file2.txt is used instead
    const fileNames = ['file2.txt', 'bb.txt'];

    // Step 3: For each file name in the list
    for (const fileName of fileNames) {
      // Steps 3.1-3.2: Click the link with that file name and save the download into the download folder
      const savedPath = await downloadPage.download(fileName, 'download');

      // Assertion: Verify the file exists on the local disk
      expect(fs.existsSync(savedPath)).toBe(true);
    }
  });
});
