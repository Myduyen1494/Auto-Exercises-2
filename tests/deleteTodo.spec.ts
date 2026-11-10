import { test, expect } from '../fixtures/deleteTodo.fixture';

test.describe('TodoMVC', () => {
  test('TC17: TodoMVC - Delete a todo', async ({ deleteTodoPage }) => {
    // Steps 1-2: Open browser and navigate to https://todomvc.com/examples/react/dist/ (done by the fixture)

    // Step 3: Add a todo named "Pay bills"
    await deleteTodoPage.addTodo('Pay bills');

    // Steps 4-5: Hover on the "Pay bills" item and click the "x" delete button that appears on hover
    await deleteTodoPage.deleteTodo('Pay bills');

    // Step 6: Verify "Pay bills" is no longer in the list
    await expect(deleteTodoPage.todo('Pay bills')).toHaveCount(0);
  });
});
