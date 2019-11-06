import merge from 'deepmerge';
import { colourSets } from './colourUtil';
const { primaryColourSet, secondaryColourSet, tertiaryColourSet, neutralColourSet } = colourSets;

// baseTheme forked from 'gatsby-theme-monolith/src/gatsby-plugin-theme-ui'
export const baseTheme = {
    colors: {
        // text: neutralColourSet.N800,
        background: primaryColourSet.N800,
        primary: `${primaryColourSet.primary}`,
        secondary: `${secondaryColourSet.primary}`,
        tertiary: `${tertiaryColourSet.primary}`,
    },
    fonts: {
        body: 'system-ui, sans-serif',
        heading: 'system-ui, sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    buttons: {
        primary: {
            color: 'background',
            bg: `${primaryColourSet.N300}`,
            ':hover, :focus': {
                bg: 'secondary',
            },
        },
        secondary: {
            color: 'background',
            bg: 'secondary',
            ':hover, :focus': {
                bg: 'gray',
            },
        },
        gray: {
            color: 'background',
            bg: 'gray',
            ':hover, :focus': {
                bg: 'secondary',
            },
        },
    },
};

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
