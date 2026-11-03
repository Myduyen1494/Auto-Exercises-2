import { test, expect } from '../fixtures/clearCompleted.fixture';

test.describe('TodoMVC', () => {
  test('TC19: TodoMVC - Clear completed todos', async ({ clearCompletedPage }) => {

    await clearCompletedPage.addTodos(['Task A', 'Task B', 'Task C']);
    await clearCompletedPage.complete('Task B');
    await clearCompletedPage.complete('Task C');
    await clearCompletedPage.clearCompletedTodos();

    await expect(clearCompletedPage.todoItems).toHaveText(['Task A']);
    await expect(clearCompletedPage.itemsLeft).toContainText('1 item left');
  });
});
