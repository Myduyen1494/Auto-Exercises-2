import { test, expect } from '../fixtures/contextMenu';

test.describe('Context Menu', () => {
    test('TC11: Right click - Context menu', async ({ page, contextMenu: { hotSpot } }) => {

        let alertMessage = '';
        page.once('dialog', async dialog => {
            alertMessage = dialog.message();
            await dialog.dismiss();
        });

        await hotSpot.click({ button: 'right' });

        expect(alertMessage).toBe('You selected a context menu');
    });
});
