import { Theme, ThemeProviderProps } from '@storybook/theming';

import merge from 'deepmerge';
import { baseTheme } from './colourUtil';

export type StorybookTheme = Partial<Theme>;

export const lightTheme = merge(baseTheme, {
    // colors: {
    //     // text: '#222',
    //     // primary: 'tomato',
    // },
    fonts: {
        body: 'sans-serif',
    },
});

export const darkTheme = {
    // colours: {
    //     neutral: neutralColourSet,
    // },
    // background: '#212121',
};
