import { test as base } from '@playwright/test';
import { HorizontalSliderPage } from '../pages/HorizontalSliderPage';

export const test = base.extend<{ horizontalSliderPage: HorizontalSliderPage }>({
  horizontalSliderPage: async ({ page }, use) => {
    const horizontalSliderPage = new HorizontalSliderPage(page);
    await horizontalSliderPage.open();
    await use(horizontalSliderPage);
  },
});

export { expect } from '@playwright/test';
