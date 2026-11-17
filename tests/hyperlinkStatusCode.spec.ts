import { test, expect } from '../fixtures/statusCodes.fixture';

test.describe('Hyperlink', () => {
  test('TC06: Hyperlink - Status codes navigation', async ({ page, statusCodesPage }) => {
    // Steps 1-2: Open browser and navigate to /status_codes (done by the fixture)

    // Step 3: Click on "200"
    await statusCodesPage.clickLink1();
    // Assertion: Verify the "200 status code" page appears
    await expect(page).toHaveURL(/status_codes\/200/);
    // Step 5: Return to the list (browser Back is used instead of clicking the "here" link)
    await statusCodesPage.goBack();

    // Step 6: Click on "301"
    await statusCodesPage.clickLink2();
    // Assertion: Verify the "301 status code" page appears
    await expect(page).toHaveURL(/status_codes\/301/);
    // Step 8: Return to the list
    await statusCodesPage.goBack();

    // Step 9: Click on "404"
    await statusCodesPage.clickLink3();
    // Assertion: Verify the "404 status code" page appears
    await expect(page).toHaveURL(/status_codes\/404/);
    // Step 11: Return to the list
    await statusCodesPage.goBack();

    // Step 12: Click on "500"
    await statusCodesPage.clickLink4();
    // Assertion: Verify the "500 status code" page appears
    await expect(page).toHaveURL(/status_codes\/500/);
  });
});
