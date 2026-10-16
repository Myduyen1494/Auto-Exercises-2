import { test, expect } from '../fixtures/base';

test.describe('Dropdown', () => {
    test('TC04: Select an option', async ({ page }) => {
        // Steps 1-2: Open browser (handled by Playwright) & navigate to dropdown page
        await page.goto('/dropdown', { waitUntil: 'domcontentloaded' });

        const dropdown = page.locator('select');
        const option1 = page.getByRole('option', { name: 'Option 1' });

        // Steps 3-4: Select option 1 and verify
        await dropdown.selectOption({ label: 'Option 1' });
        await expect(option1).toBeChecked();
    });
});
