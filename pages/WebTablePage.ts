import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class WebTablePage extends BasePage {
  readonly table1: Locator;
  readonly rows: Locator;

  constructor(page: Page) {
    super(page);
    this.table1 = page.getByRole('table').first();
    this.rows = this.table1.getByRole('row').filter({ has: page.getByRole('cell') });
  }

  async open() {
    await this.goto('/tables');
  }
}
