import { test as base } from '@playwright/test';
import { ToggleAllPage } from '../pages/ToggleAllPage';

export const test = base.extend<{ toggleAllPage: ToggleAllPage }>({
  toggleAllPage: async ({ page }, use) => {
    const toggleAllPage = new ToggleAllPage(page);
    await toggleAllPage.open();
    await use(toggleAllPage);
  },
});

export { expect } from '@playwright/test';
