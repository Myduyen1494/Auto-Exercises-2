import { test, expect } from '../fixtures/webTable.fixture';

test.describe('Web Table', () => {
  test('TC08: Web Table - Validate largest due person from a table', async ({ webTablePage }) => {

    const largestRow = await webTablePage.findLargestDueRow();
    const lastName = webTablePage.lastName(largestRow);
    const firstName = webTablePage.firstName(largestRow);

    await expect(lastName).toHaveText('Doe');
    await expect(firstName).toHaveText('Jason');
    console.log(`Largest due: ${await firstName.innerText()} ${await lastName.innerText()}`);
  });
});
