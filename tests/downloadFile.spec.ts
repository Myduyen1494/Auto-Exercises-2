import * as fs from 'fs';
import { test, expect } from '../fixtures/downloadFile.fixture';

test.describe('Download File', () => {
  test('TC12: Download a single file', async ({ downloadPage }) => {
    const fileName = 'SomeFile.txt';

    const savedPath = await downloadPage.download(fileName, 'download');

    expect(fs.existsSync(savedPath)).toBe(true);
  });
});
