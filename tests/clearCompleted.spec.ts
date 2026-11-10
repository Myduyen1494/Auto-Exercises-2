import { test, expect } from '../fixtures/clearCompleted.fixture';

test.describe('TodoMVC', () => {
  test('TC19: TodoMVC - Clear completed todos', async ({ clearCompletedPage }) => {
    // Steps 1-2: Open browser and navigate to https://todomvc.com/examples/react/dist/ (done by the fixture)

    // Step 3: Add 3 todos: "Task A", "Task B", "Task C"
    await clearCompletedPage.addTodos(['Task A', 'Task B', 'Task C']);

    // Step 4: Mark "Task B" as completed
    await clearCompletedPage.complete('Task B');
    // Step 5: Mark "Task C" as completed
    await clearCompletedPage.complete('Task C');

    // Step 6: Click the "Clear completed" button
    await clearCompletedPage.clearCompletedTodos();

    // Step 7: Verify only "Task A" remains in the list
    await expect(clearCompletedPage.todoItems).toHaveText(['Task A']);
    // Step 8: Verify the footer shows "1 item left"
    await expect(clearCompletedPage.itemsLeft).toContainText('1 item left');
  });
});
