import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DropdownMultiplePage extends BasePage {
  readonly dropdown: Locator;
  readonly option1: Locator;
  readonly option2: Locator;

  constructor(page: Page) {
    super(page);
    this.dropdown = page.getByRole('listbox');
    this.option1 = page.getByRole('option', { name: 'Banana' });
    this.option2 = page.getByRole('option', { name: 'Orange' });
  }

  async open() {
    await this.goto('https://output.jsbin.com/osebed/2');
  }
}
