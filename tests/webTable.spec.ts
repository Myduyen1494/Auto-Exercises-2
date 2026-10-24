import { test, expect } from '../fixtures/webTable';

test.describe('Web Table', () => {
    test('TC08: Web Table - Validate largest due person from a table', async ({ webTable: { rows, dueCells } }) => {

        const dueTexts = await dueCells.allInnerTexts();
        const dues = dueTexts.map(text => Number(text.replace('$', '')));

        const largestDue = Math.max(...dues);
        const largestIndex = dues.indexOf(largestDue);
        const largestRow = rows.nth(largestIndex);

        const cells = largestRow.getByRole('cell');
        const lastName = cells.nth(0);
        const firstName = cells.nth(1);

        await expect(lastName).toHaveText('Doe');
        await expect(firstName).toHaveText('Jason');
        console.log(`Largest due: ${await firstName.innerText()} ${await lastName.innerText()}`);
    });
});
