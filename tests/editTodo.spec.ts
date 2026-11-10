import { test, expect } from '../fixtures/editTodo.fixture';

test.describe('TodoMVC', () => {
  test('TC18: TodoMVC - Edit/rename a todo', async ({ editTodoPage }) => {
    // Steps 1-2: Open browser and navigate to https://todomvc.com/examples/react/dist/ (done by the fixture)

    // Step 3: Add a todo named "Walk the dog"
    await editTodoPage.addTodo('Walk the dog');

    // Steps 4-6: Double-click the label, replace the text with "Walk the dog (30 min)" and press Enter to save
    await editTodoPage.rename('Walk the dog', 'Walk the dog (30 min)');

    // Step 7: Verify the todo label now displays "Walk the dog (30 min)"
    await expect(editTodoPage.todoItems).toHaveText(['Walk the dog (30 min)']);
  });
});
