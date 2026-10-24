import { Locator } from '@playwright/test';
import { test as base } from './base';

type StatusCodeLinks = {
  link1: Locator;
  link2: Locator;
  link3: Locator;
  link4: Locator;
};

export const test = base.extend<{ statusCodeLinks: StatusCodeLinks }>({
  statusCodeLinks: async ({ page }, use) => {
    await page.goto('/status_codes');

    await use({
      link1: page.getByRole('link', { name: '200' }),
      link2: page.getByRole('link', { name: '301' }),
      link3: page.getByRole('link', { name: '404' }),
      link4: page.getByRole('link', { name: '500' }),
    });
  },
});

export { expect } from './base';
