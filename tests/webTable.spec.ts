import { test, expect } from '../fixtures/webTable.fixture';

test.describe('Web Table', () => {
    test('TC08: Web Table - Validate largest due person from a table', async ({ webTablePage: { rows } }) => {

        let largestDue = 0;
        let largestRow = rows.first();

        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const dueCell = row.getByRole('cell').nth(3);
            const dueText = await dueCell.innerText();
            const due = Number(dueText.replace('$', ''));

            if (due > largestDue) {
                largestDue = due;
                largestRow = row;
            }
        }

        const cells = largestRow.getByRole('cell');
        const lastName = cells.nth(0);
        const firstName = cells.nth(1);

        await expect(lastName).toHaveText('Doe');
        await expect(firstName).toHaveText('Jason');
        console.log(`Largest due: ${await firstName.innerText()} ${await lastName.innerText()}`);
    });
});
