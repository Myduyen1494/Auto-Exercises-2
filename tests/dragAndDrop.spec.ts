import { test, expect } from '../fixtures/dragAndDrop';

test.describe('Drag and Drop', () => {
    test('TC09: Drag and drop elements', async ({ dragAndDrop: { columnA, columnB } }) => {

        await columnA.dragTo(columnB);
        await expect(columnA).toHaveText('B');
    });
});
