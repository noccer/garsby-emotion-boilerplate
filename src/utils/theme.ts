import merge from 'deepmerge';
import { baseTheme, colourSets } from './colourUtil';

export type NiallTheme = typeof baseTheme;

export const lightTheme: NiallTheme = merge(baseTheme, {
    // fonts: {
    //     body: 'sans-serif',
    // },
});

export const darkTheme: NiallTheme = merge(baseTheme, {
    colors: {
        primary: colourSets.tertiaryColourSet,
    },
});
