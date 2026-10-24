import { Locator } from '@playwright/test';
import { test as base } from './base';

type Checkboxes = {
  checkbox1: Locator;
  checkbox2: Locator;
};

export const test = base.extend<{ checkboxes: Checkboxes }>({
  checkboxes: async ({ page }, use) => {
    await page.goto('/checkboxes');

    await use({
      checkbox1: page.getByRole('checkbox').nth(0),
      checkbox2: page.getByRole('checkbox').nth(1),
    });
  },
});

export { expect } from './base';
