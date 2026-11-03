import { test, expect } from '../fixtures/deleteTodo.fixture';

test.describe('TodoMVC', () => {
  test('TC17: TodoMVC - Delete a todo', async ({ deleteTodoPage }) => {

    await deleteTodoPage.addTodo('Pay bills');
    await deleteTodoPage.deleteTodo('Pay bills');

    await expect(deleteTodoPage.todo('Pay bills')).toHaveCount(0);
  });
});
