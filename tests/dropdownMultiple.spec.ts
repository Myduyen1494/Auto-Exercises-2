import { test, expect } from '../fixtures/dropdownMultiple.fixture';

test.describe('Dropdown Multiple', () => {
  test('TC05: Dropdown - Select multiple options', async ({ dropdownMultiplePage }) => {

    await dropdownMultiplePage.selectByLabels(['Banana', 'Orange']);
    await expect(dropdownMultiplePage.dropdown).toHaveValues(['banana', 'orange']);
  });
});
