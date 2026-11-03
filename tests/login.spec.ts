import { test, expect } from '../fixtures/login.fixture';

test.describe('Form Authentication', () => {
  test('navigate to login page', async ({ page, loginPage }) => {
    await loginPage.navigate();
    await expect(page).toHaveURL(/\/login$/);
    await expect(loginPage.heading).toBeVisible();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('TC01: Form Authentication - Login successful with valid credentials', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(loginPage.successMessage).toBeVisible();
  });

  test('TC02: Form Authentication - Login fail with invalid credentials', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login('toms', 'SuperSecretPassword!');
    await expect(loginPage.invalidUsernameMessage).toBeVisible();
  });
});
