import { test, expect } from '../fixtures/webTable.fixture';

test.describe('Web Table', () => {
  test('TC08: Web Table - Validate largest due person from a table', async ({ webTablePage }) => {
    // Steps 1-3: Open browser, navigate to /tables and focus on #table1 (done by the fixture and the page object)

    // Steps 4-5: Read every row (last name, first name, due) and find the row with the largest due amount
    const largestRow = await webTablePage.findLargestDueRow();
    const lastName = webTablePage.lastName(largestRow);
    const firstName = webTablePage.firstName(largestRow);

    // Assertion: Verify the full name of that person on the page is "Jason Doe"
    await expect(lastName).toHaveText('Doe');
    await expect(firstName).toHaveText('Jason');

    // Print the result to make the run easier to follow
    console.log(`Largest due: ${await firstName.innerText()} ${await lastName.innerText()}`);
  });
});
