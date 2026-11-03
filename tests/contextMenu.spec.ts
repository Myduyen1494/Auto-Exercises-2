import { test, expect } from '../fixtures/contextMenu.fixture';

test.describe('Context Menu', () => {
  test('TC11: Right click - Context menu', async ({ contextMenuPage }) => {

    const alertMessage = await contextMenuPage.rightClickHotSpot();

    expect(alertMessage).toBe('You selected a context menu');
  });
});
