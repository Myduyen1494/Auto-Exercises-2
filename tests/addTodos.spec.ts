import { test, expect } from '../fixtures/addTodos.fixture';

test.describe('TodoMVC', () => {
  test('TC15: TodoMVC - Add new todos', async ({ addTodosPage }) => {
    // Steps 1-2: Open browser and navigate to https://todomvc.com/examples/react/dist/ (done by the fixture)

    // Step 3: Type "Buy milk" in the input and press Enter
    await addTodosPage.addTodo('Buy milk');
    // Step 4: Type "Buy groceries" in the input and press Enter
    await addTodosPage.addTodo('Buy groceries');

    // Step 5: Verify the list has exactly 2 items
    await expect(addTodosPage.todoItems).toHaveCount(2);
    // Step 6: Verify the item texts are ["Buy milk", "Buy groceries"] in order
    await expect(addTodosPage.todoItems).toHaveText(['Buy milk', 'Buy groceries']);
  });
});
