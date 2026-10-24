import { test, expect } from '../fixtures/checkboxes';

test.describe('Checkboxes', () => {
  test('TC03: Check to a box', async ({ checkboxes: { checkbox1, checkbox2 } }) => {

    await checkbox1.check();
    await expect(checkbox1).toBeChecked();

    await checkbox2.check();
    await expect(checkbox2).toBeChecked();
  });
});
