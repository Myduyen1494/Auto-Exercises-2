import { test as base } from '@playwright/test';
import { PersistTodosPage } from '../pages/PersistTodosPage';

export const test = base.extend<{ persistTodosPage: PersistTodosPage }>({
  persistTodosPage: async ({ page }, use) => {
    const persistTodosPage = new PersistTodosPage(page);
    await persistTodosPage.open();
    await use(persistTodosPage);
  },
});

export { expect } from '@playwright/test';
