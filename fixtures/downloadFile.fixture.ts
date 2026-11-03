import { test as base } from '@playwright/test';
import { DownloadPage } from '../pages/DownloadPage';

export const test = base.extend<{ downloadPage: DownloadPage }>({
  downloadPage: async ({ page }, use) => {
    const downloadPage = new DownloadPage(page);
    await downloadPage.open();
    await use(downloadPage);
  },
});

export { expect } from '@playwright/test';
