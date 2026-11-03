import { test, expect } from '../fixtures/dragAndDrop.fixture';

test.describe('Drag and Drop', () => {
  test('TC09: Drag and drop elements', async ({ dragAndDropPage }) => {

    await dragAndDropPage.dragAToB();
    await expect(dragAndDropPage.columnA).toHaveText('B');
  });
});
