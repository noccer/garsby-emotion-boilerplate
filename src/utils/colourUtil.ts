import tinycolor from 'tinycolor2';

export interface ColourSet {
    [key: string]: string;
}

interface HSL {
    h: number;
    s: number;
    l: number;
}

interface AlphaSet {
    name: string;
    alpha: number;
}

const alphaSets: AlphaSet[] = [
    { name: 'N900', alpha: 1 },
    { name: 'primary', alpha: 1 },
    { name: 'N800', alpha: 0.8 },
    { name: 'N700', alpha: 0.6 },
    { name: 'N600', alpha: 0.4 },
    { name: 'N500', alpha: 0.2 },
    { name: 'N400', alpha: 0.1 },
    { name: 'N300', alpha: 0.08 },
    { name: 'N200', alpha: 0.06 },
    { name: 'N100', alpha: 0.04 },
];

const hslaGenerator = (params: { hsl: HSL; alpha: number }) => {
    const { h: hue, s: saturation, l: lightness } = params.hsl;

    return `hsla(${hue}, ${Math.floor(saturation * 100)}%, ${Math.floor(lightness * 100)}%, ${
        params.alpha
    })`;
};

const generateColourSet = (hsl: HSL): ColourSet => {
    const initialColourSet: ColourSet = {};
    const colourSet: ColourSet = alphaSets.reduce((prev: ColourSet, set: AlphaSet) => {
        const value = tinycolor(hslaGenerator({ hsl, alpha: set.alpha })).toRgbString();
        prev[set.name] = value;
        return prev;
    }, initialColourSet);
    return colourSet;
};

const primaryColour = '#DE0F19';
const primary: HSL = tinycolor(primaryColour).toHsl();

const secondaryColour = '#B20C71';
const secondary = tinycolor(secondaryColour).toHsl();

const tertiaryColour = '#E26B0F';
const tertiary: HSL = tinycolor(tertiaryColour).toHsl();

const neutralColour = '#210101';
const neutral: HSL = tinycolor(neutralColour).toHsl();

const primaryColourSet: ColourSet = generateColourSet(primary);
const secondaryColourSet: ColourSet = generateColourSet(secondary);
const tertiaryColourSet: ColourSet = generateColourSet(tertiary);
const neutralColourSet: ColourSet = generateColourSet(neutral);

export const colourSets = {
    primaryColourSet,
    secondaryColourSet,
    tertiaryColourSet,
    neutralColourSet,
};

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
