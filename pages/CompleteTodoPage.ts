import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CompleteTodoPage extends BasePage {
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;
  readonly itemsLeft: Locator;

  constructor(page: Page) {
    super(page);
    this.newTodoInput = page.getByRole('textbox', { name: 'New Todo Input' });
    this.todoItems = page.getByRole('main').getByRole('listitem');
    this.itemsLeft = page.getByText(/items? left/);
  }

  async open() {
    await this.goto('https://todomvc.com/examples/react/dist/');
  }

  todoCheckbox(text: string) {
    return this.todoItems.filter({ hasText: text }).getByRole('checkbox');
  }

  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  async complete(text: string) {
    await this.todoCheckbox(text).check();
  }
}
