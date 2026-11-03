import { test as base } from '@playwright/test';
import { ClearCompletedPage } from '../pages/ClearCompletedPage';

export const test = base.extend<{ clearCompletedPage: ClearCompletedPage }>({
  clearCompletedPage: async ({ page }, use) => {
    const clearCompletedPage = new ClearCompletedPage(page);
    await clearCompletedPage.open();
    await use(clearCompletedPage);
  },
});

export { expect } from '@playwright/test';
