import { test, expect } from '../fixtures/base';

test.describe('Form Authentication', () => {
  test('navigate to login page', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.expectLoaded();
  });

  test('TC01: Form Authentication - Login successful with valid credentials', async ({ page, loginPage }) => {
    await loginPage.navigate();
    await loginPage.usernameInput.fill('tomsmith');
    await loginPage.passwordInput.fill('SuperSecretPassword!');
    await loginPage.loginButton.click();
    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  });

  test('TC02: Form Authentication - Login fail with invalid credentials', async ({ page, loginPage }) => {
    await loginPage.navigate();
    await loginPage.usernameInput.fill('toms');
    await loginPage.passwordInput.fill('SuperSecretPassword!');
    await loginPage.loginButton.click();
    await expect(page.getByText('Your username is invalid!')).toBeVisible();
  });
});
