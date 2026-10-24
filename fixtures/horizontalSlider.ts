import { Locator } from '@playwright/test';
import { test as base } from './base';

type HorizontalSlider = {
    slider: Locator;
    sliderValue: Locator;
};

export const test = base.extend<{ horizontalSlider: HorizontalSlider }>({
    horizontalSlider: async ({ page }, use) => {
        await page.goto('/horizontal_slider');

        await use({
            slider: page.getByRole('slider'),
            sliderValue: page.locator('#range'),
        });
    },
});

export { expect } from './base';
