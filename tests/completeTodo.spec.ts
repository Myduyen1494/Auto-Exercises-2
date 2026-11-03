import { test, expect } from '../fixtures/completeTodo.fixture';

test.describe('TodoMVC', () => {
  test('TC16: TodoMVC - Mark todo as completed', async ({ completeTodoPage }) => {

    await completeTodoPage.addTodo('Buy milk');
    await completeTodoPage.complete('Buy milk');

    await expect(completeTodoPage.todoCheckbox('Buy milk')).toBeChecked();
    await expect(completeTodoPage.itemsLeft).toContainText('0 items left');
  });
});
