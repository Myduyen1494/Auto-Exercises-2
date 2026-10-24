import { Locator } from '@playwright/test';
import { test as base } from './base';

type FileUpload = {
  chooseFile: Locator;
  uploadButton: Locator;
};

export const test = base.extend<{ fileUpload: FileUpload }>({
  fileUpload: async ({ page }, use) => {
    await page.goto('/upload');

    await use({
      chooseFile: page.getByRole('button', { name: 'Choose File' }),
      uploadButton: page.getByRole('button', { name: 'Upload' }),
    });
  },
});

export { expect } from './base';
