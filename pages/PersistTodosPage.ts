import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class PersistTodosPage extends BasePage {
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    super(page);
    this.newTodoInput = page.getByRole('textbox', { name: 'New Todo Input' });
    this.todoItems = page.getByRole('main').getByRole('listitem');
  }

  async open() {
    await this.goto('https://todomvc.com/examples/react/dist/');
  }

  todo(text: string) {
    return this.todoItems.filter({ hasText: text });
  }

  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  async reload() {
    await this.page.reload();
  }
}
