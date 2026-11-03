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

  async clickLink1() {
    await this.link1.click();
  }

  async clickLink2() {
    await this.link2.click();
  }

  async clickLink3() {
    await this.link3.click();
  }

  async clickLink4() {
    await this.link4.click();
  }

  async goBack() {
    await this.page.goBack();
  }
}
