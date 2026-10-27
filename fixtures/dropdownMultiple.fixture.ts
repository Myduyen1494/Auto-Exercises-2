import { test as base } from '@playwright/test';
import { DropdownMultiplePage } from '../pages/DropdownMultiplePage';

export const test = base.extend<{ dropdownMultiplePage: DropdownMultiplePage }>({
  dropdownMultiplePage: async ({ page }, use) => {
    const dropdownMultiplePage = new DropdownMultiplePage(page);
    await dropdownMultiplePage.open();
    await use(dropdownMultiplePage);
  },
});

export { expect } from '@playwright/test';
