import { test, expect } from '../fixtures/horizontalSlider.fixture';

test.describe('Horizontal Slider', () => {
  test('TC10: Horizontal Slider - Set value to 3.5', async ({ horizontalSliderPage }) => {

    await horizontalSliderPage.increase(7);

    await expect(horizontalSliderPage.slider).toHaveValue('3.5');
    await expect(horizontalSliderPage.sliderValue).toHaveText('3.5');
  });
});
