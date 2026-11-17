import { test, expect } from '../fixtures/contextMenu.fixture';

test.describe('Context Menu', () => {
  test('TC11: Right click - Context menu', async ({ contextMenuPage }) => {
    // Steps 1-2: Open browser and navigate to /context_menu (done by the fixture)

    // Steps 3 and 5: Right click on #hot-spot; the page object reads the alert message and dismisses the alert
    const alertMessage = await contextMenuPage.rightClickHotSpot();

    // Assertion: Verify the alert message is "You selected a context menu"
    expect(alertMessage).toBe('You selected a context menu');
  });
});
