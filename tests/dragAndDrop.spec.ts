import { test, expect } from '../fixtures/dragAndDrop.fixture';

test.describe('Drag and Drop', () => {
  test('TC09: Drag and drop elements', async ({ dragAndDropPage }) => {
    // Steps 1-2: Open browser and navigate to /drag_and_drop (done by the fixture)

    // Step 3: Drag column A onto column B
    await dragAndDropPage.dragAToB();

    // Assertion: Verify column A (the left column) now shows the text "B"
    await expect(dragAndDropPage.columnA).toHaveText('B');
  });
});
