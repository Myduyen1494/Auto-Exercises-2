import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckboxesPage extends BasePage {
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;

  constructor(page: Page) {
    super(page);
    this.checkbox1 = page.getByRole('checkbox').nth(0);
    this.checkbox2 = page.getByRole('checkbox').nth(1);
  }

  async open() {
    await this.goto('/checkboxes');
  }
}
