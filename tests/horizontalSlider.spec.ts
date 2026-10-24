import { test, expect } from '../fixtures/horizontalSlider';

test.describe('Horizontal Slider', () => {
    test('TC10: Horizontal Slider - Set value to 3.5', async ({ horizontalSlider: { slider, sliderValue } }) => {

        await slider.focus();

        for (let i = 0; i < 7; i++) {
            await slider.press('ArrowRight');
        }

        await expect(slider).toHaveValue('3.5');
        await expect(sliderValue).toHaveText('3.5');
    });
});
