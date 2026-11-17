import { test, expect } from '../fixtures/login.fixture';

test.describe('Form Authentication', () => {
  test('navigate to login page', async ({ page, loginPage }) => {
    // Open the login page
    await loginPage.navigate();

    // Verify the URL ends with /login
    await expect(page).toHaveURL(/\/login$/);

    // Verify the heading and the login form (username, password, Login button) are visible
    await expect(loginPage.heading).toBeVisible();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('TC01: Form Authentication - Login successful with valid credentials', async ({ loginPage }) => {
    // Steps 1-2: Open browser and navigate to https://the-internet.herokuapp.com/login
    await loginPage.navigate();

    // Steps 3-5: Fill in username "tomsmith" and password "SuperSecretPassword!", then click Login
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    // Assertion: Verify the home page appears with the message "You logged into a secure area!"
    await expect(loginPage.successMessage).toBeVisible();
  });

  test('TC02: Form Authentication - Login fail with invalid credentials', async ({ loginPage }) => {
    // Steps 1-2: Open browser and navigate to https://the-internet.herokuapp.com/login
    await loginPage.navigate();

    // Steps 3-5: Fill in the invalid username "toms" and password "SuperSecretPassword!", then click Login
    await loginPage.login('toms', 'SuperSecretPassword!');

    // Assertion: Verify the error flash message "Your username is invalid!" appears
    await expect(loginPage.invalidUsernameMessage).toBeVisible();
  });
});
