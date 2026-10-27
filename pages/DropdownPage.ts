import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DropdownPage extends BasePage {
  readonly dropdown: Locator;
  readonly option1: Locator;
  readonly option2: Locator;

  constructor(page: Page) {
    super(page);
    this.dropdown = page.getByRole('combobox');
    this.option1 = page.getByRole('option', { name: 'Option 1' });
    this.option2 = page.getByRole('option', { name: 'Option 2' });
  }

  async open() {
    await this.goto('/dropdown');
  }
}
