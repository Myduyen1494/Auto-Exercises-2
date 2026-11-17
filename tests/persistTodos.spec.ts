import { test, expect } from '../fixtures/persistTodos.fixture';

test.describe('TodoMVC', () => {
  test('TC21: TodoMVC - Persistence across page refresh', async ({ persistTodosPage }) => {
    // Steps 1-2: Open browser and navigate to https://todomvc.com/examples/react/dist/ (done by the fixture)

    // Step 3: Add a todo named "Call mom"
    await persistTodosPage.addTodo('Call mom');
    // Assertion: Verify "Call mom" appears in the list
    await expect(persistTodosPage.todo('Call mom')).toBeVisible();

    // Step 5: Reload the page
    await persistTodosPage.reload();

    // Assertion: Verify "Call mom" still exists in the list (this React demo does not persist todos, so it fails)
    await expect(persistTodosPage.todo('Call mom')).toBeVisible();
  });
});
