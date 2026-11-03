import { test as base } from '@playwright/test';
import { DeleteTodoPage } from '../pages/DeleteTodoPage';

export const test = base.extend<{ deleteTodoPage: DeleteTodoPage }>({
  deleteTodoPage: async ({ page }, use) => {
    const deleteTodoPage = new DeleteTodoPage(page);
    await deleteTodoPage.open();
    await use(deleteTodoPage);
  },
});

export { expect } from '@playwright/test';
