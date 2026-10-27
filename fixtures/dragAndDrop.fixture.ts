import { test as base } from '@playwright/test';
import { DragAndDropPage } from '../pages/DragAndDropPage';

export const test = base.extend<{ dragAndDropPage: DragAndDropPage }>({
  dragAndDropPage: async ({ page }, use) => {
    const dragAndDropPage = new DragAndDropPage(page);
    await dragAndDropPage.open();
    await use(dragAndDropPage);
  },
});

export { expect } from '@playwright/test';
