import { test, expect } from '../fixtures/editTodo.fixture';

test.describe('TodoMVC', () => {
  test('TC18: TodoMVC - Edit/rename a todo', async ({ editTodoPage }) => {

    await editTodoPage.addTodo('Walk the dog');
    await editTodoPage.rename('Walk the dog', 'Walk the dog (30 min)');

    await expect(editTodoPage.todoItems).toHaveText(['Walk the dog (30 min)']);
  });
});
