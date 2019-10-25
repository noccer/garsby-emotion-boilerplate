import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import Button from './Button';
import { darkTheme, lightTheme } from '../../utils/theme';
import { Theme } from '@storybook/theming';

interface Props<Theme> {
    theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
}

const ButtonWrapper: React.FunctionComponent<Props<Theme>> = (props) => {
    const { theme = lightTheme } = props;
    // console.table(lightTheme);
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

storiesOf('Button', module).add('Light', () => (
    <ButtonWrapper>
        <Button>Light theme</Button>
    </ButtonWrapper>
));

storiesOf('Button', module).add('Dark', () => (
    <ButtonWrapper theme={darkTheme}>
        <Button>Dark theme</Button>
    </ButtonWrapper>
));
