import { Locator } from '@playwright/test';
import { test as base } from './base';

type DropdownMultiple = {
  dropdown: Locator;
  option1: Locator;
  option2: Locator;
};

export const test = base.extend<{ dropdownMultiple: DropdownMultiple }>({
  dropdownMultiple: async ({ page }, use) => {
    await page.goto('https://output.jsbin.com/osebed/2');

    await use({
      dropdown: page.getByRole('listbox'),
      option1: page.getByRole('option', { name: 'Banana' }),
      option2: page.getByRole('option', { name: 'Orange' }),
    });
  },
});

export { expect } from './base';
