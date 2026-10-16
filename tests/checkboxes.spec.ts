import { test, expect } from '../fixtures/base';

test.describe('Checkboxes', () => {
  test('TC03: Check to a box', async ({ page }) => {
    // Steps 1-2: Open browser (handled by Playwright) & navigate to checkboxes page
    await page.goto('/checkboxes', { waitUntil: 'domcontentloaded' });

    const checkbox1 = page.getByRole('checkbox').nth(0);
    const checkbox2 = page.getByRole('checkbox').nth(1);

    // Steps 3-4: Check checkbox 1 and verify
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();

    // Steps 5-6: Check checkbox 2 and verify
    await checkbox2.check();
    await expect(checkbox2).toBeChecked();
  });
});
