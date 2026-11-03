import { test, expect } from '../fixtures/dropdown.fixture';

test.describe('Dropdown', () => {
  test('TC04: Select an option', async ({ dropdownPage }) => {

    await dropdownPage.selectByLabel('Option 1');
    await expect(dropdownPage.dropdown).toHaveValue('1');
  });
});
