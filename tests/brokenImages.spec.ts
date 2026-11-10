import { test, expect } from '../fixtures/brokenImages.fixture';

test.describe('Broken Images', () => {
  test('TC14: Detect broken images', async ({ brokenImagesPage }) => {
    // Steps 1-2: Open browser and navigate to /broken_images (done by the fixture)

    // Steps 3-5: Get every <img>, read its src and send a GET request for each one; collect the status codes
    const imageStatuses = await brokenImagesPage.getImageStatuses();

    // Step 6: Verify each image returns status code 200 (this fails for the intentionally broken images)
    for (const { src, status } of imageStatuses) {
      expect(status, `${src} should return 200`).toBe(200);
    }
  });
});
