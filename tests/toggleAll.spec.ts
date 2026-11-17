import { test, expect } from '../fixtures/toggleAll.fixture';

test.describe('TodoMVC', () => {
  test('TC22: TodoMVC - Toggle all', async ({ toggleAllPage }) => {
    // Steps 1-2: Open browser and navigate to https://todomvc.com/examples/react/dist/ (done by the fixture)

    // Step 3: Add 2 todos: "Task One", "Task Two"
    await toggleAllPage.addTodos(['Task One', 'Task Two']);

    // Step 4: Check the "toggle all" checkbox
    await toggleAllPage.toggleAll.check();
    // Assertion: Verify the footer shows "0 items left"
    await expect(toggleAllPage.itemsLeft).toContainText('0 items left');

    // Step 6: Uncheck the "toggle all" checkbox
    await toggleAllPage.toggleAll.uncheck();
    // Assertion: Verify the footer shows "2 items left"
    await expect(toggleAllPage.itemsLeft).toContainText('2 items left');
  });
});
