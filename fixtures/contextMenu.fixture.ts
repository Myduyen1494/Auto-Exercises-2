import { test as base } from '@playwright/test';
import { ContextMenuPage } from '../pages/ContextMenuPage';

export const test = base.extend<{ contextMenuPage: ContextMenuPage }>({
  contextMenuPage: async ({ page }, use) => {
    const contextMenuPage = new ContextMenuPage(page);
    await contextMenuPage.open();
    await use(contextMenuPage);
  },
});

export { expect } from '@playwright/test';
