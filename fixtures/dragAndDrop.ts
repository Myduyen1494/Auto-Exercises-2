import { Locator } from '@playwright/test';
import { test as base } from './base';

type DragAndDrop = {
    columnA: Locator;
    columnB: Locator;
};

export const test = base.extend<{ dragAndDrop: DragAndDrop }>({
    dragAndDrop: async ({ page }, use) => {
        await page.goto('/drag_and_drop');

        await use({
            columnA: page.getByRole('banner').first(),
            columnB: page.getByRole('banner').last(),
        });
    },
});

export { expect } from './base';
