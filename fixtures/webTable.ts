import { Locator } from '@playwright/test';
import { test as base } from './base';

type WebTable = {
    rows: Locator;
    dueCells: Locator;
};

export const test = base.extend<{ webTable: WebTable }>({
    webTable: async ({ page }, use) => {
        await page.goto('/tables');

        const table1 = page.getByRole('table').first();
        const rows = table1.getByRole('row').filter({ has: page.getByRole('cell') });

        await use({
            rows,
            dueCells: rows.getByRole('cell', { name: /^\$/ }),
        });
    },
});

export { expect } from './base';
