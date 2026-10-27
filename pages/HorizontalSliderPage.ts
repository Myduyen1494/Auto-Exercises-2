import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HorizontalSliderPage extends BasePage {
  readonly slider: Locator;
  readonly sliderValue: Locator;

  constructor(page: Page) {
    super(page);
    this.slider = page.getByRole('slider');
    this.sliderValue = page.locator('#range');
  }

  async open() {
    await this.goto('/horizontal_slider');
  }
}
