import { test as base } from '@playwright/test';
import { EditTodoPage } from '../pages/EditTodoPage';

export const test = base.extend<{ editTodoPage: EditTodoPage }>({
  editTodoPage: async ({ page }, use) => {
    const editTodoPage = new EditTodoPage(page);
    await editTodoPage.open();
    await use(editTodoPage);
  },
});

export { expect } from '@playwright/test';
