import { test, expect } from '../fixtures/addTodos.fixture';

test.describe('TodoMVC', () => {
  test('TC15: TodoMVC - Add new todos', async ({ addTodosPage }) => {

    await addTodosPage.addTodo('Buy milk');
    await addTodosPage.addTodo('Buy groceries');

    await expect(addTodosPage.todoItems).toHaveCount(2);
    await expect(addTodosPage.todoItems).toHaveText(['Buy milk', 'Buy groceries']);
  });
});
