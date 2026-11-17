import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

type FilterName = 'All' | 'Active' | 'Completed';

export class FilterTodosPage extends BasePage {
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

  async addTodos(texts: string[]) {
    for (const text of texts) {
      await this.addTodo(text);
    }
  }

  async complete(text: string) {
    await this.todoItems.filter({ hasText: text }).getByRole('checkbox').check();
  }

  async filterBy(name: FilterName) {
    await this.page.getByRole('link', { name, exact: true }).click();
  }
}
