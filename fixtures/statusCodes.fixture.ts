import { test as base } from '@playwright/test';
import { StatusCodesPage } from '../pages/StatusCodesPage';

export const test = base.extend<{ statusCodesPage: StatusCodesPage }>({
  statusCodesPage: async ({ page }, use) => {
    const statusCodesPage = new StatusCodesPage(page);
    await statusCodesPage.open();
    await use(statusCodesPage);
  },
});

export { expect } from '@playwright/test';
