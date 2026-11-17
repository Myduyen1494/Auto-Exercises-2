import { test, expect } from '../fixtures/dropdownMultiple.fixture';

test.describe('Dropdown Multiple', () => {
  test('TC05: Dropdown - Select multiple options', async ({ dropdownMultiplePage }) => {
    // Steps 1-2: Open browser and navigate to https://output.jsbin.com/osebed/2 (done by the fixture)

    // Step 3: Select "Banana" and "Orange" in the multi-select list
    await dropdownMultiplePage.selectByLabels(['Banana', 'Orange']);

    // Assertion: Verify both options are selected (values "banana" and "orange")
    await expect(dropdownMultiplePage.dropdown).toHaveValues(['banana', 'orange']);
  });
});
