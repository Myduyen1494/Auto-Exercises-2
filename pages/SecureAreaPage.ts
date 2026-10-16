import { Page, expect } from '@playwright/test';

export class SecureAreaPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectLoggedIn(message: string) {
    await expect(this.page).toHaveURL(/\/secure$/);
    await expect(this.page.getByText(message)).toBeVisible();
  }
}
