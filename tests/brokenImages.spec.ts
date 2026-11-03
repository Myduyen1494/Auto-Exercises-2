import { test, expect } from '../fixtures/brokenImages.fixture';

test.describe('Broken Images', () => {
  test('TC14: Detect broken images', async ({ brokenImagesPage }) => {
    const imageStatuses = await brokenImagesPage.getImageStatuses();

    for (const { src, status } of imageStatuses) {
      expect(status, `${src} should return 200`).toBe(200);
    }
  });
});
