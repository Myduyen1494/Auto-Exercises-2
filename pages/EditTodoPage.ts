import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class EditTodoPage extends BasePage {
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

  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  async rename(text: string, newText: string) {
    await this.todoItems.filter({ hasText: text }).getByText(text).dblclick();

    const editInput = this.todoItems.getByRole('textbox', { name: 'Edit todo' });
    await editInput.fill(newText);
    await editInput.press('Enter');
  }
}
