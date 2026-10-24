import { Locator } from '@playwright/test';
import { test as base } from './base';

type Dropdown = {
  dropdown: Locator;
  option1: Locator;
  option2: Locator;
};

export const test = base.extend<{ dropdownPage: Dropdown }>({
  dropdownPage: async ({ page }, use) => {
    await page.goto('/dropdown');

    await use({
      dropdown: page.getByRole('combobox'),
      option1: page.getByRole('option', { name: 'Option 1' }),
      option2: page.getByRole('option', { name: 'Option 2' }),
    });
  },
});

export { expect } from './base';
