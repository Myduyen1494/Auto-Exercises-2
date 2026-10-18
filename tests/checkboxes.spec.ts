import { test, expect } from '../fixtures/base';

test.describe('Checkboxes', () => {
  test('TC03: Check to a box', async ({ page }) => {

    await page.goto('/checkboxes');

    const checkbox1 = page.getByRole('checkbox').nth(0);
    const checkbox2 = page.getByRole('checkbox').nth(1);

    await checkbox1.check();
    await expect(checkbox1).toBeChecked();

    await checkbox2.check();
    await expect(checkbox2).toBeChecked();
  });
});