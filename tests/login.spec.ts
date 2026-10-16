import { test } from '../fixtures/base';

test.describe('Form Authentication', () => {
  test('navigate to login page', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.expectLoaded();
  });

  test('TC01: Login successful with valid credentials', async ({ loginPage, secureAreaPage }) => {
    // Steps 1-2: Open browser (handled by Playwright) & navigate to login page
    await loginPage.navigate();

    // Steps 3-5: Fill username, password, click Login
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    // Step 6: Verify secure area appears with success message
    await secureAreaPage.expectLoggedIn('You logged into a secure area!');
  });

  test('TC02: Login fail with invalid credentials', async ({ loginPage }) => {
    // Steps 1-2: Open browser (handled by Playwright) & navigate to login page
    await loginPage.navigate();

    // Steps 3-5: Fill invalid username, password, click Login
    await loginPage.login('toms', 'SuperSecretPassword!');

    // Step 6: Verify error flash message appears
    await loginPage.expectErrorMessage('Your username is invalid!');
  });
});
