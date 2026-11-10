import { test as base } from '@playwright/test';
import { CompleteTodoPage } from '../pages/CompleteTodoPage';

export const test = base.extend<{ completeTodoPage: CompleteTodoPage }>({
  completeTodoPage: async ({ page }, use) => {
    const completeTodoPage = new CompleteTodoPage(page);
    await completeTodoPage.open();
    await use(completeTodoPage);
  },
});

export { expect } from '@playwright/test';
