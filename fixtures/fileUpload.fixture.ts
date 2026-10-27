import { test as base } from '@playwright/test';
import { FileUploadPage } from '../pages/FileUploadPage';

export const test = base.extend<{ fileUploadPage: FileUploadPage }>({
  fileUploadPage: async ({ page }, use) => {
    const fileUploadPage = new FileUploadPage(page);
    await fileUploadPage.open();
    await use(fileUploadPage);
  },
});

export { expect } from '@playwright/test';
