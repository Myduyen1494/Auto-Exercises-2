import { test, expect } from '../fixtures/checkboxes.fixture';

test.describe('Checkboxes', () => {
  test('TC03: Check to a box', async ({ checkboxesPage }) => {

    await checkboxesPage.checkCheckbox1();
    await expect(checkboxesPage.checkbox1).toBeChecked();

    await checkboxesPage.checkCheckbox2();
    await expect(checkboxesPage.checkbox2).toBeChecked();
  });
});
