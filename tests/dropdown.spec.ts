import { test, expect } from '../fixtures/base';

test.describe('Dropdown', () => {
    test('TC04: Select an option', async ({ page }) => {
        await page.goto('/dropdown');

        const dropdown = page.getByRole('combobox');
        const option1 = page.getByRole('option', { name: 'Option 1' });
        const option2 = page.getByRole('option', { name: 'Option 2' });

        await dropdown.selectOption({ label: 'Option 1' });
        await expect(dropdown).toHaveValue('1');
    });
});
