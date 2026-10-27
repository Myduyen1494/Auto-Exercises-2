import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string, options?: { waitUntil?: 'load' | 'domcontentloaded' | 'networkidle' | 'commit' }) {
    await this.page.goto(path, options);
  }
}
