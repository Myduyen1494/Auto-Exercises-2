import { test, expect } from '../fixtures/dropdown.fixture';

test.describe('Dropdown', () => {
    test('TC04: Select an option', async ({ dropdownPage: { dropdown, option1, option2 } }) => {

        await dropdown.selectOption({ label: 'Option 1' });
        await expect(dropdown).toHaveValue('1');
    });
});
