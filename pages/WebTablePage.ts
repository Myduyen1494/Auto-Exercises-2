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

  async findLargestDueRow() {
    let largestDue = 0;
    let largestRow = this.rows.first();

    for (let i = 0; i < await this.rows.count(); i++) {
      const row = this.rows.nth(i);
      const dueCell = row.getByRole('cell').nth(3);
      const dueText = await dueCell.innerText();
      const due = Number(dueText.replace('$', ''));

      if (due > largestDue) {
        largestDue = due;
        largestRow = row;
      }
    }

    return largestRow;
  }

  lastName(row: Locator) {
    return row.getByRole('cell').nth(0);
  }

  firstName(row: Locator) {
    return row.getByRole('cell').nth(1);
  }
}
