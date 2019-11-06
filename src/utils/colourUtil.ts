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

const hslaGenerator = ({ hsl: { h, s, l }, alpha }: { hsl: HSL; alpha: number }) => {
    return `hsla(${h}, ${Math.floor(s * 100)}%, ${Math.floor(l * 100)}%, ${alpha})`;
};

const generateColourSet = (hsl: HSL): ColourSet => {
    const initialColourSet: ColourSet = {};
    const colourSet: ColourSet = alphaSets.reduce((prev: ColourSet, { alpha, name }: AlphaSet) => {
        const value = tinycolor(hslaGenerator({ hsl, alpha })).toRgbString();
        prev[name] = value;
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
