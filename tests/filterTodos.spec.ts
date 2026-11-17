import { test, expect } from '../fixtures/filterTodos.fixture';

test.describe('TodoMVC', () => {
  test('TC20: TodoMVC - Filter All/Active/Completed', async ({ filterTodosPage }) => {
    // Steps 1-2: Open browser and navigate to https://todomvc.com/examples/react/dist/ (done by the fixture)

    // Step 3: Add 2 todos: "Alpha", "Beta"
    await filterTodosPage.addTodos(['Alpha', 'Beta']);

    // Step 4: Mark "Beta" as completed
    await filterTodosPage.complete('Beta');

    // Step 5: Click the "Active" filter
    await filterTodosPage.filterBy('Active');
    // Assertion: Verify only "Alpha" is visible
    await expect(filterTodosPage.todoItems).toHaveText(['Alpha']);

    // Step 6: Click the "Completed" filter
    await filterTodosPage.filterBy('Completed');
    // Assertion: Verify only "Beta" is visible
    await expect(filterTodosPage.todoItems).toHaveText(['Beta']);

    // Step 7: Click the "All" filter
    await filterTodosPage.filterBy('All');
    // Assertion: Verify both "Alpha" and "Beta" are visible
    await expect(filterTodosPage.todoItems).toHaveText(['Alpha', 'Beta']);
  });
});
