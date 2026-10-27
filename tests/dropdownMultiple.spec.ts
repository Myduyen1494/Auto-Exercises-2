import { test, expect } from '../fixtures/dropdownMultiple.fixture';

test.describe('Dropdown', () => {
  test('TC05: Dropdown - Select multiple options', async ({ dropdownMultiplePage: { dropdown } }) => {

    await dropdown.selectOption(['Banana', 'Orange']);
    await expect(dropdown).toHaveValues(['banana', 'orange']);
  });
});
