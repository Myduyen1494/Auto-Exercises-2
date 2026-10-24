import { test, expect } from '../fixtures/dropdownMultiple';

test.describe('Dropdown', () => {
  test('TC05: Dropdown - Select multiple options', async ({ dropdownMultiple: { dropdown } }) => {

    await dropdown.selectOption(['Banana', 'Orange']);
    await expect(dropdown).toHaveValues(['banana', 'orange']);
  });
});
