import { test, expect } from '../fixtures/base';

test.describe('Dropdown', () => {
  test('TC05: Dropdown - Select multiple options', async ({ page }) => {
    await page.goto('https://output.jsbin.com/osebed/2');

    const dropdown = page.getByRole('listbox');
    const option1 = page.getByRole('option', { name: 'Banana' });
    const option2 = page.getByRole('option', { name: 'Orange' });


    await dropdown.selectOption(option1, option2);
    await expect(option1).toBeSelected();
    await expect(option2).toBeSelected();
  });
});


await page.getByRole('listbox').selectOption(['Banana', 'Orange']);
await expect(page.getByRole('option', { name: 'Banana' })).toBeSelected();
await expect(page.getByRole('option', { name: 'Orange' })).toBeSelected();