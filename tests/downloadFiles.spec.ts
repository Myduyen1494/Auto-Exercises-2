import * as fs from 'fs';
import { test, expect } from '../fixtures/downloadFiles.fixture';

test.describe('Download File', () => {
  test('TC13: Download multiple files', async ({ downloadPage }) => {
    const fileNames = ['file2.txt', 'bb.txt'];

    for (const fileName of fileNames) {
      const savedPath = await downloadPage.download(fileName, 'download');

      expect(fs.existsSync(savedPath)).toBe(true);
    }
  });
});
