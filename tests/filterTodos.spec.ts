import { test, expect } from '../fixtures/filterTodos.fixture';

test.describe('TodoMVC', () => {
  test('TC20: TodoMVC - Filter All/Active/Completed', async ({ filterTodosPage }) => {

    await filterTodosPage.addTodos(['Alpha', 'Beta']);
    await filterTodosPage.complete('Beta');

    await filterTodosPage.filterBy('Active');
    await expect(filterTodosPage.todoItems).toHaveText(['Alpha']);

    await filterTodosPage.filterBy('Completed');
    await expect(filterTodosPage.todoItems).toHaveText(['Beta']);

    await filterTodosPage.filterBy('All');
    await expect(filterTodosPage.todoItems).toHaveText(['Alpha', 'Beta']);
  });
});
