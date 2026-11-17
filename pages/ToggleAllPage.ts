import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ToggleAllPage extends BasePage {
  readonly newTodoInput: Locator;
  readonly toggleAll: Locator;
  readonly itemsLeft: Locator;

  constructor(page: Page) {
    super(page);
    this.newTodoInput = page.getByRole('textbox', { name: 'New Todo Input' });
    this.toggleAll = page.getByRole('checkbox', { name: 'Toggle All Input' });
    this.itemsLeft = page.getByText(/items? left/);
  }

  async open() {
    await this.goto('https://todomvc.com/examples/react/dist/');
  }

  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  async addTodos(texts: string[]) {
    for (const text of texts) {
      await this.addTodo(text);
    }
  }
}
