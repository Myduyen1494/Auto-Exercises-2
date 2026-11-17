import { test, expect } from '../fixtures/checkboxes.fixture';

test.describe('Checkboxes', () => {
  test('TC03: Check to a box', async ({ checkboxesPage }) => {
    // Steps 1-2: Open browser and navigate to /checkboxes (done by the fixture)

    // Step 3: Check checkbox 1
    await checkboxesPage.checkCheckbox1();
    // Assertion: Verify checkbox 1 is checked
    await expect(checkboxesPage.checkbox1).toBeChecked();

    // Step 5: Check checkbox 2
    await checkboxesPage.checkCheckbox2();
    // Assertion: Verify checkbox 2 is checked
    await expect(checkboxesPage.checkbox2).toBeChecked();
  });
});
