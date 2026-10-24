import { Locator } from '@playwright/test';
import { test as base } from './base';

type ContextMenu = {
    hotSpot: Locator;
};

export const test = base.extend<{ contextMenu: ContextMenu }>({
    contextMenu: async ({ page }, use) => {
        await page.goto('/context_menu');

        await use({
            hotSpot: page.locator('#hot-spot'),
        });
    },
});

export { expect } from './base';
