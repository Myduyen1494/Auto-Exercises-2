import { test, expect } from '../fixtures/dragAndDrop.fixture';

test.describe('Drag and Drop', () => {
    test('TC09: Drag and drop elements', async ({ dragAndDropPage: { columnA, columnB } }) => {

        await columnA.dragTo(columnB);
        await expect(columnA).toHaveText('B');
    });
});
