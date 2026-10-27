import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DragAndDropPage extends BasePage {
  readonly columnA: Locator;
  readonly columnB: Locator;

  constructor(page: Page) {
    super(page);
    this.columnA = page.getByRole('banner').first();
    this.columnB = page.getByRole('banner').last();
  }

  async open() {
    await this.goto('/drag_and_drop');
  }
}
