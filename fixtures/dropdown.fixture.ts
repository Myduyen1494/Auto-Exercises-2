import { test as base } from '@playwright/test';
import { DropdownPage } from '../pages/DropdownPage';

export const test = base.extend<{ dropdownPage: DropdownPage }>({
  dropdownPage: async ({ page }, use) => {
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.open();
    await use(dropdownPage);
  },
});

export { expect } from '@playwright/test';
