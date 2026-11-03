import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class FileUploadPage extends BasePage {
  readonly chooseFile: Locator;
  readonly uploadButton: Locator;

  constructor(page: Page) {
    super(page);
    this.chooseFile = page.getByRole('button', { name: 'Choose File' });
    this.uploadButton = page.getByRole('button', { name: 'Upload' });
  }

  async open() {
    await this.goto('/upload');
  }

  async upload(filePath: string) {
    await this.chooseFile.setInputFiles(filePath);
    await this.uploadButton.click();
  }

  uploadedFile(fileName: string) {
    return this.page.getByText(fileName);
  }
}
