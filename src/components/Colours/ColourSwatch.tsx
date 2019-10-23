import * as React from 'react';
import { ColourSet, colourSets } from '../../utils/colourUtil';

interface ColourSwatchProps {}

const Divv: React.FunctionComponent<{ style: React.CSSProperties }> = (props) => {
    return <div style={props.style}>colour</div>;
};

const ColourSwatch: React.FunctionComponent<ColourSwatchProps> = (props) => {
    const colours = Object.keys(colourSets).map((aColourSet) => (colourSets as any)[aColourSet]);

    console.log({ colours });

    const styles: React.CSSProperties = {
        width: '200px',
        height: '25px',
    };
    return (
        <div>
            {colours.map((aColourSet) => {
                return Object.keys(aColourSet).map((aColour) => {
                    return <Divv style={{ ...styles, background: `${aColourSet[aColour]}` }} />;
                });
            })}
        </div>
    );
};

export default ColourSwatch;
