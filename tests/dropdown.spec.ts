import { test, expect } from '../fixtures/dropdown.fixture';

test.describe('Dropdown', () => {
  test('TC04: Select an option', async ({ dropdownPage }) => {
    // Steps 1-2: Open browser and navigate to /dropdown (done by the fixture)

    // Step 3: Select "Option 1" from the dropdown
    await dropdownPage.selectByLabel('Option 1');

    // Assertion: Verify "Option 1" is selected (its value is "1")
    await expect(dropdownPage.dropdown).toHaveValue('1');
  });
});
