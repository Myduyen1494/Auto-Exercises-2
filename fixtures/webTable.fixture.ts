import { test as base } from '@playwright/test';
import { WebTablePage } from '../pages/WebTablePage';

export const test = base.extend<{ webTablePage: WebTablePage }>({
  webTablePage: async ({ page }, use) => {
    const webTablePage = new WebTablePage(page);
    await webTablePage.open();
    await use(webTablePage);
  },
});

export { expect } from '@playwright/test';
