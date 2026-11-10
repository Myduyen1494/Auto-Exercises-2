import { test as base } from '@playwright/test';
import { AddTodosPage } from '../pages/AddTodosPage';

export const test = base.extend<{ addTodosPage: AddTodosPage }>({
  addTodosPage: async ({ page }, use) => {
    const addTodosPage = new AddTodosPage(page);
    await addTodosPage.open();
    await use(addTodosPage);
  },
});

export { expect } from '@playwright/test';
