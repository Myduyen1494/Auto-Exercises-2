import { test, expect } from '../fixtures/statusCodes.fixture';

test.describe('Hyperlink', () => {
    test('TC06: Hyperlink - Status codes navigation', async ({ page, statusCodesPage: { link1, link2, link3, link4 } }) => {

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
