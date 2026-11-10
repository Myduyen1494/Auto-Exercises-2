import { test, expect } from '../fixtures/completeTodo.fixture';

test.describe('TodoMVC', () => {
  test('TC16: TodoMVC - Mark todo as completed', async ({ completeTodoPage }) => {
    // Steps 1-2: Open browser and navigate to https://todomvc.com/examples/react/dist/ (done by the fixture)

    // Step 3: Add a todo named "Buy milk"
    await completeTodoPage.addTodo('Buy milk');

    // Step 4: Click the toggle checkbox of the "Buy milk" item
    await completeTodoPage.complete('Buy milk');

    // Step 5: Verify the "Buy milk" toggle is in the checked state
    await expect(completeTodoPage.todoCheckbox('Buy milk')).toBeChecked();
    // Step 6: Verify the footer shows "0 items left"
    await expect(completeTodoPage.itemsLeft).toContainText('0 items left');
  });
});
