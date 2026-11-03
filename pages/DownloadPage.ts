import * as path from 'path';
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DownloadPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto('/download');
  }

  fileLink(fileName: string): Locator {
    return this.page.getByRole('link', { name: fileName, exact: true });
  }

  async download(fileName: string, saveDir: string) {
    const downloadPromise = this.page.waitForEvent('download');
    await this.fileLink(fileName).click();
    const download = await downloadPromise;

    const savePath = path.join(saveDir, fileName);
    await download.saveAs(savePath);

    return savePath;
  }
}
