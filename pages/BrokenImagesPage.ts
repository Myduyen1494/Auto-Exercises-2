import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class BrokenImagesPage extends BasePage {
  readonly images: Locator;

  constructor(page: Page) {
    super(page);
    this.images = page.getByRole('img');
  }

  async open() {
    await this.goto('/broken_images');
  }

  async getImageStatuses() {
    const sources = await this.images.evaluateAll(images => images.map(image => image.getAttribute('src') ?? ''));
    const statuses: { src: string; status: number }[] = [];

    for (const src of sources) {
      const response = await this.page.request.get(new URL(src, this.page.url()).href);
      statuses.push({ src, status: response.status() });
    }

    return statuses;
  }
}
