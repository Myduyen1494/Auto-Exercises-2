import { test as base } from '@playwright/test';
import { FilterTodosPage } from '../pages/FilterTodosPage';

export const test = base.extend<{ filterTodosPage: FilterTodosPage }>({
  filterTodosPage: async ({ page }, use) => {
    const filterTodosPage = new FilterTodosPage(page);
    await filterTodosPage.open();
    await use(filterTodosPage);
  },
});

export { expect } from '@playwright/test';
