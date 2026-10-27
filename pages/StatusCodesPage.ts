import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class StatusCodesPage extends BasePage {
  readonly link1: Locator;
  readonly link2: Locator;
  readonly link3: Locator;
  readonly link4: Locator;

  constructor(page: Page) {
    super(page);
    this.link1 = page.getByRole('link', { name: '200' });
    this.link2 = page.getByRole('link', { name: '301' });
    this.link3 = page.getByRole('link', { name: '404' });
    this.link4 = page.getByRole('link', { name: '500' });
  }

  async open() {
    await this.goto('/status_codes');
  }
}
