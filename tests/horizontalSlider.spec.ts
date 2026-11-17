import { test, expect } from '../fixtures/horizontalSlider.fixture';

test.describe('Horizontal Slider', () => {
  test('TC10: Horizontal Slider - Set value to 3.5', async ({ horizontalSliderPage }) => {
    // Steps 1-3: Open browser, navigate to /horizontal_slider (done by the fixture); the slider starts at 0

    // Step 4: Press ArrowRight 7 times; each press adds 0.5, so 0 -> 3.5
    await horizontalSliderPage.increase(7);

    // Assertion: Verify the slider value and the value shown in #range both equal 3.5
    await expect(horizontalSliderPage.slider).toHaveValue('3.5');
    await expect(horizontalSliderPage.sliderValue).toHaveText('3.5');
  });
});
