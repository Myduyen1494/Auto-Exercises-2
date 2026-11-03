import { test, expect } from '../fixtures/statusCodes.fixture';

test.describe('Hyperlink', () => {
  test('TC06: Hyperlink - Status codes navigation', async ({ page, statusCodesPage }) => {

    await statusCodesPage.clickLink1();
    await expect(page).toHaveURL(/status_codes\/200/);
    await statusCodesPage.goBack();

    await statusCodesPage.clickLink2();
    await expect(page).toHaveURL(/status_codes\/301/);
    await statusCodesPage.goBack();

    await statusCodesPage.clickLink3();
    await expect(page).toHaveURL(/status_codes\/404/);
    await statusCodesPage.goBack();

    await statusCodesPage.clickLink4();
    await expect(page).toHaveURL(/status_codes\/500/);

  });
});
