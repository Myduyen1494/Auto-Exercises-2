import { test, expect } from '../fixtures/base';

test.describe('Hyperlink', () => {
    test('TC06: Hyperlink - Status codes navigation', async ({ page }) => {
        await page.goto('/status_codes');

        const link1 = page.getByRole('link', { name: '200' });
        const link2 = page.getByRole('link', { name: '301' });
        const link3 = page.getByRole('link', { name: '404' });
        const link4 = page.getByRole('link', { name: '500' });

        await link1.click();
        await expect(page).toHaveURL(/status_codes\/200/);
        await page.goBack();

        await link2.click();
        await expect(page).toHaveURL(/status_codes\/301/);
        await page.goBack();

        await link3.click();
        await expect(page).toHaveURL(/status_codes\/404/);
        await page.goBack();

        await link4.click();
        await expect(page).toHaveURL(/status_codes\/500/);

    });
});
