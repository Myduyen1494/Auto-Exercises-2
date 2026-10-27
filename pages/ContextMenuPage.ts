import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContextMenuPage extends BasePage {
  readonly hotSpot: Locator;

  constructor(page: Page) {
    super(page);
    this.hotSpot = page.locator('#hot-spot');
  }

  async open() {
    await this.goto('/context_menu');
  }
}
